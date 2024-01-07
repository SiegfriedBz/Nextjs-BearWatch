"use client"

import { useSession } from "next-auth/react"
import { getUserLocation } from "@/utils/getUserLocation"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"
import { useHelpStore } from "@/store"

const ButtonHelp = () => {
  const router = useRouter()
  const { closeHelp } = useHelpStore()

  const { data: session } = useSession()
  const [helpLinkHref, setHelpLinkHref] = useState<string | null>(null)

  const currentUser = session?.user
  //   const bloodGroup = user?.bloodGroup
  const bloodGroup = currentUser?.bloodGroup
  //   const friendWhatsapp = user?.friendWhatsappNumber
  const friendWhatsapp = currentUser?.friendWhatsappNumber

  const handleGetHelp = async () => {
    if (!currentUser) {
      closeHelp()
      setHelpLinkHref(null)
      toast.info("Please sign-in to be able to get help")
      return
    }

    if (!friendWhatsapp) {
      closeHelp()
      setHelpLinkHref(null)
      router.push("/my-profile")
      toast.info(
        "Please add a friend's WhatsApp number to your profile, to be able to get help."
      )

      return
    }

    try {
      const { latitude, longitude } = await getUserLocation()
      const string = `
        Hi, this is ${currentUser?.name}.
        I've been attacked by a bear. A real.
        My blood group is ${bloodGroup}.
        Link to my current location:
        https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}
        Please help me!`

      const encodedString = encodeURIComponent(string)

      setHelpLinkHref(`https://wa.me/${friendWhatsapp}?text=${encodedString}`)
    } catch (error) {
      toast.info("Please allow location access on your device")

      console.log(error)
    }
  }

  return (
    <>
      {helpLinkHref == null ? (
        <div className='flex h-full w-full flex-col items-center justify-center rounded-full bg-white p-2 '>
          <button
            onClick={handleGetHelp}
            className='space-nowrap text-lg text-warning'
          >
            Get Help
          </button>
          <button
            className='text-sm text-warning/50'
            onClick={(e) => {
              e.stopPropagation()
              setHelpLinkHref(null)
              closeHelp()
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className='flex h-full w-full flex-col items-center justify-center rounded-full bg-warning p-2 ring-2 ring-white'>
          <Link
            href={helpLinkHref}
            target={"_blank"}
            className='text-lg text-white'
          >
            Confirm
          </Link>
          <button
            className='text-sm text-white/50'
            onClick={(e) => {
              e.stopPropagation()
              setHelpLinkHref(null)
              closeHelp()
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  )
}

export default ButtonHelp
