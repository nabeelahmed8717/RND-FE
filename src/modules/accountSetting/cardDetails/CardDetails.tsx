import React, { useEffect, useState } from "react";

import AddCard from "./addCard/addCard";
import { CardsList } from "../../../common/mockData/accountSettings/cardList/cardList";
import ClaimsModal from "../../../common/components/claimsModal/claimsModal";
import CommonTable from "../../../common/components/commonTable/commonTable";
import { ICardList } from "../../../common/interfaces/accountSettingsInterface";
import SearchCardList from "./searchCardsList/searchCardList";
import { cardTableConstants } from "../../../common/constants/cardsList";
import { endpoints } from "../../../config/endpoints";
import { apiDeleteRequest, apiGetRequest } from "../../../helpers/request";
import { CircularProgress } from "@mui/material";
import { TableSkeleton } from "../../../common/components/tableSkeleton/TableSkeleton";
import { STATUS } from "../../../common/constants/store";

const CardDetails = () => {
  const [page, setPage] = useState(0);
  const [Id, setId] = useState(Number);
  const [searchCard, setSearchCard] = useState("");
  const [IsAddCard, setIsAddCard] = useState(false);
  const [ModalOpen, setModalOpen] = React.useState("");
  const [cardListItem, setCardListItems] = useState(CardsList);
  const [whenToShow, setWhenToShow] = useState(false);
  const [userCardLisT, setUserCardList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const DeleteCardModal = (id: number) => {
    setModalOpen("deleteCard");
    setId(id);
  };
  useEffect(() => {
    setCardListItems(CardsList)
  }, [CardsList])
  const newCardList = (data: ICardList[]) => {
    if (searchCard) {
      return data.filter((data: ICardList) =>
        data.holderName.toLowerCase().includes(searchCard.toLowerCase())
      );
    }
    return data;
  };

  //cardslist api
  const fetchCardDetails = async () => {
    try {
      setIsloading(true);
      const response = await apiGetRequest(`${endpoints.UserCardList}`);
      console.log(response.data);
      if (response.data.error) {
        alert("error");
        // setIsloading(false);
        // setErrorMessage("error occured");
      } else {
        console.log("response", response);
        setIsloading(false);
        setUserCardList(response.data.data)

      }
    } catch (error) {
      alert("error");
      // setIsloading(false);
      // setErrorMessage("error occured");
    }
  };
  console.log(cardListItem, 'cardList');

  useEffect(() => {
    fetchCardDetails()
  }, []);


  const deleteCardHandler = async () => {

    try {
      setIsloading(true)
      await apiDeleteRequest(`${endpoints.userDeleteCard}/${Id}`);

      setModalOpen("");
      setIsloading(false)
      fetchCardDetails()

    } catch (error) {
      alert("error");
    }
  }
  const openCardModalHandler = () => {
    setWhenToShow(true)
    setIsAddCard(true)
    setWhenToShow(false)
  }




  return (
    <div>
      <div className="flex justify-between align-center">
        <span className="fw-700 fs-24 dark-color">Card List</span>
        <button
          onClick={openCardModalHandler}
          className="bg-gradient-green add-card white-color fw-700 fs-16 cursor-pointer font-source-sans-pro"
        >
          {whenToShow && (
            <span
              style={{
                marginTop: "0.3rem",
                marginLeft: "0.3rem",
                position: "absolute",
              }}
            >
              <CircularProgress size={20} thickness={4} className="white-color" />
            </span>
          )}
          Add Card
        </button>
      </div>
      <SearchCardList
        setSearchCard={setSearchCard}
        searchCard={searchCard}
        setPage={setPage}
      />
      {
        isLoading ? <TableSkeleton /> :
          <CommonTable
            cols={cardTableConstants(DeleteCardModal)}
            data={newCardList(userCardLisT)}
            isPagination={false}
            recordsPerPage={8}
            heightOfTable={1000}
            setPage={setPage}
            page={page}
          />
      }

      <ClaimsModal
        title="Are you sure you want to delete?"
        submitButtonText="Delete"
        SubmitClass="bg-red"
        CancelClass="bg-white"
        SubmitHandler={deleteCardHandler}
        setModalType={setModalOpen}
        cancelButtonText="Cancel"
        open={ModalOpen === "deleteCard"}
      />
      <AddCard
        setIsAddCard={setIsAddCard}
        IsAddCard={IsAddCard}
        setCardListItems={setCardListItems}
        cardListItem={cardListItem}
      />
    </div>
  );
};

export default CardDetails;
