/* eslint-disable prefer-const */
import Logo from "@components/app/Logo"
import {
    documentRequest,
    motiveRequest,
    requestField,
    requestInstitutionField,
    requestRepresentativeField,
    streetAddressRequest
} from "@components/pages/request/modal/create-case/fields"
import { Grid } from "@mui/material"
import { IPayloadRequest } from "@redux/slices/request/request.interface"
import { dispatch, useAppSelector } from "@redux/store"
import { insertByCondition } from "@utils/array/array.util"
import { useMemo, useState } from "react"
import AuthCardWrapper from "../AuthCardWrapper"
import AuthWrapper1 from "../AuthWrapper1"
import AuthScheduler from "./AuthScheduler"
import CalendarSchedule from "./calendar"
import SelectPatientType from "./select-role"
import useGetCaseModalData from "@hooks/useGetCaseModalData"
import { addPayloadRequest, resetPayloadRequest } from "@redux/slices/request"
import { Form01FormValidationSchema, Form01PayloadEmpty } from "@settings/forms/create-case/form.setting"
import formValidation from "@utils/validation/formValidation"
import { ErrorFormatterIntoObject } from "@utils/validation/errorFormatter"
import requestProvider from "@providers/request/request.provider"
import ThankYou from "./thank-you"
import { IApplicantRequest, IRequest } from "@providers/request/request.interface"
import { openSnackbar } from "@redux/slices/ui/snackbar"
import { jsonToFormData } from "@utils/object/object.util"
import ExclusiveTermUse from "@components/pages/request/modal/create-case/fields/exclusive-use"

const SchedulePageComponent = () => {

    const [request, setRequest] = useState<IRequest>()
    const [errors, setErrors] = useState<IPayloadRequest | null>(null)
    const { payload } = useAppSelector(x => x.request)
    const { role } = useMemo(() => (payload ? payload : { role: { slug: "" } }) as IPayloadRequest, [payload])

    const isPatient = useMemo(() => role?.slug === "patient", [role])
    const isInstitution = useMemo(() => role?.slug === "institution", [role])
    const isRepresentative = useMemo(() => role?.slug === "representative", [role])

    const {
        communications,
        motives,
        roles,
        provinces,
        municipalities,
        setProvinceUUID,
    } = useGetCaseModalData({ isOpen: true })

    const handleFormValidation = (dataForm: IPayloadRequest, step = 0,): any => {
        if (step == 1) return true
        if (step == 2) return (isPatient || isInstitution || isRepresentative)
        if (dataForm.conversationAbility && typeof dataForm.conversationAbility === 'string') {
            dataForm.conversationAbility = dataForm.conversationAbility == "true"
        }

        dispatch(addPayloadRequest(dataForm))

        const newDataForm = { ...Form01PayloadEmpty, ...dataForm }
        const payloadValidation = Form01FormValidationSchema({ isPatient, isInstitution, isRepresentative, step: step - 3 })
        const { isValid, errors } = formValidation(newDataForm, payloadValidation)
        setErrors(ErrorFormatterIntoObject(errors) as IPayloadRequest)

        return isValid
    }

    const handleSubmit = () => {

        if (!payload) return
        if (!handleFormValidation(payload, -1)) return

        const formData = jsonToFormData(payload)

        requestProvider.create(formData).then(request => {

            if (isInstitution || isRepresentative) {

                const applicantPayload = Object.entries(payload).reduce((acc, item) => {
                    const [key, value] = item
                    const name = key.split("_")[1]

                    if (!key || !value) return acc

                    if (name) {
                        return { ...acc, [name]: value, [key]: value, requestUUID: request.uuid, roleUUID: payload.role.roleUUID }
                    } else {
                        return { ...acc, [key]: value, requestUUID: request.uuid, roleUUID: payload.role.roleUUID }
                    }

                }, {} as IApplicantRequest)

                requestProvider.createApplicant(applicantPayload).then(() => {

                    dispatch(resetPayloadRequest())

                    setRequest(request)

                }).catch(e => {
                    dispatch(
                        openSnackbar({
                            open: true,
                            message: e.message || 'Something went wrong',
                            variant: 'alert',
                            alert: {
                                color: 'error'
                            },
                            close: false
                        })
                    )
                })

            } else {

                dispatch(resetPayloadRequest())

                setRequest(request)

            }

        }).catch(e => {
            dispatch(
                openSnackbar({
                    open: true,
                    message: e.message || 'Something went wrong',
                    variant: 'alert',
                    alert: {
                        color: 'error'
                    },
                    close: false
                })
            )
        })
    }

    return (
        <AuthWrapper1>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ minHeight: '100vh' }}>
                <Grid item container justifyContent="center">
                    <AuthCardWrapper sx={{ maxWidth: { xs: 1000, lg: 1075 } }}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    direction={'row'}
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                >
                                    <Grid item>
                                        <Logo src={"/assets/images/logo.png"} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <AuthScheduler<IPayloadRequest>
                                    onValidStep={(data, step) => !handleFormValidation(data, step)}
                                    onCreate={handleSubmit}
                                    thankYouPage={request ? <ThankYou request={request} /> : null}
                                    stepFields={[
                                        {
                                            label: "Uso exclusivo",
                                            fields: <ExclusiveTermUse />
                                        },
                                        {
                                            label: "Seleccionar",
                                            fields: <SelectPatientType roles={roles} />
                                        },
                                        {
                                            label: "Motivos",
                                            fields: motiveRequest({ communications, motives })
                                        },
                                        ...insertByCondition(isPatient, {
                                            label: "Información",
                                            fields: requestField
                                        }),

                                        // Institution
                                        ...insertByCondition(isInstitution, {
                                            label: "Información de la Institución",
                                            fields: requestInstitutionField
                                        }),
                                        ...insertByCondition(isInstitution, {
                                            label: "Información del Paciente",
                                            fields: requestField
                                        }),
                                        //

                                        // Representative
                                        ...insertByCondition(isRepresentative, {
                                            label: "Información del Representante",
                                            fields: requestRepresentativeField
                                        }),
                                        ...insertByCondition(isRepresentative, {
                                            label: "Información del Paciente",
                                            fields: requestField
                                        }),
                                        //
                                        {
                                            label: "Dirección",
                                            fields: streetAddressRequest({ municipalities, provinces, setProvinceUUID })
                                        },
                                        {
                                            label: "Documentos",
                                            fields: documentRequest
                                        },
                                        ...insertByCondition(isRepresentative || isInstitution, {
                                            label: "Razón",
                                            fields: [
                                                {
                                                    label: "Razón por la cual está representando",
                                                    name: "reason",
                                                    placeholder: "Razón por la cual está representando",
                                                    type: "textarea",
                                                    responsive: {
                                                        xs: 12,
                                                    }
                                                }
                                            ]
                                        }),
                                        {
                                            label: "Cita",
                                            fields: <CalendarSchedule error={errors} />
                                        }
                                    ]}
                                />
                            </Grid>
                        </Grid>
                    </AuthCardWrapper>
                </Grid>
            </Grid>
        </AuthWrapper1>
    )
}

export default SchedulePageComponent