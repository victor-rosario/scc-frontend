import { ModalModeType } from "@interfaces/modal/modal.interface"

export interface IPayloadModal {
    mode: ModalModeType
    open: boolean
}

export interface ModalSliceI {
    createCase: IPayloadModal
    requestInfo: IPayloadModal
    forms: IPayloadModal
    biomedical: IPayloadModal
    reevaluate: IPayloadModal
}