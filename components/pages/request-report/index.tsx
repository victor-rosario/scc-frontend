import Page from "@components/app/Page"
import MainCard from "@components/app/cards/MainCard"
import { gridSpacing } from "@constants/theme"
import { Grid } from "@mui/material"
import RequestProfile from "./profile"

const RequestReportComponentPage = () => {

    return (
        <Page title="Reporte de la solicitud">
            <MainCard>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <RequestProfile />
                    </Grid>
                </Grid>
            </MainCard>
        </Page>
    )
}

export default RequestReportComponentPage
