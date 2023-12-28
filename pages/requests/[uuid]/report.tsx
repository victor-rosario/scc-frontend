import Layout from "@components/layouts";
import RequestReportComponentPage from "@components/pages/request-report";
import { ReactElement } from "react";

const RequestReportPage = () => <RequestReportComponentPage />

RequestReportPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default RequestReportPage
