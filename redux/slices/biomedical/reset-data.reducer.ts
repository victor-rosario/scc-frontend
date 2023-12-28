import { BiomedicalSliceI } from "./biomedical.interface"

const resetBiomedical = (state: BiomedicalSliceI) => {
    state.payload = {}
    state.modal = {
        mode: 'create',
        open: false
    }
}

export default resetBiomedical
