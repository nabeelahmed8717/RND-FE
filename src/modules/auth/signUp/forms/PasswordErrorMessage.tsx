import { CheckCircle } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useEffect, FC } from "react";
import { passwordSchema } from "./RegexSchema";

const PasswordErrorMessage: FC<{
  password: string;
  setCheckAllSchema: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const { password, setCheckAllSchema } = props;

  const schemaArray: { isChecked: boolean; error: string }[] = [
    { isChecked: password.length >= 8, error: "at least 8 characters" },
    {
      isChecked: passwordSchema.hasCapitalLetter.test(password),
      error: "one upper case letter",
    },
    {
      isChecked: passwordSchema.hasSmallLetter.test(password),
      error: "one lower case letter",
    },
    {
      isChecked: passwordSchema.hasSpecialCharacter.test(password),
      error: "one special character",
    },
    {
      isChecked: !!passwordSchema.hasNumber.test(password),
      error: "one number",
    },
    {
      isChecked: !passwordSchema.hasDot.test(password),
      error: "can't include a period",
    },
  ];

  useEffect(() => {
    setCheckAllSchema(
      password.length >= 8 &&
        passwordSchema.hasCapitalLetter.test(password) &&
        passwordSchema.hasSmallLetter.test(password) &&
        passwordSchema.hasSpecialCharacter.test(password) &&
        !!passwordSchema.hasNumber.test(password) &&
        !passwordSchema.hasDot.test(password)
    );
  }, [password, setCheckAllSchema]);

  return (
    <>
      <Box marginTop="8px">
        <p
          className="fs-16 fw-600 dark-color lh-24"
          style={{ margin: 0, paddingBottom: "10px" }}
        >
          Password must:
        </p>
        {schemaArray.length > 0 && schemaArray.map((schema, i: number) => (
          <Box
            key={i}
            sx={{ display: "flex", alignItems: "center" }}
            gap="12px"
            paddingBottom="5px"
          >
            <CheckCircle
              sx={{
                fontSize: "22px",
                color: !schema.isChecked ? "rgba(52,58,64,0.5)" : "#198754",
              }}
            />
            <h3 className="fs-16 fw-400 lh-24 dark-color" style={{ margin: 0 }}>
              {schema.error}
            </h3>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default PasswordErrorMessage;
