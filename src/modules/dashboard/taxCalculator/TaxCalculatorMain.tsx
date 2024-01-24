import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@mui/material";
import {
  ITaxCalculator,
  ITaxCalculatorFieldsData,
  ITaxCalculatorRadioButtonsData,
  IclaimLimitData,
} from "../../../common/interfaces/dashboardInterface";
import {
  claimLimitData,
  taxCalculatorFieldsData,
  taxCalculatorRadioButtonsData,
} from "../../../common/mockData/dashboard";
import {
  taxCalculatorInitialValues,
  taxCalculatorValidate,
} from "./taxCalculatorValidation";

import BpRadio from "../../../common/components/buttons/BpRadio";
import CommonButton from "../../../common/components/buttons/CommonButton";
import CommonRadioButton from "../../../common/components/buttons/commonRadioButton";
import { Error } from "@mui/icons-material";
import Image from "next/image";
import refreshIcon from "../../../assets/icons/dashboard/taxCalculator/refres-square.png";
import { useFormik } from "formik";
import { useState } from "react";

const TaxCalculator: React.FC = () => {
  const [claimLimit, setClaimLimit] = useState<string>("499 and Under");
  const [isCalculatedClaim, setIsCalculatedClaim] = useState<boolean>(false);
  const [calculateClaimValue, setCalculateClaimValue] = useState<number>(0);
  const [isNotEligibleClaim, setIsNotEligibleClaim] = useState<boolean>(false);

  const handleTaxCalculator = (values: ITaxCalculator) => {
    if (
      values.rndCoarporationCheck === "No" ||
      values.rndInnovativeCheck === "No"
    ) {
      setIsNotEligibleClaim(true);
      return;
    } else {
      let result =
        +values.Labour + +values.Material + +values.SubContracted * (65 / 100);
      if (claimLimit === "499 and Under") {
        result = result * (130 / 100);
      } else {
        result = result * (230 / 100);
      }
      result * (19 / 100);
      result = Math.round(result * 100) / 100;
      setCalculateClaimValue(result);
      setIsCalculatedClaim(true);
      taxCalculatorForm.resetForm();
    }
  };
  // Tax Calculator Form
  const taxCalculatorForm = useFormik({
    initialValues: taxCalculatorInitialValues,
    onSubmit: (values) => {
      handleTaxCalculator(values);
    },
    validationSchema: taxCalculatorValidate,
  });

  return (
    <div
      className="rnd-tax-calculator gray-border-1 bg-white border-radius-8"
      style={{ boxSizing: "border-box" }}
    >
      {!!isCalculatedClaim && !isNotEligibleClaim ? (
        <div className="calculate-claim h-100">
          <div className="flex justify-between align-center">
            <h3 className="fs-24 fw-700 primary-color">Claim Value</h3>
            <Image
              src={refreshIcon}
              alt="Refresh Image"
              onClick={() => setIsCalculatedClaim(false)}
              className="cursor-pointer"
              priority
            />
          </div>
          <p className="fs-16 fw-600 dark-color lh-24">
            Great news, Swift sees that you may be eligible for RND tax credits.
          </p>
          <p className="fs-16 fw-600 dark-color lh-24">
            From the data you have given us we predict this claim would be
            worth:
          </p>
          <p className="fw-600 fs-72 text-center dark-color text-no-wrap claims-value">
            £ {calculateClaimValue} <sup>*</sup>
          </p>
          <p className="fs-16 fw-600 dark-color lh-20 ">
            * this value estimates the possible tax release tax rebate and/or
            corporation tax reduction you may be due. This value should only be
            considered as an estimate.
          </p>
        </div>
      ) : !isCalculatedClaim && !!isNotEligibleClaim ? (
        <div className="calculate-claim h-100">
          <div className="flex justify-between align-center">
            <h3 className="fs-24 primary-color">Claim Value</h3>
            <Image
              src={refreshIcon}
              alt="Refresh Image"
              onClick={() => {
                setIsCalculatedClaim(false),
                  setIsNotEligibleClaim(false),
                  taxCalculatorForm.resetForm();
              }}
              className="cursor-pointer"
              priority
            />
          </div>
          <p className="fs-16 fw-600 dark-color lh-24">
            Seems like you are not eligible for RND tax claims. Try again with
            different numbers.
          </p>
        </div>
      ) : (
        <form
          onSubmit={taxCalculatorForm.handleSubmit}
          className="tax-caculator"
        >
          <h3 className="fs-24 primary-color calculator-heading">
            RND Tax Calculator
          </h3>
          <Grid container spacing={{ xs: 1, md: 2, lg: 3 }} flexWrap="wrap">
            {claimLimitData.map((singleLimit: IclaimLimitData) => (
              <Grid
                item
                key={singleLimit.id}
                xs={12}
                sm={6}
                className="m-auto"
                // maxWidth={{ sm: "204px" }}
              >
                <button
                  type="button"
                  onClick={() => setClaimLimit(singleLimit.text)}
                  className={` ${
                    claimLimit === singleLimit.text
                      ? "bg-primary white-color"
                      : "bg-white dark-color cursor-pointer"
                  } border-radius-20 gray-border-1 calculator-btn fw-700 fs-14 w-100 font-source-sans-pro`}
                >
                  {singleLimit.text}
                </button>
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            spacing={{ xs: 1.5, sm: 1.8 }}
            mt={{ xs: "0.5rem", sm: "0.5rem" }}
          >
            {/* Tax Calculator Form Input Fields */}
            {taxCalculatorFieldsData.map(
              (singleField: ITaxCalculatorFieldsData) => (
                <Grid
                  item
                  key={singleField.id}
                  xs={12}
                  sm={6}
                  className="m-auto"
                >
                  <FormControl
                    className="calculator-input-main w-100"
                    // style={{ marginRight: "1rem", marginLeft: "0.5rem" }}
                  >
                    <label
                      htmlFor={singleField.id}
                      className="fs-14 fw-700 dark-color white-space-nowrap"
                    >
                      {singleField.label}
                    </label>
                    <OutlinedInput
                      id={singleField.id}
                      name={singleField.name}
                      type="number"
                      value={
                        taxCalculatorForm.values[
                          singleField.name as keyof typeof taxCalculatorInitialValues
                        ]
                      }
                      onChange={taxCalculatorForm.handleChange}
                      onBlur={taxCalculatorForm.handleBlur}
                      error={
                        taxCalculatorForm.touched[
                          singleField.name as keyof typeof taxCalculatorInitialValues
                        ] &&
                        !!taxCalculatorForm.errors[
                          singleField.name as keyof typeof taxCalculatorInitialValues
                        ]
                      }
                      startAdornment={
                        <InputAdornment position="start">
                          <span className="fw-700 fs-18 lh-24 dark-color half-opacity font-source-sans-pro">
                            £
                          </span>
                        </InputAdornment>
                      }
                      placeholder="0"
                      className="calculator-input gray-border border-radius-3 font-source-sans-pro"
                      sx={{
                        maxWidth: { xl: "204px" },
                        "& .MuiOutlinedInput-root, .MuiOutlinedInput-input": {
                          fontSize: "16px",
                        },
                      }}
                    />
                    {taxCalculatorForm.touched[
                      singleField.name as keyof typeof taxCalculatorInitialValues
                    ] &&
                      !!taxCalculatorForm.errors[
                        singleField.name as keyof typeof taxCalculatorInitialValues
                      ] && (
                        <div className="fs-14 fw-600 flex align-center dark-red calculator-form-errors">
                          <Error sx={{ fontSize: "16px", paddingTop: "2px" }} />
                          {
                            taxCalculatorForm.errors[
                              singleField.name as keyof typeof taxCalculatorInitialValues
                            ]
                          }
                        </div>
                      )}
                  </FormControl>
                </Grid>
              )
            )}
            {/* Tax Caculator Form Radio  Fields */}
            {taxCalculatorRadioButtonsData.map(
              (singleRadioBtn: ITaxCalculatorRadioButtonsData) => (
                <Grid
                  item
                  key={singleRadioBtn.id}
                  xs={12}
                  pt="0px"
                  className="mx-auto my-0"
                >
                  <p className="fs-16 fw-600 dark-color my-0">
                    {singleRadioBtn.desc}
                  </p>
                  <FormControl>
                    <RadioGroup
                      row
                      sx={{ gap: { sm: "80px", xs: "10px" } }}
                      defaultValue=""
                      name={singleRadioBtn.name}
                      onChange={taxCalculatorForm.handleChange}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<CommonRadioButton />}
                        label="Yes"
                        sx={{
                          ".MuiFormControlLabel-label": {
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#343A40",
                            marginTop: "0.2rem",
                          },
                        }}
                      />
                      <FormControlLabel
                        value="No"
                        control={<CommonRadioButton />}
                        label="No"
                        sx={{
                          ".MuiFormControlLabel-label": {
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#343A40",
                            marginTop: "0.2rem",
                          },
                        }}
                      />
                    </RadioGroup>
                    {!!taxCalculatorForm.errors[
                      singleRadioBtn.name as keyof typeof taxCalculatorInitialValues
                    ] &&
                      taxCalculatorForm.touched[
                        singleRadioBtn.name as keyof typeof taxCalculatorInitialValues
                      ] && (
                        <span className="fs-14 fw-600 flex align-center dark-red calculator-radio-errors">
                          <Error sx={{ fontSize: "16px", paddingTop: "2px" }} />
                          {
                            taxCalculatorForm.errors[
                              singleRadioBtn.name as keyof typeof taxCalculatorInitialValues
                            ]
                          }
                        </span>
                      )}
                  </FormControl>
                  {/* <FormControl className="calculator-input-main">
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name={singleRadioBtn.name}
                      onChange={taxCalculatorForm.handleChange}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={
                          <Radio
                            sx={{
                              color: "#0F5156",
                              "& .MuiSvgIcon-root": {
                                borderRadius: "6px",
                                height: "22px",
                                width: "22px",
                              },
                              "&.Mui-checked": {
                                color: "#0F5156",
                              },
                            }}
                          />
                        }
                        label="Yes"
                        sx={{
                          ".MuiFormControlLabel-label": {
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#343A40",
                          },
                        }}
                      />
                      <FormControlLabel
                        value="No"
                        control={
                          <Radio
                            sx={{
                              color: "#0F5156",
                              "& .MuiSvgIcon-root": {
                                borderRadius: "6px",
                                height: "22px",
                                width: "22px",
                              },
                              "&.Mui-checked": {
                                color: "#0F5156",
                              },
                            }}
                          />
                        }
                        label="No"
                        sx={{
                          ".MuiFormControlLabel-label": {
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#343A40",
                          },
                        }}
                      />
                    </RadioGroup>
                    {!!taxCalculatorForm.errors[
                      singleRadioBtn.name as keyof typeof taxCalculatorInitialValues
                    ] &&
                      taxCalculatorForm.touched[
                        singleRadioBtn.name as keyof typeof taxCalculatorInitialValues
                      ] && (
                        <span className="fs-14 fw-600 flex align-center dark-red calculator-form-errors">
                          <Error sx={{ fontSize: "16px", paddingTop: "2px" }} />
                          {
                            taxCalculatorForm.errors[
                              singleRadioBtn.name as keyof typeof taxCalculatorInitialValues
                            ]
                          }
                        </span>
                      )}
                  </FormControl> */}
                </Grid>
              )
            )}

            <Grid
              item
              xs={12}
              sm={6}
              className="w-100 mx-auto"
              mb="1rem"
              display="flex"
              justifyContent="center"
            >
              {/* <button
                type="submit"
                className="calculator-submit-btn border-radius-3 white-color cursor-pointer w-100 fw-700 fs-14 lh-20 font-source-sans-pro"
              >
                Calculate Claim Value
              </button> */}
              <CommonButton
                type="submit"
                value="Calculate Claim Value"
                width="100%"
                classNames="w-100 common-button-hover calculator-submit-btn"
                flexClasses="flex align-center justify-center"
                whenToShow=""
              />
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
};

export default TaxCalculator;
