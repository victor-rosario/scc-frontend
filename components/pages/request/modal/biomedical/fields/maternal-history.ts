import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

export const maternalHistory: FieldConfig<any>[] = [
    {
        label: "Antecedentes maternal de enfermedad",
        name: "Antecedentes maternal de enfermedad",
        type: "multi-select",
        responsive: {
            xs: 12
        },
        options: [
            "Rubeola",
            "Zika",
            "Chikungunya",
            "Toxoplasmosis",
            "Inf. de Vías Urinarias",
            "Tuberculosis",
            "Diabetes",
            "Eclampsia/Preeclampsia",
            "Alcohol",
            "Cigarro",
            "Drogas",
            "Medicación",
        ].map((label) => ({ label, value: label }))
    },
    {
        label: "En caso de ser positivo, detallar",
        name: "t",
        placeholder: "En caso de ser positivo, detallar",
        type: "textarea",
        responsive: {
            xs: 12
        },
    },
]