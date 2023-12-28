import { ModalModeType } from "@interfaces/modal/modal.interface"

export interface IWhodaModal {
    open: boolean
    mode: ModalModeType
    title: string
}

export interface WhodaModalSliceI {
    payload: any
    modal: IWhodaModal
}