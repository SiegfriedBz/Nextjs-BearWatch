"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import PageLayout from "@/components/PageLayout"

const BLOOD_GROUPS = [
  "O_POSITIVE",
  "O_NEGATIVE",
  "A_POSITIVE",
  "A_NEGATIVE",
  "B_POSITIVE",
  "B_NEGATIVE",
  "AB_POSITIVE",
  "AB_NEGATIVE",
]

const MyProfilePage = () => {
  const router = useRouter()
  const { data: session, status } = useSession()
  const currentUser = session?.user
  const bloodGroup = currentUser?.bloodGroup
  const friendWhatsappNumber = currentUser?.friendWhatsappNumber

  const [userInput, setUserInput] = useState(() => ({
    bloodGroup,
    friendWhatsappNumber,
  }))

  const isUnAuthenticated = status === "unauthenticated"

  if (isUnAuthenticated) {
    toast.info("Please sign in to access your Profile page.")
    router.push("/")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          friendWhatsappNumber: userInput.friendWhatsappNumber,
          bloodGroup: userInput.bloodGroup,
        }),
      })

      await response.json()

      toast.success("Profile saved successfully!")

      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PageLayout>
      <div className='layout-gradient align-center flex flex-col space-y-4'>
        <h2 className='text-center text-3xl'>My Profile</h2>

        <div className='px-2'>
          <div className='flex w-full flex-col items-center justify-center rounded-xl border-2 border-primary px-4 py-8 shadow-sm shadow-primary dark:border dark:border-white dark:shadow-white'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col items-center justify-center space-y-8 '>
                <div className='flex flex-col items-center justify-center'>
                  <label
                    htmlFor='friendWhatsappNumber'
                    className='mb-2 flex items-center space-x-2'
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className='text-3xl text-primary dark:text-primary-light'
                    />

                    <h3 className='m-0'>My Friend&apos;s Whatsapp</h3>
                  </label>
                  <input
                    type='text'
                    id='friendWhatsappNumber'
                    placeholder='intl format, no spaces'
                    value={friendWhatsappNumber || ""}
                    onChange={(e) =>
                      setUserInput((prev) => {
                        return { ...prev, friendWhatsappNumber: e.target.value }
                      })
                    }
                  />
                </div>

                <div className='flex w-full flex-col items-center justify-center'>
                  <label
                    htmlFor='bloodGroup'
                    className='mb-2 flex items-center space-x-2'
                  >
                    <FontAwesomeIcon
                      icon={faNotesMedical}
                      className='text-3xl text-primary dark:text-primary-light'
                    />
                    <h3 className='m-0'>My Blood Group</h3>
                  </label>
                  <select
                    id='bloodGroup'
                    value={bloodGroup || BLOOD_GROUPS[0]}
                    onChange={(e) =>
                      setUserInput((prev) => {
                        return { ...prev, bloodGroup: e.target.value }
                      })
                    }
                  >
                    {BLOOD_GROUPS.map((bloodGroup) => {
                      return (
                        <option key={bloodGroup} value={bloodGroup}>
                          {bloodGroup}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>

              <button className='btn pt-8' type='submit'>
                Save
              </button>
            </form>

            <div id='user-data-info'>
              <p className='text-center'>
                The information will be used to{" "}
                <span className='text-color font-semibold italic'>
                  quickly send{" "}
                </span>
                a{" "}
                <span className='font-semibold italic text-warning dark:text-warning-light'>
                  Whatsapp SOS message
                </span>{" "}
                to your friend,{" "}
                <span className='text-color font-semibold italic'>
                  complete
                </span>{" "}
                with{" "}
                <span className='text-color font-semibold italic'>
                  your blood group
                </span>{" "}
                information and a{" "}
                <span className='text-color font-semibold italic'>link</span> to{" "}
                <span className='text-color font-semibold italic'>
                  your coordinates
                </span>{" "}
                on
                <span className='text-color font-semibold italic'>
                  {" "}
                  Google Maps
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default MyProfilePage
