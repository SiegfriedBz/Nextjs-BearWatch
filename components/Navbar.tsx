"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { LogoLink } from "./Logo"
import ButtonToggleTheme from "./ButtonToggleTheme"
import ButtonMobileBurger from "./ButtonMobileBurger"
import Modal from "./Modal"

const Navbar = () => {
  const { data: session, status } = useSession()
  const username = session?.user?.name?.split(" ")?.[0]
  const isLoading = status === "loading"
  const isAuthenticated = status === "authenticated"

  return (
    <header id='header' className='header layout-gradient'>
      <div className='relative flex h-full w-full items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <span className='ring-black dark:ring-white rounded-full ring-1 dark:ring-2'>
            <LogoLink />
          </span>

          {!isAuthenticated && (
            <Link id='brand-link' href='/' target='_self'>
              <span className='whitespace-nowrap text-lg font-bold italic'>
                Bear Watch
              </span>
            </Link>
          )}
        </div>

        <div className='absolute left-1/2 flex -translate-x-1/2 items-center justify-center space-x-4'>
          {isAuthenticated && username && (
            <div className='flex space-x-4'>
              <span className='whitespace-nowrap text-lg font-bold italic'>
                Hi {username}!
              </span>
              <button onClick={() => signOut({ callbackUrl: "/" })}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </button>
            </div>
          )}
        </div>

        {isLoading ? (
          <div className='flex items-center justify-center space-x-2'>
            <div className='bg-white h-2 w-2 animate-pulse rounded-full'></div>
            <div className='bg-white h-2 w-2 animate-pulse rounded-full'></div>
            <div className='bg-white h-2 w-2 animate-pulse rounded-full'></div>
          </div>
        ) : !isAuthenticated ? (
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className='whitespace-nowrap text-lg font-bold italic'
          >
            Sign in
          </button>
        ) : null}

        <div className='flex items-center space-x-4'>
          <ButtonToggleTheme />
          <ButtonMobileBurger />
        </div>
      </div>

      {/* backdrop & menu */}
      <Modal />
    </header>
  )
}

export default Navbar
