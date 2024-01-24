import React from "react";
import Auth from "../../modules/auth/AuthMain";
import NewPasswordWrap from "../../modules/auth/newPassword/NewPassword";

const NewPassword = () => {
  return (
    <>
      <Auth>
        <NewPasswordWrap />
      </Auth>
    </>
  );
};

export default NewPassword;
