import { useEffect, useState } from "react"
import AutoComplete from "../autocomplete"
import { CallbackHandleClickAutoCompletePropsI, OptionAutoCompletePropsI } from "../autocomplete/autocomplete.interface"
import { SelectFilterPropsI } from "./select-filter.interface"

const SelectFilter = ({ providerCall, handleChange, disabled, value, label, ComponentAddItem }: SelectFilterPropsI) => {
    const [data, setData] = useState<OptionAutoCompletePropsI[]>([])
    const [_value, setValue] = useState<string>("")

    const getData = async () => {
        if (data.length) return;

        providerCall().then((res) => {
            if(!res.data) return;
            setData(res.data.map((d) => ({
                title: d.name,
                value: d.uuid
            })))
        })
    }

    const handleClick = async (callback: CallbackHandleClickAutoCompletePropsI) => {
        await getData()
        callback()
    }

    useEffect(() => {
        value && setValue(value)
    }, [value])

    return (
        <AutoComplete 
            disabled={disabled}
            options={data}
            variant="filled"
            label={label}
            handleClick={handleClick}
            onChange={handleChange}
            ComponentAddItem={ComponentAddItem}
        />
    )
}

export default SelectFilter