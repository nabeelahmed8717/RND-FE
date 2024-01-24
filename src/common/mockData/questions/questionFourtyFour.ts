export const questionFortyFour = [
    {
        id: 1,
        questionMainHeading: "Please enter total salary, NIC, pension and bonus figures, along with the approximate percentage of time spent on R&D, for all staff involved in R&D during the period Accounting Period Start Date to Accounting Period End Date. Remember to consider both direct and indirect activities. If you'd rather enter overall figures, select 'Enter Overall Staff Costs'.",
        questionSubHeading: "Please enter your company’s expenditure on staff and Directors during the period Accounting Period Start Date to Accounting Period End Date. Or, if you'd rather enter costs by staff member, select 'Enter Individual Staff Costs'.",
        formFields: [
            {
                label: "Staff Name",
                name: "staffName",
                type:'text',
                areaLargeScreen: "2",
            },
            {
                label: "Total Salary",
                name: "totalSalary",
                type:'number',
                areaLargeScreen: "1.3",
            },
            {
                label: "Employer’s NIC",
                name: "employerNIC",
                type:'number',
                areaLargeScreen: "1.3",
            },
            {
                label: "Pension",
                name: "pension",
                type:'number',
                areaLargeScreen: "1.3",
            },
            {
                label: "Bonus",
                name: "bonus",
                type:'number',
                areaLargeScreen: "1.3",
            },
            {
                label: "Total Cost",
                name: "totalCost",
                type:'number',
                areaLargeScreen: "1.3",
            },
            {
                label: "% on RND",
                name: "percentRND",
                type:'number',
                areaLargeScreen: "1.3",
            },
        ]
    },
]
export const formDetailsData = [
    {
        "staffName": "",
        "totalSalary": "",
        "employerNIC": "",
        "pension": "",
        "bonus": "",
        "totalCost": "",
        "percentRND": "",
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

export const formStaffCostData = [
    {
        "id": "",
        "salaries": "",
        "pensionContributions": "",
        "employerClassOneNICContributions": "",
        "bonuses": "",
    },
]