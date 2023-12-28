import { initialPayloadRequest } from "./data.request"
import { RequestSliceI } from "./request.interface"

export const resetListRequestReducer = (state: RequestSliceI) => {
    state.list.data = []
    state.list.count = 0
}

export const resetPayloadRequestReducer = (state: RequestSliceI) => {
    state.payload = initialPayloadRequest
}

export const resetDataRequestReducer = (state: RequestSliceI) => {
    state.data = null
}
