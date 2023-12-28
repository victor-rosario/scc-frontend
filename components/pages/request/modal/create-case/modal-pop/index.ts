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
        message: {
            subtitle1: {
                message: "Caso creado correctamente"
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
                title: "Cerrar",
                callback: cancelCallback
            },
            new: {
                title: "Crear nuevo caso",
                callback: newCallback
            }
        }
    }
}