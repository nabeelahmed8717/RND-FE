import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import Edit from "../../../assets/images/claims/edit.png";
import EditWhite from "../../../assets/images/claims/edit-white.png";
import Ellipse from "../../../assets/images/claims/Ellipse.png";
import ClaimsModal from "../../../common/components/claimsModal/claimsModal";

const ReviewClaims = () => {
  const [ModalOpenHandler, setModalOpenHandler] = React.useState("");

  const finalizeClaim = () => {
    setModalOpenHandler("finalizeClaim");
  };
  const claimsArchived = () => {
    setModalOpenHandler("");
  };
  const CancelModalHandler = () => {
    setModalOpenHandler("");
  };

  return (
    <div className="review-claims font-source-sans-pro">
      <Grid container>
        <Grid item lg={6} xs={12}>
          <Box className="fw-700 fs-36 primary-color ">
            R&D Consultants Claim Review
          </Box>
          <Box className="dark-color">01 January 2021- 31 December 2022</Box>
        </Grid>
        <Grid item lg={6} xs={12} className=" flex justify-end align-center">
          <Image src={Edit} alt="edit" priority />
          <Box className="fw-600 fs-18 primary-color "> Edit Claim</Box>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ mt: 3, py: 2 }}
        className=" approximate-expenditure  "
      >
        <Grid
          item
          xs={12}
          className=" fs-18 fw-700 primary-color padding"
          sx={{ py: 2 }}
        >
          Approximate Qualifying Expenditure on R&D
        </Grid>
        <Grid item xs={6} className="bg-secondary padding  fw-700">
          Scheme
        </Grid>
        <Grid
          item
          xs={6}
          className="bg-secondary padding fw-700 flex justify-end "
        >
          Amount
        </Grid>
        <Grid item xs={6} className="padding claims-table-child ">
          SME
        </Grid>
        <Grid
          item
          xs={6}
          className="flex justify-end padding claims-table-child"
        >
          £ 390,000
        </Grid>
        <Grid item xs={6} className="padding claims-table-child">
          RDEC
        </Grid>
        <Grid
          item
          xs={6}
          className="flex justify-end padding claims-table-child"
        >
          £ 2500,000
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 4 }}>
        <Grid container className=" dark-green-color sme-status ">
          <Grid item xs={6} className="white-color padding  fs-18">
            {" "}
            SME Status
          </Grid>
          <Grid item xs={6} className="flex justify-end padding ">
            {" "}
            <Image src={EditWhite} alt="edit" priority />
          </Grid>
        </Grid>
        <Grid item xs={4} className="padding claims-table-child">
          Turnover
        </Grid>
        <Grid
          item
          xs={4}
          className="padding claims-table-child flex justify-center"
        >
          £ 390,000
        </Grid>
        <Grid item xs={4} className="flex justify-end padding ">
          <Image src={Edit} alt="edit priority" priority />
        </Grid>

        <Grid item xs={4} className="padding claims-table-child">
          Gross balance sheet assets
        </Grid>
        <Grid
          item
          xs={4}
          className="padding claims-table-child flex justify-center"
        >
          £ 500,000
        </Grid>
        <Grid item xs={4} className="flex justify-end padding ">
          <Image src={Edit} alt="edit" priority />
        </Grid>

        <Grid item xs={12} className="padding claims-table-child">
          Number of Staff:
        </Grid>

        <Grid item xs={4} sx={{ pl: 3 }} className="padding claims-table-child">
          <Box sx={{ pl: 4 }}>
            <Image src={Ellipse} alt="edit" priority /> Directors
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          className="padding claims-table-child flex justify-center"
        >
          5
        </Grid>
        <Grid item xs={4} className="flex justify-end padding ">
          <Image src={Edit} alt="edit" priority />
        </Grid>
        <Grid item xs={4} sx={{ pl: 3 }} className="padding claims-table-child">
          <Box sx={{ pl: 4 }}>
            <Image src={Ellipse} alt="edit" priority /> Employees
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          className="padding claims-table-child flex justify-center"
        >
          100
        </Grid>
        <Grid item xs={4} className="flex justify-end padding ">
          <Image src={Edit} alt="edit" priority />
        </Grid>

        <Grid item xs={4} className="padding claims-table-child">
          Part of a group
        </Grid>
        <Grid
          item
          xs={4}
          className="padding claims-table-child flex justify-center"
        >
          No
        </Grid>
        <Grid item xs={4} className="flex justify-end padding ">
          <Image src={Edit} alt="edit" priority />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ pl: 3 }}
          className="padding claims-table-child"
        >
          <Box sx={{ pl: 4 }}>
            <Image src={Ellipse} alt="edit" priority /> Number of staff in group
          </Box>
        </Grid>

        <Grid item xs={6} className="padding  fs-18 claims-table-child">
          {" "}
          External shareholders owing more than 25% of R&D Consultants:
        </Grid>
        <Grid item xs={6} className="flex justify-end padding ">
          <Image src={Edit} alt="edit" priority />
        </Grid>

        <Grid container className="bg-light-green">
          <Grid item xs={4} className="padding claims-table-head">
            Shareholder name
          </Grid>
          <Grid item xs={4} className="padding claims-table-head ">
            % 0f shares held
          </Grid>
          <Grid
            item
            xs={4}
            className="flex justify-end padding claims-table-head "
          >
            Approximate number of staff at 31 Decemeber 2022
          </Grid>
        </Grid>

        <Grid item xs={12} className="padding fw-600 fs-14">
          {" "}
          No Shareholders
        </Grid>

        <Grid item xs={6} className="padding  fs-18 claims-table-child">
          R&D Consultant’s shares (25%+) in other companies:
        </Grid>
        <Grid item xs={6} className="flex justify-end padding ">
          <Image src={Edit} alt="edit" priority />
        </Grid>

        <Grid container className="bg-light-green">
          <Grid item xs={4} className="padding claims-table-head">
            Shareholder name
          </Grid>
          <Grid item xs={4} className="padding claims-table-head ">
            % 0f shares held
          </Grid>
          <Grid
            item
            xs={4}
            className="flex justify-end padding claims-table-head "
          >
            Approximate number of staff at 31 Decemeber 2022
          </Grid>
        </Grid>

        <Grid item xs={12} className="padding fw-600 fs-14">
          {" "}
          No Shareholders
        </Grid>

        <Grid item xs={6} className="padding  fs-18 claims-table-child">
          SME or Large Company
        </Grid>
        <Grid item xs={6} className="flex justify-end padding ">
          <Box className="sme secondary-color fw-700">SME</Box>
        </Grid>
      </Grid>

      {/* //Grants */}
      <Grid container sx={{ pt: 3 }}>
        <Grid container className="grants">
          <Grid item xs={6} className="white-color padding  fs-18 ">
            {" "}
            Grants
          </Grid>
          <Grid item xs={6} className="flex justify-end padding ">
            <Image src={EditWhite} alt="edit" priority />
          </Grid>
        </Grid>

        <Grid item xs={6} className="padding claims-table-child">
          Gross balance sheet assets
        </Grid>
        <Grid
          item
          xs={6}
          className="padding claims-table-child flex justify-end"
        >
          £ 500,000
        </Grid>

        <Grid item xs={6} className="padding claims-table-child">
          Gross balance sheet assets
        </Grid>
        <Grid
          item
          xs={6}
          className="padding claims-table-child flex justify-end"
        >
          £ 500,000
        </Grid>

        <Grid item xs={6} className="padding claims-table-child">
          Gross balance sheet assets
        </Grid>
        <Grid
          item
          xs={6}
          className="padding claims-table-child flex justify-end"
        >
          £ 500,000
        </Grid>

        <Grid container className="bg-light-orange">
          <Grid
            item
            lg={7}
            xs={6}
            className="padding claims-table-head flex justify-end"
          >
            Notified State Aid
          </Grid>
          <Grid
            item
            lg={5}
            xs={6}
            className="padding claims-table-head flex justify-end "
          >
            Other Funding
          </Grid>
        </Grid>

        <Grid item md={6} xs={4} className="padding claims-table-child">
          Used on projects for SME
        </Grid>
        <Grid
          item
          xs={4}
          md={1}
          className="padding claims-table-child flex justify-end"
        >
          £ 0
        </Grid>
        <Grid item xs={4} md={5} className="flex justify-end padding ">
          £ 0
        </Grid>

        <Grid item xs={4} md={6} className="padding claims-table-child">
          Used on projects for LCs
        </Grid>
        <Grid
          item
          xs={4}
          md={1}
          className="padding claims-table-child flex justify-end"
        >
          £ 0
        </Grid>
        <Grid
          item
          xs={4}
          md={5}
          className="flex justify-end padding claims-table-child "
        >
          £ 0
        </Grid>

        <Grid item xs={4} md={6} className="padding claims-table-child">
          Used on in-house projects
        </Grid>
        <Grid
          item
          xs={4}
          md={1}
          className="padding claims-table-child flex justify-end"
        >
          £ 205
        </Grid>
        <Grid item xs={4} md={5} className="flex justify-end padding ">
          £ 770
        </Grid>

        <Grid item xs={4} md={6} className="padding claims-table-child">
          Total
        </Grid>
        <Grid
          item
          xs={4}
          md={1}
          className="padding claims-table-child flex justify-end"
        >
          £ 205
        </Grid>
        <Grid item xs={4} md={5} className="flex justify-end padding ">
          £ 770
        </Grid>

        <Grid item xs={6} className="padding claims-table-child">
          % of in-house R&D funded by Notified state Aid
        </Grid>
        <Grid
          item
          xs={6}
          className="padding claims-table-child flex justify-end"
        >
          39%
        </Grid>
        <Grid item xs={6} className="padding claims-table-child">
          Notified State Aid and Other funding used on{" "}
        </Grid>
        <Grid
          item
          xs={6}
          className="padding claims-table-child flex justify-end"
        >
          Same Project
        </Grid>
      </Grid>

      <Grid container sx={{ pt: 3 }}>
        <Grid container className="sub-contractor">
          <Grid item xs={6} className="white-color padding  fs-18 ">
            {" "}
            Acting as Subcontractor
          </Grid>
          <Grid item xs={6} className="flex justify-end padding ">
            <Image src={EditWhite} alt="edit" priority />
          </Grid>
        </Grid>

        <Grid item xs={6} className="padding claims-table-child">
          Performed R&D as a Subcontractor:
        </Grid>
        <Grid
          item
          xs={6}
          className="padding claims-table-child flex justify-end"
        >
          <Box className="sme secondary-color fw-700">No</Box>
        </Grid>
        <Grid container className="bg-light-blue">
          <Grid item xs={6} className="padding claims-table-child">
            Done for
          </Grid>
          <Grid
            item
            xs={6}
            className="padding claims-table-child flex justify-end"
          >
            % of RND
          </Grid>
        </Grid>

        <Grid item xs={6} className="padding claims-table-child">
          Own company
        </Grid>
        <Grid
          item
          xs={6}
          className="padding claims-table-child flex justify-end"
        >
          100%
        </Grid>
        <Grid item xs={6} className="padding claims-table-child">
          Large Company
        </Grid>
        <Grid
          item
          xs={6}
          className="padding claims-table-child flex justify-end"
        >
          -
        </Grid>
        <Grid item xs={6} className="padding claims-table-child">
          SMEs
        </Grid>
        <Grid
          item
          xs={6}
          className="padding claims-table-child flex justify-end"
        >
          -
        </Grid>
      </Grid>
      <Grid container sx={{ pt: 3 }}>
        <Grid container className="cost">
          <Grid item xs={6} className="white-color padding fs-18  ">
            {" "}
            Costs
          </Grid>
          <Grid item xs={6} className="flex justify-end padding  ">
            <Image src={EditWhite} alt="edit" priority />
          </Grid>
        </Grid>

        <Grid container className="bg-light-purple">
          <Grid item xs={4} md={5} className="padding claims-table-child">
            Category
          </Grid>
          <Grid
            item
            xs={4}
            md={2}
            className="padding claims-table-child flex justify-end"
          >
            Total Spent
          </Grid>
          <Grid item xs={4} md={5} className="flex justify-end padding ">
            % of RND
          </Grid>
        </Grid>
        <Grid item xs={4} md={5} className="padding claims-table-child">
          Staff
        </Grid>
        <Grid
          item
          xs={4}
          md={2}
          className="padding claims-table-child flex justify-end"
        >
          £ 9,877
        </Grid>
        <Grid item xs={4} md={5} className="flex justify-end padding ">
          47 %
        </Grid>
        <Grid item xs={4} md={5} className="padding claims-table-child">
          Reimbursed Expenses
        </Grid>
        <Grid
          item
          xs={4}
          md={2}
          className="padding claims-table-child flex justify-end"
        >
          £ 250,000
        </Grid>
        <Grid item xs={4} md={5} className="flex justify-end padding ">
          100%
        </Grid>
      </Grid>
      <Grid className="flex justify-end" sx={{ pt: 3 }}>
        <button
          className="fw-700 fs-14 finalize-claim bg-gradient-green white-color cursor-pointer "
          onClick={finalizeClaim}
        >
          Finalize Claim
        </button>
      </Grid>

      <ClaimsModal
        title="Are you sure you want to archive?"
        submitButtonText="Finalize"
        SubmitClass="bg-gradient-green"
        CancelClass="bg-white"
        SubmitHandler={claimsArchived}
        modalopenHandler={ModalOpenHandler}
        setModalOpenHandler={setModalOpenHandler}
        cancelButtonHandler={CancelModalHandler}
        cancelButtonText="Cancel"
        open={ModalOpenHandler === "finalizeClaim" ? true : false}
      />
    </div>
  );
};

export default ReviewClaims;
