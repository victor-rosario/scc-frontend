import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

export const streetAddressRequest: FieldConfig<any>[] = [
    {
        label: "Barrio",
        name: "Barrio",
        type: "text",
        responsive: {
            xs: 12
        }
    },
    {
        label: "Calle",
        name: "calle",
        type: "text",
        responsive: {
            xs: 6
        }
    },
    {
        label: "No. Calle",
        name: "nocalle",
        type: "text",
        responsive: {
            xs: 6
        }
    },
    {
        label: "Provincia",
        name: "province",
        type: "text",
        responsive: {
            xs: 6
        }
    },
    {
        label: "Municipio",
        name: "municipio",
        type: "text",
        responsive: {
            xs: 6
        }
    },
]