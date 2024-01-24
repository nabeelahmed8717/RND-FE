import React from "react";
import { useRouter } from "next/router";
import AccountSetting from "../../modules/accountSetting/AccountSetting";
import Layout from "../../modules/layout/layout/Layout";
const UserDetails = () => {
  return (
    <div>

      <Layout>
        <AccountSetting  />
      </Layout>
    </div>
  );
};

export default UserDetails;
