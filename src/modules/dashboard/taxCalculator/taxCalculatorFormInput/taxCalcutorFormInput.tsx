import Grid from "@mui/material/Grid";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { Error } from "@mui/icons-material";

import FormControl from "@mui/material/FormControl";
import { taxCalculatorInitialValues } from "../taxCalculatorValidation";

export interface props {
  id: string | undefined;
  label: string;
  name: string;
  taxCalculatorFormName: string | undefined;
  values: number | string | undefined;
  handleChange: () => void;
  touched: () => void;
  errors: () => void;
}

const TaxCalculatorFormInput: React.FC<props> = (props) => {
  const { id, label, name, taxCalculatorFormName, values } = props;

  return (
    <Grid item key={id} xs={12} sm={6} className="m-auto">
      <FormControl className="calculator-input-main w-100">
        <label
          htmlFor={id}
          className="fs-14 fw-700 dark-color white-space-nowrap"
        >
          {label}
        </label>
        <OutlinedInput
          id={id}
          name={name}
          type="number"
          value={
            taxCalculatorFormName.values[
              name as keyof typeof taxCalculatorInitialValues
            ]
          }
          onChange={taxCalculatorFormName.handleChange}
          onBlur={taxCalculatorFormName.handleBlur}
          error={
            taxCalculatorFormName.touched[
              name as keyof typeof taxCalculatorInitialValues
            ] &&
            !!taxCalculatorFormName.errors[
              name as keyof typeof taxCalculatorInitialValues
            ]
          }
          startAdornment={
            <InputAdornment position="start">
              <span className="fw-700 fs-18 dark-color half-opacity">£</span>
            </InputAdornment>
          }
          placeholder="0"
          className="calculator-input gray-border border-radius-3"
        />
        {taxCalculatorFormName.touched[
          name as keyof typeof taxCalculatorInitialValues
        ] &&
          !!taxCalculatorFormName.errors[
            name as keyof typeof taxCalculatorInitialValues
          ] && (
            <div className="fs-14 fw-600 flex align-center dark-red calculator-form-errors">
              <Error sx={{ fontSize: "16px", paddingTop: "2px" }} />
              {
                taxCalculatorFormName.errors[
                  name as keyof typeof taxCalculatorInitialValues
                ]
              }
            </div>
          )}
      </FormControl>
    </Grid>
  );
};

export default TaxCalculatorFormInput;
