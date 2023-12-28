import { RequestSliceI } from "./request.interface"

const resetRequest = (state: RequestSliceI) => {
    state.payload = null
}

export default resetRequest
