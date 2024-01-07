"use client"

import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHelicopter } from "@fortawesome/free-solid-svg-icons"
import ButtonHelp from "./ButtonHelp"
import { useHelpStore } from "@/store"

const Helicopter = () => {
  const pathname = usePathname()
  const { helpIsOpen, openHelp } = useHelpStore()

  const isHomePage =
    pathname === "/" || pathname === "/#features" || pathname === "/#map"

  return (
    <motion.div
      variants={variants}
      initial={isHomePage ? "hidden" : "visible"}
      animate='visible'
      id='help'
      className={`fixed bottom-2 right-2 z-[900] flex h-12 w-12 items-center justify-center rounded-full p-2 transition duration-500 ease-in-out  ${
        helpIsOpen
          ? "bg-transparent ring-0"
          : "bg-white ring-2 ring-warning dark:ring-warning-light"
      }`}
    >
      <FontAwesomeIcon
        icon={faHelicopter}
        className={`text-2xl font-extrabold text-warning dark:ring-warning-light ${
          helpIsOpen ? "opacity-0" : "opacity-100"
        }`}
        onClick={openHelp}
      />
      <AnimatePresence>
        {helpIsOpen && (
          <motion.div
            className='absolute right-1/2 top-1/2 h-[90px] w-[90px] rounded-full bg-gray-200 ring-2 ring-warning'
            initial={{ scale: 0, x: 45, y: -45 }}
            animate={{ scale: 1.5, x: 0, y: -90 }}
            exit={{ scale: 0, x: 45, y: -45 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 360,
              damping: 20,
            }}
          >
            <div className='relative h-full w-full'>
              <ButtonHelp />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Helicopter

const variants = {
  hidden: {
    opacity: 0,
    scale: 1.5,
    x: -45,
    y: -45,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      // delay: 4,
      delay: 2,
      duration: 0.3,
    },
  },
}
