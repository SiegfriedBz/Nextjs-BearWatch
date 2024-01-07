"use client"

import useHelpStore from "@/store/useHelpStore"

type TProps = {
  className?: string
  children: React.ReactNode
}

const OpenHelpButton = ({ className, children }: TProps) => {
  const { openHelp } = useHelpStore()

  return (
    <button onClick={openHelp} className={className}>
      {children}
    </button>
  )
}

export default OpenHelpButton
