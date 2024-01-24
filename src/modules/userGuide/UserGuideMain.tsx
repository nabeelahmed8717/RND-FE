import {
  IAnswerList,
  ICreditList,
  IDatesList,
  IRdecClaim,
} from "../../common/interfaces/userGuideInterface";
import React, { useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Box } from "@mui/material";
import Image from "next/image";
import type { NextPage } from "next";
import { TablePaginationActions } from "../../common/components/commonTable/commonTable";
import searchIcon from "../../assets/icons/guideLines/SearchIcon.png";
import { userGuideAccordionData } from "../../common/mockData/userGuide/userGuideData";

const UserGuideMain: NextPage = () => {
  const [searchedVal, setSearchedVal] = useState<string>("");
  const [show, setShow] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  return (
    <Box className="wrapper-user-guide border-radius-8" padding={{ xs: "1em" }}>
      <h3
        className="fw-600 fs-36 lh-32 primary-color font-source-sans-pro flex align-center"
        style={{ marginTop: "7px" }}
      >
        Have Any Questions?
      </h3>
      {/* Search Input */}
      <div className="user-guide-search flex">
        <div className="user-guide-input-search flex justifyCenter">
          <input
            className="border-radiues-3 fw-600 fs-16 lh-24 font-source-sans-pro"
            type="text"
            placeholder="Ask a question"
            onChange={(e) => setSearchedVal(e.target.value)}
          />
          <div className="user-guide-icon">
            <Image
              src={searchIcon}
              alt="Search Here"
              width="24px"
              height="24px"
              priority
            />
          </div>
        </div>
      </div>
      <div className="heading">
        <h4 className="fw-700 fs-24 lh-32 font-source-sans-pro dark-color">
          Help Articles
        </h4>
      </div>
      {/* Accordion */}
      <div className="wrapper-user-guide-questions-answer">
        <div className="wrap-userGuide-quesions-ans">
          {!!userGuideAccordionData.length &&
            userGuideAccordionData
              .slice(page * 8, page * 8 + 8)
              .filter(
                (row) =>
                  !searchedVal.length ||
                  row.question
                    .toString()
                    .toLowerCase()
                    .includes(searchedVal.toString().toLowerCase())
              )
              .map((item: any) => (
                <div className="wrap-user-guide-content" key={item.id}>
                  <div>
                    <div
                      className="user-guide-question flex justify-between  align-center cursor-pointer"
                      onClick={() =>
                        setShow(
                          !show && show !== item.id ? item.id : show != show
                        )
                      }
                    >
                      <h2 className="fw-600 fs-18 lh-24 dark-color font-source-sans-pro  align-center">
                        {item.question}
                      </h2>
                      <a className="flex justify-end user-guide-arrow-icons align-center">
                        {show && show === item.id ? (
                          <ArrowDropUpIcon
                            className="cursor-pointer"
                            onClick={() =>
                              setShow(
                                !show && show !== item.id
                                  ? item.id
                                  : show != show
                              )
                            }
                          />
                        ) : (
                          <ArrowDropDownIcon
                            className="cursor-pointer"
                            onClick={() => setShow(item.id)}
                          />
                        )}
                      </a>
                    </div>
                    <div className="user-guide-ans flex">
                      {show && show === item.id && (
                        <>
                          <div>
                            <span className="fw-600 fs-18 lh-24 dark-color user-guide-ans">
                              Ans.
                            </span>
                          </div>
                          <div>
                            <div className="user-guide-text">
                              <p className="user-guide-answers fw-400 fs-16 lh-24 font-source-sans-pro dark-color answer-heading w-100 m-0">
                                {item.answer}
                              </p>
                              <p className="w-100 answer-listlabel fw-400 font-source-sans-pro fs-16 dark-color lh-24">
                                {item.projectDesc}
                              </p>
                              <p className="w-100 answer-listlabel fw-400 font-source-sans-pro fs-16 dark-color lh-24">
                                {item.listLabel}
                              </p>
                              <p className="w-100 answer-accountingPeriodLabel font-source-sans-pro  dark-color fw-400 fs-16 lh-24 w-100">
                                {item.accountingPeriodLabel}
                              </p>
                              <p className="w-100 answer-accountingPeriodLabel font-source-sans-pro dark-color fw-400 fs-16 lh-24 w-100">
                                {item.accountinPeriodText}
                              </p>
                            </div>
                            {/*  list */}
                            <ul className="element-menu">
                              {!!item?.answerList?.length &&
                                item?.answerList?.map(
                                  (element: IAnswerList) => {
                                    return (
                                      <div key={element.id}>
                                        <li className="element-list  dark-color font-source-sans-pro fw-400 fs-16 lh-24 dark-color">
                                          {element.list}
                                        </li>
                                      </div>
                                    );
                                  }
                                )}
                            </ul>
                            <div className="description w-100">
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: item?.research,
                                }}
                                className=" w-100 fw-400 fs-16 lh-24 dark-color font-source-sans-pro"
                                style={{ maxWidth: "1170px" }}
                              ></p>
                            </div>
                            <div className="list-end-description   w-100">
                              <p
                                style={{ marginLeft: "0px" }}
                                className="fw-400 fs-16 lh-24 font-source-sans-pro"
                              >
                                {item.listEndDescription}
                              </p>
                            </div>
                            <div>
                              {/* nested list */}
                              <ul className="element-menu">
                                {!!item?.creditList?.length &&
                                  item?.creditList?.map(
                                    (element: ICreditList) => {
                                      return (
                                        <div key={element.id}>
                                          <li className="element-list fw-400 fs-16 lh-24 dark-color font-source-sans-pro ">
                                            <div
                                              className="w-100 support-rdec"
                                              style={{ maxWidth: "910px" }}
                                            >
                                              {element.list}
                                            </div>
                                          </li>
                                        </div>
                                      );
                                    }
                                  )}
                              </ul>
                            </div>{" "}
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item?.smeRNDRelief,
                              }}
                              className="fw-400 fs-16 lh-24 dark-color"
                            ></p>
                            <div>
                              {/* nested list */}
                              <ul className="element-menu">
                                {!!item?.datesList?.length &&
                                  item?.datesList?.map(
                                    (element: IDatesList) => {
                                      return (
                                        <div key={element.id}>
                                          <li className="element-list fw-400 fs-16 lh-24 dark-color font-source-sans-pro">
                                            <div
                                              className="w-100 support-rdec"
                                              style={{ maxWidth: "840px" }}
                                            >
                                              {element.list}
                                            </div>
                                          </li>
                                          <div className="sublist">
                                            <div className="sub-list-option fw-400 fs-16 lh-24 dark-color ">
                                              <div
                                                className="w-100 sub-list-Rdec font-source-sans-pro"
                                                style={{ maxWidth: "840px" }}
                                              >
                                                {element.option1}
                                              </div>
                                            </div>
                                            <div className="element-list-optionsTwo fw-400 fs-16 lh-24 dark-color ">
                                              <div
                                                className="w-100 sub-list-Rdec font-source-sans-pro"
                                                style={{ maxWidth: "840px" }}
                                              >
                                                {element.option2}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  )}
                              </ul>
                              {/* nested list */}
                              <ul className="element-menu">
                                {!!item?.rdecClaim?.length &&
                                  item?.rdecClaim?.map(
                                    (sublistrdecClaim: IRdecClaim) => {
                                      return (
                                        <div key={sublistrdecClaim.id}>
                                          <li className="element-list fw-400 fs-16 lh-24 dark-color font-source-sans-pro">
                                            <div
                                              className="w-100 support-rdec font-source-sans-pro"
                                              style={{ maxWidth: "910px" }}
                                            >
                                              {sublistrdecClaim.list}
                                            </div>
                                          </li>
                                        </div>
                                      );
                                    }
                                  )}
                              </ul>
                              <p>{item.needText}</p>
                              <ul className="element-menu">
                                {!!item?.rdecClaimCredit?.length &&
                                  item?.rdecClaimCredit?.map(
                                    (sublistrdecClaimCredit: IRdecClaim) => {
                                      return (
                                        <div key={sublistrdecClaimCredit.id}>
                                          <li className="element-list fw-400 fs-16 lh-24 dark-color font-source-sans-pro">
                                            <div
                                              className="w-100 support-rdec font-source-sans-pro"
                                              style={{ maxWidth: "840px" }}
                                            >
                                              {sublistrdecClaimCredit.list}
                                            </div>
                                          </li>
                                        </div>
                                      );
                                    }
                                  )}
                              </ul>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
        </div>
        {/* paginantion */}
        <TablePaginationActions
          count={userGuideAccordionData.length}
          page={page}
          rowsPerPage={8}
          onPageChange={handleChangePage}
        />
      </div>
    </Box>
  );
};

export default UserGuideMain;
