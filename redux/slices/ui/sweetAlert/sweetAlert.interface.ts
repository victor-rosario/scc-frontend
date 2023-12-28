import { SweetAlertIcon } from 'sweetalert2'

export interface ISweetAlertOption {
	open: boolean
	icon?: SweetAlertIcon
	showCancelButton?: boolean
	textCancelButton?: string
	confirmButtonText?: string
	title?: string
	text?: string
	onConfirm?: () => void
}
