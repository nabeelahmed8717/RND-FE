import {
  Grid,
  TextField,
  InputAdornment,
  MenuItem,
  TextareaAutosize,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorIcon from "@mui/icons-material/Error";
import Image from "next/image";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import iconCurrency from "../../../../assets/icons/common/PlaceholderCurrency.svg";
import iconPercent from "../../../../assets/icons/common/PlaceholderPercentage.svg";

import addIcon from "../../../../assets/icons/common/add-square.svg";
import removeIcon from "../../../../assets/icons/common/minus-square.svg";

// import { formDetailsData } from "../../../mockData/questions/questionFortyFour"

import Alert from "@mui/material/Alert";
import DeleteModal from "../../deleteModal/DeleteModal";

const validation = Yup.object({
  startTime: Yup.string().required("Required Field"),
  endTime: Yup.string().required("Required Field"),
});

const DynamicTimeSlot = (props: any) => {
  const formDetailsData = props.formDetailsData;

  const [getFormValues, setgetFormValues] = useState<any>([]);
  const [inputList, setInputList] = useState(formDetailsData);

  const [isDeleteModalopen, setIsDeleteModalopen] = React.useState(false);

  const handleDeleteModalOpen = (index: any) => {
    setIsDeleteModalopen(true);
  };

  const [selectedIndex, setselectedIndex] = useState(0);

  const [valueSelect, setValueSelect] = useState("");

  console.log("valueSelect", valueSelect);
  // ___FORMIK
  const formik = useFormik({
    initialValues: formDetailsData,
    validationSchema: validation,
    onSubmit: (values) => {
      const getFormValues = {
        id: Math.random(),
        startTime: formik.values.startTime,
        endTime: formik.values.endTime,
      };
      setgetFormValues((setValues: any) => [...setValues, getFormValues]);
    },
  });
  const isShowMessage = !!(formik.values.startTime, formik.values.endTime);

  // handle input change
  const handleInputChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: any
  ) => {
    const { name, value } = event.target;
    console.log("name", name);
    console.log("value", value);

    const list: any = [...inputList];
    list[index][name] = value;
    console.log("list", list);
    // setInputList(list);
  };
  // handle click event for Remove button
  const handleRemoveClick = () => {
    const list = [...inputList];
    list.splice(selectedIndex, 1);
    setInputList(list);

    const listUpdated = [...getFormValues];
    listUpdated.splice(selectedIndex, 1);
    setgetFormValues(listUpdated);

    setIsDeleteModalopen(false);
  };
  // handle click event for Add button
  const handleAddClick = () => {
    setInputList([...inputList, formDetailsData]);
  };

  const selectHandelandleChange = (event: SelectChangeEvent) => {
    setValueSelect(event.target.value as string);
  };

  return (
    <div>
      <form className="form-input mt-30" onSubmit={formik.handleSubmit}>
        {inputList?.map((value: any, listIndex: any) => {
          return (
            <Grid
              container
              spacing={props.fieldsModifications.areaExtraSmallScreen}
              className="flex justify-between"
              sx={{
                marginBottom: "10px",
                width: `${props.fieldsModifications.wrapperWidth}`,
              }}
              key={listIndex}
            >
              {props.formFields?.map((item: any, index: any) => {
                return (
                  <>
                    <Grid
                      item
                      sm={props.fieldsModifications.areaExtraSmallScreen}
                      md={props.fieldsModifications.areaMediumScreen}
                      lg={props.formFields[index].areaLargeScreen}
                      className={`flex direction-column ${props.fieldsModifications.formDirection}`}
                      key={index}
                    >
                      <label className="dark-color lh-32 fs-18 fw-700">
                        {item.label}
                      </label>

                      {(() => {
                        switch (props.formFields[index].type) {
                          case "text":
                            return (
                              <TextField
                                name={item.name}
                                type="text"
                                fullWidth
                                variant="outlined"
                                size="small"
                                value={value[item.name]}
                                onChange={(
                                  event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                  handleInputChangeValue(event, listIndex);
                                  formik.handleChange(event);
                                }}
                              />
                            );
                          case "number":
                            return (
                              <TextField
                                name={item.name}
                                type="number"
                                fullWidth
                                variant="outlined"
                                size="small"
                                value={value[item.name]}
                                placeholder="0.00"
                                onChange={(
                                  event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                  handleInputChangeValue(event, listIndex);
                                  formik.handleChange(event);
                                }}
                              />
                            );
                          case "select":
                            return (
                              <FormControl>
                                <Select
                                  size="small"
                                  displayEmpty
                                  name={item.name}
                                  value={value[item.name]}
                                  onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                  ) => {
                                    console.log("");
                                    handleInputChangeValue(event, listIndex);
                                    formik.handleChange(event);
                                    selectHandelandleChange(event);
                                  }}
                                >
                                  {props.selectData?.map((item: any) => {
                                    return (
                                      <MenuItem key={item.id} value={item.data}>
                                        {item.data}
                                      </MenuItem>
                                    );
                                  })}
                                </Select>
                              </FormControl>
                            );
                          case "textArea":
                            return (
                              <TextareaAutosize
                                aria-label="textArea"
                                minRows={3}
                                placeholder="textArea"
                                className="custom-textfield font-source-sans-pro"
                                name={item.name}
                                value={value[item.name]}
                                onChange={(
                                  event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                  handleInputChangeValue(event, listIndex);
                                  formik.handleChange(event);
                                }}
                              />
                            );
                          default:
                            return null;
                        }
                      })()}
                    </Grid>
                  </>
                );
              })}

              {/* handel button add del func */}
              <Grid
                className={`btn-box flex ${props.fieldsModifications.buttonDirection}`}
                sx={{
                  gap: "15px",
                  width: `${props.fieldsModifications.buttonFlexWidth}`,
                  marginTop: "15px",
                  marginLeft: "5px",
                }}
              >
                {inputList.length !== 1 && (
                  <button type="button" className="action-buttons-add-remove">
                    <Image
                      onClick={() => {
                        setselectedIndex(listIndex);
                        handleDeleteModalOpen(true);
                      }}
                      src={removeIcon}
                      alt="remove"
                    />
                  </button>
                )}
                {inputList.length - 1 === listIndex && (
                  <button type="button" className="action-buttons-add-remove">
                    <Image onClick={handleAddClick} src={addIcon} alt="add" />
                  </button>
                )}
              </Grid>
            </Grid>
          );
        })}

        <DeleteModal
          modalText={"Are you sure you want to delete this Project?"}
          modalopenHandler={isDeleteModalopen}
          setModalopenHandler={setIsDeleteModalopen}
          actionSubmitHandler={() => handleRemoveClick()}
        />

        {/* <button type="submit">submit</button> */}
      </form>

      {isShowMessage && (
        <Alert
          severity="success"
          className="lh-24 fw-400 fs-16 dark-color flex align-center"
        >
          Great! You’ve entered details of at least one staff member. Once
          you’ve finished entering staff details, click next to continue.
        </Alert>
      )}
    </div>
  );
};

export default DynamicTimeSlot;
