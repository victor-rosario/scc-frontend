import { PayloadAction } from "@reduxjs/toolkit"
import { IPayloadModal, ModalSliceI } from "./modal.interface"

export const updateCreateCaseModalReducer = (state: ModalSliceI, action: PayloadAction<IPayloadModal>) => {
    state.createCase.mode = action.payload.mode
    state.createCase.open = action.payload.open
}

export const updateOneRequestModalReducer = (state: ModalSliceI, action: PayloadAction<IPayloadModal>) => {
    state.requestInfo.mode = action.payload.mode
    state.requestInfo.open = action.payload.open
}

export const updateListFormModalReducer = (state: ModalSliceI, action: PayloadAction<IPayloadModal>) => {
    state.forms.mode = action.payload.mode
    state.forms.open = action.payload.open
}

export const updateBiomedicalModalReducer = (state: ModalSliceI, action: PayloadAction<IPayloadModal>) => {
    state.biomedical.mode = action.payload.mode
    state.biomedical.open = action.payload.open
}

export const updateReevaluateModalReducer = (state: ModalSliceI, action: PayloadAction<IPayloadModal>) => {
    state.reevaluate.mode = action.payload.mode
    state.reevaluate.open = action.payload.open
}
