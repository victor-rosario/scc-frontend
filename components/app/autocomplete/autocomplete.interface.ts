
export interface OptionAutoCompletePropsI{
    title: string
    value: string
}

export interface CallbackHandleClickAutoCompletePropsI{
    (): void
}

export interface HandleClickAutoCompletePropsI{
    (callback: CallbackHandleClickAutoCompletePropsI): void
}

export interface OnChangeAutoCompletePropsI{
    (data: OptionAutoCompletePropsI): void
}

export interface AutoCompletePropsI{
    disabled?: boolean
    errorMessage?: string
    label?: string
    value?: string
    onChange: OnChangeAutoCompletePropsI
    variant: "standard" | "filled" | "outlined"
    options: OptionAutoCompletePropsI[]
    ComponentAddItem?: React.FC
    autoComplete?: boolean
    handleClick: HandleClickAutoCompletePropsI
}