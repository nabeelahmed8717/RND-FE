import React, { FC, useEffect, useState } from "react";
import { getChildPath, isEmptyObj } from "../../common/utils/utils";

import { AccountManagement } from "../../common/mockData/accountSettings/accountSettings";
import CardDetails from "./cardDetails/CardDetails";
import Consultation from "./consultation/consultation";
import Delete from "../../assets/images/accountsettings/delete.png";
import { Grid } from "@mui/material";
import Image from "next/image";
import Invoices from "./invoice/Invoice";
import MyProfileSettings from "./myProfileSettings/MyProfileSettings";
import ProfileImage from "../../assets/images/accountsettings/profile-image.png";
import Users from "./users/users";
import captureImage from "../../assets/images/accountsettings/capture-image.png";
import { getDummyRoles } from "../../helpers/Tokens";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store.hooks";
import { useRouter } from "next/router";
import { getprofileImage } from "../../redux/accountSettings/myProfile/myProfileSlice";
import { getUserProfile, updateProfileImage } from "../../redux/accountSettings/myProfile/myProfileApi";

const AccountSetting: FC = () => {
  const [localStorageRole, setLocalStorageRole] = useState<
    string | undefined
  >();
  const user = useAppSelector((state) => state.signin.user);
  const {  profileValue } = useAppSelector((state) => state.myProfile);
  const [uploadImage, setUploadedImage] = useState<any>(undefined);
  const dispatch = useAppDispatch();
  console.log(user, 'uploadImage');

  var loggedUserRole: any;
  useEffect(() => {
    loggedUserRole = getDummyRoles();
    if (loggedUserRole) setLocalStorageRole(loggedUserRole);
  }, []);
  useEffect(() => {
    getUserProfile()
  }, [])
  const router = useRouter();
  const detailsDisplayHandler = (details: string) => {
    router.push(`/accountSettings/${details}`);
  };
  function showAccountType(): JSX.Element {
    switch (getChildPath(router.asPath)) {
      case "invoices":
        return <Invoices />;
      case "users":
        return <Users />;
      case "cards":
        return <CardDetails />;
      case "consultation":
        return <Consultation />;

      default:
      case "/account":
        return <MyProfileSettings />;
    }
  }
  const signiN = useAppSelector((state) => state.signin.user);

  const handleImage = (e: any) => {
    let formData = new FormData();
    if (e.target.files.length) {
      setUploadedImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
      formData.append("file", e.target.files[0]);
      dispatch(updateProfileImage({ formData, dispatch }))
    }
  }
  return (
    <div className="account-settings">
      <Grid container sx={{ pt: 1.5 }} columnGap={2}>
        <Grid
          item
          xs={12}
          md={5}
          lg={4}
          xl={3}
          className="account-setting-leftbar"
        >
          <Grid container rowGap={2}>
            <Grid
              item
              xs={12}
              xl={12}
              sx={{
                pt: 4,
                pb: 1,
                height: "258px",
              }}
              className="bg-primary profile-card text-center"
            >
              <div className="flex justify-center">
                <span className="circleBase circle1 flex align-center justify-center green-gradient ">
                  <Image
                    src={profileValue?.profileImage ? profileValue?.profileImage : ProfileImage}
                    alt="profileimage"
                    priority
                    width={75}
                    height={75}
                    className="profile-img"
                  />
                </span>
              </div>
              <p className="fw-700 fs-18 white-color ">
          
                {profileValue?.firstName && profileValue?.lastName
                  ? profileValue?.firstName + " " + profileValue?.lastName
                  : "Arthur Lewin"}
              </p>
              <Grid sx={{ pb: 2 }} className="flex justify-center align-center">
                <Grid sx={{ mr: 2 }}>
                  <div className="img-profile-box">
                    <label htmlFor="upload-button">
                      <Image
                        src={captureImage}
                        alt="capture"
                        priority
                        width={24}
                        height={24}
                      />
                    </label>
                    <input
                      type="file"
                      className="img-upload-type"
                      id="upload-button"
                      accept="image/*"
                      onChange={handleImage}
                    />
                  </div>
                </Grid>
                <div>
                  <Image
                    src={Delete}
                    alt="delete"
                    priority
                    width={24}
                    height={24}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container columnGap={2} rowSpacing={-2}>
                {/* {role==='SYS_ADMIN' && <span>fgh</span>} */}
                {AccountManagement(localStorageRole).map((account: any) => {
                  if (!isEmptyObj(account)) {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={5.8}
                        md={12}
                        key={account.accountDetails}
                        onClick={() =>
                          detailsDisplayHandler(account.accountDetails)
                        }
                        sx={{ height: "80px", mb: 2, pl: 3 }}
                        className={`account-type flex cursor-pointer align-center ${account.accountDetails ===
                          getChildPath(router.asPath) &&
                          "selected-account-type"
                          }`}
                      >
                        {/* <span> */}
                        <Image
                          src={account.accountIcon}
                          alt="profile"
                          className={`account-settings-cards half-opacity ${account.accountDetails ===
                            getChildPath(router.asPath) &&
                            "selected-profile full-opacity"
                            }`}
                          priority
                          width={24}
                          height={24}
                        />
                        {/* </span> */}

                        <span
                          className="fw-600 fs-18 color-white"
                          style={{ paddingLeft: "1em" }}
                        >
                          {account.accountType}
                        </span>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={6.75}
          lg={7}
          xl={8.5}
          sx={{ px: "1.875rem", pb: 2, pt: 2 }}
          className=" user-profile-card"
        >
          {showAccountType()}
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountSetting;
