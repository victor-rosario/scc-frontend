import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { IPayloadRequest } from "@redux/slices/request/request.interface";

export const documentRequest: FieldConfig<IPayloadRequest>[] = [
    {
        label: "Documento de identificación (Cédula / Pasaporte / Acta de nacimiento)",
        name: "identificationDocument",
        type: "file",
        startAdornment: <PictureAsPdfIcon color="error" />,
        placeholder: "Insertar documento (PDF)",
        responsive: {
            xs: 12
        }
    },
    {
        label: "Ficha de Evaluación Biomédica",
        name: "biomedicalEvaluation",
        type: "file",
        startAdornment: <PictureAsPdfIcon color="error" />,
        placeholder: "Insertar documento (PDF)",
        responsive: {
            xs: 6
        }
    },
    {
        label: "Estudios complementarios",
        name: "complementaryStudy",
        type: "file",
        startAdornment: <PictureAsPdfIcon color="error" />,
        placeholder: "Insertar documento (PDF)",
        responsive: {
            xs: 6
        }
    },
]