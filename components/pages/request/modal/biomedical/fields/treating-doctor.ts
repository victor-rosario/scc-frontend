import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";
import { IBioMedicalPayload } from "@providers/biomedical/biomedical.interface";

export const treatingDoctor: FieldConfig<IBioMedicalPayload>[] = [
    {
        label: "Nombre",
        name: "treatingPhysician_firstName",
        type: "text",
        responsive: {
            xs: 6
        }
    },
    {
        label: "Apellido",
        name: "treatingPhysician_lastName",
        type: "text",
        responsive: {
            xs: 6
        }
    },
    {
        label: "Exequatur",
        name: "treatingPhysician_exequatur",
        type: "text",
        responsive: {
            xs: 4
        }
    },
    {
        label: "Especialidad",
        name: "treatingPhysician_specialty",
        type: "text",
        responsive: {
            xs: 8
        }
    },
    {
        label: "PSS",
        name: "treatingPhysician_pss",
        type: "text",
        responsive: {
            xs: 12
        }
    },
    {
        label: "Región de salud",
        name: "treatingPhysician_healthRegion",
        type: "text",
        responsive: {
            xs: 4
        },
    },
    {
        label: "Área",
        name: "treatingPhysician_healthArea",
        type: "text",
        responsive: {
            xs: 4
        }
    },
    {
        label: "Zona",
        name: "treatingPhysician_healthZone",
        type: "text",
        responsive: {
            xs: 4
        }
    },
    {
        label: "Teléfono",
        name: "treatingPhysician_phoneNumber",
        type: "tel",
        responsive: {
            xs: 6
        }
    },
    {
        label: "Fecha del informe",
        name: "treatingPhysician_reportDate",
        type: "date",
        responsive: {
            xs: 6
        }
    },
]