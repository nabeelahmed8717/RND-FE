import React, { useEffect, useState } from "react";
import {
  editUserItem,
  setNewUserItem,
} from "../../../redux/accountSettings/accountSettingsSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store.hooks";
import {
  userinitialValues,
  uservalidationSchema,
} from "../../../common/mockData/accountSettings/users/users";

import CommonTable from "../../../common/components/commonTable/commonTable";
import SearchUser from "./searchUser/searchUser";
import UpsertUser from "./upsertUser/upsertUser";
import { UserTableConstants } from "../../../common/constants/users";
import { displayToastr } from "../../../redux/toaster/toasterSlice";
import { useFormik } from "formik";
import CommonTableTwo from "../../../common/components/commonTable/commonTableTwo";
import { createSubIndividual, fetchSubindividual, updateSubIndividual } from "../../../redux/subIndividualUser/subIndividualUser-api";
import { STATUS } from "../../../common/constants/store";

const Users = () => {
  const dispatch = useAppDispatch();
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [searchUser, setSearchUser] = useState("");
  const [page, setPage] = useState(0);
  const [UserID, setUserId] = useState<number | null>(null);
  const { users: UsersList }: { users: any } = useAppSelector(
    (state) => state.accountSettings
  );


  const { subindividualData, status } = useAppSelector(
    (state) => state.subIndividualUser
  );
  console.log("subindividualDataFRusers", subindividualData)


  const { subIndividualUser, status: subIndividualUserApiStatus, message } = useAppSelector((state) => state.subIndividualUser);

  console.log('message', message)

  const [selectedRecord, setSelectedRecord] = useState<any>({});


  const [editMode, setEditMode] = useState(false);

  const createUserData = (id: number) => {
    const newUser = {
      id: id,
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      email: formik.values.email,
      phoneNumber: formik.values.phoneNumber,
      userView: formik.values.userView,
      userPurchase: formik.values.userPurchase,

    };
    return newUser;
  };
  const ModalUpdateHandler = (id: number) => {
    const updateUser = subindividualData.find((data: any) => data.id === id);
    setUserId(id);
    if (id) {
      setEditMode(true);
      formik.values.firstName = updateUser?.firstName;
      formik.values.lastName = updateUser?.lastName;
      formik.values.email = updateUser?.email;
      formik.values.phoneNumber = updateUser?.phoneNumber;
      formik.values.userView = updateUser?.subIndividual?.userView;
      formik.values.userPurchase = updateUser?.subIndividual?.userPurchase;
    }
    setIsModalOpen(true);
    formik.resetForm()
  };

  const formik = useFormik({
    initialValues: userinitialValues,
    validationSchema: uservalidationSchema,
    onSubmit: (values, { resetForm }) => {

      if (UserID && editMode) {
        const editUserData = createUserData(UserID);
        // dispatch(editUserItem({ id: UserID, editedUser: editUserData }));
        values.id = UserID
        dispatch(updateSubIndividual(values))
        dispatch(
          displayToastr({
            isDisplay: true,
            message: "User Updated successfully",
            alertType:"success"
          })
        );
        setEditMode(false);
        resetForm()
      } else {
        const newUserCreated = createUserData(Math.random());
        dispatch(createSubIndividual(values));
        
      }


      // setIsModalOpen(false);
      // resetForm();
    },

  });
  function clearForm() {
    formik.values.firstName = "";
    formik.values.lastName = "";
    formik.values.email = "";
    formik.values.phoneNumber = undefined;
    formik.values.userView = "";
    formik.values.userPurchase = "";
    formik.resetForm();
  }
  const userDataHandler = (data: any) => {
    if (searchUser) {
      return subindividualData.filter(
        (data: any) =>
          data.firstName.toLowerCase().includes(searchUser.toLowerCase()) ||
          data.lastName.toLowerCase().includes(searchUser.toLowerCase())           
      );
    }
    return data;
  };


  useEffect(() => {
    if (message === 'user_create_success') {
      setIsModalOpen(false);
    }
    if (message === 'user_subindividual_update_success') {
      setIsModalOpen(false);
    }
  }, [message]);

  useEffect(() => {
    dispatch(fetchSubindividual())
  }, []);

  return (
    <div>
      <div className="flex justify-between align-center">
        <span className="fw-700 fs-24 dark-color">User List</span>
        <button
          onClick={() => {
            setIsModalOpen(true), clearForm(), setEditMode(false);
          }}
          className="green-gradient add-card flex justify-center align-center border-radiues-3 common-button-hover white-color fw-700 fs-16 cursor-pointer font-source-sans-pro"
        >
          Add User
        </button>
      </div>
      <SearchUser
        setPage={setPage}
        setSearchCard={setSearchUser}
        searchCard={searchUser}
      />
      <CommonTableTwo
        cols={UserTableConstants(ModalUpdateHandler)}
        data={userDataHandler(subindividualData)}
        isPagination={true}
        recordsPerPage={8}
        heightOfTable={1000}
        setPage={setPage}
        page={page}
      />
      <UpsertUser
        setIsModalOpen={() => {
          setIsModalOpen(false);
          clearForm();
        }}
        IsModalOpen={IsModalOpen}
        islodingValue={subIndividualUserApiStatus === STATUS.PENDING}
        message={message}
        formik={formik}
        editMode={editMode}
      />
    </div>
  );
};

export default Users;
