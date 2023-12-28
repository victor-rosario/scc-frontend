import { ReactNode } from "react"

export interface IButtonMenuProps {
    items: IButtonMenuItem[]
    label?: string
    icon?: ReactNode
    disabled?: boolean
}

export interface IButtonMenuItem {
    label: string
    icon?: ReactNode
    disabled?: boolean
    onClick?: () => void
}