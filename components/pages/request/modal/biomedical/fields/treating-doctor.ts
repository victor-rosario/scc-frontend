import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

export const treatingDoctor: FieldConfig<any>[] = [
    {
        label: "Nombre",
        name: "treatingPhysicianInfo.firstName",
        type: "text",
        responsive: {
            xs: 6
        }
    },
    {
        label: "Apellido",
        name: "treatingPhysicianInfo.lastName",
        type: "text",
        responsive: {
            xs: 6
        }
    },
    {
        label: "Exequatur",
        name: "treatingPhysicianInfo.exequatur",
        type: "text",
        responsive: {
            xs: 4
        }
    },
    {
        label: "Especialidad",
        name: "treatingPhysicianInfo.specialty",
        type: "text",
        responsive: {
            xs: 8
        }
    },
    {
        label: "PSS",
        name: "treatingPhysicianInfo.pss",
        type: "text",
        responsive: {
            xs: 12
        }
    },
    {
        label: "Región de salud",
        name: "treatingPhysicianInfo.healthRegion",
        type: "text",
        responsive: {
            xs: 4
        },
    },
    {
        label: "Área",
        name: "treatingPhysicianInfo.healthArea",
        type: "text",
        responsive: {
            xs: 4
        }
    },
    {
        label: "Zona",
        name: "treatingPhysicianInfo.healthZone",
        type: "text",
        responsive: {
            xs: 4
        }
    },
    {
        label: "Teléfono",
        name: "treatingPhysicianInfo.phoneNumber",
        type: "tel",
        responsive: {
            xs: 6
        }
    },
    {
        label: "Fecha del informe",
        name: "treatingPhysicianInfo.reportDate",
        type: "date",
        responsive: {
            xs: 6
        }
    },
]