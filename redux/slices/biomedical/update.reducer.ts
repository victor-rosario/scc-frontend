import { PayloadAction } from "@reduxjs/toolkit"
import { BiomedicalSliceI } from "./biomedical.interface"

const updateBiomedical = (state: BiomedicalSliceI, action: PayloadAction<Partial<BiomedicalSliceI>>) => {
    if (action.payload.payload) state.payload = action.payload.payload
    if (action.payload.modal) state.modal = action.payload.modal
}

export default updateBiomedical
