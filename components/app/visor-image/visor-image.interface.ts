export interface HandleCloseVisorImagePropsI {
    (): void
}

export interface VisorImagePropsI {
    handleClose: HandleCloseVisorImagePropsI
    show: boolean
    src: string
}