import FormStepModal from "@components/app/modal/FromStepModal"
import { dispatch, useAppSelector } from "@redux/store"
import {
    deseasesBiomedical,
    maternalHistory,
    perimeterBackground,
    therapy,
    criterion,
    treatingDoctor
} from './fields'
import { resetBiomedicalModal, updateListFormModal } from "@redux/slices/modal"
import { IBioMedicalPayload, TreatingPhysicianInfo } from "@providers/biomedical/biomedical.interface"
import useGetBiomedicalData from "@hooks/useGetBiomedicalData"
import { useState } from "react"
import { updatePayloadBiomedical, resetPayloadBiomedical } from "@redux/slices/biomedical"
import { Form02FormValidationSchema } from "@settings/forms/biomedical/form.setting"
import formValidation from "@utils/validation/formValidation"
import { ErrorFormatterIntoObject } from "@utils/validation/errorFormatter"
import biomedicalProvider from "@providers/biomedical/biomedical.provider"
import { openSnackbar } from "@redux/slices/ui/snackbar"

const BiomedicalModal = () => {

    const [errors, setErrors] = useState<IBioMedicalPayload | null>(null)
    const { payload: payloadBiomedical } = useAppSelector(x => x.biomedical)
    const { biomedical } = useAppSelector(x => x.modal)
    const { data: requestData } = useAppSelector(x => x.request)

    const {
        icods,
        healthIssues,
        diseaseHistories
    } = useGetBiomedicalData({ isOpen: biomedical.open })

    const handleFormValidation = (dataForm: IBioMedicalPayload, step: number): boolean => {

        if (dataForm.revival && typeof dataForm.revival === 'string') {
            dataForm.revival = dataForm.revival === 'Si' ? true : false
        }

        dispatch(updatePayloadBiomedical({
            ...dataForm,
            requestUUID: requestData?.uuid
        }))

        const newDataForm = { ...payloadBiomedical, ...dataForm }
        const payloadValidation = Form02FormValidationSchema({ step: step - 1 })
        const { isValid, errors } = formValidation(newDataForm, payloadValidation)
        setErrors(ErrorFormatterIntoObject(errors) as IBioMedicalPayload)

        return isValid
    }

    const handleClose = () => {
        dispatch(resetBiomedicalModal())
        dispatch(resetPayloadBiomedical())
        dispatch(updateListFormModal({ open: true, mode: 'create' }))
        setErrors(null)
    }

    const handleSubmit = (data: IBioMedicalPayload) => {

        const payloadData = {
            ...payloadBiomedical,
            ...data
        }

        if (!payloadData) return
        if (!handleFormValidation(payloadData, -1)) return

        const treatingPhysicianInfoData = Object.entries(payloadData)
            .reduce((acc: TreatingPhysicianInfo, [key, value]) => {
                const nameParts = key.split("_");
                if (!key || !value) return acc;

                if (nameParts.length !== 2) return acc
                const name = nameParts[1];

                return { ...acc, [name]: value };

            }, {} as TreatingPhysicianInfo)

        const payload = {
            ...payloadData,
            treatingPhysicianInfo: treatingPhysicianInfoData
        }

        biomedicalProvider.create(payload).then(() => {

            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Se ha creado el formulario correctamente',
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            )

            handleClose()

        }).catch((e) => {
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
        <FormStepModal<IBioMedicalPayload>
            maxWith="lg"
            mode={biomedical.mode}
            entity={payloadBiomedical}
            resetStep={false}
            onCreate={() => { }}
            onSave={handleSubmit}
            open={biomedical.open}
            errors={errors}
            onValidStep={(data, step) => !handleFormValidation(data, step)}
            onClose={handleClose}
            stepFields={[
                {
                    label: "Diagnóstico, origen y antecedentes familiares",
                    fields: deseasesBiomedical({ icods, healthIssues })
                },
                {
                    label: "Antecedentes perimetrales",
                    fields: perimeterBackground({ diseaseHistories })
                },
                {
                    label: "Antecedentes maternos durante el embarazo",
                    fields: maternalHistory({ diseaseHistories })
                },
                {
                    label: "Terapéutica",
                    fields: therapy
                },
                {
                    label: "Según su criterio",
                    fields: criterion
                },
                {
                    label: "Datos de médico tratante",
                    fields: treatingDoctor
                },
            ]}
            entityName={"SVRD-FO-002"}
        />
    )
}

export default BiomedicalModal