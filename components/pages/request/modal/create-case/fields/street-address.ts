import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";
import { IRequestPayload } from "@providers/request/request.interface";
import { ITerritorial } from "@providers/territorial/territorial.interface";

interface IStreetAddressRequest {
    provinces: ITerritorial[],
    municipalities: ITerritorial[],
    setProvinceUUID: (uuid: string) => void,
}

export const streetAddressRequest = ({ municipalities, provinces, setProvinceUUID }: IStreetAddressRequest): FieldConfig<IRequestPayload>[] => [
    {
        label: "Dirección",
        name: "address",
        type: "text",
        responsive: {
            xs: 6
        }
    },
    {
        label: "No. Calle",
        name: "noStreet",
        type: "number",
        responsive: {
            xs: 6
        }
    },
    {
        label: "Provincia",
        name: "provinceUUID",
        type: "select",
        options: provinces.map(({ uuid, name }) => ({ label: name, value: uuid })),
        handleChange: setProvinceUUID,
        responsive: {
            xs: 6
        }
    },
    {
        label: "Municipio",
        name: "municipalityUUID",
        type: "select",
        disabled: municipalities.length === 0,
        options: municipalities.map(({ uuid, name }) => ({ label: name, value: uuid })),
        responsive: {
            xs: 6
        }
    },
]