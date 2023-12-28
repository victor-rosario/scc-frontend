import { ModalModeType } from "@interfaces/modal/modal.interface"

export interface IContextualModal {
    open: boolean
    mode: ModalModeType
}

export interface ContextualModalSliceI {
    payload: any
    modal: IContextualModal
}