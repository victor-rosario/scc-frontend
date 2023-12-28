import Layout from '@components/layouts';
import DashboardContent from '@components/pages/dashboard';
import { ReactElement } from 'react';

const DashboardPage = () => <DashboardContent/>

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default DashboardPage;
