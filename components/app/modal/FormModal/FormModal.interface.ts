import { ModalModeType } from '@interfaces/modal/modal.interface'
import { Dayjs } from 'dayjs'

export type FieldConfigType =
	| 'number'
	| 'text'
	| 'select'
	| 'multi-select'
	| 'list'
	| 'date'
	| 'switch'
	| 'divider'
	| 'file'
	| 'password'
	| 'blank'
	| 'textarea'
	| 'tel'
	| 'email'
	| 'paragraph'
	| 'question'

export type FieldConfigXs = 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1

export type MaxWithType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export class OptionIFieldConfigI {
	value: string
	label: string
}

export class ListOptionIFieldConfigI {
	values: OptionIFieldConfigI[]
	title: string
}

type ExcludeProperties<T, K extends keyof T> = {
	[P in Exclude<keyof T, K>]: T[P]
}

export interface ResponsiveFieldConfig {
	xs?: FieldConfigXs
	sm?: FieldConfigXs
	md?: FieldConfigXs
	lg?: FieldConfigXs
	xl?: FieldConfigXs
}

export interface FieldConfig<T> {
	name: keyof T | 'divider' | 'blank'
	label: string
	type: FieldConfigType
	responsive: ResponsiveFieldConfig
	options?: OptionIFieldConfigI[]
	listOptions?: ListOptionIFieldConfigI[]
	headers?: string[]
	paragraphs?: string[]
	startAdornment?: React.JSX.Element
	disabled?: boolean
	placeholder?: string
	value?: string | string[] | File | File[]
	isEditMode?: boolean
	handleChange?: (value: string | NonNullable<Entity<T>[keyof T]> | Dayjs | File) => void
}

export type Entity<T> = {
	[key in keyof T]: any
}

export interface RightPositionI {
	col: number
	children?: React.ReactNode
}

export interface FormInputPropsI<T> {
	fields: FieldConfig<T>[]
	form: Entity<T>
	isEditMode?: boolean
	setIsEditMode?: React.Dispatch<React.SetStateAction<boolean>>
	errors?: Record<keyof T, any> | null | undefined
	setForm: React.Dispatch<React.SetStateAction<Entity<T>>>
}

export interface EntityModalPropsI<T> extends ExcludeProperties<FormInputPropsI<T>, 'form' | 'setForm' | 'isEditMode' | 'setIsEditMode'> {
	open: boolean
	mode: ModalModeType
	entity: Entity<T> | null | undefined
	onClose: () => void
	onCreate?: (data: T) => void
	onSave?: (data: T) => void
	entityName: string
	content?: React.ReactNode
	rightPosition?: RightPositionI
	maxWith?: MaxWithType
}
