"use client"

import { useModalStore } from "@/store"
import NavLinks from "./NavLinks"
import { motion, AnimatePresence } from "framer-motion"

const Modal = () => {
  const { modalIsOpen, closeModal } = useModalStore()

  return (
    <AnimatePresence>
      {modalIsOpen ? (
        <motion.div
          variants={modalBackdropVariants}
          initial='hidden'
          animate={modalIsOpen ? "visible" : ""}
          exit='exit'
          onClick={closeModal}
          className='fixed bottom-0 left-0 right-0 top-0 z-[950] backdrop-blur-md'
        >
          <motion.div
            variants={modalWrapperVariants}
            initial='hidden'
            animate={modalIsOpen ? "visible" : ""}
            exit='exit'
            className='absolute 
                bottom-0 left-0
                right-0 top-0
                flex h-screen w-full
                -translate-y-1/2
                items-center justify-center'
          >
            <ModalMenu>
              <div className='w-full h-96 py-4'>
                <NavLinks />
              </div>
            </ModalMenu>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default Modal

type TModalMenuProps = {
  children: React.ReactNode
}

const ModalMenu = ({ children }: TModalMenuProps) => {
  return (
    <div
      className='text-black dark:bg-black/50 bg-white/70 dark:border-white
        dark:shadow-white mx-4
        flex
        w-full 
        flex-col
        items-center
        justify-center
        rounded-lg
        border
        border-primary p-4
        opacity-90 shadow-sm
        shadow-primary dark:text-white
        dark:shadow-sm
        sm:mx-12 md:mx-24 2xl:hidden'
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  )
}

const modalBackdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
}

const modalWrapperVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
  exit: {
    y: "100vh",
  },
}
