import React from "react";
import AuthLayout from "../../modules/auth/authLayout/AuthLayoutMain";
import SignUpMain from "../../modules/auth/signUp/SignUpMain";

const Signup = () => {
  return (
    <AuthLayout>
      <SignUpMain />
    </AuthLayout>
  );
};

export default Signup;
