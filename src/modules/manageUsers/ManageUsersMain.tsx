import { InputAdornment, TextField } from "@mui/material";
import React, { FC, useState } from "react";

import ClaimsModal from "../../common/components/claimsModal/claimsModal";
import CommonTable from "../../common/components/commonTable/commonTable";
import { IManageUsersTable } from "../../common/interfaces/manageUersInterface";
import Image from "next/image";
import SearchIcon from "../../assets/images/collaborators/searchicon.svg";
import { manageUsersConstants } from "../../common/constants/manageUsers";
import { managerUsersTabledata } from "../../common/mockData/manageUsers";
import { searchIcon } from "../../assets/export";
import { displayToastr } from "../../redux/toaster/toasterSlice";
import { useAppDispatch } from "../../hooks/use-store.hooks";
import CommonTableTwo from "../../common/components/commonTable/commonTableTwo";

const ManageUsersMain: FC = () => {
  // ****************************** use states **************************************
  const [manageUserTable, setManageUserTable] = useState<IManageUsersTable[]>(
    managerUsersTabledata
  );
  const [manageUserArray, setManageUserArray] = useState<IManageUsersTable[]>(
    []
  );
  const [filterString, setfilterString] = useState<string>("");
  const filteredData = filterString ? manageUserArray : manageUserTable;
  const [page, setPage] = React.useState<number>(0);
  const [ModalType, setModalType] = useState("");
  const [userId, setUserId] = useState<string | undefined>(undefined);

  const dispatch = useAppDispatch();

  // ****************************** __SEARCH HANDLER   **************************************
  const searchmanageUserHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchcollaborator = event.target.value.toLowerCase().trim();
    setfilterString(searchcollaborator);
    const filteredItem = manageUserTable.filter((collaborator) =>
      collaborator.manageUser.toLowerCase().includes(searchcollaborator)
    );
    setManageUserArray(filteredItem);
    setPage(0);
  };

  // ******************************  __TOGGLE status    **************************************
  const toggleStatusHandler = (id: number): void => {
    const result = manageUserTable.map((item) => {
      if (item.id === id) {
        item.manageUsersStatus = !item.manageUsersStatus;
      }
      return item;
    });
    setManageUserTable(result);
  };

  // ******************************  __DELETE HANDLER    **************************************
  const DeleteUser = () => {
    const result = manageUserTable.filter(
      (manageUserData) => manageUserData.id !== userId
    );
    const filteredResult = manageUserArray.filter(
      (manageUserData) => manageUserData.id !== userId
    );
    setManageUserTable(result);
    setManageUserArray(filteredResult);
    dispatch(displayToastr({ message: "Profile has been Deleted" }));
    setModalType("");
  };

  const deleteHandler = (id: number): void => {
    setModalType("deleteManageUser");
    setUserId(id);
  };

  // ********************** reset password *************************
  const resetHandler = (id: number): void => {
    setModalType("resetManageUser");
   
    console.log("reset", id);
  };

  const ResetAccount = () => {
    dispatch(displayToastr({ message: "Profile has been Reset" }));
    setModalType("");
    
  };

  return (
    <div className="manage-user-wrapper border-radius-8 bg-white-shadow ">
      <div>
        <div>
          <div>
            <div className="manage-user-content flex justify-between align-center">
              <span className="fw-700 fs-36 primary-color font-source-sans-pro lh-32">
                Manage Users
              </span>
              {/* ******************************************* modal code start here ************************************************ */}
              <ClaimsModal
                title={
                  ModalType === "resetManageUser"
                    ? "Are you sure you want to reset account?"
                    : ModalType === "deleteManageUser"
                    ? "Are you sure you want to delete?"
                    : ""
                }
                submitButtonText={
                  ModalType === "resetManageUser"
                    ? "Proceed"
                    : ModalType === "deleteManageUser"
                    ? "Delete"
                    : ""
                }
                SubmitClass={
                  ModalType === "resetManageUser"
                    ? "bg-gradient-green"
                    : ModalType === "deleteManageUser"
                    ? "bg-red"
                    : ""
                }
                CancelClass="bg-white"
                SubmitHandler={
                  ModalType === "resetManageUser" ? ResetAccount : DeleteUser
                }
                setModalType={setModalType}
                cancelButtonText="Cancel"
                open={
                  ModalType === "resetManageUser" ||
                  ModalType === "deleteManageUser"
                }
              />
              {/* ******************************************* modal code end here ************************************************ */}
            </div>
          </div>
          <TextField
            id="outlined-size-small"
            size="small"
            placeholder="search"
            className="search-collaborator border-radiues-3 mb-15"
            sx={{
              height:"54px",
              width: { xs: "100%",sm:"400px", md: "400px", lg: "400px" },
              "&.MuiFormControl-root": {
                height: "54px",
              },
              "&.MuiInputBase-root, .MuiOutlinedInput-root": {
                height: "54px",
              },
            }}
            onChange={searchmanageUserHandler}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <Image src={SearchIcon} alt="search" priority />
            //     </InputAdornment>
            //   ),
            // }}
            InputProps={{

              startAdornment: (
  
                <InputAdornment position="start"
                  sx={{
                     width: "40px",
                    marginRight: { sm: "1rem" },
                  }}>
  
                  <Image
                    src={searchIcon}
                    alt="search"
                     priority
                      width={24}
                       height={24}
                        objectFit="fill"
                         />
                           </InputAdornment>
  
              ),
  
            }}
  
          />

          <CommonTableTwo
            cols={manageUsersConstants(
              toggleStatusHandler,
              deleteHandler,
              resetHandler,
             
            )}
            data={filteredData}
            isPagination={true}
            recordsPerPage={8}
            heightOfTable={570}
            setPage={setPage}
            page={page}
          />
        </div>
      </div>
    </div>
  );
};
export default ManageUsersMain;
function dispatch(arg0: { payload: any; type: "toaster/displayToastr"; }) {
  throw new Error("Function not implemented.");
}

