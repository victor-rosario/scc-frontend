interface IRequestPayload {
    isRepresentative: boolean
    isInstitution: boolean
    isPatient: boolean
}

export interface RequestSliceI {
    payload: IRequestPayload | null
}