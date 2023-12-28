import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";
import AttachFileIcon from '@mui/icons-material/AttachFile';

export const documentRequest: FieldConfig<any>[] = [
    {
        label: "Documento de identificación (Cédula / Pasaporte / Acta de nacimiento)",
        name: "document-file",
        type: "file",
        startAdornment: <AttachFileIcon color="primary" />,
        placeholder: "Insertar documento (PDF o Imagen)",
        responsive: {
            xs: 12
        }
    },
    {
        label: "Ficha de Evaluación Biomédica",
        name: "biomedical-file",
        type: "file",
        startAdornment: <AttachFileIcon color="primary" />,
        placeholder: "Insertar documento (PDF o Imagen)",
        responsive: {
            xs: 6
        }
    },
    {
        label: "Estudios complementarios",
        name: "studios-file",
        type: "file",
        startAdornment: <AttachFileIcon color="primary" />,
        placeholder: "Insertar documento (PDF o Imagen)",
        responsive: {
            xs: 6
        }
    },
]