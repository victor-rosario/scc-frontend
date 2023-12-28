import { PayloadAction } from "@reduxjs/toolkit"
import { ContextualModalSliceI } from "./contextual.interface"

const updateBiomedical = (state: ContextualModalSliceI, action: PayloadAction<Partial<ContextualModalSliceI>>) => {
    if (action.payload.payload) state.payload = action.payload.payload
    if (action.payload.modal) state.modal = action.payload.modal
}

export default updateBiomedical
