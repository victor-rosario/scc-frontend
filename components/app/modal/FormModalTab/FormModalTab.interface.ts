import { ReactNode } from "react"

export interface RenderFormModalTabI{
    (): ReactNode
}

export interface OnClickComponentButtonFormModalTabI{
    (): void
}

export interface ComponentButtonFormModalTabI{
    title: string
    onClick: OnClickComponentButtonFormModalTabI
}

export interface ButtonFormModalTabI{
    back?: ComponentButtonFormModalTabI
    next?: ComponentButtonFormModalTabI
}

export interface FormModalTabI{
    label: string
    title: string
    active?: boolean
    disabled?: boolean
    render: ReactNode
    buttons: ButtonFormModalTabI
}

export interface OnCliseFormModalTabPropsI{
    (): void
}

export interface FormModalTabPropsI{
    id: string
    show: boolean
    onClose: OnCliseFormModalTabPropsI
    tabs: FormModalTabI[]
}