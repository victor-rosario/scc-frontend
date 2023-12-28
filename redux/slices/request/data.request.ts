import { IPayloadRequest, RequestSliceI } from "./request.interface";

export const initialPayloadRequest: IPayloadRequest = {
    role: {
        slug: "",
        roleUUID: ""
    },
    motiveUUIDs: [],
    communicationUUIDs: [],
    reason: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    mobile: "",
    identification: "",
    identificationType: "",
    birthDate: "",
    gender: "",
    conversationAbility: true,
    address: "",
    provinceUUID: "",
    municipalityUUID: "",
    nationality: "Dominicana",
    noStreet: "",
    identificationDocument: "",
    biomedicalEvaluation: "",
    complementaryStudy: "",
    institutionName: "",
    rnc: "",
    institutionPosition: "",
    applicant_firstName: "",
    applicant_lastName: "",
    applicant_email: "",
    applicant_phone: "",
    applicant_mobile: "",
    applicant_identification: "",
    applicant_identificationType: "",
    applicant_birthDate: "",
    applicant_gender: "",
    applicant_institutionName: "",
    applicant_rnc: "",
    applicant_institutionPosition: "",
    applicant_conversationAbility: "",
    applicant_requestUUID: "",
    applicant_roleUUID: "",
    schedule: "",
    requestUUID: "",
    roleUUID: ""
}

export const requestSliceInitialState: RequestSliceI = {
    payload: initialPayloadRequest,
    data: null,
    list: {
        data: [],
        count: 0
    }
}