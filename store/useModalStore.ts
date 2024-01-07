import { create } from "zustand"

/** modal */
type TUseModalStore = {
  modalIsOpen: boolean
  openModal: () => void
  closeModal: () => void
  toggleModal: () => void
}

const useModalStore = create<TUseModalStore>((set) => ({
  modalIsOpen: false,
  openModal: () => {
    set(() => ({
      modalIsOpen: true,
    }))
  },
  closeModal: () => {
    set(() => ({ modalIsOpen: false }))
  },
  toggleModal: () => {
    set((state) => ({ modalIsOpen: !state.modalIsOpen }))
  },
}))

export default useModalStore
