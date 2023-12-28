import { WhodaModalSliceI } from "./form.interface"

const resetWhodaBaby = (state: WhodaModalSliceI) => {
    state.payload = {}
    state.modal = {
        mode: 'create',
        open: false,
        title: ""
    }
}

export default resetWhodaBaby
