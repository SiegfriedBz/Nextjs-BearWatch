import { create } from "zustand"

type TUseHelpStore = {
  helpIsOpen: boolean
  openHelp: () => void
  closeHelp: () => void
}

const useHelpStore = create<TUseHelpStore>((set) => ({
  helpIsOpen: false,
  openHelp: () => {
    set(() => ({
      helpIsOpen: true,
    }))
  },
  closeHelp: () => {
    set(() => ({
      helpIsOpen: false,
    }))
  },
}))

export default useHelpStore
