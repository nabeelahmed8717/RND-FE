
export const questionFifteen = [
    {
        id: 1,
        questionMainHeading: "In computing CNAME's eligibility for the SME scheme , we need to consider not only its staff and the staff of different companies in the group , but also in addition those of companies or other business elements that are owned by CNAME.",
        questionSubHeading: "Enter the details of all organizations in which CNAME owned 25% or more of the company shares ( not including group companies), at the Accounting Period End Date, Disregard those where the company held less than 25%.",
        formFields: [
            {
                label: "Company Name",
                name: "companyName",
                type:'text',
                areaLargeScreen: "5.67",
            },
            {
                label: "% of Shares Held",
                name: "sharesPercent",
                type:'number',
                areaLargeScreen: "2.56",
            },
            {
                label: "Approx Staff",
                name: "approxStaff",
                type:'number',
                areaLargeScreen: "2.56",
            },
        ]
    },
]
export const formDetailsData = [
    {
        "companyName": "",
        "sharesPercent": "",
        "approxStaff": "",
    },
]
export const fieldsModifications =
{
    "areaSpacing":"2",
    "formDirection": "direction-column",
    "wrapperWidth": "100%",
    "areaMediumScreen": "6",
    "areaExtraSmallScreen": "6",
    "buttonDirection": "justify-start",
"buttonFlexWidth": "95px",
}