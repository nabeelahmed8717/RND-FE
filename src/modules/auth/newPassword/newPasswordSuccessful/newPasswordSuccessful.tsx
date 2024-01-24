import * as Yup from "yup";

import {
  Box,
  Grid,
} from "@mui/material";
import AuthFooter from "../../authLayout/authFooter/AuthFooter";
import Image from "next/image";
import Link from "next/link";
import SuccessfulIcon from "../../../../assets/images/auth/successful-icon.png";
import { useRouter } from "next/router";

const NewPasswordSuccessful = () => {
  const { query } = useRouter();
  const { collaboratorSession } = query;
  return (
    <>
      <Grid item lg={5} md={7} sm={12} sx={{ width: "100%" }}>
        <Box
          className="signin-form bg-white w-100"
          marginBottom={{ md: "40px" }}
        >
          <Box
            className="featured-signin"
            padding={{
              xs: "0em 20px",
              sm: "0em 50px",
              md: "10px 45px 5px 45px",
              xl: "20px 80px 10px 80px",
            }}
            marginBottom={{ xs: "50px", sm: "20px", md: "0" }}
          >
            <div className="form-content flex direction-column justify-between">
              <div className="form-wrapper flex direction-column">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    className="successful-message"
                    height="78vh"
                    flexDirection="column"
                  >
                    <div className="text-center">
                      <h2 className="fs-56 primary-color m-0 lh-64">
                        {collaboratorSession
                          ? "Sign up successful"
                          : "Password Reset Successful"}
                      </h2>
                      <Image src={SuccessfulIcon} alt="" priority />
                      <p className="fs-24 primary-color fw-400">
                        Your password has been updated successfully.
                      </p>
                    </div>
                    <Box
                      className="new-password-email cursor-pointer"
                      pt="15px"
                    >
                      <Link
                        href="/signIn"
                        className="primary-color text-decoration "
                      >
                        <span className="primary-color fw-700 fs-18 lh-24">
                          Back to &nbsp;
                          <span className="secondary-color">Login</span>
                        </span>
                      </Link>
                    </Box>
                  </Box>
              </div>
              <AuthFooter />
            </div>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default NewPasswordSuccessful;
