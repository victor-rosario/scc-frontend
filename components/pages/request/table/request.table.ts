import { Theme } from "@mui/material";
import { RequestStatusEnum } from "@providers/request/request.interface";

export const REQUEST_TABLE_STATUS_COLUMNS = (theme: Theme) => ({
    [RequestStatusEnum.CERTIFICATE]: {
        background: theme.palette.success.light + 60,
        color: theme.palette.success.dark
    },
    [RequestStatusEnum.DENIED]: {
        background: theme.palette.error.main,
        color: theme.palette.error.contrastText
    },
    [RequestStatusEnum.PAUSED]: {
        background: theme.palette.warning.main,
        color: theme.palette.warning.contrastText
    },
    [RequestStatusEnum.PROGRESS]: {
        background: theme.palette.info.main,
        color: theme.palette.info.contrastText
    }
})

export const REQUEST_TABLE_STATUS_LABELS: Record<string, string> = {
    [RequestStatusEnum.CERTIFICATE]: "Certificado",
    [RequestStatusEnum.DENIED]: "Denegado",
    [RequestStatusEnum.PAUSED]: "Pausado",
    [RequestStatusEnum.PROGRESS]: "Progreso"
}