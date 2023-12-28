import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

export const motiveRequest: FieldConfig<any>[] = [
    {
        label: "Motivo de la solicitud",
        name: "motive",
        type: "multi-select",
        responsive: {
            xs: 12
        },
        options: [
            "Accesos a beneficios educativos",
            "Accesos a beneficios de Seguridad Social",
            "Accesos a beneficios de Protección Social",
            "Cuota laboral",
            "Exoneración Impuestos",
            "Solicitud dispositivos de apoyo",
            "Fines bancarios",
            "No sabe/ No responde"
        ].map((label) => ({ label, value: label }))
    },
    {
        label: "¿Cuál es el código de comunicación utilizado por la persona a certificar?",
        name: "communication",
        type: "multi-select",
        responsive: {
            xs: 12
        },
        options: [
            "Lenguaje hablado",
            "Lector o escritura",
            "Lengua de Señas",
            "Braille",
            "Audio"
        ].map(label => ({ label, value: label }))
    },
    {
        label: "¿La persona a certificar puede mantener una conversación con un adecuado nivel de atención por 1 hora (sin distraerse en exceso)?",
        name: "isGood",
        type: "select",
        options: [
            {
                label: "Si",
                value: "true"
            },
            {
                label: "No",
                value: "false"
            },
        ],
        responsive: {
            xs: 12
        },
    }
]