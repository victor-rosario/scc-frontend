import { BiomedicalSliceI } from "./biomedical.interface"
import { initialPayloadBiomedical } from "./data.biomedical"

export const resetPayloadBiomedicalReducer = (state: BiomedicalSliceI) => {
    state.payload = initialPayloadBiomedical
}
