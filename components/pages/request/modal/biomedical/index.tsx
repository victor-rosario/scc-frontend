import FormStepModal from "@components/app/modal/FromStepModal"
import { dispatch, useAppSelector } from "@redux/store"
import {
    deseasesBiomedial,
    maternalHistory,
    perimeterBackground,
    therapy,
    criterion,
    treatingDoctor
} from './fields'
import { resetBiomedical } from "@redux/slices/biomedical"

const BiomedicalModal = () => {

    const { modal } = useAppSelector(x => x.biomedical)

    const handleClose = () => {
        dispatch(resetBiomedical())
    }

    const handleSubmit = () => {
        dispatch(resetBiomedical())
    }

    return (
        <FormStepModal<any>
            maxWith="lg"
            mode={modal.mode}
            entity={{}}
            onCreate={handleSubmit}
            open={modal.open}
            errors={null}
            onClose={handleClose}
            stepFields={[
                {
                    label: "Diagnóstico, origen y antecedentes familiares",
                    fields: deseasesBiomedial
                },
                {
                    label: "Antecedentes perimetrales",
                    fields: perimeterBackground
                },
                {
                    label: "Antecedentes maternos durante el embarazo",
                    fields: maternalHistory
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