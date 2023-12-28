import { FormInputPropsI, RightPositionI } from "@components/app/modal/FormModal/FormModal.interface"
import { ExcludeProperties } from "@interfaces/common/common.interface"

export interface EntityReceptionistModalPropsI<T> extends ExcludeProperties<FormInputPropsI<T>, 'form' | 'setForm' | 'isEditMode' | 'setIsEditMode' | 'errors' | 'fields'> {
    open: boolean
    onClose: () => void
    onSubmit: () => void
    entityName: string
    rightPosition?: RightPositionI
}
