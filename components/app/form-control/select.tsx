import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { FormControlPropsI } from "./form-control.interface"

const SelectFormControl = ({ items, label, name, onChange, value, defaultValue }: FormControlPropsI) => {

    return (
        <FormControl size="small" style={{ width: '100%' }}>
            <InputLabel>{label}</InputLabel>
            <Select
                {...(value ? { value } : {})}
                {...(defaultValue ? { defaultValue } : {})}
                fullWidth
                name={name}
                onChange={(e) => typeof onChange == "function" ? onChange({ name, value: e.target.value}) : null}
            >
                {items.map((data, i) => (
                    <MenuItem key={i} value={data.value}>
                        {data.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectFormControl