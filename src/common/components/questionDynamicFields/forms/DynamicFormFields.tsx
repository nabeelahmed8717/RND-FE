import * as Yup from "yup";

import {
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import errorIcon from "../../../../assets/images/questionLayout/errorIcon.png";
import infoIcon from "../../../../assets/images/questionLayout/infoicon.svg";
import SuccessIcon from "../../../../assets/images/questionLayout/SuccessIcon.png";
import Alert from "@mui/material/Alert";
import DeleteModal from "../../deleteModal/DeleteModal";
import ErrorIcon from "@mui/icons-material/Error";
import Image from "next/image";
import addIcon from "../../../../assets/icons/common/add-square.svg";
import removeIcon from "../../../../assets/icons/common/minus-square.svg";
import { useFormik } from "formik";

// import { formDetailsData } from "../../../mockData/questions/questionFortyFour"





const validation = Yup.object({
  staffName: Yup.string().required("Required Field"),

  technicalLead: Yup.number().required("Required Field"),

  totalSalary: Yup.number().required("Required Field"),

  employerNIC: Yup.number().required("Required Field"),

  pension: Yup.number().required("Required Field"),

  bonus: Yup.number().required("Required Field"),

  totalCost: Yup.number().required("Required Field"),

  percentRND: Yup.number().required("Required Field"),
});

const DynamicFormFields = (props: any) => {
  const formDetailsData = props.formDetailsData;
  const [getFormValues, setgetFormValues] = useState<any>([]);
  const [inputList, setInputList] = useState(formDetailsData);
  const [isDeleteModalopen, setIsDeleteModalopen] = React.useState(false);
  const handleDeleteModalOpen = (index: any) => {
    setIsDeleteModalopen(true);
  };
  const [selectedIndex, setselectedIndex] = useState(0);
  const [valueSelect, setValueSelect] = useState("");
  const [showMessage, setShowMessage] = useState("");
  
  // ___FORMIK
  const formik = useFormik({
    initialValues: formDetailsData,
    validationSchema: validation,
    onSubmit: (values) => {
      const getFormValues = {
        id: Math.random(),
        staffName: formik.values.staffName,
        totalSalary: formik.values.totalSalary,
        employerNIC: formik.values.employerNIC,
        pension: formik.values.pension,
        bonus: formik.values.bonus,
        totalCost: formik.values.totalCost,
        percentRND: formik.values.percentRND,
      };
      setgetFormValues((setValues: any) => [...setValues, getFormValues]);
    },
  });

  const isShowMessage = !!(formik.values.staffName,
  formik.values.totalSalary,
  formik.values.employerNIC,
  formik.values.pension,
  formik.values.bonus,
  formik.values.totalCost,
  formik.values.percentRND);
  // handle input change
  const handleInputChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: any,
  ) => {
    const { name, value,type } = event.target;
    console.log("name", name);
    console.log("value", value);
    const list: any = [...props.questionState];
    list[index] = {
      ...list[index],
      [name]: type === "number" ? parseInt(value) : value,
    };
    props.setQuestionState(list);
    
    if((value)>=500 && name ==='approxStaff' && props.questionNumber===12){
      props.setButtonText('info')
      setShowMessage(`As the combined total of ${props.comapnyName}\'s staff, group staff and relevant shareholder\'s staff comes to 500 or more, this claim must be made through the RDEC scheme. If you\'ve finished adding shareholders, click Next, otherwise add another.`)
    }else if(value<500 && name ==='approxStaff' && props.questionNumber===12){
      props.setButtonText('proceed')
      setShowMessage(`As the combined total of ${props.comapnyName}\'s staff, group staff and relevant shareholder\'s staff comes to fewer than 500, it initially qualifies for the SME scheme. However, to confirm this we\'ll need to ask about the company\'s corporate shareholdings. If you\'ve finished adding shareholders, click Next, otherwise add another.`)
    }else if(name ==='approxStaff' && props.questionNumber===14){
      props.setButtonText('proceed')
      setShowMessage(`As the combined total of ${props.comapnyName}\'s staff, group staff and relevant shareholder\'s and shareholding\'s staff comes to fewer than 500, it qualifies for the SME scheme. If you\'ve finished adding shareholdings, click Next, otherwise add another.`)
    }else if(value!=="" &&  props.questionNumber === 42){
      props.setButtonText('proceed')
      setShowMessage('Thanks for providing additional technical details. This information will appear in an appendix in the R&D report.')

    }else if(value!=="" && props.questionNumber === 43){
      props.setButtonText('proceed')
      setShowMessage('Great! You’ve entered details of at least one staff member. Once you’ve finished entering staff details, click next to continue.')

    }else if(value <= 0){
      alert('empty messge')
      setShowMessage('')
    }
   
  };
 
  // handle click event for Remove button
  const handleRemoveClick = () => {
    const list = [...props.questionState];
    list.splice(selectedIndex, 1);
    props.setQuestionState(list);
    const listUpdated = [...getFormValues];
    listUpdated.splice(selectedIndex, 1);
    setgetFormValues(listUpdated);
    setIsDeleteModalopen(false);
  };

  // handle click event for Add button

  const handleAddClick = () => {
    props.setQuestionState([...props.questionState, formDetailsData[0]]);
  };

  const selectHandelandleChange = (event: SelectChangeEvent) => {
    setValueSelect(event.target.value as string);
  };
 
  useEffect(() => {
   console.log('props.questionNumber+++++++++',props.questionNumber);

  if(props.questionNumber === 12){
    props.setNextQuestionNumber(14)
  }else if(props.questionNumber === 14){
    props.setNextQuestionNumber(16)
  }else if(props.questionNumber === 42){
    props.setNextQuestionNumber(44)
  }
  else if(props.questionNumber === 43){
    props.setNextQuestionNumber(45)
  }
}, [])
 
  return (
    <div>
      <form className="form-input mt-30" onSubmit={formik.handleSubmit}>
        {props.questionState?.map((value: any, listIndex: any) => {
          return (
            <Grid
              container
              spacing={props.fieldsModifications.areaExtraSmallScreen}
              className="flex justify-between"
              sx={{
                marginBottom: "10px",
                width: {lg:`${props.fieldsModifications.wrapperWidth}`},
              }}
              key={listIndex}
            >
              {props.formFields?.map((item: any, index: any) => {
                return (
                  <>
                    <Grid
                      item
                      xs={12}
                      sm={props.fieldsModifications.areaExtraSmallScreen}
                      md={props.fieldsModifications.areaMediumScreen}
                      lg={props.formFields[index].areaLargeScreen}
                      className={`flex direction-column ${props.fieldsModifications.formDirection}`}
                      key={index}
                    >
                      <label className="dark-color lh-32 fs-16 fw-700">
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
                                placeholder={item.placeholder}
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
                                placeholder={item.placeholder}
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
                                    handleInputChangeValue(event, listIndex);
                                    formik.handleChange(event);
                                    selectHandelandleChange(event);
                                  }}
                                  renderValue={(value) =>
                                    value[item.name]?.length === 0 ? (
                                      <span>Select Shareholder</span>
                                    ) : (
                                      <span>{value}</span>
                                    )
                                  }
                                >
                                  {props.selectData?.map((item: any) => {
                                    return (
                                      // value[item.name]?.length<1?
                                      <MenuItem key={item.id} value={item.data}>
                                        {item.data}
                                      </MenuItem>
                                      // :"Select Shareholder"
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
                  // gap: "15px",
                  width: `${props.fieldsModifications.buttonFlexWidth}`,
                  marginTop: "15px",
                  marginLeft: "5px",
                }}
              >
                {props.questionState.length !== 1 && (
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

                {props.questionState.length - 1 === listIndex && (
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

     {(props.questionState[0].approxStaff > 0 && showMessage !=="") &&
       <div className={(props.buttonText == null || props.buttonText === "Disable") ? '' : "show-messages border-radius-8 fit-content flex align-center"} style={{ background: props.buttonText === "End" ? 'rgba(220, 53, 69, 0.1)' : props.buttonText === "proceed" ? 'rgba(25, 135, 84, 0.1)' : props.buttonText === "info" ? 'rgba(13, 202, 240, 0.1)' : '' }}>
          {props.buttonText === "End" ? <Image src={errorIcon} alt='errorIcon' width={22} height={22} /> : props.buttonText === "proceed" ? <Image src={SuccessIcon} alt='SuccessIcon' width={22} height={22} /> : props.buttonText === "info" ? <Image src={infoIcon} alt='infoicon' width={22} height={22} /> : ''}
          <p className="font-source-sans-pro dark-color m-0 fw-400 fs-16">{showMessage}</p>
         </div>
     }
         {((props.questionNumber === 42 || props.questionNumber === 43) && showMessage !=="") &&
       <div className={(props.buttonText == null || props.buttonText === "Disable") ? '' : "show-messages border-radius-8 fit-content flex align-center"} style={{ background: props.buttonText === "End" ? 'rgba(220, 53, 69, 0.1)' : props.buttonText === "proceed" ? 'rgba(25, 135, 84, 0.1)' : props.buttonText === "info" ? 'rgba(13, 202, 240, 0.1)' : '' }}>
          {props.buttonText === "End" ? <Image src={errorIcon} alt='errorIcon' width={22} height={22} /> : props.buttonText === "proceed" ? <Image src={SuccessIcon} alt='SuccessIcon' width={22} height={22} /> : props.buttonText === "info" ? <Image src={infoIcon} alt='infoicon' width={22} height={22} /> : ''}
          <p className="font-source-sans-pro dark-color m-0 fw-400 fs-16">{showMessage}</p>
         </div>
     }
         

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

export default DynamicFormFields;