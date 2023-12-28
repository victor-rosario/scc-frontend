import React, { useEffect, useMemo, useState } from "react"
import { InputLabel, OutlinedInput } from '@mui/material'
import { PasswordPropsI } from "./password.interface"
import { ValidatePasswordI, validatePassword } from "@utils/form/form.util"

const Password = ({ title, handleChange }: PasswordPropsI) => {
    const [password, setPassword] = useState("")
    const level: ValidatePasswordI = useMemo(() => validatePassword(password), [password])

    useEffect(() => {
        handleChange(password, level.type == "strong")
    }, [password, level])

    return (
        <React.Fragment>
            <InputLabel htmlFor="outlined-adornment-email-forgot">{title}</InputLabel>
            <OutlinedInput
                type="password"
                name="password"
                label="New Password"
                inputProps={{}}
                onChange={(e) => setPassword(e.currentTarget.value)}
            />
            {password ? (
                <div style={{ paddingTop: 15}}>
                    <div></div>
                    <div >
                        <div style={{ width: "100%", height: 5, borderRadius: 5, overflow: "hidden", border: "1px solid rgba(255,255,255,.1)" }}>
                            <div style={{ width: level.percentage, height: "100%", background: level.color }}>

                            </div>
                        </div>
                    </div>
                    <div>
                        <p style={{marginTop: 2, fontSize: ".8em"}}>{level.message}</p>
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}

export default Password