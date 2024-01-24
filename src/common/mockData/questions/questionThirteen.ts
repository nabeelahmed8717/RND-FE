export const questionThirteen = [
  {
    id: 1,
    questionMainHeading:
      "In computing CNAME's eligibility for the SME scheme , we need to consider not only its staff and the staff of different organizations in the group , but in addition those of companies or other business entities that had ownership of shares CNAME",
    questionSubHeading:
      "Enter the details of all companies (excluding the group companies and directors), People of Significant Control or other business entities that had ownership of 25% or a greater amount of CNAME at Accounting Period End Date:",
    formFields: [
      {
        label: "Shareholder Type",
        name: "stakeholderType",
        placeholder: "Select shareholder",
        type: "select",
        areaLargeScreen: "2.56",
      },
      {
        label: "Name",
        name: "companyName",
        placeholder: "Enter name",
        type: "text",
        areaLargeScreen: "2.56",
      },
      {
        label: "% of Shares Held",
        name: "sharesPercent",
        placeholder: "% of shares",
        type: "number",
        areaLargeScreen: "2.56",
      },
      {
        label: "Approx Staff",
        name: "approxStaff",
        placeholder: "Approx staff",
        type: "number",
        areaLargeScreen: "2.56",
      },
    ],
    selectData: [
      {
        id: "0",
        data: "Limited Company",
      },
      {
        id: "1",
        data: "Public Investment Corporation",
      },
      {
        id: "2",
        data: "University",
      },
      {
        id: "3",
        data: "Non-Profit Research Center",
      },
      {
        id: "4",
        data: "Institutional Investor",
      },
      {
        id: "5",
        data: "Regional Development Fund",
      },
      {
        id: "6",
        data: "Person of Significant Control",
      },
    ],
  },
];

export const formDetailsData = [
  {
    stakeholderType: "",
    companyName: "",
    sharesPercent: "",
    approxStaff: "",
  },
];
export const fieldsModifications = {
  areaSpacing: "2",
  formDirection: "direction-column",
  wrapperWidth: "100%",
  areaMediumScreen: "6",
  areaExtraSmallScreen: "6",
  buttonDirection: "justify-start",
  buttonFlexWidth: "95px",
  areaLargeScreen:'12',
};

export const timeSlot = [
  {
    id: 1,
    questionMainHeading:
      "In computing CNAME's eligibility for the SME scheme , we need to consider not only its staff and the staff of different organizations in the group , but in addition those of companies or other business entities that had ownership of shares CNAME.",
    questionSubHeading:
      "Enter the details of all companies (excluding the group companies and directors), People of Significant Control or other business entities that had ownership of 25% or a greater amount of CNAME. at Accounting Period End Date:",
    formFields: [
      {
        label: "Shareholder Type",
        name: "shareholderType",
        type: "time",
        areaLargeScreen: "12",
      },
    ],
    selectData: [
      {
        id: "0",
        data: "Limited Company",
      },
    ],
  },
];
