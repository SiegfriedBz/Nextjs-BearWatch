import { create } from "zustand"

type TUseMapStore = {
  isUserMarkersOnly: boolean
  toggleIsUserMarkersOnly: () => void
  isMapEditMode: boolean
  toggleIsMapEditMode: () => void
  isWeeklyMap: boolean
  toggleIsWeeklyMap: () => void
  isCenteredMap: boolean
  toggleIsCenteredMap: () => void
}

const useMapStore = create<TUseMapStore>((set) => ({
  //
  isUserMarkersOnly: false,
  toggleIsUserMarkersOnly: () => {
    set((state) => ({ isUserMarkersOnly: !state.isUserMarkersOnly }))
  },
  isMapEditMode: false,
  toggleIsMapEditMode: () => {
    set((state) => ({ isMapEditMode: !state.isMapEditMode }))
  },
  //
  isWeeklyMap: false,
  toggleIsWeeklyMap: () => {
    set((state) => ({ isWeeklyMap: !state.isWeeklyMap }))
  },
  isCenteredMap: false,
  toggleIsCenteredMap: () => {
    set((state) => ({ isCenteredMap: !state.isCenteredMap }))
  },
}))

export default useMapStore
