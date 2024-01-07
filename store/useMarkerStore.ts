import type { TMarker } from "@/types"
import { create } from "zustand"

/** bear markers */
type TUseMarkerStore = {
  markers: TMarker[]
  setMarkers: (markers: TMarker[]) => void
}

const useMarkerStore = create<TUseMarkerStore>((set) => ({
  markers: [],
  setMarkers: (markers: TMarker[]) => {
    set(() => ({ markers }))
  },
}))

export default useMarkerStore
