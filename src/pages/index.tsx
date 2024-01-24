import Auth from "../modules/auth/AuthMain";
import type { NextPage } from "next";
import SignIn from "../modules/auth/signIn/SignIn";

const Signin: NextPage = () => {
  return (
    <Auth>
      <SignIn />
    </Auth>
  );
};

export default Signin;
