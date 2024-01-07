"use client"

import ButtonSwitch from "./ButtonSwitch"
import { useMapStore } from "@/store"

const MyMapSwitches = () => {
  const {
    isUserMarkersOnly,
    toggleIsUserMarkersOnly,
    isMapEditMode,
    toggleIsMapEditMode,
  } = useMapStore()

  return (
    <>
      <ButtonSwitch
        label='My_sights'
        isChecked={isUserMarkersOnly}
        onChange={toggleIsUserMarkersOnly}
        className='my-2'
      />
      <ButtonSwitch
        label='Edit'
        isChecked={isMapEditMode}
        onChange={toggleIsMapEditMode}
        className='my-2'
      />
    </>
  )
}

export default MyMapSwitches
