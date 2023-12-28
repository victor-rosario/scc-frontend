import { OnChangeAutoCompletePropsI } from "../autocomplete/autocomplete.interface"

export interface DataResponseProviderSelectFilterPropsI{
    uuid: string
    name: string
}

export interface ResponseProviderSelectFilterPropsI{
    data: DataResponseProviderSelectFilterPropsI[]
}

export interface ProviderSelectFilterPropsI{
    (): Promise<ResponseProviderSelectFilterPropsI>
}

export interface SelectFilterPropsI{
    providerCall: ProviderSelectFilterPropsI
    handleChange: OnChangeAutoCompletePropsI
    disabled?: boolean
    value?: string
    label?: string
    ComponentAddItem?: React.FC
}