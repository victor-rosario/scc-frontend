import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

export const perimeterBackground: FieldConfig<any>[] = [
    {
        label: "Edad gestacional",
        name: "ageGestional",
        type: "select",
        options: [
            "Semana 1-2",
            "Semana 3-8",
            "Semana 9-12",
            "Semana 13-16",
            "Semana 17-20",
            "Semana 21-24",
            "Semana 25-28",
            "Semana 29-32",
            "Semana 33-36",
            "Semana 37-40",
        ].map((label) => ({ label, value: label })),
        responsive: {
            xs: 3
        },
    },
    {
        label: "Apgar",
        name: "apgar",
        type: "text",
        responsive: {
            xs: 3
        },
    },
    {
        label: "Peso al nacer",
        name: "birthWeightPoundsLb",
        type: "number",
        responsive: {
            xs: 3
        },
    },
    {
        label: "Perímetro cefálico",
        name: "headCircumferenceCm",
        type: "number",
        responsive: {
            xs: 3
        },
    },
    {
        label: "Reanimación",
        name: "revival",
        type: "select",
        options: [
            {
                label: "Si",
                value: "Si"
            },
            {
                label: "No",
                value: "No"
            }
        ],
        responsive: {
            xs: 3
        },
    },
    {
        label: "Antecedentes perinatales de enfermedad",
        name: "perinatalDiseaseHistoryUUIDs",
        type: "multi-select",
        options: [
            "Asfixia al nacer",
            "Distrés Respiratorio",
            "Sepsis neonatal",
            "Cianosis",
            "Llanto débil al nacer",
            "Diabetes",
            "Cardiopatías",
            "Nefropatías",
        ].map((label) => ({ label, value: label })),
        responsive: {
            xs: 9
        }
    },
    {
        label: "En caso de ser positivo, detallar",
        name: "reasonPerinatal",
        placeholder: "En caso de ser positivo, detallar",
        type: "textarea",
        responsive: {
            xs: 12
        }
    }
]