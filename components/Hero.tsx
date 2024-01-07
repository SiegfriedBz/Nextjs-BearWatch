"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleDown } from "@fortawesome/free-solid-svg-icons"

const MotionButton = motion.button

const Hero = () => {
  const router = useRouter()

  return (
    <div className='relative min-h-[100dvh] w-full'>
      <div className='hero-image' />

      <div className='hero-text-wrapper'>
        <motion.h2
          variants={h2AVariants}
          initial='hidden'
          animate='show'
          className='text-white mt-0 text-3xl font-extrabold'
        >
          Bear Sighting Map
        </motion.h2>
        <motion.h2
          variants={h2BVariants}
          initial='hidden'
          animate='show'
          className='text-white text-3xl font-extrabold'
        >
          Report Bear Encounters
        </motion.h2>
        <motion.h2
          variants={h2CVariants}
          initial='hidden'
          animate='show'
          className='text-white text-3xl font-extrabold'
        >
          Send SOS Message
        </motion.h2>
      </div>

      <MotionButton
        variants={arrowVariants}
        initial='hidden'
        animate='visible'
        onClick={() => {
          router.push("#features")
        }}
        className={`
          absolute 
          bottom-0
          left-1/2
          -translate-x-1/2
          z-[500]
        dark:text-white text-primary
          cursor-pointer 
          animate-bounce
         `}
      >
        <FontAwesomeIcon
          icon={faCircleDown}
          className='ring-white bg-white rounded-full text-4xl ring-2 dark:bg-transparent dark:ring-primary'
        />
      </MotionButton>
    </div>
  )
}

export default Hero

const h2AVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // delay: 2,
      duration: 0.8,
    },
  },
}
const h2BVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // delay: 2.8,
      delay: 0.8,
      duration: 0.8,
    },
  },
}
const h2CVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // delay: 3.6,
      delay: 1.6,
      duration: 0.8,
    },
  },
}

const arrowVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      // delay: 4.6,
      delay: 2.6,
      duration: 0.3,
    },
  },
}
