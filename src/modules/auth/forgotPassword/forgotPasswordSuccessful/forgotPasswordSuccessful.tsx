import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    Box,
    Grid,
} from "@mui/material";
import AuthFooter from "../../authLayout/authFooter/AuthFooter";

const ForgotPasswordSuccessful = () => {
    return (
        <>
            <Grid item lg={5} md={7} sm={12} sx={{ width: "100%" }}>
                <div className="signin-form bg-white w-100">
                    <Box
                        className="featured-signin"
                        padding={{
                            xs: "0px 20px",
                            sm: "10px 50px",
                            xl: "20px 80px 10px 80px",
                        }}
                        marginBottom={{ xs: "50px", sm: "20px", md: "0" }}
                    >
                        <div className="form-content flex direction-column justify-between">
                            <div className="forgot-wrapper">
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    className="email-show"
                                    height="78vh"
                                >
                                    <div className="text-center">
                                        <h2 className="fs-56 fw-700 primary-color m-0 lh-64">
                                            Email Sent
                                        </h2>
                                        <p className="fs-24 primary-color lh-32 fw-400 m-0 email-show-paragraph">
                                            Password reset email has been sent to registered email.
                                        </p>
                                        <p className="fs-18 primary-color fw-700 email-back-btn cursor-pointer">
                                            <Link
                                                href="/signIn"
                                                className="secondary-color text-decoration"
                                            >
                                                <span>
                                                    Back to{" "}
                                                    <span className="secondary-color">Login</span>
                                                </span>
                                            </Link>
                                        </p>
                                    </div>
                                </Box>
                            </div>
                            <AuthFooter />
                        </div>
                    </Box>
                </div>
            </Grid>
        </>
    );
};

export default ForgotPasswordSuccessful;
