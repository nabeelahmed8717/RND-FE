
export interface QuestionList {
    id:number,
    firstText:string,
    secondText?:string,
    thirdText?:string,
    fourthText?:string,
};

export const questionList:QuestionList[] = [
    {
        id:7,
        firstText:"Include the name of main contact person for R&D report to declare to HMRC that the applicant has ownership of claim.",
        secondText:"Select or enter the details of your main contact at CNAME."
    },
    {
        id:8,
        firstText:"Answer some questions about the company before getting into the details. This will help KonectRnD formulate project expenditure through the appropriate R&D tax scheme making sure it is worth your time and effort.",
        secondText:"How many directors company had at the end of claim period?",
        thirdText:"What was the count of full time staff at the end of claim period? (not including Directors)",
        fourthText:"Were there any external sub-contractors or consultants used during claim period? If so, how many?",
    },
]