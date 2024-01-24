import type { NextPage } from "next";

// Components
import DashboardMain from "../../modules/dashboard/DashboardMain";
import Layout from "../../modules/layout/layout/Layout";

// Component function starts here
const Dashboard: NextPage = () => {
  return (
    <Layout>
      <DashboardMain />
    </Layout>
  );
};

export default Dashboard;
