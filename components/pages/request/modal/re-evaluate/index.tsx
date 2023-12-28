import FormModal from "@components/app/modal/FormModal";
import { Entity } from "@components/app/modal/FormModal/FormModal.interface";
import { ModalModeType } from "@interfaces/modal/modal.interface";

interface ReevaluateModalProps {
    mode: ModalModeType
    open: boolean
    setOpenModal: (isOpen: boolean) => void
}

const ReevaluateModal: React.FC<ReevaluateModalProps> = ({ mode, open, setOpenModal }) => {

    return (

        <FormModal
            entity={{} as Entity<any>}
            mode={mode}
            maxWith="md"
            open={open}
            entityName="Reconsideración"
            errors={null}
            onClose={() => setOpenModal(false)}
            onCreate={() => setOpenModal(false)}
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
                    label: "Justificar el motivo de la Reconsideración",
                    placeholder: "Justificar el motivo de la Reconsideración",
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
