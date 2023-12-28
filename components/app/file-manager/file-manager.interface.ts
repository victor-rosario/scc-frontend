// import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { ReactNode } from "react"

export interface HandleItemFileManagerPropsI{
    (file: FileItemI): void
}

export interface HandleSetListFilesManagerPropsI{
    (files: FileItemI[]): void
}

export interface FileManagerPropsI{
    items: FileItemI[],
    show?: boolean
    upload?: boolean
    handleSetListFiles?: HandleSetListFilesManagerPropsI
    itemSelect: HandleItemFileManagerPropsI
}

export interface IconItemMenuPanelPropsI{
    Component?: any
    // FontAwesome?: IconProp
}

export interface ItemMenuPanelPropsI{
    icon: IconItemMenuPanelPropsI
    title: string
    key: string
}

export interface HandleClickMenuPanelPropsI{
    (key: string): void
}

export interface MenuPanelPropsI{
    children?: ReactNode
    buttonPoints?: boolean
    items: ItemMenuPanelPropsI[]
    handleClick: HandleClickMenuPanelPropsI
}

export interface FileItemI{
    uuid?: string
    customName?: string
    name?: string
    size?: number
    src?: string
    downloadSrc?: string
    parentUUID?: string
    file?: FileItemI
}