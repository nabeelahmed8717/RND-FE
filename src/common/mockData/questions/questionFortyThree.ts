export const questionFourtyThree = [
    {
        id: 1,
        questionMainHeading: "This page allows you to add some additional detail about individual projects undertaken during the claim period. To give HMRC a flavor of what CNAME has been doing, describe a few projects that are representative of the work. In the description, make sure to include details of the technical difficulties faced and how CNAME worked towards resolving them. Do not include any details of the commercial aspects or outcomes of the project, or any information on marketing efforts linked to the work.",
        questionSubHeading: "Please enter project details below. Click '+' to add another project. ",
        formFields: [
            {
                label: "Project title",
                name: "projectTitle",
                type:'text',
                areaLargeScreen: "12",
            },
            {
                label: "Technical lead",
                name: "technicalLead",
                type:'text',
                areaLargeScreen: "12",
            },
            {
                label: "Project description (2000 characters max)",
                name: "projectDescription",
                type:'textArea',
                areaLargeScreen: "12",
            },
        ]
    },
]
export const formDetailsData = [
    {
        "projectTitle": "",
        "technicalLead": "",
        "projectDescription": "",
    },
]
export const fieldsModifications =
{
    "areaSpacing":"2",
    "formDirection": "direction-column",
    "wrapperWidth": "546px",
    "areaLargeScreen": "7",
    "areaMediumScreen": "6",
    "areaExtraSmallScreen": "6",
    "buttonDirection": "justify-end",
    "buttonFlexWidth": "100%",
}