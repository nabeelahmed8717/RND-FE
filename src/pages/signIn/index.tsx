import React from "react";
import SignIn from "../../modules/auth/signIn/SignIn";
import Auth from "../../modules/auth/AuthMain";

const Signin = () => {
  return (
    <>
      <Auth>
        <SignIn />
      </Auth>
    </>
  );
};

export default Signin;
