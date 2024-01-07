"use client"

import { useState, useEffect, useRef } from "react"
import { useSession } from "next-auth/react"
import { useMapStore, useMarkerStore } from "@/store"
import Map, { Marker, NavigationControl, Popup } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { Logo } from "./Logo"
import MapPopup from "./MapPopup"
import { bearWasSeenWithinLastweek } from "@/utils/bearWasSeenWithinLastweek"
import { getUserLocation } from "@/utils/getUserLocation"
import { toast } from "react-toastify"
import type { TMarker } from "@/types"
import type { MapRef } from "react-map-gl"

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
const INIT_LATITUDE = 48.43
const INIT_LONGITUDE = -71.07
const ZOOM_INIT = 7
const ZOOM_IN = 16
const ZOOM_POPUP = 10

export default function MapView() {
  const mapRef = useRef<MapRef | null>(null)

  const { data: session } = useSession()
  const { isUserMarkersOnly, isWeeklyMap, isCenteredMap, isMapEditMode } =
    useMapStore()
  const { markers, setMarkers } = useMarkerStore()

  const [latitude, setLatitude] = useState(INIT_LATITUDE)
  const [longitude, setLongitude] = useState(INIT_LONGITUDE)
  const [showPopup, setShowPopup] = useState(false)
  const [popup, setPopup] = useState<TMarker | null>(null)
  const [filteredmarkers, setFilteredMarkers] = useState<TMarker[] | null>(null)

  const currentUser = session?.user

  useEffect(() => {
    setFilteredMarkers(markers)
  }, [markers])

  // filter on last week's bear sightings
  useEffect(() => {
    if (isWeeklyMap) {
      const filteredMarkers = markers?.filter((marker) => {
        return bearWasSeenWithinLastweek(marker.createdAt)
      })

      setFilteredMarkers(filteredMarkers)
    } else {
      setFilteredMarkers(markers)
    }
  }, [isWeeklyMap, markers])

  // filter on user's bear sightings
  useEffect(() => {
    if (!currentUser) return

    if (isUserMarkersOnly) {
      const filteredMarkers = markers?.filter(
        (marker) => marker.userId === currentUser.id
      )

      setFilteredMarkers(filteredMarkers)
    } else {
      setFilteredMarkers(markers)
    }
  }, [isUserMarkersOnly, markers, currentUser])

  // center map on user location
  useEffect(() => {
    if (!isCenteredMap) {
      setLatitude(INIT_LATITUDE)
      setLongitude(INIT_LONGITUDE)

      if (mapRef?.current != null) {
        mapRef?.current?.flyTo({
          center: [INIT_LONGITUDE, INIT_LATITUDE],
          duration: 5000,
          zoom: ZOOM_INIT,
        })
      }
      return
    }

    ;(async () => {
      const { latitude, longitude } = await getUserLocation()
      setLatitude(latitude)
      setLongitude(longitude)

      if (mapRef?.current != null) {
        mapRef?.current?.flyTo({
          center: [longitude, latitude],
          duration: 5000,
          zoom: ZOOM_IN,
        })
      }
    })()
  }, [isCenteredMap])

  // center map on selected bear sighting & zoom
  useEffect(() => {
    if (mapRef?.current == null || !popup || !showPopup) return

    const [latitude, longitude] = [popup.latitude, popup.longitude]

    mapRef?.current?.flyTo({
      center: [longitude, latitude],
      duration: 2000,
      zoom: ZOOM_POPUP,
    })
  }, [showPopup, popup])

  // display popup on selected bear sighting
  const handleSetPopup = (id: string) => {
    const marker = markers.find((marker) => marker.id === id)
    if (!marker) return

    setPopup(marker)
    setShowPopup(true)
  }

  // add bear marker to db if user signed in and map is in edit mode
  const onAddMarker = async (e: mapboxgl.MapLayerMouseEvent) => {
    if (!currentUser || !isMapEditMode) return

    try {
      const { lng: longitude, lat: latitude } = e.lngLat

      const response = await fetch("/api/markers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ latitude, longitude }),
      })

      const data = await response.json()

      if (response.status !== 201) {
        toast.warn(data?.message)
        return
      }

      setMarkers([...markers, data])

      toast.success("Bear sight added successfully!")
    } catch (e) {
      console.error(e)
    }
  }

  // delete bear marker from db if user signed in and map is in edit mode
  const onDeleteMarker = async (id: string) => {
    if (!isMapEditMode) return

    try {
      const response = await fetch(`/api/markers?id=${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })

      const data = await response.json()

      if (response.status !== 200) {
        toast.warn(data?.message)
        return
      }

      setMarkers(markers.filter((marker) => marker.id !== data?.id))
      setPopup(null)
      setShowPopup(false)

      toast.info("Bear sight deleted successfully!")
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Map
      onClick={onAddMarker}
      ref={mapRef}
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={{
        latitude: latitude,
        longitude: longitude,
        zoom: ZOOM_INIT,
      }}
      style={{ width: "auto", height: 475 }}
      mapStyle='mapbox://styles/mapbox/outdoors-v12'
    >
      <NavigationControl />

      {filteredmarkers && popup && showPopup && (
        <Popup
          latitude={popup.latitude}
          longitude={popup.longitude}
          anchor='bottom'
          onClose={() => {
            setPopup(null)
            setShowPopup(false)
          }}
          closeButton={false}
          offset={-30}
        >
          <MapPopup
            popup={popup}
            isMapEditMode={isMapEditMode}
            onDeleteMarker={onDeleteMarker}
          />
        </Popup>
      )}

      {filteredmarkers?.map((marker) => {
        const { id, latitude, longitude, createdAt } = marker
        return (
          <div
            key={id}
            onClick={(e) => {
              e.stopPropagation()
              handleSetPopup(id)
            }}
          >
            <Marker latitude={latitude} longitude={longitude} anchor='bottom'>
              <Logo
                className={`bg-white/60 dark:bg-transparent ${
                  bearWasSeenWithinLastweek(createdAt)
                    ? "h-10 w-10 rounded-full ring-2 ring-warning dark:ring-warning-light"
                    : "h-8 w-8 ring-2 ring-primary"
                }`}
              />
            </Marker>
          </div>
        )
      })}
    </Map>
  )
}
