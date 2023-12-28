import { convertArrayToObject } from "@utils/array/array.util";

interface Form02FormSetting {
    step: number;
}

export const Form02FormValidationSchema = ({ step }: Form02FormSetting) => {

    const payload = [
        {
            descriptionDiagnose: {
                isRequired: { message: 'Este campo es requerido' }
            },
            classificationDiseaseUUID: {
                isRequired: { message: 'Este campo es requerido' }
            },
            healthIssueUUIDs: {
                isRequired: { message: 'Este campo es requerido' }
            },
            relevantFamilyHistory: {
                isRequired: { message: 'Este campo es requerido' }
            },
        },
        {
            ageGestional: {
                isRequired: { message: 'Este campo es requerido' },
            },
            apgar: {
                isRequired: { message: 'Este campo es requerido' },
                isNumberPositive: { message: 'Este campo debe ser positivo' }
            },
            birthWeightPoundsLb: {
                isRequired: { message: 'Este campo es requerido' },
                isNumberPositive: { message: 'Este campo debe ser positivo' }
            },
            headCircumferenceCm: {
                isRequired: { message: 'Este campo es requerido' },
                isNumberPositive: { message: 'Este campo debe ser positivo' }
            },
            revival: {
                isRequired: { message: 'Este campo es requerido' },
                isCheck: { message: 'Este campo es requerido' },
            },
            perinatalDiseaseHistoryUUIDs: {
                isRequired: { message: 'Este campo es requerido' }
            },
            reasonPerinatal: {
                isRequired: { message: 'Este campo es requerido' }
            },
        },
        {
            maternalDiseaseHistoryUUIDs: {
                isRequired: { message: 'Este campo es requerido' }
            },
            reasonMaternal: {
                isRequired: { message: 'Este campo es requerido' }
            },
        },
        {
            descriptionTherapeutic: {
                isRequired: { message: 'Este campo es requerido' }
            },
        },
        {

        },
        {
            treatingPhysician_firstName: {
                isRequired: { message: 'Este campo es requerido' }
            },
            treatingPhysician_lastName: {
                isRequired: { message: 'Este campo es requerido' }
            },
            treatingPhysician_phoneNumber: {
                isRequired: { message: 'Este campo es requerido' }
            },
            treatingPhysician_exequatur: {
                isRequired: { message: 'Este campo es requerido' }
            },
            treatingPhysician_specialty: {
                isRequired: { message: 'Este campo es requerido' }
            },
            treatingPhysician_pss: {
                isRequired: { message: 'Este campo es requerido' }
            },
            treatingPhysician_healthRegion: {
                isRequired: { message: 'Este campo es requerido' }
            },
            treatingPhysician_healthArea: {
                isRequired: { message: 'Este campo es requerido' }
            },
            treatingPhysician_healthZone: {
                isRequired: { message: 'Este campo es requerido' }
            },
            treatingPhysician_reportDate: {
                isRequired: { message: 'Este campo es requerido' }
            },
        }
    ]

    const data = payload[step] || convertArrayToObject(payload)

    return data
}