import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";
import { ICommunication } from "@providers/communication/communication.interface";
import { IMotive } from "@providers/motive/motive.interface";
import { IRequestPayload } from "@providers/request/request.interface";

interface IMotiveRequest {
    motives: IMotive[]
    communications: ICommunication[]
}

export const motiveRequest = ({ communications, motives }: IMotiveRequest): FieldConfig<IRequestPayload>[] => [
    {
        label: "Motivo de la solicitud",
        name: "motiveUUIDs",
        type: "multi-select",
        responsive: {
            xs: 12
        },
        options: motives.map((x) => ({ label: x.motive, value: x.uuid }))
    },
    {
        label: "¿Cuál es el código de comunicación utilizado por la persona a certificar?",
        name: "communicationUUIDs",
        type: "multi-select",
        responsive: {
            xs: 12
        },
        options: communications.map((x) => ({ label: x.methods, value: x.uuid }))
    },
    {
        label: "¿La persona a certificar puede mantener una conversación con un adecuado nivel de atención por 1 hora (sin distraerse en exceso)?",
        name: "conversationAbility",
        type: "select",
        options: [
            {
                label: "Si",
                value: "true"
            },
            {
                label: "No",
                value: "false"
            },
        ],
        responsive: {
            xs: 12
        },
    }
]