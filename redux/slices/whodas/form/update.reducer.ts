import { PayloadAction } from "@reduxjs/toolkit"
import { WhodaModalSliceI } from "./form.interface"

const updateWhodaForm = (state: WhodaModalSliceI, action: PayloadAction<Partial<WhodaModalSliceI>>) => {
    if (action.payload.payload) state.payload = action.payload.payload
    if (action.payload.modal) state.modal = action.payload.modal
}

export default updateWhodaForm
