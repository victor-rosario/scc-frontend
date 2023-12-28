import { RequestSliceI } from "./request.interface";

export const requestSliceInitialState: RequestSliceI = {
    payload: {
        isInstitution: false,
        isPatient: true,
        isRepresentative: false
    }
}