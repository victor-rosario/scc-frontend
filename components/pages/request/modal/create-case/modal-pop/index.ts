import { Theme } from "@mui/system";
import { CaseModalProps } from "@redux/slices/ui/modalCase/modalCase.interface";

interface IProps {
    cancelCallback?: VoidFunction
    newCallback?: VoidFunction
    theme: Theme
}

export const openCaseModalPayload = ({
    cancelCallback,
    newCallback,
    theme
}: IProps): CaseModalProps => {

    return {
        open: true,
        maxWith: "lg",
        message: {
            subtitle1: {
                message: "Solicitud creado correctamente"
            },
            caseNumber: {
                message: "Número de caso: 134568798",
                variant: "h4",
                style: {
                    color: theme.palette.primary.main,
                    fontSize: 16,
                    paddingTop: "3px",
                    paddingBottom: "3px",
                }
            }
        },
        buttons: {
            cancel: {
                title: "Entendido",
                callback: cancelCallback
            },
            new: {
                title: "Crear nueva solicitud",
                callback: newCallback
            }
        }
    }
}