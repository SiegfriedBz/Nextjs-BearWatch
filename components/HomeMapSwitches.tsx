"use client"

import { useMapStore } from "@/store"
import ButtonSwitch from "./ButtonSwitch"

const HomeMapSwitches = () => {
  const { isWeeklyMap, toggleIsWeeklyMap, isCenteredMap, toggleIsCenteredMap } =
    useMapStore()

  return (
    <>
      <ButtonSwitch
        label='Last Week'
        isChecked={isWeeklyMap}
        onChange={toggleIsWeeklyMap}
        className='my-2'
      />
      <ButtonSwitch
        label='Center'
        isChecked={isCenteredMap}
        onChange={toggleIsCenteredMap}
        className='my-2'
      />
    </>
  )
}

export default HomeMapSwitches
