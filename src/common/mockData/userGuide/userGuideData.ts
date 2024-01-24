import { IUserGuide } from "../../interfaces/userGuideInterface";

// Mock data
export const userGuideAccordionData: IUserGuide[] = [
  {
    id: "1",
    question: "Q1. What projects are considered as RND? ",
    answer:
      "The work that qualifies for R&D relief must be part of a specific project to make an advance in science or technology. It cannot be an advance within a social science - like economics - or a theoretical field - such as pure maths.",
    projectDesc:
      "The project must relate to your company’s trade - either an existing one, or one that you intend to start up based on the results of the R&D.",
    listLabel: "To get R&D relief you need to explain how a project:",

    answerList: [
      { id: "1", list: "looked for an advance in science and technology" },
      { id: "2", list: "had to overcome uncertainty" },
      { id: "3", list: "tried to overcome this uncertainty" },
      {
        id: "4",
        list: "could not be easily worked out by a professional in the field",
      },
    ],

    research:
      "Your project may research or develop a new process, product or service or improve on an existing one",
  },
  {
    id: "2",
    question: "Q2. What are the types of RND?",
    answer:
      "There are different types of R&D relief, depending on the size of your company and if the project has been subcontracted to you or not.",

    answerList: [
      { id: "1", list: "Small and medium sized enterprised (SME) R&D Relief" },
      { id: "2", list: "Research and Development Expenditure Credit" },
    ],
    research:
      "You can claim <strong>SME R&D relief</strong> if you're a SME with:",
    creditList: [
      { id: "1", list: "less than 500 staff" },
      {
        id: "2",
        list: "a turnover of under 100 million euros or a balance sheet total under 86 million euros",
      },
    ],
    smeRNDRelief:
      "You can claim <strong>RDEC R&D relief</strong> if you've a large company scheme with:",
    datesList: [
      { id: "1", list: "more than or equal to  500 staff" },
      {
        id: "2",
        list: "The RDEC is a tax credit, it was 11% of your qualifying R&D expenditure up to 31 December 2017. It was increased to:",
        option1: "12% from 1 January 2018 to 31 March 2020",
        option2: "13% from 1 April 2020",
      },
    ],
  },

  {
    id: "3",
    question: "Q3. What are the costs that cannot be claimed?",
    answer: "You can not claim for:",

    answerList: [
      {
        id: "1",
        list: "the production and distribution of goods and services",
      },
      { id: "2", list: "capital expenditure" },
      { id: "3", list: "the cost of land" },
      { id: "4", list: "the cost of patents and trademarks" },
    ],
  },
  {
    id: "4",
    question: "Q4. What are staff costs?",
    answer:
      "For staff working directly on the R&D project, you can claim a proportion of their: ",

    answerList: [
      { id: "1", list: "salaries" },
      { id: "2", list: "wages" },
      { id: "3", list: "Class 1 National Insurance contributions" },
      {
        id: "4",
        list: "pension fund contributions",
      },
    ],
    research:
      "You can claim for administrative or support staff who work to directly support a project (for example, specialist cleaning staff). You cannot claim for clerical or maintenance work that would have been done anyway,like managing payroll.",

    listEndDescription:
      "You can claim 65% of the relevant payments  made to an external agency if they provide  staff for the project ",
  },
  {
    id: "5",
    question: "Q5. What are subcontractor costs?",
    answer:
      "Subcontracted expenditure cannot be claimed unless it is directly undertaken by:",

    answerList: [
      { id: "1", list: "a charity" },
      { id: "2", list: "a higher education institute" },
      { id: "3", list: "a scientific research organisation" },
      {
        id: "4",
        list: "a health service body",
      },
      {
        id: "5",
        list: " an individual or partnership of individuals",
      },
    ],
  },
  {
    id: "6",
    question: "Q6. How the accounting period is determined?",
    answer:
      "The project starts when you begin working to resolve the uncertainty. You will need to identify the technical issues that need to be resolved, and make sure there is not an existing solution that has already been worked out.",

    accountingPeriodLabel:
      "The project ends when you solve the uncertainty or stop working on it. The period you claim R&D expenditure credit for should end once you have a working prototype that solves the problem, and before you go into production. ",

    accountinPeriodText:
      "Your R&D may restart if you  find another scientific or technological uncertainty after you have started producing the product. If this happens, you can claim for another period of R&D while you try to resolve it",
    listEndDescription:
      "You can make a claim up to 2 years after the end of the accounting period it relates to.",
  },
  {
    id: "7",
    question: "Q7. How to calculate RDEC?",
    answer: "To calculate your expenditure you need to:  ",

    answerList: [
      {
        id: "1",
        list: "Work out the costs that were  directly attributable to R&D.",
      },
      {
        id: "2",
        list: "Reduce any relevant subcontractor or external staff provider payments to 65% of the original cost.",
      },
      { id: "3", list: "Add all costs together" },
      {
        id: "4",
        list: "Multiply the figure  by 13% to get the expenditure credit",
      },
      {
        id: "5",
        list: "Enter this figure  into your tax return",
      },
    ],
  },
  {
    id: "8",
    question: "Q8. What you will need to provide to support your RDEC claim?",
    answer:
      "You will need to provide a short summary that explains how your projects.",

    answerList: [
      { id: "1", list: "meets our definition of R&D" },
      {
        id: "2",
        list: "looked for an advance in science and technology and aimed to achieve this advance",
      },
      {
        id: "3",
        list: "had to overcome scientific or technological uncertainty, and how you overcame this uncertainty",
      },
      {
        id: "4",
        list: "could not be easily worked out by a professional in the field",
      },
    ],
    research: "If you are claiming the credit on:",
    rdecClaim: [
      {
        id: "1",
        list: "1 to 3 projects, you must include details of all projects ",
      },
      {
        id: "2",
        list: "4 or more projects, you must include detailed descriptions of at least 3 projects (upto a maximum of 10), which between them cover 50% or more of your total qualifying R&D costs ",
      },
    ],
    needText: "You will also need:",
    rdecClaimCredit: [
      {
        id: "1",
        list: "the start and end dates of the accounting period relating to the R&D activity-these should be the same dates as the period covered by your CT600 return",
      },
      { id: "2", list: "your Unique Taxpayer Reference (URT) number" },
      { id: "3", list: "details of your qualifying R&D costs" },
    ],
  },
];
