"use client"

import { useState, useEffect } from "react"

type TLocalStorage = {
  key: string
  initValue: "light" | "dark"
}

export function useLocalStorage({ key, initValue }: TLocalStorage) {
  const [value, setValue] = useState<typeof initValue | null>(null)

  useEffect(() => {
    setValue(() => {
      const jsonValue = localStorage.getItem(key)
      if (jsonValue == null) {
        return initValue
      } else {
        return JSON.parse(jsonValue)
      }
    })
  }, [key, initValue])

  useEffect(() => {
    if (value === null) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [key, value])

  return [value, setValue] as const
}
