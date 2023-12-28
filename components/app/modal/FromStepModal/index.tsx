
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Step,
	StepLabel,
	Stepper
} from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import FormInput from '../FormModal/FormInput';
import { Entity, FieldConfig } from '../FormModal/FormModal.interface';
import { EntityStepModalPropsI } from './FromStepModal.interface';

const FormStepModal = <T extends object>({
	mode,
	entity,
	errors,
	open,
	onClose,
	onCreate,
	onSave,
	entityName,
	maxWith = 'xs',
	stepFields,
}: EntityStepModalPropsI<T>) => {

	const [form, setForm] = useState<Entity<T>>({} as Entity<T>)
	const [isEditMode, setIsEditMode] = useState(false)
	const [activeStep, setActiveStep] = useState(0);

	const handleBack = () => {
		setActiveStep((prevStep) => prevStep - 1);
	}

	const handleNext = () => {
		setActiveStep((prevStep) => prevStep + 1);
	}

	const handleClose = () => {
		setActiveStep(0)
		setForm({} as Entity<T>)
		onClose()
	}

	const handleSubmit = () => {

		if (activeStep !== stepFields.length - 1) return

		if (mode === 'create') onCreate?.(form as T)
		if (mode === 'edit') onSave?.(form as T)
		setForm({} as Entity<T>)
		setActiveStep(0)
	}

	const formContent = (step: number) => {
		const stepField = stepFields[step]
		if (!stepField) return <div>404: Not Found</div>

		const isArray = Array.isArray(stepField.fields)

		const data = isArray ? (
			<FormInput<T>
				isEditMode={true}
				setIsEditMode={() => { }}
				fields={stepField.fields as FieldConfig<T>[]}
				errors={errors}
				form={form}
				setForm={setForm}
			/>
		) : stepField.fields as React.ReactNode

		return data
	}

	useEffect(() => {
		if (mode !== 'create' && entity) {
			setForm(entity)
			setIsEditMode?.(mode === 'edit')
		} else {
			const defaultFormState: Entity<T> = {} as Entity<T>

			stepFields.forEach(stepField => {
				const isArray = Array.isArray(stepField.fields)
				if (!isArray) return

				(stepField.fields as FieldConfig<T>[]).forEach((field) => {
					if ('value' in field) {
						defaultFormState[field.name as keyof T] = field.value
					}
				})
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
					<Stepper
						activeStep={activeStep}
						orientation='horizontal'
						alternativeLabel
						sx={{ paddingBottom: 2, flex: 1, justifyContent: "center" }}
					>
						{stepFields.map((stepField, index) => (
							<Step key={`step-${index}`} >

								{typeof stepField.label === 'string' && (
									<StepLabel>{stepField.label}</StepLabel>
								)}

								{typeof stepField.label !== 'string' && (
									<StepLabel>{stepField.label}</StepLabel>
								)}

							</Step>
						))}
					</Stepper>
					{formContent(activeStep)}
				</Grid>
			</DialogContent>
			<DialogActions sx={{ paddingRight: "34px" }}>

				{activeStep === 0 ? (
					<Button onClick={handleClose} variant='outlined' sx={{ borderRadius: 50, width: "15%" }} size='large'>
						Cerrar
					</Button>
				) : (
					<Button onClick={handleBack} variant='outlined' sx={{ borderRadius: 50, width: "15%" }} size='large'>
						Atrás
					</Button>
				)}

				{isEditMode && (
					<Fragment>
						{activeStep === stepFields.length - 1 ? (
							<Button onClick={handleSubmit} variant="contained" sx={{ borderRadius: 50, width: "15%" }}>
								Enviar
							</Button>
						) : (
							<Button onClick={handleNext} variant="contained" sx={{ borderRadius: 50, width: "15%" }}>
								Siguiente
							</Button>
						)}
					</Fragment>
				)}
			</DialogActions>
		</Dialog>
	)
}

export default FormStepModal
