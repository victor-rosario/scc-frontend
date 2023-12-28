import { ModalModeType } from "@interfaces/modal/modal.interface"

export interface IBiomedicalModal {
    open: boolean
    mode: ModalModeType
}

export interface BiomedicalSliceI {
    payload: any
    modal: IBiomedicalModal
}