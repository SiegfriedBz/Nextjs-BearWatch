"use client"

import Link from "next/link"
import { useSession, signIn } from "next-auth/react"
import { useModalStore } from "@/store"
import { NAV_LINKS } from "@/utils/constants"

const NavLinks = ({ className = "" }) => {
  const { status } = useSession()
  const { closeModal } = useModalStore()

  // enforce sign-in to access profile page
  const signInIfUnauthenticated = () => {
    return status === "unauthenticated"
      ? signIn("google", { callbackUrl: "/my-profile" })
      : closeModal()
  }

  return (
    <ul
      className={`flex h-full w-full flex-col justify-center items-center ${className} gap-y-2`}
    >
      {NAV_LINKS?.map((link) => {
        return (
          <Li
            key={link.id}
            href={link.href}
            onClick={() => {
              link.href === "/my-profile"
                ? signInIfUnauthenticated()
                : closeModal()
            }}
          >
            {link.text}
          </Li>
        )
      })}
    </ul>
  )
}

export default NavLinks

type TLiProps = {
  href: string
  onClick: () => void
  children: React.ReactNode
}

const Li = ({ href = "", onClick, children }: TLiProps) => {
  return (
    <li onClick={onClick}>
      <Link
        href={href}
        target='_self'
        className='text-color my-2 inline-flex items-center justify-center whitespace-nowrap text-2xl font-extrabold'
      >
        {children}
      </Link>
    </li>
  )
}
