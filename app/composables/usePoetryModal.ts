export const usePoetryModal = () => {
  const activeModal = useState<string | null>('activeModal', () => null)

  const openModal = (id: string) => {
    activeModal.value = id
  }

  const closeModal = () => {
    activeModal.value = null
  }

  const isOpen = (id: string): boolean => {
    return activeModal.value === id
  }

  return { activeModal, openModal, closeModal, isOpen }
}
