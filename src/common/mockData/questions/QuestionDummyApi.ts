// const options=[    {
//   type: 'multiForm',
//   title: 'Enter Individual Staff Cost',
//   name: 'individualStaffCost',
//   fields: [
//     {
//       type: 'inputText',
//       name: 'staffName',
//       label: 'Staff Name',
//       value: 'waqas',
//     },
//     {
//       type: 'inputCurrency',
//       name: 'totalSalary',
//       title: 'Total Salary',
//       currency: 'GBP',
//       value: 1,
//     },
//     {
//       type: 'inputCurrency',
//       name: 'employerNIC',
//       title: "Employer's NIC",
//       currency: 'GBP',
//       value: 1,
//     },
//     {
//       type: 'inputCurrency',
//       name: 'pension',
//       title: 'Pension',
//       currency: 'GBP',
//       value: 1,
//     },
//     {
//       type: 'inputCurrency',
//       name: 'bonus',
//       title: 'Bonus',
//       currency: 'GBP',
//       value: 1,
//     },
//     {
//       type: 'inputCurrency',
//       name: 'totalCost',
//       title: 'Total Cost',
//       currency: 'GBP',
//       value: 1,
//     },
//     {
//       type: 'inputPercent',
//       name: 'percentRND',
//       title: '% on R&D',
//       value: 1,
//     },
//   ],
// },  {
//   type: 'multiForm',
//   title: 'Enter Individual Staff Cost',
//   name: 'individualStaffCost',
//   fields: [
//     {
//       type: 'inputText',
//       name: 'staffName',
//       label: 'Staff Name',
//       value: 'Ahsan',
//     },
//     {
//       type: 'inputCurrency',
//       name: 'totalSalary',
//       title: 'Total Salary',
//       currency: 'GBP',
//       value: 2,
//     },
//     {
//       type: 'inputCurrency',
//       name: 'employerNIC',
//       title: "Employer's NIC",
//       currency: 'GBP',
//       value: 2,
//     },
//     {
//       type: 'inputCurrency',
//       name: 'pension',
//       title: 'Pension',
//       currency: 'GBP',
//       value: 2,
//     },
//     {
//       type: 'inputCurrency',
//       name: 'bonus',
//       title: 'Bonus',
//       currency: 'GBP',
//       value: 2,
//     },
//     {
//       type: 'inputCurrency',
//       name: 'totalCost',
//       title: 'Total Cost',
//       currency: 'GBP',
//       value: 2,
//     },
//     {
//       type: 'inputPercent',
//       name: 'percentRND',
//       title: '% on R&D',
//       value: 2,
//     },
//   ],
// }]

// const options= [       {
//   type: 'inputCurrency',
//   name: 'salaries',
//   title: 'Salaries',
//   currency: 'GBP',
//   value: 2,
// },
// {
//   type: 'inputCurrency',
//   name: 'pensionContributions',
//   title: 'Pension contributions',
//   currency: 'GBP',
//   value: 2,
// },
// {
//   type: 'inputCurrency',
//   name: 'employerContributionsNIC',
//   title: "Employer's Class 1 NIC contributions",
//   currency: 'GBP',
//   value: 2,
// },
// {
//   type: 'inputCurrency',
//   name: 'bonuses',
//   title: 'Bonuses',
//   currency: 'GBP',
//   value: 2,
// },]

