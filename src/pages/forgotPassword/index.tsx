import Auth from "../../modules/auth/AuthMain";
import ForgotPasswordWrap from "../../modules/auth/forgotPassword/ForgotPasword";
import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <Auth>
        <ForgotPasswordWrap />
      </Auth>
    </>
  );
};

export default ForgotPassword;
