/* eslint-disable prefer-const */
import FormStepModal from "@components/app/modal/FromStepModal";
import CalendarSchedule from "@components/pages/auth/scheduler/calendar";
import SelectPatientType from "@components/pages/auth/scheduler/select-role";
import useGetCaseModalData from "@hooks/useGetCaseModalData";
import { useTheme } from "@mui/material";
import { addPayloadRequest, addOneRequest, resetPayloadRequest } from "@redux/slices/request";
import { IPayloadRequest } from "@redux/slices/request/request.interface";
import { closeCaseModal, openCaseModal } from "@redux/slices/ui/modalCase";
import { dispatch, useAppSelector } from "@redux/store";
import { insertByCondition } from "@utils/array/array.util";
import { useMemo, useState } from "react";
import {
    documentRequest,
    motiveRequest,
    requestField,
    requestInstitutionField,
    requestRepresentativeField,
    streetAddressRequest
} from "./fields";
import { openCaseModalPayload } from "./modal-pop";
import formValidation from "@utils/validation/formValidation";
import { ErrorFormatterIntoObject } from "@utils/validation/errorFormatter";
import { Form01FormValidationSchema, Form01PayloadEmpty } from "@settings/forms/create-case/form.setting";
import requestProvider from "@providers/request/request.provider";
import { resetModal } from "@redux/slices/modal";
import { openSnackbar } from "@redux/slices/ui/snackbar";
import { jsonToFormData } from "@utils/object/object.util";
import { IApplicantRequest } from "@providers/request/request.interface";
import ExclusiveTermUse from "./fields/exclusive-use";

function CreateCaseModal() {

    const theme = useTheme()
    const [errors, setErrors] = useState<IPayloadRequest | null>(null)
    const { createCase } = useAppSelector(x => x.modal)
    const { payload } = useAppSelector(x => x.request)
    const { role } = useMemo(() => (payload ? payload : { role: { slug: "" } }), [payload])

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
    } = useGetCaseModalData({ isOpen: createCase.open })

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

    const handleModalClose = () => {
        dispatch(resetModal())
        dispatch(resetPayloadRequest())
        setErrors(null)
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

                    dispatch(addOneRequest({
                        ...request,
                        fullName: `${payload.firstName} ${payload.lastName}`,
                        scheduledAt: payload.schedule,
                    }))
                    dispatch(resetPayloadRequest())

                    dispatch(resetModal())

                    dispatch(openCaseModal({
                        ...openCaseModalPayload({
                            theme,
                            newCallback: () => {
                                dispatch(closeCaseModal())
                            }
                        })
                    }))
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
                dispatch(addOneRequest({
                    ...request,
                    fullName: `${payload.firstName} ${payload.lastName}`,
                    scheduledAt: payload.schedule,
                }))
                dispatch(resetPayloadRequest())

                dispatch(resetModal())

                dispatch(openCaseModal({
                    ...openCaseModalPayload({
                        theme,
                        newCallback: () => {
                            dispatch(closeCaseModal())
                        }
                    })
                }))
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
        <FormStepModal<IPayloadRequest>
            maxWith="lg"
            mode={createCase.mode}
            entity={payload}
            onCreate={() => { }}
            onSave={handleSubmit}
            onValidStep={(data, step) => !handleFormValidation(data, step)}
            open={createCase.open}
            errors={errors}
            onClose={handleModalClose}
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
                    fields: motiveRequest({ motives, communications })
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
            entityName={"SVRD-FO-001"}
        />
    )
}

export default CreateCaseModal