const options=[]

  export const question={
    
    data : [
    {
      questionNumber: 1,
      description:
        'The applicant must be a Limited Company to be eligible for R&D tax relief and subject to corporation tax. Limited Liability Partnerships (LLPs) or Sole Traders are not eligible to claim.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'radio',
          name: 'isApplicant',
          title: 'Is the applicant a Limited Company',
          enum: ['Yes', 'No'],
          value: '',
        },
        {
          type: 'radio',
          name: 'subjectToCorporateTax',
          title: 'Is the applicant subject to corporation tax',
          enum: ['Yes', 'No'],
          value: '',
        },
      ],
    },
    {
      questionNumber: 2,
      description:
        'At the time of making claim the applicant company must be operating on a going concern basis.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'radio',
          name: 'isUnderFormalAdminOrder',
          title: 'Is the company under a formal administration order?',
          enum: ['Yes', 'No'],
          value: '',
        },
        {
          type: 'radio',
          name: 'isUnderLiquidator',
          title: 'Is the company under the control of a liquidator?',
          enum: ['Yes', 'No'],
          value: '',
        },
        {
          type: 'radio',
          name: 'isAccountsConcernBasis',
          title:
            'Does the company publish their accounts on a going concern basis?',
          enum: ['Yes', 'No'],
          value: '',
        },
      ],
    },
    {
      questionNumber: 3,
      description:
        'HMRC may not process this claim if the company is not operating on a going concern basis anymore. Check the box to indicate that you understand this.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'checkbox',
          name: 'stopProcessOnCeaseOfGoingConcern',
          title:
            'I understand that HMRC may not process the claim if the company ceases to be a going concern after the claim is made.',
          enum: [true, false],
          value: false,
        },
      ],
    },
    {
      questionNumber: 4,
      description:
        "To claim tax relief based on company's tax return, enter the accounting period you want to be assessed for.",
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'date',
          name: 'startDate',
          title: 'Accounting Period Start Date',
          value: '',
        },
        {
          type: 'date',
          name: 'endDate',
          title: 'Accounting Period End Date',
          value: '',
        },
      ],
    },
    {
      questionNumber: 5,
      description:
        "The SME status of a company can be affected by its revenue and total balance sheet assets. enter the following figures from the company's accounts for the claim period START_DATE_4 to END_DATE_4",
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'inputCurrency',
          name: 'revenue',
          title: 'Revenue',
          currency: 'GBP',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'totalBalanceSheetAssets',
          title: 'Total balance sheet assets',
          currency: 'GBP',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'grantsDuringClaimPeriod',
          title: 'Grants received during claim period',
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 6,
      description:
        'In relation to identitying the cost, the system will request information on staft, subcontractors, IT work, utilities, Externally Provided workers, and about any grant awards obtained and what type (e-g. State Aid or something else).',
      subDescription: [
        'In the event you have your own methods of grouping and noting the costs relating to R&:D and would like to give this data yourself, then select the second option and you will be given the opportunity to enter the data.',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'radio',
          name: 'shouldAddCost',
          title: 'Would you like to add R&D cost details in this report',
          enum: ['Yes', 'No'],
          value: '',
        },
      ],
    },
    {
      questionNumber: 7,
      description:
        'Include the name of main contact person for R&D report to declare to HMRC that the applicant has ownership of claim',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'select',
          name: 'mainContactAtCompany',
          title: 'Select or enter the details of your main contact at CNAME',
          value: '',
        },
      ],
    },
    {
      questionNumber: 8,
      description:
        'Answer some questions about the company before getting into the details. This will help KonectRn D formulate project expenditure through the appropriate R&D tax scheme making sure it is worth your time and effort.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'inputNumber',
          name: 'companyDirectors',
          title: 'How many directors company had at the end of claim period?',
          value: 0,
        },
        {
          type: 'inputNumber',
          name: 'fullStaffCount',
          title:
            'What was the count of full time staff at the end of claim period? (not including Directors)',
          value: 0,
        },
        {
          type: 'inputNumber',
          name: 'externalConsultantsCount',
          title:
            'Were there any external sub-contractors or consultants used during claim period? If so, how many? ',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 9,
      description:
        'The company name registered at companies house has been entered as CNAME in the claim.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'inputText',
          name: 'companyNameForReport',
          title:
            'If you wish to use a different company name within the report, enter here:',
          value: '',
        },
        {
          type: 'checkbox',
          name: 'customerNameOnClientDetails',
          title:
            'The client can check the checkbox then the real customer name will show on screen as included Client Details',
          enum: [true, false],
          value: false,
        },
      ],
    },
    {
      questionNumber: 10,
      description:
        "Depending on company's structure there are two different schemes for R&D tax relief-the SME scheme and the Research & Development Expenditure Credit (RDEC) for Large Companies and some SMEs.",
      subDescription: [
        'Based on the group status, shareholders and shares held in other companies, the entity may qualify for either of the two or both schemes.',
        'For SMEs the tax benefit can be over 30% of the qualifying spend, whereas, for RDEC it is around 11-12% before tax. In this section the questions will help to identify which scheme the company is eligible to claim through.',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'radio',
          name: 'wasPartOfGroup',
          title:
            'Was the applicant part of any group at the end of claim period?',
          enum: ['Yes', 'No'],
          value: '',
        },
      ],
    },
    {
      questionNumber: 11,
      description:
        'The appraisal of whether an company is a SME for R&D tax relief should ensure that all staff inside the group are accounted for.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'inputNumber',
          name: 'endOfPeriodEmployeesCount',
          title:
            'How many full time employees were working at the end of claim period within the group including all staff members',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 12,
      description:
        'The appraisal of whether a company is a SME for R&D tax relief should assess the staff employed by the shareholders. This is relevant for shareholders that own over 25% of the applicant company.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'radio',
          name: 'didEntityOwnSharesPercent',
          title:
            'Did any other entity or individual own 25% or more of CNAME at Accounting Period END_DATE_4?',
          enum: [
            "Yes, atleast one entity owned more than 25% or more of company's shares",
            "No, the entity owned less than 25% of the applicant's company",
            'No, there were no other shareholders in the company',
          ],
          value: '',
        },
      ],
    },
    {
      questionNumber: 13,
      description:
        "In computing CNAME's eligibility for the SME Scheme, we need to consider not only its staff and the staff of different organizations in the group, but in addition those of companies or other business entities that had ownership of shares CNAME.",
      subDescription: [
        'Enter the details of all companies (excluding the group companies and directors), People of Significant Control or other business entities that had ownership of 25% or a greater amount of CNAME. at Accounting Period END_DATE_4:',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'multiForm',
          title: '',
          name: 'companiesOwnership',
          fields: [
            {
              type: 'select',
              name: 'stakeholderType',
              title: 'Stakeholder Type',
              enum: [
                'Limited Company',
                'Public Investment Corporation',
                'University',
                'Non-Profit Research Center',
                'Institutional Investor',
                'Regional Development Fund',
                'Person of Significant Control',
              ],
              value: '',
            },
            {
              type: 'inputText',
              name: 'companyName',
              title: 'Name',
              value: '',
            },
            {
              type: 'inputPercent',
              name: 'sharesPercent',
              title: '% of Shares Held',
              value: 0,
            },
            {
              type: 'inputNumber',
              name: 'approxStaff',
              title: 'Approx Staff',
              value: 0,
            },
          ],
        },
      ],
    },
    {
      questionNumber: 14,
      description:
        'In the last question, we asked which companies or other business entities claimed shares in CNAME. We need to know whether CNAME had ownership of shares in companies other than itself. This is significant in figuring out whether it qualifies under the SME scheme.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'radio',
          name: 'didCompanyOwnSharesPercent',
          title:
            'Did CNAME own 25% or more of the shares in any other company at Accounting Period END_DATE_4?',
          enum: [
            'Yes, the applicant co-owned more than 25% or more shares of the company',
            'No, the applicant co-owned less than 25% of the company shares',
            'No, the applicant co-owned no other company',
          ],
          value: '',
        },
      ],
    },
    {
      questionNumber: 15,
      description:
        "In computing CNAME's eligibility for the SME scheme, we need to consider not only its staff and the staff of different companies in the group, but also in addition to those of companies or other business elements that are owned by CNAME.",
      subDescription: [
        'Enter the details of all organizations in which CNAME owned 25% or more of the company shares (not including group companies), at the Accounting Period END_DATE_4, Disregard those where the company held less than 25%.',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'multiForm',
          title: '',
          name: 'companies',
          fields: [
            {
              type: 'inputText',
              name: 'companyName',
              title: 'Company Name',
              value: '',
            },
            {
              type: 'inputPercent',
              name: 'sharesPercent',
              title: '% of Shares Held',
              value: 0,
            },
            {
              type: 'inputNumber',
              name: 'approxStaff',
              title: 'Approx Staff',
              value: 0,
            },
          ],
        },
      ],
    },
    {
      questionNumber: 16,
      description:
        'We need you to tell us about the work CNAME did between the Accounting Period START_DATE_4 and END_DATE_4. We have covered off the essentials. In order for the company to qualify R&D tax relief, you need to show three key things about this work:',
      subDescription: [
        'Firstly, that there was at least one technical goal as part of a commercial or research project.',
        'Secondly, that there was at least one significant technological or scientific difficulty to overcome while trying to achieve this goal.',
        'Thirdly, that people with appropriate skills and experience worked towards overcoming the technological or scientific difficulties in the projects.',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'readonlyList',
          name: 'agreeOnNext',
          title: '',
          value: false,
        },
      ],
    },
    {
      questionNumber: 17,
      description:
        "Whilst you are preparing CNAME's claim to HMRC. Its important to clearly separate between the commercial and technical aspects of the projects. The following arrangement of inquiries is designed to help HMRC with understanding the nature of the work during this claim period.",
      subDescription: [
        'Consider the work CNAME. did during the Accounting period START_DATE_4 to END_DATE_4. Please indicate up to four types of the activities of a commercial nature undertaken during the claim period that underpinned the R&D.',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'multiSelect',
          name: 'marketList',
          title: 'Market',
          enum: [
            'Undertook work to understand target markets better',
            'Segemented its markets',
            'Repositioned its offering',
            'Diversified into new markets',
            'Increased market share',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'competitionList',
          title: 'Competition',
          enum: [
            'Caught up with the advances of competitors',
            'Moved ahead of competitors',
            'Repositioned its offering',
            'Diversified into new markets',
            'Increased market share',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'scaleList',
          title: 'Scale',
          enum: [
            'Expanded the number of sites',
            'Increased production capacity at one or more sites',
            'Achieved greater automation through machinery or software',
            'Adopted technologies capable of greater performance',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'processesList',
          title: 'Processes',
          enum: [
            'Improved business processes',
            'Improved manufacturing processes',
            'Reduced defects and re-work',
            'Introduced more efficient equipment or machinery',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'productsList',
          title: 'Products',
          enum: [
            'Developed one or more new products or services',
            'Altered existing products or services to comply with new legislation',
            'Altered existing products or services to include new knowledge or components',
            'Improved one or more products in a measurable and objective way',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'financeList',
          title: 'Finance',
          enum: [
            'Sought investment or other forms of financing',
            'Reduced staff numbers or implemented other restructuring',
            'Sought to drive up revenues through better sales and marketing',
            'Sought to drive up revenues through new and improved products',
            'Sought to reduce costs e.g. renegotiating contracts, changing suppl iers, or any other initiative',
          ],
          value: [],
        },
      ],
    },
    {
      questionNumber: 18,
      description:
        'HMRC has defined four main groups of activities that are eligible for R&D tax relief. Please read all of the statements and then confirm how closely it matches the work CNAME did between the accounting period start date to end date. The following four questions will give you a higher level explanation of each of these.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'readonly',
          name: 'agreeOnNext',
          title: '',
          value: false,
        },
      ],
    },
    {
      questionNumber: 19,
      description:
        'a) Extending overall knowledge or capability in a field of science or technology.',
      subDescription: [
        "Companies in this category are often conducting 'pure' research, in which science is undertaken for purely for scientific reasons. Practical applications might be far off, or not even considered.",
        'This kind of speculative analysis will in general happen inside expert units of huge companies, trade associations that pool the assets of numerous parts of organizations, Government-funded research organizations and companies of all sizes working with universities.',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'doesWorkfallIntoCategoryA',
          title: 'Did CNAME do any work that falls into this category?',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 20,
      description:
        "b) Create a process, material, device, product or service which started with 'blue sky' or pure research and identifying a practical application for it in the field of science or technology Companies in this grouping are in the early stage commercialization of the new innovation technologies.",
      subDescription: [
        'Companies are less concerned about building up a feasible plan of action around another innovation, they are more likely to be evaluating which applications or environments that technology could be useful, or valuable.',
        'This kind of research tends to take place in companies that have their own R&D sections, or inside smaller companies that have been the result of off-shoots of larger companies for the particular reason for transforming new information into a type of revenue. It may also happen inside little SMEs that are supported by grant funding or other investment funding until they can commercialize the new innovation by finding at least a single practical application for it.',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'doesWorkfallIntoCategoryB',
          title: 'Did CNAME do any work that falls into this category?',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 21,
      description:
        'c) Make an appreciable improvement to an existing process, material, device, product or service through scientific or technological changes.',
      subDescription: [
        'This is the most common type of claim for R&D tax relief, as most companies with their own plans and/or potentially fabricating ability are probably going to be engaged with improving the efficienct operation of their innovation. These companies additionally will in general analyze and take care of specialized issues inside their scope of understanding.',
        'Applicants in this space as of now have set up, income creating items, however are ordinarily struggling to stay in front of rivals, expect or conform to legislative changes, and meet moving, new or expected requests from their clients.',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'doesWorkfallIntoCategoryC',
          title: 'Did CNAME do any wo rk that falls into this category?',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 22,
      description:
        'd) Use science or technology to duplicate the effect of an existing process, material, device, product or service in a new or appreciably improved way',
      subDescription: [
        'Another basic region where companies make claims, this kind of R&D regularly goes with the previous section',
        "Work is regularly determined by cost or legislation - companies that are capable to identify new specialized approaches to do exactly the same things are usually compensated by efficient process, lower cost of production, or having the option to keep on working in business sectors in which their rivals can't. As in the past, applicants will tend to have in-house technologically design, problem-solving and production capabilities.",
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'doesWorkfallIntoCategoryD',
          title: 'Did CNAME do any work that falls into this category?',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 23,
      description:
        'The inquiries in this section will help identify the level of work CNAME undertook as a subcontractor, and whether it is appropriate to claim for this work. The guidelines around claiming R&D tax relief while acting as a subcontractor can be complex.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'radio',
          name: 'didWorkAsSubcontractor',
          title:
            'Between Accounting Period Start Date and Accounting Period End Date, did the CNAME work as a subcontractor to different companies?',
          enum: [
            'No, CNAME did not work as subcontractor',
            'Yes, CNAME was involved in routine work and no R&D',
            'Yes, CNAME was involved in R&D project',
          ],
          value: '',
        },
      ],
    },
    {
      questionNumber: 24,
      description:
        'HMRC states that it\'s significant that organizations use "competent professionals" to lead their ventures and to direct technical problem-solving. This is because they want to grant R&D charge to organization that are attempting to resolve genuinely difficult technical problems, as against to supporting organization that are struggling because they don\'t have appropriately experienced or qualified individuals included.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'checkbox',
          name: 'technicalProjectLeadExp',
          title:
            "Generally did the person or people leading CNAME's technical projects have:",
          enum: [
            'Qualifications relevant to the work',
            'Industry experience relevant to the work',
            'No qualifications or industry experience',
          ],
          value: [],
        },
      ],
    },
    {
      questionNumber: 25,
      description:
        "We currently need to get some information about the amount of CNAME's R&D was accomplished for different organizations, and what amount was in-house. By and large, the more R&D an organization does for its own sake and the less it accomplishes for others, the more the case will be worth that, for instance, CNAME was given a particular with no direction on how it should be accomplished, and it was not explicitly requested to perform R&D an argument can usually be made that any resultant R&D belongs to CNAME.",
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'workDoneForCompanySake',
          title:
            'Consider the total of the R&D completed between START_DATE_4 and END_DATE_4. Please utilize the slider to show around which level of this work was done for CNAME own sake',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 26,
      description:
        'When completing R&D as a subcontractor, it has a major effect whether CNAME represented a SME or a Large Company(generally, one with 500 or more staff). The difference is:',
      subDescription: [
        "In the event that CNAME Was explicitly approached to perform R&D by SMEs, it can't claim for this work. This is because the commissioning SME will be claiming the expenses as subcontracted R&D.",
        "If CNAME was explicitly approached to perform R&D for Large Companies, it can claim under the RDEC scheme. This is because that Large Companies can't claim for asubcontractors that are Limited Companies, so HMRC permits the subcontracted organization to claim for their behalf.",
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'largeCompaniesActedPercent',
          title:
            'When asked to pertorm R&D as a subcontractor, the percentage CNAME acted for Large Companies was:',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 27,
      description:
        'HMRC additionally has to know why the troubles CNAME looked during the cllaim time were challenging for its competent professionals.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'checkbox',
          name: 'troublesDuringClaimTime',
          title: 'Please check all of the reasons that apply',
          enum: [
            'Knowledge of whether components of project are scientifically possible or technologically feasible is not readily available or deducible',
            'How to achieve the main objective of project is not readily available',
            'System uncertainty exists even though the main objective is already established as scientifically feasible',
            'All the information required to achieve main objective of project was easily available',
            'Technological uncertainty exists even though the main product is scientifically feasible',
            'Conflicts in development arose while turning something that is already scientifically feasible into something which is cost-effective or reliable or reproducible',
            'It was hard to expect how various parts or factors would interrelate',
            'The result of changing numerous factors at the same time was complex and unpredictable',
            'Nothing unless there are other options - all the necessary data was openly accessible',
          ],
          value: [],
        },
      ],
    },
    {
      questionNumber: 28,
      description:
        "HMRC will only support claims for R&D that is relevant to the claimant company. This means the work claimed for has to be related to CNAME's trade of industry.",
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'checkbox',
          name: 'workRelatedToIndustry',
          title: 'Please select the option that best fits the R&D work:',
          enum: [
            'R&D is related to a trade that the company carries on',
            'R&D is realted to a subject from which it is intended that a trade to be carried on by the company will be derived',
            "There is no connection to company's current or future trade",
          ],
          value: [],
        },
      ],
    },
    {
      questionNumber: 29,
      description:
        "The technical difficulties CNAME faced in its projects are key to demonstrating to HMRC that the claim is valid. The company doesn't need to have overcome the issue, it just has to have been active in trying to diagnose and solve it.",
      subDescription: [
        'Please select up to 5 technical difficulties that CNAME faced during the claim period',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'multiSelect',
          name: 'softwareRelated',
          title: 'Software Related Difficulties',
          enum: [
            'Trying to find, diagnose and rectify race conditions',
            'Trying to find, diagnose and rectify intermittent faults',
            'Trying to overcome the constraints imposed by legacy systems and code to achieve more modern performance or behavior',
            'Trying to integrate technologies in ways that they were not designed for',
            'Trying to develop new communications protocols where none existed',
            'Trying to work with technologies with insufficient documentation',
            'Trying to overcome system limitations, such as speed, scale, processing power, storage, latency or responsiveness, where it took time and careful thought to do so',
            'Trying to design algorithms that would deliver the required performance',
            'Other',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'engineeringRelated',
          title: 'Engineering and Manufacturing process-related difficulties',
          enum: [
            'Identifying and finding ways to remedy new types of defect',
            'Scaling, where techniques that work on a small scale did not work as predicted on larger scales',
            'Trying to overcome difficulties in achieving a consistent product in the face of variable raw materials, constituent ingredients or components',
            'Trying to overcome other unexpected problems that arose from using diferent or substituted ingredients or components within the process',
            'Trying to find ways to automate tasks currently performed by people, where no existing machinery was directly applicable',
            'Trying to anticipate and prepare for the interactions between many different steps when designing a new process',
            "Trying to overcome difficulties arising in trying to make adjustments to processes in which variables couldn't be changed independently",
            'Trying to overcome difficulties that arose in trying to push the limits of production machinery',
            'Finding non-standard ways to reduce waste during the production process',
            'Developing processes that were flexible enough to be applied to multiple products',
            'Improving product composition or configuration, where attempted changes caused a series of new issues',
            'Improving product accuracy and tolerances',
            'Developing automated processes/equipment, where this could not simply be purchased or specified',
            'Developing reverse engineering or remanufacturing techniques',
            'Translating equipment or processes from one area into another, where this threw up new technical challenges',
            'Developing improved mechanisms for incorporation into products',
            'Improving something to make it faster, lighter, stronger, more resilient to failure, or otherwise better in a measurable and objective way',
            'Other',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'materialsRelated',
          title: 'Materials-Related Difficulties',
          enum: [
            'Trying to overcome difficulties in designing the composition of a new material',
            'Trying to overcome difficulties in the fabrication or manufacture of a new material',
            'Trying to overcome difficulties in the integration of several different materials to produce one with the required specifications',
            'Other',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'biotechAndChemicalManufacturingRelated',
          title: 'Biotechnology and Chemical manufacturing-related difficulties',
          enum: [
            'Developing bioassays',
            'Developing scientific protocols',
            'Submitting a scientific paper for publication',
            'Investigating chemical processes and production methods',
            'Developing new chemical/biological formulations',
            'Developing new drugs or treatments for medical/ veterinary conditions',
            'Developing improved chemical coatings/finishes',
            'Improving analytical capacities',
            'Other',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'otherDifficulties',
          title: 'Other Difficulties ',
          enum: [
            'Developing mathematical or computational models',
            'Creating models to predict the behavior of complex systems',
            'Translating concepts or knowledge from one area into another',
            'Improving data collection techniques/instruments',
            'Developing improved installation methods',
          ],
          value: [],
        },
      ],
    },
    {
      questionNumber: 30,
      description:
        'Some technical difficulties can be resolved very simply, using tried and tested techniques are known to work. Others require far more persistence, creativity and going beyond the usual ways of solving the issue. The more difficult the technical problems were, the stronger a claim for R&D tax relief..',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'technicalDifficultiesDuringClaimPeriod',
          title:
            'Use the slider below to choose the statement that best describes the significance of the technical difficulties CNAME. faced within the claim period',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 31,
      description:
        'To qualify for tax relief, the difficulties the company is working to resolve must be related to an area of science or technology.',
      subDescription: [
        'Some examples of areas that do not qualify for R&D tax relief include Archeology, Art and music, Business & management, Economics, History, Humanities, Languages and literature, Law, Media and content generation, Philosophy, ethics and religion, Political science, Psychology, Social and economic geography, Sociology, Teaching and training',
        'Please select up to 5 technical difficulties that CNAME faced during the claim period:',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'multiSelect',
          name: 'mathematics',
          title: 'Mathematics',
          enum: ['Applied mathematics', 'Statistics and probability', 'Other '],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'computerAndInformationScience',
          title: 'Computer and Information Science',
          enum: [
            'Computer Science',
            'Data science & analysis',
            'Bioinformatics',
            'Software development',
            'Mobile application development',
            'Web application development',
            'Database-centric systems',
            'Data and information security',
            'Encryption',
            'Network and communication',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'physicalScience',
          title: 'Physical Sciences',
          enum: [
            'Atomic, molecular and chemical physics',
            'Condensed matter physics',
            'Particles and fields physics',
            'Nuclear physics',
            'Fluids and plasma physics',
            'Optics',
            'Acoustics',
            'Astronomy and space science',
            'Other',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'chemicalScience',
          title: 'Chemical Sciences',
          enum: [
            'Organic chemistry',
            'Inorganic and nuclear chemistry',
            'Physical chemistry',
            'Polymer science',
            'Electrochemistry',
            'Colloid chemistry',
            'Analytical chemistry',
            'Other',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'environmentScience',
          title: 'Environment Sciences',
          enum: [
            'Geosciences',
            'Mineralogy',
            'Paleontology',
            'Geochemistry and geophysics',
            'Physical geography',
            'Geology',
            'Volcanolog8y',
            'Meteorology and atmospheric sciences',
            'Climatic research',
            'Oceanography',
            'Hydrology',
            'Water resources',
            'Others',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'biologicalScience',
          title: 'Biological Sciences',
          enum: [
            'Cell biology',
            'Microbioloy',
            'Virology',
            'Biochemistry',
            'Molecular Biology',
            'Biochemical research methods',
            'Biophysics',
            'Genetics and heredity',
            'Reproductive biology',
            'Developmental biology',
            'Plant science',
            'Mycology',
            'Zoology',
            'Ornithologyy',
            'Entomology',
            'Behavioral sciences biology',
            'Marine biology',
            'Freshwater biology',
            'Limnology',
            'Ecology',
            'Biodiversity conservation',
            'Mathematical biology',
            'Cryobiology',
            'Evolutionary biology',
            'Other',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'civilEngineering',
          title: 'Civil Engineering',
          enum: [
            'Civil Engineering',
            'Architecture engineering',
            'Construction engineering',
            'Municipal and structural engineering',
            'Transport engineering',
            'Other',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'electricalElectronicInformationEngineering',
          title:
            'Electrical Engineering, Electronic Engineering, Information Engineering ',
          enum: [
            'Electrical and electronic engineering',
            'Robotics and automatic control',
            'Automation and control systems',
            'Communication engineering and systems',
            'Telecommunications',
            'Computer hardware and architecture',
            'Other',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'mechanicalEngineering',
          title: 'Mechanical Engineering',
          enum: [
            'Mechanical Engineering',
            'Applied mechanics',
            'Thermodynamics',
            'Aerospace engineering',
            'Nuclear related engineering',
            'Audio engineering',
            'Reliability analysis',
            'Other',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'chemicalEngineering',
          title: 'Chemical Engineering',
          enum: [
            'Chemical engineering (plants, products)',
            'Chemical process engineering',
            'Other ',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'materialEngineering',
          title: 'Material Engineering',
          enum: [
            'Materials engineering',
            'Ceramics',
            'Coating and films',
            'Composites (including laminates, reinforced plastics, cermets, combined natural and synthetic fibre fabrics; filled composites)',
            'Paper and wood',
            'Textiles',
            'Other',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'medicalEngineering',
          title: 'Medical Engineering',
          enum: [
            'Medical Engineering',
            'Medical laboratory technology (including laboratory samples analysis and diagnostic technologies)',
            'Other ',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'industrialBiotechnology',
          title: 'Industrial Biotechnology',
          enum: [
            'Industrial biotechnology',
            'Biocatalysts',
            'Fermentation',
            'Bioproducts (products that are manufactured using biological material as feedstock)',
            'Biomaterials',
            'Bioplastics',
            'Biofuels',
            'Bioderived bulk and fine chemicals',
            'Bio-derived novel materials',
            'Other',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'nanotechnology',
          title: 'Nanotechnology',
          enum: [
            'Nano-materials (production and properties)',
            'Nano-processes (applications and nano-scale)',
            'Other ',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'foodAndBeverages',
          title: 'Food and Beverages',
          enum: [
            'Meat, poultry and fish',
            'Milling',
            'Animal feeds',
            'Bakery products',
            'Dairy products',
            'Fruit and vegetables',
            'Confectionery',
            'Brewing and distilling',
            'Soft drinks',
            'Chilled and frozen products',
            'Ingredients manufacture',
            'Other',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'basicMedicine',
          title: 'Basic Medicine',
          enum: [
            'Anatomy and morphology',
            'Human genetics',
            'Immunology',
            'Neurosciences (including psychophysiology)',
            'Pharmacology and pharmacy',
            'Medicinal chemistry',
            'Toxicology',
            'Physiology (including cytology)',
            'Pathology',
            'Other',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'clinicalMedicine',
          title: 'Clinical Medicine ',
          enum: [
            'Andrology',
            'Obstetrics and genecology',
            'Pediatrics',
            'Cardiac and Cardiovascular systems',
            'Peripheral vascular disease',
            'Hematology',
            'Respiratory systems',
            'Critical care medicine and Emergency medicine',
            'Anesthesiology',
            'Orthopedics',
            'Surgery',
            'Radiology, nuclear medicine and medical imaging',
            'Transplantation',
            'Dentistry, oral surgery and medicine',
            'Dermatology and venereal diseases',
            'Allergy',
            'Rheumatology',
            'Endocrinology and metabolism (including diabetes, hormones)',
            'Gastroenterology and hepatology',
            'Urology and nephrology',
            'Oncology',
            'Ophthalmology',
            'Otorhinolaryngology',
            'Psychiatry',
            'Clinical neurology',
            'Geriatrics and gerontology',
            'General and internal medicine; other clinical medicine subjects',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'healthScience',
          title: 'Health Sciences',
          enum: [
            'Nutrition',
            'Public and environmental health',
            'Tropical medicine',
            'Parasitology',
            'Infectious diseases',
            'Epidemiology',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'medicalBiotechnology',
          title: 'Medical Biotechnology',
          enum: [
            'Health-related biotechnology',
            'Technologies involving the manipulation of cells, tissues, organs or the whole organism (assisted reproduction)',
            'Technologies involving identifying the functioning of DNA, proteins and enzymes',
            'Biomaterials (as related to medical implants, devices, sensors)',
            'Forensic science',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'agricultureForestryFisheries',
          title: 'Agriculture forestry and fisheries',
          enum: [
            'Agriculture',
            'Forestry',
            'Fishery',
            'Soil science',
            'Agronomy, plant breeding and plant protection',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'animalDairyScience',
          title: 'Animal and Dairy Science',
          enum: ['Animal and diary science', 'Husbandry', 'Veterinary science '],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'agricultureBiotechnology',
          title: 'Agriculture Biotechnology',
          enum: [
            'Agricultural biotechnology and food biotechnology',
            'GM technology (crops and livestock)',
            'Livestock cloning',
            'Marker assisted selection',
            'Diagnostics (e.g. DNA chips and bioventing devices for the early/accurate detection of diseases)',
            'Biomass feedstock production technologies',
            'Biopharming',
          ],
          value: [],
        },
      ],
    },
    {
      questionNumber: 32,
      description:
        "HMRC need to know when CNAME. was trying to overcome these technical difficulties. Only work that took place within the claim period is eligible for relief. However, the work could have been started before the start of the claim period, or finished after the end of the claim period it doesn't matter! Some eligible activities just have to have been carried out during this time.",
      subDescription: [
        'Please indicate over what period the technical problem solving took place. This may be the entire claim period or just part of it',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'date',
          name: 'startDate',
          title: 'Claim Period Start Month',
          value: '',
        },
        {
          type: 'date',
          name: 'endDate',
          title: 'Claim Period End Month',
          value: '',
        },
      ],
    },
    {
      questionNumber: 33,
      description:
        'Routine activities are those that involve little or no technical risk, usually because the task has been done before and is well understood. In claiming for R&D tax relief, it is good practice to show HMRC that the company is able to separate ineligible routine work from the eligible work required to tackle its significant technical challenges.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'checkbox',
          name: 'technicalChallenges',
          title:
            'Please select all the routine activities carried out during claim period',
          enum: [
            'Using search engines to find and review information online',
            'Carrying out market research',
            'Organising funding for the work and preparing budgets',
            'Arranging commercial terms with suppliers',
            'Undertaking artistic, cosmetic or aesthetic design',
            'Fine-tuning and optimising after core technical concepts have been proven',
            'Bug-fixing, where bugs were easily traceable and resolvable',
            'Marketing',
            'Registering patents',
            'Carrying out financial and commercial steps related to the technology',
            'No routine activities were carried out during the claim period',
          ],
          value: [],
        },
      ],
    },
    {
      questionNumber: 34,
      description:
        'Activities that directly contribute to R&D are those undertaken by people who are part of the core R&D team. This can include project management, the setting of technical goals and participating in testing and problem-solving. Activities that indirectly contribute to R&D are those that enable the R&D work to be carried out, such as payroll and IT support.',
      subDescription: [
        'Please select up to 5 activities carried out by CNAME. during the claim.',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'multiSelect',
          name: 'directActivitiesContribution',
          title: 'Activities that directly contribute to R&D',
          enum: [
            'Consulting with experienced staff or external consult.',
            'Defining technical objectives.',
            'Assessing technical feasibility.',
            'Predicting and preparing for technical issues.',
            'Allocating and managing resources.',
            'Project managing technical aspects of the project.',
            'Identifying, analysing and classifying issues.',
            'Creating software specifically to help solve a technical problem.',
            'Building and testing prototypes of the intended product.',
            'Building and testing software iterations of the intended product.',
            'Building and testing pilot plants or hardware.',
            'Performing experiments',
            'Designing and running trials.',
            'Carrying out other design, testing and analysis required to overcome technical difficulties.',
          ],
          value: [],
        },
        {
          type: 'multiSelect',
          name: 'indirectActivitiesContribution',
          title: 'Activities that indirectly contribute to R&D',
          enum: [
            'Producing documentation or other reports related to the R&D',
            'Maintaining facilities where the work took place',
            'Providing IT support for computers used during the work',
            'Providing security for facilities where work took place',
            'Carrying out administration, finance, HR activities related to the work',
            'Inducting staff onto projects',
            'Training staf, to enable them to participate in the project',
            'Carrying out feasibility studies to inform the direction of R&D',
          ],
          value: [],
        },
      ],
    },
    {
      questionNumber: 35,
      description:
        "Although there is no formal requirement to keep records on a company's R&D activities, it is helpful to demonstrate to HMRC that the company has evidence to support its tax claim.",
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'checkbox',
          name: 'taxClaimEvidence',
          title:
            'Please select below the types of things CNAME has available to evidence the work',
          enum: [
            'Emails relevant to the work',
            'Development diaries',
            'Sprint plans',
            'Time sheets',
            'Prototypes, whether physical or software',
            'Project plans',
            'Files related to the development work',
            'Invoices related to the development work',
            'Contracts related to the development work',
            'Documents summarizing results or effort',
            'Other',
            'Nothing is available to evidence the work',
          ],
          value: [],
        },
      ],
    },
    {
      questionNumber: 36,
      description:
        'Having received grant funding will never stop a company being able to make a claim, but the size and type of the grant can have a significant impact on the claim size. The next few questions are designed to identify the size and type of grants received, and enable us to calculate the impact on the claim.',
      subDescription: [
        'Remember that any CBILS/BBLS loans received are classed as Notified State Aid, and should be included in this section.',
        'The accounts state that CNAME received a total of £ FIELD_C_AMOUNT_5 of grant funding during the claim period Accounting Period Start Date to Accounting Period End Date. 1s this amount correct?',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'checkbox',
          name: 'grantFunding',
          title: 'Yes, £ FIELD_C of grand funding was received',
          enum: [true, false],
          value: false,
        },
        {
          type: 'inputCurrency',
          name: 'grantFundingAlt',
          title: 'No it should be:',
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 37,
      description:
        'CNAME. received £ FIELD_C_AMOUNT_5 in grants during the claim period. If this includes CBILS/BBLS, think about whether any of the loan was used to pay for any aspect of R&D, including salaries of staff carrying out the R&D.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'inputCurrency',
          name: 'grantFundingUsedOnProjects',
          title: 'How much of this grant funding was used on the R&D projects?',
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 38,
      description:
        '£ AMOUNT_37 of grant funding was used on R&D projects. We now need to know how much of this was used on technical aspects of the work, such as staff salaries, materials and subcontractors costs linked to technical parts of your project. Non-technical aspects of the projects can be things like sales, marketing, the purchase of capital equipment, recruitment, relocation and business consultancy. ',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'percentForTechnicalAspects',
          title:
            'What percentage of this £ AMOUNT_37 was for technical aspects of the R&D work?',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'amountForTechnicalAspects',
          title:
            'What percentage of this £ AMOUNT_37 was for technical aspects of the R&D work?',
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 39,
      description:
        "You've told us that £ AMOUNT_38 of grant funding was used during the claim period for technical aspects of the work.",
      subDescription: [
        'We now need to work out what types of grant were used, as this will affect the claim. The crucial distinction to be made is whether the grants are:',
        '1.Notified State Aid',
        "Also known as 'non-de minimis State Aid' or simply 'State Aid'. This type of funding has a heavy impact on R&D projects, as it pushes them into the much less generous RDEC scheme. All CBILS/BBLS loans are this type of funding.",
        "2.Any other type of funding, including 'de minimis State Aid'.",
        'This type of funding has a lesser impact, as some of the funded expenditure can still be routed through the SME scheme.',
        "If you don't know what type of grant was received, check the award letter. If the grant was Notified State Aid, this should be stated clearly. If the information is missing or not clear, the grant provider will be able to tell you what type of grant was received.",
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'notifiedStateAidPercent',
          title:
            'Of the grants used on technical aspects of the R&D, what percentage was Notified State Aid?',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'spentOnTechnicalAspects',
          title:
            'Alternatively, if you know exactly how much CNAME spent on technical aspects of the R&D work, enter that figure:',
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 40,
      description:
        '£ SPENT_AMOUNT_39, REMAIN_AMOUNT_39 of notified state aid and £ (amount remaining based on what user entered in Question 39 out of total grant amount) of other funding were used on technical aspects of the projects. Next we need to know what types of work the grants were used on.',
      subDescription: [
        "As described in the 'Acting as a Subcontractor' section, the three different types of activity are:",
        '1.R&D for SMEs',
        'SMEs engage CNAME specifically to perform R&D. Allocating grants to this activity has no detrimental impact on the claim.',
        '2.R&D for LCs ',
        'Large Companies engage CNAME specifically to perform R&D. Allocating grants to this activity has a moderate detrimental impact on the claim.',
        '3. In-house R&D ',
        "In-house R&D is the complex technical problem-solving conducted on CNAME's own account, or for clients that have not specifically engaged it to do R&D. Allocating grants to this activity has the biggest detrimental impact on the claim.",
        'By indicating how the grants were used, we can calculate their impact on the claim.',
        "Please allocate CNAME's grant funding across the different types of activity",
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'multiForm',
          title: 'Notified State Aid',
          subTitle: 'Please allocate £ QUESTION_39_AMOUNT',
          name: 'notifiedStateAid',
          fields: [
            {
              type: 'inputCurrency',
              name: 'sme',
              title: 'R&D for SMEs',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'lc',
              title: 'R&D for LCs',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'inHouse',
              title: 'In-house R&D',
              currency: 'GBP',
              value: 0,
            },
          ],
        },
        {
          type: 'multiForm',
          title: 'Other Funding',
          subTitle: 'Please allocate £ QUESTION_39_AMOUNT',
          name: 'otherFunding',
          fields: [
            {
              type: 'inputCurrency',
              name: 'sme',
              title: 'R&D for SMEs',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'lc',
              title: 'R&D for LCs',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'inHouse',
              title: 'In-house R&D',
              currency: 'GBP',
              value: 0,
            },
          ],
        },
      ],
    },
    {
      questionNumber: 41,
      description:
        "£4 of Notified State Aid was used on CNAME's in-house R&D projects. Ok, so now we need to work out how many of the projects were funded in any part by this aid.",
      subDescription: [
        'Think about how many R&D projects were undertaken during the claim period, and how many of those received any Notified State Aid. Remember that a project is affected by Notified State Aid if any amount of the grant was used to fund it, even if it was only £1.',
        'For Example, if CNAME. carried out one project during the claim year, and received a state aid grant for this, then the slider should be set to 100%. On the other hand, if CNAME. carried out five R&D projects during the claim year, and used state aid to fund two of them, the slider should be set to 40%.',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'notifiedStateAidPercentReceived',
          title:
            'What percentage of the in-house R&D projects received any Notified State Aid ?',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 42,
      description:
        "Great! You've completed the questions about projects, and we now have enough information to produce a robust narrative for submission to HMRC. At this stage, you can choose to add some optional technical detail to showcase the types of projects being claimed for.",
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'radio',
          name: 'addMoreDetail',
          title: 'Would you like to add additional detail?',
          enum: ['Yes', 'No'],
          value: '',
        },
      ],
    },
    {
      questionNumber: 43,
      description:
        'This page allows you to add some additional detail about individual projects undertaken during the claim period. To give HMRC a flavor of what CNAME has been doing, describe a few projects that are representative of the work. In the description, make sure to include details of the technical difficulties faced and how CNAME worked towards resolving them. Do not include any details of the commercial aspects or outcomes of the project, or any information on marketing efforts linked to the work.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'multiForm',
          title:
            'Please enter project details below. Click + to add another project.',
          name: 'individualProjects',
          fields: [
            {
              type: 'inputText',
              name: 'projectTitle',
              title: 'Project Title',
              value: '',
            },
            {
              type: 'inputText',
              name: 'technicalLead',
              title: 'Technical Lead',
              value: '',
            },
            {
              type: 'textArea',
              name: 'projectDescription',
              title: 'Project Description ( 2000 Characters Max )',
              value: '',
            },
          ],
        },
      ],
    },
    {
      questionNumber: 44,
      description:
        "Please enter total salary, NIC, pension and bonus figures, along with the approximate percentage of time spent on R&D, for all staff involved in R&D during the period Accounting Period START_DATE_4 to END_DATE_4. Remember to consider both direct and indirect activities. If you'd rather enter overall figures, select 'Enter Overall Staff Costs!.",
      subDescription: [
        "Please enter your company's expenditure on staff and Directors during the period Accounting Period START_DATE_4 to END_DATE_4. Or, if you'd rather enter costs by staff member, select 'Enter Individual Staff Costs",
      ],
      isUpdated: false,
      isCostQuestion: false,
      individualStaffCost: [
        {
          type: 'multiForm',
          title: 'Enter Individual Staff Cost',
          name: 'individualStaffCost',
          isSelected: true,
          fields: [
            {
              type: 'inputText',
              name: 'staffName',
              label: 'Staff Name',
              value: '',
            },
            {
              type: 'inputCurrency',
              name: 'totalSalary',
              title: 'Total Salary',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'employerNIC',
              title: "Employer's NIC",
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'pension',
              title: 'Pension',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'bonus',
              title: 'Bonus',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'totalCost',
              title: 'Total Cost',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputPercent',
              name: 'percentRND',
              title: '% on R&D',
              value: 0,
            },
          ],
        },
      ],
      overallStaffCost: [
        {
          type: 'inputCurrency',
          name: 'salaries',
          title: 'Salaries',
          currency: 'GBP',
          value: 1,
        },
        {
          type: 'inputCurrency',
          name: 'pensionContributions',
          title: 'Pension contributions',
          currency: 'GBP',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'employerContributionsNIC',
          title: "Employer's Class 1 NIC contributions",
          currency: 'GBP',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'bonuses',
          title: 'Bonuses',
          currency: 'GBP',
          value: 0,
        },
      ],
      options: options,
    },
    {
      questionNumber: 45,
      description:
        "Think about how much of CNAME's staff time was spent in trying to resolve the sorts of technical difficulty described in previous sections. You should also include the time of staff who were supporting those performing the direct work. In practice, this figure usually ranges from less than 10% in large manufacturing businesses to more than 60% in smaller companies. HMRC's expectation is that it should never reach 100%, as there is almost always a routine component to a company's activities.",
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'staffTimeSpentPercent',
          title:
            "Please estimate what percentage of CNAME's staff time was spent on R&D (you can include both direct and indirect activities).",
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'staffTimeSpentAmount',
          title:
            "Alternatively, if you know exactly how much of your staff's time spent on R&D, enter that figure:",
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 46,
      description:
        "CNAME. paid £2500 of employer's NICs during the claim period. If the company claimed employment allowance for this period, we need to take this into account when calculating staff costs. If your answers to the previous question already took account of Employment Allowance, enter zero for this question.",
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'inputCurrency',
          name: 'employmentAllowanceDuringClaimPeriod',
          title:
            'Please enter the total Employment allowance claimed by CNAME. during the claim period.',
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 47,
      description:
        'Expenses that were incurred by employees in carrying out R&D and reimbursed by the company can be included in an R&D claim. This can include travel and subsistence, as long as it related directly to the R&D project.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'inputCurrency',
          name: 'expenditureOnReimbursedExpenses',
          title:
            "Please enter CNAME's expenditure on reimbursed R&D expenses during the period Accounting Period START_DATE_4 to END_DATE_4:",
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 48,
      description:
        'CNAME. can claim for the cost of software where that software is used directly or indirectly in its R&D. For example, this could be specialist software used directly on R&D, word processing software used by engineers to produce their reports, or a fair proportion of the administration software used by staff who support the engineers.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'inputCurrency',
          name: 'expenditureOnSoftware',
          title:
            "Please enter CNAME's total expenditure on software from Accounting period START_DATE_4 to END_DATE_4.",
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 49,
      description:
        'During the claim period, CNAME. spent a total of £ AMOUNT_48 on software.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'directAndIndirectPercent',
          title:
            'What percentage of this was relevant to the R&D? You can include both direct and indirect activities.',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'directAndIndirectAmount',
          title:
            "Alternatively, it you know exactly how much of your company's software costs was spent on R&D, enter that figure: ",
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 50,
      description:
        'Payments made to volunteers to participate in clinical trials can be included when calculating the costs of an R&D claim.',
      subDescription: [
        'Did CNAME make payments to people to participate in clinical trials? If so, how much did it spend during each phase?',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'checkbox',
          name: 'didCompanyPayForClinicalTrials',
          title:
            "No, the company didn't pay people to participate in clinical trials",
          enum: [true, false],
          value: false,
        },
        {
          type: 'inputCurrency',
          name: 'phaseOneAmount',
          title: 'Yes, for phase 1 trials',
          currency: 'GBP',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'phaseTwoAmount',
          title: 'Yes, for phase 2 trials',
          currency: 'GBP',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'phaseThreeAmount',
          title: 'Yes, for phase 3 trials',
          currency: 'GBP',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'phaseFourAmount',
          title: 'Yes, for phase 4 trials',
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 51,
      description:
        'CNAME can claim for the cost of materials that have been used in its R&D.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'inputCurrency',
          name: 'expenditureOnRawMaterials',
          title:
            "During the claim period, what was CNAME's total expenditure on raw materials?",
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 52,
      description:
        'CNAME. spent a total of £ SUM_AMOUNT_50 on raw materials. Any materials transformed or consumed during the R&D can be included in the claim. Some examples of elgible raw materials are:',
      subDescription: [
        "Materials used to build prototypes, as long as the prototypes aren't sold.",
        'Paper and ink used to print out your plans and reports.',
        'Materials or ingredients wasted, used or consumed during experimentation and trials.',
        'Please note that despite bandwidth being consumed, broadband costs are not eligible expenses.',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'rawMaterialExpenditurePercent',
          title:
            'Please estimate what percentage or the raw materials expenditure was relevant to CNAME.',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'rawMaterialExpenditureAmount',
          title:
            "Alternatively, it you know exactly how much of your company's raw materials costs was spent on R&D, enter that figure: ",
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 53,
      description:
        'In addition to raw materials, the heat and light costs associated with R&D can be included in the claim. Some companies are charged separately for these, while others pay for them as part of their rent.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'radio',
          name: 'didPayForHeatAndLight',
          title: 'How did CNAME pay for heat and light?',
          enum: ['Included within rent', 'Charged separately from rent'],
          value: '',
        },
      ],
    },
    {
      questionNumber: 54,
      description: 'CNAME. paid for heat and light as part of its rent.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'inputCurrency',
          name: 'expenditureOnRent',
          title:
            "During the claim period, what was CNAME's total expenditure on rent?",
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 55,
      description: 'CNAME paid for heat and light separately from rent.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'inputCurrency',
          name: 'expenditureOnHeatAndLight',
          title:
            "For the claim period, what was CNAME's total expenditure on heat and light?",
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 56,
      description:
        "CNAME spent E AMOUNT_54 on rent, which includes the cost of heat and light. HMRC usually takes a pragmatic approach in these circumstances, and suggest that you include 10% of the cost of the rent as the total cost of heat and light. On this basis, the estimated cost of CNAME's heat and light for the claim period is £ AMOUNT_54.",
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'associatedWithRNDPercent',
          title: 'How much of the £ AMOUNT_54 was associated with the R&D?',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'associatedWithRNDAmount',
          title: 'How much of the £ AMOUNT_54 was associated with the R&D? ',
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 57,
      description:
        "It's not just CNAME's own staff's time that can be claimed for. You can claim for the costs of people who worked on the projects, but were employed by another company in the group. These are usually paid for through inter-company recharges.",
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'radio',
          name: 'workersEmployedByGroupCompany',
          title:
            'Were any of the workers on the project(s) employed by a group company, and their costs recharged to CNAME?',
          enum: ['Yes', 'No'],
          value: '',
        },
      ],
    },
    {
      questionNumber: 58,
      description:
        'CNAME spent £ AMOUNT_55 on heat and light during the claim period.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'totalUsedPercent',
          title:
            'What percentage of this total was used on the R&D projects: (Remember to consider both direct and indirect R&D activities.',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'totalUsedAmount',
          title:
            "Alternatively, if you know exactly how much of your company's heat &light costs was spent on R&D, enter that figure: ",
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 59,
      description:
        "You've indicated that some of the staff who worked on the projects were employed by companies within the group, and their costs re-charged to CNAME",
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'inputCurrency',
          name: 'totalSpentOnGroupRecharges',
          title:
            "What was CNAME's total spend in the claim period on these group recharges?",
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 60,
      description:
        'In the claim period, CNAME. Spent £ AMOUNT_59 on recharges related to staff employed by a group company.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'relevantExpenditurePercent',
          title:
            'What percentage of this expenditure was relevant to CNAMEs R&D? (Remember to consider both direct and indirect R&.D activities.)',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'relevantExpenditureAmount',
          title:
            "Alternatively, it you know exactly how much your company's recharges related to staf employed by a group company, enter that figure:",
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 61,
      description:
        "It's not just CNAME's' own staff time that can be claimed for. You can also claim for people who worked for CNAME, but who were paid by an external staff-provider rather than CNAME. In other words, CNAME paid a company to provide it with workers, that company paid the workers, and the workers worked under CNAME's direction. In HMRC's jargon, these are called 'Externally Provided Workers' (EPWs). If, on the other hand, CNAME engaged another company to perform a specific task, then this is subcontracted R&D and is covered in the next section.",
      subDescription: [
        'For costs related to connected staff providers, you can claim for the lower of either the payment to the staff provider, or the relevant costs of the staff provider. These include salaries, employers NICs and pension contributions, bonuses and reimbursed R&D related expenses. For a detailed definition of connected staff providers, see CIRD82150.',
        "Were any of the workers on CNAME's project(s):",
        'Employed by a staf-provider company, and',
        'Paid via that company to provide services to CNAME?',
        'If yes, please enter the total expenditure during the claim period for each category of EPW.',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'checkbox',
          name: 'didUseExternalWorkers',
          title: "No, CNAME didn't use any externally provided workers",
          enum: [true, false],
          value: false,
        },
        {
          type: 'inputCurrency',
          name: 'connectedStaffProviders',
          title: 'EPWs from connected staff providers',
          currency: 'GBP',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'unconnectedStaffProviders',
          title: 'EPWs from unconnected staff providers',
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 62,
      description:
        'Where a company subcontracts R&D-related activities to certain types of organization, those costs are eligible for R&D tax relief. CNAME can claim for subcontractors who helped it overcome the technical difficulties you told us about previously. Do not include subcontractors who performed non-technical activities, such as sales, marketingor advertising.',
      subDescription: [
        'The rates of relief are different depending on whether CNAME used connected or unconnected subcontractors, so it is important that you separate the subcontractor costs into connected and unconnected.',
        'For connected subcontractors, CNAME can claim for the lower of either the payment to the subcontractor, or the relevant costs of the subcontractor. These include the costs of staff, agency workers, software, utilities and raw materials. For a detailed definition of connected subcontractors.',
        'Did CNAME use any of the following as subcontractors to carry out specific parts of its R&D projects? If yes, please enter the total annual expenditure for each category of subcontractor.',
      ],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'checkbox',
          name: 'didNotUseSubcontractors',
          title: "No, CNAME didn't use any subcontractors",
          enum: [true, false],
          value: false,
        },
        {
          type: 'multiForm',
          title: 'Limited Companies',
          name: 'limitedCompanies',
          fields: [
            {
              type: 'inputCurrency',
              name: 'connected',
              title: 'Connected',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'unconnected',
              title: 'Unconnected',
              currency: 'GBP',
              value: 0,
            },
          ],
        },
        {
          type: 'multiForm',
          title: 'Individuals (i.e. Sole Traders)',
          name: 'individuals',
          fields: [
            {
              type: 'inputCurrency',
              name: 'connected',
              title: 'Connected',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'unconnected',
              title: 'Unconnected',
              currency: 'GBP',
              value: 0,
            },
          ],
        },
        {
          type: 'multiForm',
          title: 'Partnerships',
          name: 'partnerships',
          fields: [
            {
              type: 'inputCurrency',
              name: 'connected',
              title: 'Connected',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'unconnected',
              title: 'Unconnected',
              currency: 'GBP',
              value: 0,
            },
          ],
        },
        {
          type: 'multiForm',
          title: 'Charities',
          name: 'charities',
          fields: [
            {
              type: 'inputCurrency',
              name: 'connected',
              title: 'Connected',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'unconnected',
              title: 'Unconnected',
              currency: 'GBP',
              value: 0,
            },
          ],
        },
        {
          type: 'multiForm',
          title: 'Universities',
          name: 'universities',
          fields: [
            {
              type: 'inputCurrency',
              name: 'connected',
              title: 'Connected',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'unconnected',
              title: 'Unconnected',
              currency: 'GBP',
              value: 0,
            },
          ],
        },
        {
          type: 'multiForm',
          title: 'Other higher education bodies',
          name: 'higherEducationBodies',
          fields: [
            {
              type: 'inputCurrency',
              name: 'connected',
              title: 'Connected',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'unconnected',
              title: 'Unconnected',
              currency: 'GBP',
              value: 0,
            },
          ],
        },
        {
          type: 'multiForm',
          title: 'Scientific research organizations',
          name: 'scientificResearchOrg',
          fields: [
            {
              type: 'inputCurrency',
              name: 'connected',
              title: 'Connected',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'unconnected',
              title: 'Unconnected',
              currency: 'GBP',
              value: 0,
            },
          ],
        },
        {
          type: 'multiForm',
          title: 'Health Service bodies',
          name: 'healthServiceBodies',
          fields: [
            {
              type: 'inputCurrency',
              name: 'connected',
              title: 'Connected',
              currency: 'GBP',
              value: 0,
            },
            {
              type: 'inputCurrency',
              name: 'unconnected',
              title: 'Unconnected',
              currency: 'GBP',
              value: 0,
            },
          ],
        },
      ],
    },
    {
      questionNumber: 63,
      description:
        'CNAME incurred costs for Externally Provided Workers during the claim period.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'connectedStaffProvidersPercent',
          title:
            'What percentage of the £1000 spend on EPWs from connected staft providers was relevant to the R&D? Remember to consider both direct and indirect R&D activities.',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'connectedStaffProvidersAmount',
          title:
            "Alternatively, if you know exactly how much your company's spend on EPWs from connected staff providers was, enter that figure: ",
          currency: 'GBP',
          value: 0,
        },
        {
          type: 'slider',
          name: 'unconnectedStaffProvidersPercent',
          title:
            'What percentage of the £1500 spend on EPWs from unconnected staff providers was relevant to the R&D? Remember to consider both direct and indirect R&D activities.',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'unconnectedStaffProvidersAmount',
          title:
            "Alternatively, it you know exactly how much your company's spend on EPWs trom unconnected staft providers was relevant to the R&D, enter that figure: ",
          currency: 'GBP',
          value: 0,
        },
      ],
    },
    {
      questionNumber: 64,
      description:
        'CNAME incurred costs for subcontractors during the claim period.',
      subDescription: [],
      isUpdated: false,
      isCostQuestion: false,
      options: [
        {
          type: 'slider',
          name: 'connectedSubcontractorsPercent',
          title:
            'What percentage of the £ SUM_CONNECTED_62 spend on connected subcontractors was relevant to the R&D? Remember to consider both direct and indirect R&D activities.',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'connectedSubcontractorsAmount',
          title:
            "Alternatively, if you know exactly how much your company's spend on connected subcontractors relevant to the R&D was, enter that figure:",
          currency: 'GBP',
          value: 0,
        },
        {
          type: 'slider',
          name: 'unconnectedSubcontractorsPercent',
          title:
            'What percentage of the £ SUM_UNCONNECTED_62 spend on unconnected subcontractors was relevant to the R&D? Remember to consider both direct and indirect R&D activities.',
          value: 0,
        },
        {
          type: 'inputCurrency',
          name: 'unconnectedSubcontractorsAmount',
          title:
            "Alternatively, if you know exactly how much your company's spend on unconnected subcontractors was relevant to the R&D was, enter that figure:",
          currency: 'GBP',
          value: 0,
        },
      ],
    },
  ]
}

  export function makeState(payload:any,check:boolean=false,individual:boolean=false){

    let data={...payload}
    if(data.questionNumber===44 && !data.isUpdated){
        if(data.individualStaffCost[0]['isSelected'] ){
  
            data['options']=data.individualStaffCost
        } else{
          data['options']=data.overallStaffCost
        }
    }
    if(data.questionNumber===44 && check){
       if(data.individualStaffCost[0]['isSelected'] && !individual){
         data['options']=data.overallStaffCost
        }else if(!data.individualStaffCost[0]['isSelected'] && individual){
        data['options']=data.individualStaffCost
      }
    }
    let tempObj={}
    let options=[]
    let type=[]
    let defaultValues=[]
    let tempArray=[]
    data.options.map((item,ind)=>{
      let tempObject={}
      if(item.type==="multiForm"){
        item.fields.forEach((multiFormOption)=>{
          tempObject[multiFormOption.name]=multiFormOption.value
        })
        if(data.questionNumber===62){
          tempObj[item.name]=tempObject
        }
        tempArray.push(tempObject)
        type.push(item.type)
        options.push({question:item.title,name:item.name,labels:item.enum,type:item.type})
        if(item.enum)
        defaultValues.push(item.enum)
      }else{
        tempObj[item.name]=item.value
        type.push(item.type)
        options.push({question:item.title,name:item.name,labels:item.enum,type:item.type})
        if(item.enum)
        defaultValues.push(item.enum)
       if(item.multiForm){
      item.multiForm.map((ele,subInd)=>{tempObj['test']=ele.value
        options.push({question:ele.title,name:ele.name})
        if(ele.enum)
        defaultValues.push(ele.enum)
      })
    }
  }
    })
    if(data.questionNumber===62){
      tempArray=[]
    }
    return   {questionTitle:data.questionNumber,type:type[0],mainQuestion:data.description,subQuestion:data.subDescription,state:tempObj,options:options,tempObj,tempArray}
  }


export function manipulateApiData(questionNumber:number){
  switch (questionNumber+1) {
    case 19:
      return {
        start: "0%",
        step: "25",
        marks: true,
        end: "100",
      };

    case 20:
      return {
        start: "Not at all",
        step: "25",
        marks: true,
        end: "Yes, alot",
      };
      case 21:
        return {
          start: "Not at all",
          step: "25",
          marks: true,
          end: "Yes, alot",
        };
        case 22:
          return {
            start: "Not at all",
            step: "25",
            marks: true,
            end: "Yes, alot",
          };
          case 25:
            return {
              start: "0%",
              step: "25",
              marks: true,
              end: "100",
            };
            case 26:
              return {
                start: "0%",
                step: "25",
                marks: true,
                end: "100",
              };
              case 30:
                return {
                start: "Trivial",
                step: "25",
                marks: true,
                end: "Really Tough",
                };
                case 38:
                  return {
                    start: "0%",
                    step: "1",
                    marks: [{ value: 0, label: '', }, { value: 100, label: '', }],
                    end: "100%",
                  };
                  case 39:
                    return {
                      start: "0%",
                      step: "1",
                      marks: [{ value: 0, label: '', }, { value: 100, label: '', }],
                      end: "100%",
                    };
                case 41:
                  return {
                    start: "0%",
                    step: "1",
                    marks: [{ value: 0, label: '', }, { value: 100, label: '', }],
                    end: "100%",
                  };
                  case 45:
                    return {
                      start: "0%",
                      step: "1",
                      marks: [{ value: 0, label: '', }, { value: 100, label: '', }],
                      end: "100%",
                    };
                    case 49:
                      return {
                        start: "0%",
                        step: "1",
                        marks: [{ value: 0, label: '', }, { value: 100, label: '', }],
                        end: "100%",
                      };
                      case 52:
                        return {
                          start: "0%",
                          step: "1",
                          marks: [{ value: 0, label: '', }, { value: 100, label: '', }],
                          end: "100%",
                        };
                        case 56:
                          return {
                            start: "0%",
                            step: "50",
                            marks: true,
                            end: "100%",
                          };
                      case 58:
                        return {
                          start: "0%",
                          marks: [{ value: 0, label: '', }, { value: 100, label: '', }],
                          end: "100%",
                        };
                        case 60:
                          return {
                            start: "0%",
                            step: "1",
                            marks: [{ value: 0, label: '', }, { value: 100, label: '', }],
                            end: "100%",
                          };
                          case 63:
                            return {
                              start: "0%",
                              step: "1",
                              marks: [{ value: 0, label: '', }, { value: 100, label: '', }],
                              end: "100%",
                            };
                            case 64:
                              return {
                                start: "0%",
                                step: "1",
                                marks: [{ value: 0, label: '', }, { value: 100, label: '', }],
                                end: "100%",
                              };
                              case 12:
                                return {
                                  displayColumn:true

                                };
                                case 14:
                                  return {
                                   displayColumn:true
                                  };
                                  case 23:
                                    return {
                                      displayColumn:true

                                    };
                                    case 53:
                                      return {
                                        displayColumn:true

                                      };
                     
      default:
        return {};
  }
}
