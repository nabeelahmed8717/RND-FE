import { Alert, Box, Grid, MenuItem, Select } from "@mui/material";
import {
  ContactList,
  contactList,
} from "../../../common/mockData/questions/questionSeven";
import React, { FC, useEffect, useState } from "react";
import {
  apiDeleteRequest,
  apiGetRequest,
  apiPostRequest,
} from "../../../helpers/request";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store.hooks";

import AddContact from "./Dialogbox";
import CancelIcon from "@mui/icons-material/Cancel";
import { QuestionList } from "../../../common/constants/questionList";
import QuestionText from "../questionHeading/QuestionText";
import { displayToastr } from "../../../redux/toaster/toasterSlice";
import { endpoints } from "../../../config/endpoints";
import DeleteModal from "../../../common/components/deleteModal/DeleteModal";

const QuestionSeven: FC<{ questionData: QuestionList }> = (props) => {
  const { firstText, secondText,questionState,setQuestionState } = props.questionData;


  const [contacts, setContacts] = useState(contactList);
  const [isDeleteModalopen, setIsDeleteModalopen] = React.useState(false);
  const [contactid,setContactId] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const handleDeleteContact = (email: string) => {
    setContacts(contacts.filter((contact) => contact.email !== email));
  };
  const questionId: any = useAppSelector((state) => state.question.question.id);
  const handleAddContact = (values: ContactList) => {
    // setContacts((prevContacts) => [...prevContacts, values]);
    values.questionaire = questionId;
    addContact(values);
  };
  const handleDeleteModalOpen = (index: any) => {
    console.log('index',index);
    
    setIsDeleteModalopen(true);
    setContactId(index)
  };
  const addContact = async (payload) => {
    try {

      const response = await apiPostRequest(endpoints.questionContact, payload);
      if (response.data.error) {
         displayToastr({
            isDisplay: true,
            message: "Unable to add contact. Try again",
            alertType: 'error'
          })
  
      } else {
        setContacts((prevContacts) => [...prevContacts, response.data.data]);
        dispatch(
          displayToastr({
            isDisplay: true,
            message: "contact Added successfully",
          })
        );
  
      }
    } catch (error) {
       displayToastr({
            isDisplay: true,
            message: "Unable to add contact. Try again",
            alertType: 'error'
          })

    }
  };
  const fetchContacts = async () => {
    try {
      
      const response = await apiGetRequest(
        `${endpoints.questionContact}/${questionId}`
      );
      if (response.data.error) {
        alert("error");
  
      } else {
        console.log("response", response);
        setContacts(response.data.data);
  
      }
    } catch (error) {
      alert("error");

    }
  };
  const deleteContact = async () => {
    try {
      
      const response = await apiDeleteRequest(
        `${endpoints.questionContact}/${contactid}`
      );
      if (response.data.error) {
        alert("error");
  
      } else {
        setContacts(contacts.filter((contact) => contact.id !== contactid));
  
        dispatch(
          displayToastr({
            isDisplay: true,
            message: "contact deleted successfully",
            alertType: 'error'
          })
        );
      }
    } catch (error) {
      alert("error");

    }
    setIsDeleteModalopen(false);
  };
  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <Box>
      <QuestionText mb={4.8} fontWeight={600} questionText={firstText} />
      <QuestionText mb={2} questionText={secondText} />
      <Grid width="100%" maxWidth="304px" item mb={5.5}>
        <Select
          fullWidth
          displayEmpty
          name="contactName"
          value={props.questionState['mainContactAtCompany']}
          onChange={(e) => props.setQuestionState({'mainContactAtCompany':e.target.value})}
          renderValue={(value) => {
            return props.questionState['mainContactAtCompany'].length === 0 ? <span className="opacity-4 dark-color">Select Contact</span> : <span>{value}</span>;
          }}
          sx={{height:"48px"}}
        >
          {contacts.length > 0 ? (
            contacts.map((item) => (
              
                <MenuItem sx={{ display: "flex", direction:"row" ,alignItems:"center" ,justifyContent:"space-between", gap: 1, height: "100%",width:"100%" }} value={`${item.firstName} ${item.lastName}`}>
                  {`${item.firstName} ${item.lastName}`}
                    <CancelIcon onClick={()=> handleDeleteModalOpen(item.id)} fontSize="medium" style={{ color: "#C2C4C6" }} className="cursor-pointer" />
                </MenuItem>
            ))
          ) : (
            <MenuItem
              disabled
              sx={{ display: "flex", gap: 1, height: "100%" }}
              value={`No contact found`}
            >
              No contact found
            </MenuItem>
          )}
        </Select>
      </Grid> 
      <AddContact handleAddContact={handleAddContact} />
      <DeleteModal
          modalText={"Are you sure you want to delete this contact?"}
          modalopenHandler={isDeleteModalopen}
          setModalopenHandler={setIsDeleteModalopen}
          actionSubmitHandler={() => deleteContact(1)}
        />
    </Box>
    
  );
};
export default QuestionSeven;
