import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

export const requestInstitutionField: FieldConfig<any>[] = [
    {
        label: "RNC",
        name: "nrc",
        type: 'text',
        responsive: {
            xs: 6
        }
    },
    {
        label: "Nombre de la institución que representa",
        name: "institutoName",
        type: 'text',
        responsive: {
            xs: 6
        }
    },
    {
        label: "",
        name: "black",
        type: "divider",
        responsive: {
            xs: 12
        }
    },
    {
        label: "Documento de identidad",
        name: "documentType",
        type: 'select',
        options: [
            {
                label: "Cédula",
                value: "cedula"
            },
            {
                label: "Pasaporte",
                value: "pasaporte"
            },
        ],
        responsive: {
            xs: 6
        }
    },
    {
        label: "Número de documento de identidad",
        name: "identification",
        placeholder: "000-0000000-0",
        type: 'text',
        responsive: {
            xs: 6
        }
    },
    {
        label: "Nombre",
        name: "firstName",
        type: 'text',
        responsive: {
            xs: 6
        }
    },
    {
        label: "Apellidos",
        name: "lastName",
        type: 'text',
        responsive: {
            xs: 6
        }
    },
    {
        label: "Cargo que ocupa dentro de la institución",
        name: "",
        type: 'text',
        responsive: {
            xs: 12
        }
    },
    {
        label: "Teléfono",
        name: "phone",
        type: 'tel',
        responsive: {
            xs: 6
        }
    },
    {
        label: "Celular",
        name: "celular",
        type: 'tel',
        responsive: {
            xs: 6
        }
    },
    {
        label: "Correo electrónico",
        name: "email",
        type: 'email',
        responsive: {
            xs: 12
        }
    },
    {
        label: "Fecha de nacimiento",
        name: "birthday",
        type: 'date',
        responsive: {
            xs: 6
        }
    },
    {
        label: "Sexo",
        name: "sexo",
        type: 'select',
        options: [
            {
                label: "Masculino",
                value: "male"
            },
            {
                label: "Femenino",
                value: "female"
            },
        ],
        responsive: {
            xs: 6
        }
    }
]