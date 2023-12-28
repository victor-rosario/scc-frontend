import { PayloadAction } from "@reduxjs/toolkit"
import { BiomedicalSliceI } from "./biomedical.interface"
import { IBioMedicalPayload } from "@providers/biomedical/biomedical.interface"

export const updatePayloadBiomedicalReducer = (state: BiomedicalSliceI, action: PayloadAction<Partial<IBioMedicalPayload>>) => {
    state.payload = {
        ...state.payload,
        ...action.payload
    }
    return state
}
