import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface"

export interface IQuestion {
    uuid: string
    question: string
}

export interface FormInputWhodaProps<T> {
    fields: FieldConfig<T>[]
}
