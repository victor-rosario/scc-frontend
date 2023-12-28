import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	Step,
	StepLabel,
	Stepper,
	Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
	onValidStep,
	entityName,
	maxWith = 'xs',
	stepFields,
	resetStep = false
}: EntityStepModalPropsI<T>) => {

	const [form, setForm] = useState<Entity<T>>({} as Entity<T>)
	const [isEditMode, setIsEditMode] = useState(false)
	const [activeStep, setActiveStep] = useState(0);
	const [errorIndex, setErrorIndex] = useState<number | null>(null)

	const handleBack = () => {
		errorIndex && setErrorIndex(null)
		setActiveStep((prevStep) => prevStep - 1);
	}

	const handleNext = () => {
		const nextStep = activeStep + 1

		if (typeof onValidStep === 'function') {
			const isValidStep = onValidStep(form as Entity<T>, nextStep)
			if (isValidStep) {
				return setErrorIndex(nextStep - 1)
			}
		}

		setErrorIndex(null)
		setActiveStep(nextStep);
	}

	const handleClose = () => {
		setActiveStep(0)
		setForm({} as Entity<T>)
		onClose()
	}

	const handleSubmit = () => {

		if (activeStep !== (stepFields.length - 1)) return

		if (mode === 'create') onCreate?.(form as T)
		if (mode === 'edit') onSave?.(form as T)

		if (!resetStep) return

		const timeOut = setTimeout(() => {
			setActiveStep(0)
			setForm({} as Entity<T>)
			clearTimeout(timeOut)
		}, 2 * 1000)
	}

	const formContent = (step: number) => {
		const stepField = stepFields[step]
		if (!stepField) return <div>404: Not Found</div>

		const isArray = Array.isArray(stepField.fields)

		const data = isArray ? (
			<FormInput<T>
				isEditMode={isEditMode}
				setIsEditMode={setIsEditMode}
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
	}, [mode, JSON.stringify(entity), activeStep])

	return (
		<Dialog open={open} maxWidth={maxWith} fullWidth PaperProps={{ sx: { borderRadius: 4 } }}>
			<DialogTitle>
				<Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
					<Grid item>
						{entityName}
					</Grid>
					<Grid item>
						<IconButton onClick={handleClose}>
							<CloseIcon color='error' />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<Grid container>
					<Stepper
						activeStep={activeStep}
						orientation='horizontal'
						alternativeLabel
						sx={{ paddingBottom: 2, flex: 1, justifyContent: "center" }}
					>
						{stepFields.map((stepField, index) => {

							const labelProps: { error?: boolean; optional?: React.ReactNode } = {};

							if (index === errorIndex) {
								labelProps.optional = (
									<Typography variant="caption" color="error">
										Favor en completar los datos
									</Typography>
								);

								labelProps.error = true;
							}

							return (
								<Step key={`step-${index}`}>
									<StepLabel {...labelProps} >{stepField.label}</StepLabel>
								</Step>
							)
						})}
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
