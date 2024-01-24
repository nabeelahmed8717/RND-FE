import {
  Box,
  FormControl,
  Grid,
  LinearProgress,
  MenuItem,
  Rating,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import {
  customerFeedback,
  feedbackData,
  starRating,
} from "../../common/mockData/ratingsFeedback";

import Image from "next/image";
import ReplyIcon from "@mui/icons-material/Reply";
import StarIcon from "@mui/icons-material/Star";


const RatingsFeedback = () => {
  const [rating, setRating] = useState("");
  const [feedbackState, setFeedbackState] =
    useState<customerFeedback[]>(feedbackData);
  const [comment, setComment] = useState("");
  const [addComment, setAddComment] = useState("");
  const [commentShow, setCommentShow] = useState(false);
  const [editState, setEdit] = useState(-1);
  const [deleteState, setDelete] = useState(false);
  const replyCommentHandler = (id: string) => setComment(id);

  const handleChangeFilter = (e: SelectChangeEvent) => {
    console.log(e.target.value);
    setRating(e.target.value);
    e.target.value
      ? setFeedbackState(
        feedbackData.filter((data) => data.rating === Number(e.target.value))
      )
      : setFeedbackState(feedbackData);
  };

  const editHandler = (id: number, commentString: any) => {
    setEdit(id);
    setAddComment(commentString[id]);
  };
  const deleteHandler = (id: any, commentString: any) => {
    commentString.splice(id, 1);
    setDelete(true);
    setTimeout(() => {
      setDelete(false);
    }, 500);
  };
  const handleChangeInput = (e: any) => {
    setAddComment(e.currentTarget.value);
  };

  const numRows = feedbackState.length;
  const sum = feedbackState.reduce((accumulator, object) => {
    return accumulator + object.rating;
  }, 0);

  let avg = (sum / numRows) > 0 ? (sum / numRows) : 0;
  console.log(sum, "sum");
  console.log(numRows, "numRows");
  console.log(avg, "avg");

  var avgTwoplacdecimel = avg.toFixed(2); //12.23

  // console.log(avgTwoplacdecimel);
  const percentRating: any = (value: number) => {
    const percentRatings = feedbackState.filter(
      (e) => Math.floor(e.rating) === value
    );
    const totalPercent = (percentRatings.length / numRows) * 100;
    return totalPercent.toFixed(0);
  };

  return (
    <Box className="feedback-system-admin font-source-sans-pro">
      <Box className="main border-radius-8" sx={{ py: 1 }}>
        <Box
          className="header-feedback"
          sx={{
            px: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 className="primary-color fs-36 lh-32 fw-700 feedback-heading">
            Customers Feedback
          </h3>
          <Box>
            <FormControl sx={{ m: 1, minWidth: 250, }}>
              <Select
                value={rating}
                onChange={handleChangeFilter}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                renderValue={(value) => {
                  if (rating.length === 0) {
                    return <>Star Rating</>;
                  } else {
                    return <>{value} Stars</>;
                  }
                }}
                sx={{
                  height: "48px",
                  "&:hover": {
                    "&& fieldset": {
                      border: "2px solid #17884D"
                    }
                  },
                }}
              >

                <MenuItem value={""} className="font-source-sans-pro">Star Rating</MenuItem>
                <MenuItem value={1} className="font-source-sans-pro">1 stars</MenuItem>
                <MenuItem value={2} className="font-source-sans-pro">2 stars</MenuItem>
                <MenuItem value={3} className="font-source-sans-pro">3 stars</MenuItem>
                <MenuItem value={4} className="font-source-sans-pro">4 stars</MenuItem>
                <MenuItem value={5} className="font-source-sans-pro">5 stars</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} sm={4} md={3} p={4}>
              <div className="main_rating_display">
                <h2 className="fw-600 fs-56 lh-64 dark-color ">
                  {avgTwoplacdecimel ? avgTwoplacdecimel : 0}
                </h2>
                <h4 className="fs-18 lh-24 fw-600 dark-color opacity-8 ">
                  based on {numRows} ratings
                </h4>
                <Box className="stars">
                  <Rating
                    name="size-medium"
                    value={avg}
                    readOnly
                    emptyIcon={<StarIcon />}
                    sx={{ mt: 1 }}
                  />
                </Box>
                <Box sx={{ mt: 3 }}>
                  {starRating.map((number: any, index: any) => (
                    <Box
                      display="flex"
                      alignItems="center"
                      mb={2}
                      className="rating_graph_dispaly_MAIN"
                      key={index}
                    >
                      <span className="fs-18 fw-600 lh-24 dark-color starCounter font-source-sans-pro">
                        {number} stars
                      </span>
                      {feedbackState.length > 0 && (
                        <LinearProgress
                         className="rating-bar"
                          variant="determinate"
                          value={percentRating(number)}
                          sx={{
                            maxWidth: "250px",
                            width: "100%",
                            backgroundColor: "#ffff",
                            height: "20px",
                            "& .MuiLinearProgress-bar":{
                              backgroundColor: "#343a40",
                              opacity: 0.2,
                            }
                          }}
                        />
                      )}
                    </Box>
                  ))}
                </Box>
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              sm={8}
              md={9}
              lg={9}
              sx={{
                marginLeft: { xs: "13px", sm: "0px" },
                pl: { md: 4, sm: 2.5 },
                pt: 2,
              }}
            >
              <div className="feedBack_lenth_main_wraper">
                <h4
                  className="fw-700 fs-16 lh-24 primary-color mt-0"
                  style={{ marginBottom: "5px" }}
                >
                  All Ratings
                </h4>
              </div>
              <div className="feedback_mesasges">
                {feedbackState.map((obj: any, i: number) => {
                  return (
                    <Box
                      className="feedback-card border-radius-8"
                      key={obj.id}
                      mb={1}
                      p="14px 20px"
                    >
                      <Box className="head">
                        <Box className="feedbackProfile">
                          <Grid container alignItems="center">
                            <Grid item xs={2} sm={2} md={1} lg={1} xl={0.7}>
                              <Image src={obj.profileImg} alt="profile" />
                            </Grid>
                            <Grid item xs sm={10} md={9} lg={6} xl={5}>
                              <Box
                                display="flex"
                                sx={{
                                  flexDirection: { sm: "row" },
                                  alignItems: "center",
                                  gap: { xs: "4px", sm: "0px" },
                                }}
                              >
                                <h4
                                  className="fs-14 fw-700 lh-20 primary-color feedback_userName "
                                  style={{ marginBlock: 0 }}
                                >
                                  {obj.name}
                                </h4>
                              </Box>
                              <p className="fs-12 fw-400 lh-15 dark-color half-opacity feedback_date">
                                {obj.date}
                              </p>
                            </Grid>
                            <Grid container item xs={12} md={10} lg={5} xl={6}>
                              <Grid container item xs={12}>
                                <Grid item xs={12}>
                                  <Rating
                                    sx={{ float: { xs: "left", md: "right" } }}
                                    name="size-medium"
                                    value={obj.rating}
                                    readOnly
                                    emptyIcon={<StarIcon />}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                      <p className="fs-14 fw-400 lh-20 dark-color description ">
                        {obj.description}
                      </p>
                      <Box
                        className="replySection"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box
                          className="cursor-pointer"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          onClick={() => replyCommentHandler(obj.id)}
                        >
                          {obj.id !== comment && (
                            <>
                              <ReplyIcon sx={{ color: '#343A40' }} />
                              <p className="reply-color fs-14 fw-600 lh-20 font-source-sans-pro ml-10">
                                Reply
                              </p>
                            </>
                          )}
                        </Box>
                      </Box>
                     
                      {obj.id === comment && (
                        <Box className="comment">
                          <Box className="showComment font-source-sans-pro ">
                            <Box
                              display="flex"
                              className="replyArrow cursor-pointer selected-field-color"
                              py={2}
                              onClick={() => setComment("")}
                            >
                              <ReplyIcon sx={{ color: '#343A40' }} />
                              <p className="reply-color fs-14 fw-600 lh-20 font-source-sans-pro ml-10"
                                style={{ marginTop: "2px" }}
                              >
                                {obj.reply}
                              </p>
                            </Box>
                            {commentShow &&
                              obj.comments.map(
                                (item: string, index: number) => {
                                  return (
                                    <Box key={index}>
                                      <Box
                                        className="commentInfo font-source-sans-pro "
                                        display="flex"
                                      >
                                        <Image
                                          src={obj.profileImg}
                                          alt="profile"
                                        />
                                        <Box
                                          display="flex"
                                          alignItems="center"
                                          gap={2}
                                          pl={2}
                                          mb={1}
                                        >
                                          <h4
                                            className="fs-14 fw-700 font-source-sans-pro primary-color"
                                            style={{ margin: 0 }}
                                          >
                                            {obj.replyuser}
                                          </h4>
                                          <span className="fs-12 fw-400 lh-15 dark-color half-opacity feedback_date">{obj.feedbackDateTime}</span>
                                        </Box>

                                      </Box>
                                      <p className="answer fs-14 fw-400">
                                        {" "}
                                        {item}
                                      </p>
                                      <Box className="btnDiv">
                                        <button
                                          className="selected-field-color-action fs-14 fw-600 cursor-pointer font-source-sans-pro "
                                          onClick={() => {
                                            editHandler(index, obj.comments);
                                          }}
                                        >
                                          Edit
                                          <span className="action-dot"></span>
                                        </button>
                                        <button
                                          className="selected-field-color-action fs-14 fw-600 cursor-pointer font-source-sans-pro "
                                          onClick={() => {
                                            deleteHandler(index, obj.comments);
                                          }}
                                        >
                                          Delete
                                          <span className="action-dot"></span>
                                        </button>
                                      </Box>
                                    </Box>
                                  );
                                }
                              )}
                            <Box className="addComment" display="flex">
                              <Image src={obj.profileImg} alt="profile" />
                              <form
                                onSubmit={(event) => {
                                  setCommentShow(true);
                                  event.preventDefault();
                                  if (addComment.length > 1)
                                    obj.comments[obj.comments.length] =
                                      addComment;
                                  if (editState !== -1) {
                                    obj.comments[editState] = addComment;
                                    obj.comments.length -= 1;
                                    setEdit(-1);
                                  }
                                  setAddComment("");
                                  obj.comments.length += 1;
                                }}
                              >
                                <input
                                  name="comment"
                                  type="text ||submit"
                                  placeholder="Add a comment"
                                  value={addComment}
                                  onChange={(e) => handleChangeInput(e)}
                                  className="add-comment"
                                />
                              </form>
                            </Box>
                          </Box>
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default RatingsFeedback;