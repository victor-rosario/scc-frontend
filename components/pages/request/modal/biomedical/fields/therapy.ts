import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";
import { IBioMedicalPayload } from "@providers/biomedical/biomedical.interface";

export const therapy: FieldConfig<IBioMedicalPayload>[] = [
    {
        label: "Indicar medicamentos y uso, cirugías si las hubiese, fisioterapia incluyendo modalidad y tiempo, psicoterapia",
        placeholder: "Indicar medicamentos y uso, cirugías si las hubiese, fisioterapia incluyendo modalidad y tiempo, psicoterapia",
        type: "textarea",
        name: "descriptionTherapeutic",
        responsive: {
            xs: 12
        }
    }
]