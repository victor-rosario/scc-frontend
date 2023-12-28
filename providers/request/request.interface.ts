export enum IdentificationEnum {
    ID_CARD = "ID_CARD",
    PASSPORT = "PASSPORT",
    NUI = "NUI",
}

export enum GenderEnum {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}

export enum RequestStatusEnum {
    PROGRESS = "PROGRESS",
    CERTIFICATE = "CERTIFICATE",
    PAUSED = "PAUSED",
    DENIED = "DENIED"
}

export interface IApplicantRequest {
    firstName: string
    lastName: string
    email: string
    phone: string
    mobile: string
    identification: string
    identificationType: IdentificationEnum | string
    institutionName: string
    rnc: string
    institutionPosition: string
    birthDate: string
    gender: GenderEnum | string
    conversationAbility: string | boolean
    address: string
    provinceUUID: string
    municipalityUUID: string
    nationality: string
    noStreet: string
    requestUUID: string
    roleUUID: string
}

export interface IRequestPayload extends IApplicantRequest {
    motiveUUIDs: string[]
    communicationUUIDs: string[]
    reason: string
    identificationDocument: any
    biomedicalEvaluation: any
    complementaryStudy: any
    schedule: string
    applicant_firstName: string
    applicant_lastName: string
    applicant_email: string
    applicant_phone: string
    applicant_mobile: string
    applicant_identification: string
    applicant_identificationType: IdentificationEnum | string
    applicant_birthDate: string
    applicant_gender: GenderEnum | string
    applicant_institutionName: string
    applicant_rnc: string
    applicant_institutionPosition: string
    applicant_conversationAbility: string | boolean
    applicant_requestUUID: string
    applicant_roleUUID: string
}

export interface IRequest {
    uuid: string
    type: string
    status: string
    caseCode: string
    reason: any
    fullName: string
    identification: string
    birthDate: string
    gender: GenderEnum
    rnc: any
    institutionName: any
    scheduledAt: string
    createdAt: string
}

export interface IGetAllRequestResponse {
    data: IRequest[]
    count: number
}