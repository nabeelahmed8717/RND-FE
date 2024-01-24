import { IVerfication, IVerficationState } from "./question-type";
import { apiGetRequest, apiPatchRequest } from "../../helpers/request";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";

// import { BASE_URL, endpoints } from "../../config/endpoints";

// for post we need question id and we get questionnire id after we have fatch the questionnire on basis of claim id
// for get question we need claim id and get claim id from url

// const API_URL =
//   "https://gateway-dev.rndtaxclaims.uk/questionaires/63a01c3d5135c22fa6d2c400/answer";

    // const response = await apiGetRequest(
    //     `https://gateway-dev.rndtaxclaims.uk${endpoints.question}/63a01c3d1d11f0fef008b327`
    //   );

export const getQuestion = createAsyncThunk<any>(
  "question/getQuestion",
  async (id, thunkAPI) => {
    try {
      const response = await apiGetRequest(
        `https://gateway-dev.rndtaxclaims.uk${endpoints.question}/${id}`
      );
      
      return response.data;
    } catch (error) { 
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postQuestionApi = createAsyncThunk<any>(
  "question/postQuestionApi",
  async (data, thunkAPI) => {

    try {
      const response = await apiPatchRequest(`https://gateway-dev.rndtaxclaims.uk/questionaires/${data.questionnireId}/answer`, data.data);
      response.data.nextQuestion=data.nextQuestion
      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
