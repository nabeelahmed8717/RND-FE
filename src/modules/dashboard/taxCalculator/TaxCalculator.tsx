import { Formik, useFormik } from "formik";
import { InputAdornment, OutlinedInput } from "@mui/material";
import {
  claimLimitData,
  taxCalculatorFieldsData,
  taxCalculatorRadioButtonsData,
} from "../../../common/mockData/dashboard";
import {
  claimLimitDataInterface,
  taxCalculatorFieldsDataInterface,
  taxCalculatorRadioButtonsDataInterface,
} from "../../../common/interfaces/dashboard";
import {
  taxCalculatorInitialValues,
  taxCalculatorValidate,
} from "./taxCalculatorValidation";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Info } from "@mui/icons-material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import refreshIcon from "../../../assets/icons/dashboard/taxCalculator/refres-square.png";
import { useState } from "react";

const TaxCalculator: React.FC = () => {
  const [claimLimit, setClaimLimit] = useState<string>("499 and Under");
  const [isCalculatedClaim, setIsCalculatedClaim] = useState<boolean>(false);
  const [calculateClaimValue, setCalculateClaimValue] = useState<number>(0);
  const [isNotEligibleClaim, setIsNotEligibleClaim] = useState<boolean>(false);

  // Tax Calculator Form
  const taxCalculatorForm = useFormik({
    initialValues: taxCalculatorInitialValues,
    onSubmit: (values) => {
      if (
        values.rndCoarporationCheck === "No" ||
        values.rndInnovativeCheck === "No"
      ) {
        setIsNotEligibleClaim(true);
        return;
      } else {
        let result =
          +values.Labour +
          +values.Material +
          +values.SubContracted * (65 / 100);
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
    },
    validationSchema: taxCalculatorValidate,
  });

  return (
    <div className="rnd-tax-calculator gray-border-1 bg-white border-radius-8">
      {!!isCalculatedClaim && !isNotEligibleClaim ? (
        <div className="calculate-claim h-100">
          <div className="flex justify-between align-center">
            <h3 className="fs-24 primary-color">Claim Value</h3>
            <Image
              src={refreshIcon}
              alt="Refresh Image"
              onClick={() => setIsCalculatedClaim(false)}
              className="cursor-pointer"
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
            {claimLimitData.map((singleLimit: claimLimitDataInterface) => (
              <Grid item key={singleLimit.id} xs={12} sm={6} className="m-auto">
                <button
                  type="button"
                  onClick={() => setClaimLimit(singleLimit.text)}
                  className={` ${
                    claimLimit === singleLimit.text
                      ? "bg-primary white-color"
                      : "bg-white dark-color cursor-pointer"
                  } border-radius-20 gray-border-1 calculator-btn fw-700 w-100 font-source-sans-pro`}
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
              (singleField: taxCalculatorFieldsDataInterface) => (
                <Grid
                  item
                  key={singleField.id}
                  xs={12}
                  sm={6}
                  className="m-auto"
                >
                  <FormControl className="calculator-input-main w-100">
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
                          <span className="fw-700 fs-18 dark-color half-opacity">
                            £
                          </span>
                        </InputAdornment>
                      }
                      placeholder="0"
                      className="calculator-input gray-border border-radius-3"
                    />
                    {taxCalculatorForm.touched[
                      singleField.name as keyof typeof taxCalculatorInitialValues
                    ] &&
                      !!taxCalculatorForm.errors[
                        singleField.name as keyof typeof taxCalculatorInitialValues
                      ] && (
                        <div className="fs-14 fw-600 flex align-center dark-red calculator-form-errors">
                          <Info sx={{ fontSize: "16px", paddingTop: "2px" }} />
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
              (singleRadioBtn: taxCalculatorRadioButtonsDataInterface) => (
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
                  <FormControl className="calculator-input-main">
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
                          <Info sx={{ fontSize: "16px", paddingTop: "2px" }} />
                          {
                            taxCalculatorForm.errors[
                              singleRadioBtn.name as keyof typeof taxCalculatorInitialValues
                            ]
                          }
                        </span>
                      )}
                  </FormControl>
                </Grid>
              )
            )}
            <Grid item xs={12} sm={6} className="w-100 mx-auto" mb="1rem">
              <button
                type="submit"
                className="calculator-submit-btn border-radius-3 white-color cursor-pointer w-100"
              >
                Calculate Claim Value
              </button>
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
};

export default TaxCalculator;
