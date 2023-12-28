import Page from "@components/app/Page"
import SchedulePageComponent from "@components/pages/auth/scheduler"
import { ReactElement } from "react"

const Scheduler = () => <SchedulePageComponent />

Scheduler.getLayout = function getLayout(page: ReactElement) {
    return <Page title="Agendar">{page}</Page>
};

export default Scheduler