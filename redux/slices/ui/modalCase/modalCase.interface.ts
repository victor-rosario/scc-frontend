import { MaxWithType } from "@components/app/modal/FormModal/FormModal.interface"
import { SxProps, Theme } from "@mui/material";

export type VariantType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline';

interface IMessage {
    message: string
    variant?: VariantType
    style?: SxProps<Theme>
}

interface IButtonProps {
    title?: string,
    callback?: VoidFunction
}

interface IButton {
    new?: IButtonProps
    cancel?: IButtonProps
}

export interface CaseModalProps {
    maxWith?: MaxWithType
    logo?: "check" | "danger" | 'warning'
    open: boolean,
    message: Record<string, IMessage> | string
    buttons: IButton
}