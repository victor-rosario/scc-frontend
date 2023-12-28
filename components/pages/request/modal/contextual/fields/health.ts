import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

export const health: FieldConfig<any>[] = [
    {
        label: "¿Tiene algún seguro de salud?",
        name: "random-11",
        type: "switch",
        responsive: {
            xs: 12
        }
    },
    {
        label: "¿A qué tipo de seguro está afiliado(a)?",
        name: "random-12",
        type: "select",
        options: [
            {
                label: "Subsidiado",
                value: "Subsidiado"
            },
            {
                label: "Contributivo",
                value: "Contributivo"
            },
        ],
        responsive: {
            xs: 6
        }
    },
    {
        label: "Condición de tenencia del seguro de salud",
        name: "random-13",
        type: "select",
        options: [
            {
                label: "Titular",
                value: "Titular"
            },
            {
                label: "Dependiente",
                value: "Dependiente"
            },
        ],
        responsive: {
            xs: 6
        }
    },
    {
        label: "¿Recibe servicios de Salud?",
        name: "random-14",
        type: "switch",
        responsive: {
            xs: 12
        }
    },
    {
        label: "¿Por qué no recibe servicios de salud?",
        name: "random-15",
        type: "select",
        options: [
            { label: "Actitudes negativas del personal de salud hacia las personas con discapacidad", value: "Actitudes negativas del personal de salud hacia las personas con discapacidad" },
            { label: "Cree que ya no lo necesita", value: "Cree que ya no lo necesita" },
            { label: "No hay transporte", value: "No hay transporte" },
            { label: "Falta de dinero", value: "Falta de dinero" },
            { label: "El centro de atención queda muy lejos", value: "El centro de atención queda muy lejos" },
            { label: "El centro no es accesible", value: "El centro no es accesible" },
            { label: "No tiene quien lo/a lleve", value: "No tiene quien lo/a lleve" },
            { label: "El seguro no lo cubre", value: "El seguro no lo cubre" },
            { label: "No sabe/ No responde", value: "No sabe/ No responde" },
        ],
        responsive: {
            xs: 12
        }
    },
    {
        label: "¿Utiliza o necesita usted algún dispositivo de apoyo?",
        name: "random-16",
        type: "switch",
        responsive: {
            xs: 12
        }
    },
]