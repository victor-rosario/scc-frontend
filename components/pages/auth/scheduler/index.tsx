import { Grid } from "@mui/material"
import AuthWrapper1 from "../AuthWrapper1"
import AuthCardWrapper from "../AuthCardWrapper"
import Logo from "@components/app/Logo"
import AuthScheduler from "./AuthScheduler"
import CalendarSchedule from "./calendar"
import {
    documentRequest,
    motiveRequest,
    requestField,
    requestInstitutionField,
    requestRepresentativeField,
    streetAddressRequest
} from "@components/pages/request/modal/create-case/fields"
import SelectPatientType from "./select-role"
import { useAppSelector } from "@redux/store"
import { insertByCondition } from "@utils/array/array.util"
import { useMemo } from "react"
import ExclusiveTermUse from "@components/pages/request/modal/create-case/fields/exclusive-use"

const SchedulePageComponent = () => {

    const { payload } = useAppSelector(x => x.request)

    const { isInstitution, isPatient, isRepresentative } = useMemo(() => {
        if (!payload) return { isInstitution: false, isPatient: false, isRepresentative: false }
        return payload
    }, [payload])

    return (
        <AuthWrapper1>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ minHeight: '100vh' }}>
                <Grid item container justifyContent="center">
                    <AuthCardWrapper sx={{ maxWidth: { xs: 1000, lg: 1075 } }}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    direction={'row'}
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                >
                                    <Grid item>
                                        <Logo src={"/assets/images/logo.png"} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <AuthScheduler
                                    stepFields={[
                                        {
                                            label: "Uso exclusivo",
                                            fields: <ExclusiveTermUse />
                                        },
                                        {
                                            label: "Seleccionar",
                                            fields: <SelectPatientType />
                                        },
                                        {
                                            label: "Motivos",
                                            fields: motiveRequest
                                        },
                                        ...insertByCondition(isPatient, {
                                            label: "Información",
                                            fields: requestField
                                        }),

                                        // Institution
                                        ...insertByCondition(isInstitution, {
                                            label: "Información de la Institución",
                                            fields: requestInstitutionField
                                        }),
                                        ...insertByCondition(isInstitution, {
                                            label: "Información del Paciente",
                                            fields: requestField
                                        }),
                                        //

                                        // Representative
                                        ...insertByCondition(isRepresentative, {
                                            label: "Información del Representante",
                                            fields: requestRepresentativeField
                                        }),
                                        ...insertByCondition(isRepresentative, {
                                            label: "Información del Paciente",
                                            fields: requestField
                                        }),
                                        //
                                        {
                                            label: "Dirección",
                                            fields: streetAddressRequest
                                        },
                                        {
                                            label: "Documentos",
                                            fields: documentRequest
                                        },
                                        {
                                            label: "Cita",
                                            fields: <CalendarSchedule />
                                        }
                                    ]}
                                />
                            </Grid>
                        </Grid>
                    </AuthCardWrapper>
                </Grid>
            </Grid>
        </AuthWrapper1>
    )
}

export default SchedulePageComponent