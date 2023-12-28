import { ModalModeType } from "@interfaces/modal/modal.interface"

export interface CreateCaseModalProps {
    mode: ModalModeType
    open: boolean
    setOpenModal: (isOpen: boolean) => void
}