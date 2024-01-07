"use client"

import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage({
    key: "bears-watch",
    initValue: "light",
  })

  useEffect(() => {
    setColorMode(() => {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    })
  }, [setColorMode])

  useEffect(() => {
    const documentElementClasses = window.document.documentElement.classList
    documentElementClasses.toggle("dark", colorMode === "dark")
  }, [colorMode])

  return [colorMode, setColorMode] as const
}
