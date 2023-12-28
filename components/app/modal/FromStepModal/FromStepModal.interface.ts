import { ModalModeType } from '@interfaces/modal/modal.interface'
import { Entity, FieldConfig, FormInputPropsI, MaxWithType } from '../FormModal/FormModal.interface'
import { ExcludeProperties } from '@interfaces/common/common.interface'

export interface IStepField<T> {
	label: string | React.ReactNode
	fields: React.JSX.Element | FieldConfig<T>[]
}

export interface EntityStepModalPropsI<T> extends ExcludeProperties<FormInputPropsI<T>, 'form' | 'setForm' | 'isEditMode' | 'setIsEditMode' | 'fields'> {
	open: boolean
	mode: ModalModeType
	entity: Entity<T> | null | undefined
	onClose: () => void
	onCreate: (data: T) => void
	onSave?: (data: T) => void
	entityName: string
	maxWith?: MaxWithType
	stepFields: IStepField<T>[]
}
