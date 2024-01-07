"use client"

import Head from "next/head"
import { useSession } from "next-auth/react"
import MapView from "@/components/MapView"
import MyMapFeatures from "@/components/MyMapFeatures"
import PageLayout from "@/components/PageLayout"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

const MyMapPage = () => {
  const router = useRouter()
  const { status } = useSession()
  const isUnAuthenticated = status === "unauthenticated"

  if (isUnAuthenticated) {
    toast.info("Please sign in to access your Map.")
    router.push("/")
  }

  return (
    <PageLayout>
      <div className='layout-gradient align-center flex flex-col space-y-4'>
        <h1 className='text-center'>My Map</h1>

        <MapView />

        <MyMapFeatures />
      </div>
    </PageLayout>
  )
}

export default MyMapPage
