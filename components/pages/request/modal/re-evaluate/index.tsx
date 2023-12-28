import FormModal from "@components/app/modal/FormModal";
import { Entity } from "@components/app/modal/FormModal/FormModal.interface";
import { resetReevaluateModal } from "@redux/slices/modal";
import { dispatch, useAppSelector } from "@redux/store";

const ReevaluateModal = () => {

    const { reevaluate } = useAppSelector(x => x.modal)

    const handleClose = () => {
        dispatch(resetReevaluateModal())
    }

    const handleSubmit = () => { }

    return (

        <FormModal
            open={reevaluate.open}
            maxWith="md"
            entity={{} as Entity<any>}
            mode={reevaluate.mode}
            entityName="Reconsideración"
            errors={null}
            onClose={handleClose}
            onCreate={handleSubmit}
            fields={[
                {
                    label: "Motivo",
                    type: "select",
                    name: "motive",
                    options: [
                        "Disconformidad con la notificación de denegación",
                        "Disconformidad con el contenido del certificado - Origen de la discapacidad",
                        "Disconformidad con el contenido del certificado - Existencia de la discapacidad",
                    ].map((option) => ({ label: option, value: option })),
                    responsive: {
                        xs: 12,
                    }
                },
                {
                    label: "Justificar el motivo de la Reeconsideración",
                    placeholder: "Justificar el motivo de la Reeconsideración",
                    type: "textarea",
                    name: "motive1",
                    responsive: {
                        xs: 12,
                    }
                },
            ]}
        />
    )
};

export default ReevaluateModal;
