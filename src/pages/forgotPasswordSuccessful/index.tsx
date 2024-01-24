import React from "react";
import Auth from "../../modules/auth/AuthMain";
import ForgotPasswordSuccessful from "../../modules/auth/forgotPassword/forgotPasswordSuccessful/forgotPasswordSuccessful";

const index = () => {
  return (
    <>
      <Auth>
        <ForgotPasswordSuccessful />
      </Auth>
    </>
  );
};

export default index;
