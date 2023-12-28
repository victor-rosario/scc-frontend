import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

const movilidadDummy = [
    "Andadores",
    "Triciclos",
    "Órtesis",
    "Bastón",
    "Bastón",
    "Muletas",
]

export const supportProductMobility: FieldConfig<any>[] = [
    {
        label: "Movilidad",
        name: "teas465465",
        type: "list",
        headers: [
            "Lo necesita y lo tiene",
            "Lo necesita y no lo tiene",
        ],
        listOptions: movilidadDummy.map(label => ({
            title: label,
            values: [
                {
                    label: "Lo necesita y lo tiene",
                    value: "true"
                },
                {
                    label: "Lo necesita y no lo tiene",
                    value: "false"
                }
            ]
        })),
        responsive: {
            xs: 12
        }
    },
]