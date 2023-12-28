import { PayloadAction } from "@reduxjs/toolkit"
import { RequestSliceI } from "./request.interface"

const updateRequest = (state: RequestSliceI, action: PayloadAction<Partial<RequestSliceI>>) => {
    if (action.payload.payload) {
        state.payload = { ...state.payload, ...action.payload.payload }
    }

    console.log("state: ", state)
}

export default updateRequest
