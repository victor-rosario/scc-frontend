import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

export const therapy: FieldConfig<any>[] = [
    {
        label: "Indicar medicamentos y uso, cirugías si las hubiese, fisioterapia incluyendo modalidad y tiempo, psicoterapia",
        placeholder: "Indicar medicamentos y uso, cirugías si las hubiese, fisioterapia incluyendo modalidad y tiempo, psicoterapia",
        type: "textarea",
        name: "ta",
        responsive: {
            xs: 12
        }
    }
]