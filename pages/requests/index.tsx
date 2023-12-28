import Layout from "@components/layouts";
import RequestComponentPage from "@components/pages/request";
import { ReactElement } from "react";

const RequestPage = () => <RequestComponentPage />

RequestPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default RequestPage
