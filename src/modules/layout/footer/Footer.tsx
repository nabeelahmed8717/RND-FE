import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import FacebookIcon from "../../../assets/icons/common/FacebookIcon";
import TwitterIcon from "../../../assets/icons/common/TwitterIcon";
import LinkdinIcon from "../../../assets/icons/common/LinkdinIcon";
import InstagramIcon from "../../../assets/icons/common/InstagramIcon";
import YoutubeIcon from "../../../assets/icons/common/YoutubeIcon";
import CustomizedDialogs from "../../auth/authLayout/footerModal/FooterModal";

const Footer = () => {
  const [modalToOpen, setModalToOpen]=useState<string>("")

  return (
    <div className="wrap-footer flex align-center">
      {/* footer copyright start here */}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          sx={{ display: "flex", justifyContent: "center" }}
          className="footer-content"
        >
          <p className="fs-16 fw-400 lh-24 text-center">
            Copyrights &#169; 2022 All Rights Reserved by{" "}
            <span className="footer-color fw-700">RND Tax Claims</span>
          </p>
        </Grid>
        {/* footer copyright end here */}

        {/* footer social icon  start here*/}
        <Grid
          item
          xs={12}
          lg={4}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
          className="footer-icon"
        >
          <Box
            component="span"
            sx={{ display: "flex" }}
            className="social-icon flex justify-center"
          >
            <Link href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FRnD-Tax-Claims%2F100069358842658%2F">
            <a><FacebookIcon /></a>
            </Link>
            <Link href="https://twitter.com/RnD__TaxClaims">
            <a><TwitterIcon /></a>
            </Link>
            <Link href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFj-At2v3i7owAAAYOhlgzIqq2liWYnZpwCw1GAU-vKTVeujzdimPPMQismi5qplmZCptuDJFuBTndqYjyN1k-39o-_PDsrTWReHD4YuQ1gRfgTCx9kE4Wj7yIc9sFYNZxqes0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Frnd-tax-claims">
            <a><LinkdinIcon /></a>
            </Link>
            <Link href="https://www.instagram.com/accounts/login/?next=%2Frnd_taxclaims%2F">
            <a><InstagramIcon /></a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCpN6gJW506u7K0xCs6_kDtg">
            <a><YoutubeIcon /></a>
            </Link>
          </Box>
        </Grid>
        {/* footer social icon  end here*/}

        {/* footer modal component start here */}
        <Grid item xs={12} lg={3} md={4} className="footer-privacy">
          <Box
            component="span"
            sx={{ display: "flex", justifyContent: "center",}}
          >
            <ul className="flex align-center modal_list">
              <li
                className="primary-color fs-14 fw-600 lh-24"
                onClick={() => setModalToOpen("Cookies Policy")}
              >
                Cookies Policy
              </li>
              <li
                className="primary-color fs-14 fw-600 lh-24"
                onClick={() => setModalToOpen("Privacy Policy")}
              >
                Privacy Policy
              </li>

              <li
                className="primary-color fs-14 fw-600 lh-24"
                onClick={() => setModalToOpen("Terms & Conditions")}
              >
                Terms & Conditions
              </li>
            </ul>
          </Box>
        </Grid>
        {/* footer modal component end here */}
        <CustomizedDialogs
          close={() => setModalToOpen("")}
          open={modalToOpen?true:false}
          modalToOpen={modalToOpen}
          />
      </Grid>
    </div>
  );
};

export default Footer;
