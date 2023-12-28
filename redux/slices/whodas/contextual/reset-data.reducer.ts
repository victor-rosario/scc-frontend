import { ContextualModalSliceI } from "./contextual.interface"

const resetBiomedical = (state: ContextualModalSliceI) => {
    state.payload = {}
    state.modal = {
        mode: 'create',
        open: false
    }
}

export default resetBiomedical
