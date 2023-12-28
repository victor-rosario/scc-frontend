import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

export const introduction: FieldConfig<any>[] = [
    {
        label: "",
        paragraphs: [
            "Este cuestionario incluye preguntas sobre las dificultades que puede tener debido a condiciones de salud. Condición de salud se refiere a una enfermedad u otros problemas de salud, lesiones o problemas mentales de larga duración.",
            "Piense en los últimos 30 días y responda estas preguntas considerando cuánta dificultad ha tenido (nombre) al llevar a cabo las siguientes actividades. Para cada pregunta, por favor seleccionar sólo una respuesta."
        ],
        name: "",
        type: "paragraph",
        responsive: {
            xs: 12
        }
    }
]