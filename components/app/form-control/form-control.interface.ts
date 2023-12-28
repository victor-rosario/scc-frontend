export interface DataOnChangeFormControlPropsI{
    value: string
    name: string
}

export interface OnChangeFormControlPropsI{
    (data: DataOnChangeFormControlPropsI): void
}

export interface ItemFormControlPropsI{
    name: string
    value: string
}

export interface FormControlPropsI {
    label: string
    name: string
    value?: string
    items: ItemFormControlPropsI[]
    defaultValue?: string
    onChange?: OnChangeFormControlPropsI
}