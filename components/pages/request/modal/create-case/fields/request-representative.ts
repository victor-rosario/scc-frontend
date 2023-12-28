import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";
import { GenderEnum, IRequestPayload, IdentificationEnum } from "@providers/request/request.interface";

export const requestRepresentativeField: FieldConfig<IRequestPayload>[] = [
    {
        label: "Documento de identidad",
        name: "applicant_identificationType",
        type: 'select',
        options: [
            {
                label: "Cédula",
                value: IdentificationEnum.ID_CARD
            },
            {
                label: "Pasaporte",
                value: IdentificationEnum.PASSPORT
            },
            {
                label: "NUI",
                value: IdentificationEnum.NUI
            }
        ],
        responsive: {
            xs: 6
        }
    },
    {
        label: "Número de documento de identidad",
        name: "applicant_identification",
        placeholder: "000-0000000-0",
        type: 'text',
        responsive: {
            xs: 6
        }
    },
    {
        label: "Nombre",
        name: "applicant_firstName",
        type: 'text',
        responsive: {
            xs: 6
        }
    },
    {
        label: "Apellido",
        name: "applicant_lastName",
        type: 'text',
        responsive: {
            xs: 6
        }
    },
    {
        label: "Teléfono",
        name: "applicant_phone",
        type: 'tel',
        responsive: {
            xs: 6
        }
    },
    {
        label: "Celular",
        name: "applicant_mobile",
        type: 'tel',
        responsive: {
            xs: 6
        }
    },
    {
        label: "Correo electrónico",
        name: "applicant_email",
        type: 'email',
        responsive: {
            xs: 12
        }
    },
    {
        label: "Fecha de nacimiento",
        name: "applicant_birthDate",
        type: 'date',
        responsive: {
            xs: 6
        }
    },
    {
        label: "Sexo",
        name: "applicant_gender",
        type: 'select',
        options: [
            {
                label: "Masculino",
                value: GenderEnum.MALE
            },
            {
                label: "Femenino",
                value: GenderEnum.FEMALE
            },
        ],
        responsive: {
            xs: 6
        }
    }
]