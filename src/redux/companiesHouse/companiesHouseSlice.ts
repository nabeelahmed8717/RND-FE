import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import { getCompaniesData } from "./companies-house.api";
import { ICompaniesDataState } from "./companies-types";

const initialState: ICompaniesDataState = {
  data: null,
  items: [],
  message: "",
  companyStatus: STATUS.IDLE,
  errors: null,
};

const companiesHouseSlice = createSlice({
  name: "companies-house",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCompaniesData.pending, (state) => {
      state.companyStatus = STATUS.PENDING;
    });
    builder.addCase(getCompaniesData.fulfilled, (state, action: PayloadAction<ICompaniesDataState>) => {
      // converiting companies data according to required form
      const companiesList = action.payload.data.items.map(
        (companyData: any) => (
          (companyData.address?.country === "United Kingdom" ||
          companyData.address?.country === "England") && 
          {
            companyNumber: companyData.company_number,
            companyName: companyData.title,
            postCode: companyData.address.postal_code,
            city: companyData.address.locality,
            address: companyData.address_snippet,
            country: companyData.address.country,
          }
        )
      ).filter((companyData:any) => companyData);

      state.items = companiesList;
      state.companyStatus = STATUS.SUCCEEDED;
      state.message = action.payload.message;
    });
    builder.addCase(getCompaniesData.rejected, (state, action: PayloadAction<any>) => {
      state.companyStatus = STATUS.FAILED;
      state.errors = action.payload;
    });
  },
});

export default companiesHouseSlice;
