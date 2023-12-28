import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";
import { IBioMedicalPayload } from "@providers/biomedical/biomedical.interface";
import { IHealthIssues } from "@providers/health-issues/health-issue.interface";
import { ICODSI } from "@providers/icods/icod.interface";

interface IDeseasesBiomedicalProps {
    icods: ICODSI[]
    healthIssues: IHealthIssues[]
}

export const deseasesBiomedical = ({ icods, healthIssues }: IDeseasesBiomedicalProps): FieldConfig<IBioMedicalPayload>[] => [
    {
        label: "Seleccionar código CIE-10",
        name: "classificationDiseaseUUID",
        type: "select",
        responsive: {
            xs: 6
        },
        options: icods.map(({ uuid, title }) => ({ label: title, value: uuid })),
    },
    {
        label: "Origines de condiciones médicas",
        name: "healthIssueUUIDs",
        type: "multi-select",
        responsive: {
            xs: 6
        },
        options: healthIssues.map(({ uuid, origin }) => ({ label: origin, value: uuid }))
    },
    {
        label: "Descripción del diagnóstico",
        placeholder: "Descripción del diagnóstico",
        name: "descriptionDiagnose",
        type: "textarea",
        responsive: {
            xs: 6
        },
    },
    {
        label: "Antecedentes familiares relevantes a la condición presente",
        placeholder: "Antecedentes familiares relevantes a la condición presente",
        name: "relevantFamilyHistory",
        type: "textarea",
        responsive: {
            xs: 6
        },
    }
]