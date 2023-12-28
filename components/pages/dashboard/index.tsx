import Page from "@components/app/Page"
import MainCard from "@components/app/cards/MainCard"
import { gridSpacing } from "@constants/theme"
import { Grid, Typography } from "@mui/material"
import RequestTable from "../request/table"
import { useEffect } from "react"
import { useRouter } from "next/router"

const DashboardContent = () => {

  const router = useRouter()

  useEffect(() => {
    router.push("/requests")
  }, [])

  return (
    <Page title="Dashboard-1">
      <MainCard
        title={
          <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
            <Typography
              variant="h2"
            >
              Case Create
            </Typography>
          </Grid>
        }
        content={false}
      >
        <RequestTable />
      </MainCard>
    </Page>
  )
}

export default DashboardContent
