import { convertArrayToObject, insertByCondition } from "@utils/array/array.util"

interface IForm01FormValidationSchema {
    isPatient: boolean
    isInstitution: boolean
    isRepresentative: boolean
    step: number
}

const patientPayload = {
    firstName: {
        isRequired: { message: "Nombre es requerido" }
    },
    lastName: {
        isRequired: { message: "Apellido es requerido" }
    },
    phone: {
        isRequired: { message: "Teléfono es requerido" }
    },
    identification: {
        isRequired: { message: "Identificación es requerido" }
    },
    identificationType: {
        isRequired: { message: "Tipo de Identificación es requerido" }
    },
    birthDate: {
        isRequired: { message: "Fecha de nacimiento es requerido" }
    },
    gender: {
        isRequired: { message: "Género es requerido" }
    },
}

const applicantPayload = {
    applicant_firstName: {
        isRequired: { message: "Nombre es requerido" }
    },
    applicant_lastName: {
        isRequired: { message: "Apellido es requerido" }
    },
    applicant_email: {
        isRequired: { message: "Apellido es requerido" }
    },
    applicant_phone: {
        isRequired: { message: "Teléfono es requerido" }
    },
    applicant_identification: {
        isRequired: { message: "Identificación es requerido" }
    },
    applicant_identificationType: {
        isRequired: { message: "Tipo de Identificación es requerido" }
    },
    applicant_birthDate: {
        isRequired: { message: "Fecha de nacimiento es requerido" }
    },
    applicant_gender: {
        isRequired: { message: "Género es requerido" }
    },
    applicant_institutionName: {
        isRequired: { message: "Nombre de la institución es requerido" }
    },
    applicant_rnc: {
        isRequired: { message: "RNC es requerido" }
    },
    applicant_institutionPosition: {
        isRequired: { message: "Posición dentro de la institución es requerido" }
    },
}

export const Form01FormValidationSchema = ({ isInstitution, isPatient, isRepresentative, step }: IForm01FormValidationSchema): any => {

    const payload = [
        {
            motiveUUIDs: {
                isRequired: { message: "Motivos son requeridos" }
            },
            communicationUUIDs: {
                isRequired: { message: "Motivos de la comunicación son requeridos" }
            },
            conversationAbility: {
                isRequired: { message: "Habilidad de conversación es requerido" }
            },
        },
        ...insertByCondition(isPatient, patientPayload),
        ...insertByCondition(isInstitution, applicantPayload),
        ...insertByCondition(isInstitution, patientPayload),
        ...insertByCondition(isRepresentative, applicantPayload),
        ...insertByCondition(isRepresentative, patientPayload),
        {
            address: {
                isRequired: { message: "Dirección es requerido" }
            },
            provinceUUID: {
                isRequired: { message: "Provincia es requerido" }
            },
            municipalityUUID: {
                isRequired: { message: "Municipio es requerido" }
            },
            // nationality: {
            //     isRequired: { message: "Nacionalidad es requerido" }
            // },
            noStreet: {
                isRequired: { message: "Número de calle es requerido" }
            },
        },
        {
            identificationDocument: {
                isRequired: { message: "Document de identidad es requerido" }
            },
            biomedicalEvaluation: {
                isRequired: { message: "Evaluación biomédical es requerido" }
            },
            complementaryStudy: {
                isRequired: { message: "Estudios complementario es requerido" }
            },
        },
        {
            schedule: {
                isRequired: { message: "Fecha de agenda es requerido" }
            },
        }
    ]

    return payload[step] || convertArrayToObject(payload)
}

export const Form01PayloadEmpty: any = {
    motiveUUIDs: [],
    communicationUUIDs: [],
    firstName: "",
    lastName: "",
    phone: "",
    mobile: "",
    identification: "",
    identificationType: "",
    birthDate: "",
    gender: "",
    conversationAbility: false,
    address: "",
    province: "",
    municipality: "",
    nationality: "",
    noStreet: "",
    schedule: "",
    identificationDocument: "",
    biomedicalEvaluation: "",
    complementaryStudy: "",

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
}