// Components
import type { NextPage } from 'next'
import HelpDesk from "../../modules/itHelpDesk/ItHelpDesk";
import Layout from "../../modules/layout/layout/Layout";

// Component function starts here
const ItHelpDesk: NextPage = () => {
  return (
    <Layout>
      <HelpDesk />
    </Layout>
  );
};

export default ItHelpDesk;