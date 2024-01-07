"use client"

import { useSession, signIn } from "next-auth/react"
import Link from "next/link"

type TProps = {
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

export const CustomButton = ({ onClick, className, children }: TProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

type TSigninButtonProps = {
  callbackUrl: string
  children: React.ReactNode
  className?: string
}

export const SigninButton = ({
  callbackUrl,
  children,
  className,
}: TSigninButtonProps) => {
  const { status } = useSession()

  return (
    <>
      {status === "unauthenticated" ? (
        <CustomButton
          onClick={() => signIn("google", { callbackUrl })}
          className={className}
        >
          {children}
        </CustomButton>
      ) : (
        <Link href='/my-profile' target='_self' className={className}>
          {children}
        </Link>
      )}
    </>
  )
}
