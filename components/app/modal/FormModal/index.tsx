
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid
} from '@mui/material';
import { useEffect, useState } from 'react';
import FormInput from './FormInput';
import { Entity, EntityModalPropsI } from './FormModal.interface';

const FormModal = <T extends object>({
	mode,
	entity,
	content,
	errors,
	open,
	onClose,
	onCreate,
	onSave,
	fields,
	entityName,
	rightPosition,
	maxWith = 'xs',
}: EntityModalPropsI<T>) => {

	const [form, setForm] = useState<Entity<T>>({} as Entity<T>)
	const [isEditMode, setIsEditMode] = useState(false)

	const handleClose = () => {
		setForm({} as Entity<T>)
		onClose()
	}

	const handleSubmit = () => {
		if (mode === 'create') onCreate?.(form as T)
		if (mode === 'edit') onSave?.(form as T)
		setForm({} as Entity<T>)
	}

	useEffect(() => {
		if (mode !== 'create' && entity) {
			setForm(entity)
			setIsEditMode?.(mode === 'edit')
		} else {
			const defaultFormState: Entity<T> = {} as Entity<T>

			fields.forEach((field) => {
				if ('value' in field) {
					defaultFormState[field.name as keyof T] = field.value
				}
			})

			setForm(defaultFormState)
			setIsEditMode?.(mode === 'create' || mode === 'edit')
		}
	}, [mode, JSON.stringify(entity)])

	return (
		<Dialog open={open} onClose={onClose} maxWidth={maxWith} fullWidth PaperProps={{ sx: { borderRadius: 4 } }}>
			<DialogTitle>
				{entityName}
			</DialogTitle>
			<DialogContent>
				<Grid container>
					<FormInput<T>
						isEditMode={true}
						setIsEditMode={setIsEditMode}
						fields={fields}
						errors={errors}
						form={form}
						setForm={setForm}
						rightPosition={rightPosition}
					/>
					{rightPosition ? (
						<Grid item xs={rightPosition.col}>
							{rightPosition.children}
						</Grid>
					) : null}

					{content ? (
						<Grid item xs={12}>
							{content}
						</Grid>
					) : null}
				</Grid>
			</DialogContent>
			<DialogActions sx={{ paddingRight: "34px" }}>
				<Button onClick={handleClose} variant='outlined' sx={{ borderRadius: 50, width: "15%" }} size='large'>
					Cancelar
				</Button>
				{isEditMode && (
					<Button onClick={handleSubmit} variant="contained" sx={{ borderRadius: 50, width: "15%" }}>
						{mode === 'create' ? "Enviar" : "Guardar"}
					</Button>
				)}
			</DialogActions>
		</Dialog>
	)
}

export default FormModal
