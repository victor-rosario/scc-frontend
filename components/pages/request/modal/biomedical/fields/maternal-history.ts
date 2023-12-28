import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";
import { IBioMedicalPayload } from "@providers/biomedical/biomedical.interface";
import { IDiseaseHistories } from "@providers/disease-histories/disease-histories.interface";

interface IMaternalHistoryProps {
    diseaseHistories: IDiseaseHistories[]
}

export const maternalHistory = ({ diseaseHistories }: IMaternalHistoryProps): FieldConfig<IBioMedicalPayload>[] => [
    {
        label: "Antecedentes maternal de enfermedad",
        name: "maternalDiseaseHistoryUUIDs",
        type: "multi-select",
        options: diseaseHistories.map(({ uuid, disease }) => ({ label: disease, value: uuid })),
        responsive: {
            xs: 12
        }
    },
    {
        label: "",
        name: "blank",
        type: "divider",
        responsive: {
            xs: 12
        }
    },
    {
        label: "En caso de ser positivo, detallar",
        name: "reasonMaternal",
        placeholder: "En caso de ser positivo, detallar",
        type: "textarea",
        responsive: {
            xs: 12
        },
    },
]