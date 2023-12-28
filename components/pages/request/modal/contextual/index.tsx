import FormStepModal from "@components/app/modal/FromStepModal"
import { resetContextual } from "@redux/slices/whodas/contextual"
import { dispatch, useAppSelector } from "@redux/store"
import {
    educations,
    employment,
    health,
} from './fields'
import {
    supportProductMobility,
    supportProductVision,
    supportProductHearing,
    supportProductCommunication,
    supportProductOtherAccessory
} from './fields/support-product'

const ContextualModal = () => {

    const { modal } = useAppSelector(x => x.contextual)

    const handleClose = () => {
        dispatch(resetContextual())
    }

    const handleSubmit = () => {
        dispatch(resetContextual())
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
                    label: "Educación",
                    fields: educations
                },
                {
                    label: "Empleo",
                    fields: employment
                },
                {
                    label: "Salud",
                    fields: health
                },
                {
                    label: "Movilidad",
                    fields: supportProductMobility
                },
                {
                    label: "Visión",
                    fields: supportProductVision
                },
                {
                    label: "Audición",
                    fields: supportProductHearing
                },
                {
                    label: "Comunicación",
                    fields: supportProductCommunication
                },
                {
                    label: "Otros aditamentos",
                    fields: supportProductOtherAccessory
                },
            ]}
            entityName={"Contextual"}
        />
    )
}

export default ContextualModal