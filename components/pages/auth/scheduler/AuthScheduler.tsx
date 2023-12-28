import AnimateButton from '@components/app/extended/AnimateButton'
import {
    Button,
    Stack,
    Step,
    StepLabel,
    Stepper,
    Typography
} from '@mui/material'
import React, { Fragment, useState } from 'react'
import { IAuthSchedulerProps } from './scheduler.interface'
import FormInput from '@components/app/modal/FormModal/FormInput'
import { Entity, FieldConfig } from '@components/app/modal/FormModal/FormModal.interface'

const AuthScheduler = <T extends object>({
    onValidStep,
    onCreate,
    thankYouPage,
    stepFields,
    resetSteps
}: IAuthSchedulerProps<T>) => {

    const [errors, setErrors] = useState<Record<keyof T, any> | null | undefined>(null)
    const [form, setForm] = useState<Entity<T>>({} as Entity<T>)
    const [errorIndex, setErrorIndex] = useState<number | null>(null)
    const [activeStep, setActiveStep] = useState(0)

    const handleBack = () => {
        errorIndex && setErrorIndex(null)
        setActiveStep(prev => prev - 1)
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
        setActiveStep(nextStep)
    }

    const handleSubmit = () => {

        if (activeStep !== stepFields.length - 1) return

        onCreate(form as T)
        setForm({} as Entity<T>)
        resetSteps && setActiveStep(0)
    }

    const formContent = (step: number) => {
        if (!stepFields) return <div>404: Not Found</div>

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

    return (
        <form noValidate>
            <Stepper
                activeStep={activeStep}
                sx={{ pt: 3, pb: 5 }}
                alternativeLabel
            >
                {stepFields.map(({ label }, index) => {
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
                        <Step key={`step-schedule-${index}`}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <>
                {activeStep === stepFields.length ? (
                    <>
                        {thankYouPage}
                        <Stack direction="row" justifyContent="flex-end">
                            <AnimateButton>
                                <Button
                                    variant="contained"
                                    color="error"

                                    onClick={() => {
                                        setActiveStep(0);
                                        setForm({} as Entity<T>)
                                        setErrors(null)
                                        setErrorIndex(null)
                                    }}
                                    sx={{ my: 3, ml: 1, textTransform: 'none' }}
                                >
                                    Finalizar
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </>
                ) : (
                    <Fragment>
                        <Fragment>
                            {formContent(activeStep)}
                        </Fragment>

                        <Stack direction="row" justifyContent={activeStep !== 0 ? 'space-between' : 'flex-end'}>
                            {activeStep !== 0 && (
                                <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                                    Atrás
                                </Button>
                            )}
                            <AnimateButton>
                                <Button variant="contained" onClick={() => activeStep !== stepFields.length - 1 ? handleNext() : handleSubmit()} sx={{ my: 3, ml: 1 }}>
                                    {(activeStep === stepFields.length - 1) ? 'Agendar' : (activeStep === 0) ? 'Acepto' : 'Siguiente'}
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </Fragment>
                )}
            </>
        </form>
    )
}

export default AuthScheduler
