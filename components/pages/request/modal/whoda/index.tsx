import { resetWhodaForm } from "@redux/slices/whodas/form"
import { dispatch, useAppSelector } from "@redux/store"
import { formQuestionDummy } from "./dummy"
import {
    introduction
} from './fields'
import FormWhodaStepModal from "./step"

const WhodaForm = () => {

    const { title } = useAppSelector(x => x.whodaForm.modal)

    const handleClose = () => {
        dispatch(resetWhodaForm())
    }

    const handleSubmit = (data: any) => {
        console.log("DATA: ", data)
        dispatch(resetWhodaForm())
    }

    return (
        <FormWhodaStepModal<any>
            maxWith="lg"
            entity={{}}
            resetStep
            onCreate={handleSubmit}
            onClose={handleClose}
            stepFields={[
                {
                    label: "Introducción",
                    fields: introduction
                },
            ].concat(formQuestionDummy as any)}
            entityName={title || "Whodas"}
        />
    )
}


export default WhodaForm