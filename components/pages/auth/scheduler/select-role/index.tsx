import {
    Button,
    Grid,
    Typography,
} from "@mui/material";
import EscalatorWarningRoundedIcon from '@mui/icons-material/EscalatorWarningRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import AccessibleRoundedIcon from '@mui/icons-material/AccessibleRounded';
import { IRole } from "@providers/role/role.interface";
import { addPayloadRequest } from "@redux/slices/request";
import { dispatch } from "@redux/store";
import { useState } from "react";

const titleRole: Record<string, string[]> = {
    patient: ["Solicitante"],
    institution: ["Institución"],
    representative: ["Tutor Legal"],
}

interface ISelectPatientTypeProps {
    roles: IRole[]
}

const SelectPatientType = ({ roles }: ISelectPatientTypeProps) => {

    const [role, setRole] = useState<IRole | null>(null)

    const handleClickActive = (data: IRole) => {
        setRole(data)

        dispatch(addPayloadRequest({
            role: {
                roleUUID: data.uuid,
                slug: data.slug
            }
        }))
    }

    return (
        <Grid item xs={12}>
            <Grid container spacing={2} padding={1}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid container spacing={1} justifyContent={'space-around'} alignItems={'center'}>
                            {(roles || []).map(data => {

                                const isValid = data.uuid === role?.uuid
                                const isPatient = data?.slug === "patient"
                                const isInstitution = data?.slug === "institution"
                                const isRepresentative = data?.slug === "representative"

                                return (
                                    <Grid item key={`${data.uuid}`}>
                                        <Button
                                            type="button"
                                            onClick={() => handleClickActive(data)}
                                            variant={isValid ? 'contained' : 'text'}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                                padding: 2
                                            }}
                                        >
                                            {isPatient && <AccessibleRoundedIcon width={100} height={100} sx={{ fontSize: 100 }} />}
                                            {isRepresentative && <EscalatorWarningRoundedIcon width={100} height={100} sx={{ fontSize: 100 }} />}
                                            {isInstitution && <AccountBalanceRoundedIcon width={100} height={100} sx={{ fontSize: 100 }} />}
                                            {titleRole[data.slug || 'institution'].map(title => (
                                                <Typography key={`${title}`} textAlign={'center'} variant="h2" color={isValid ? '#fff' : "#000"}>{title}</Typography>
                                            ))}
                                        </Button>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SelectPatientType