



export function compareAns(companyName){


const ansArray = [
  {
    isApplicant: [
      ['No', 2, 'Only limited companies can claim for R&D tax relief. Click End to exit the claim process.', 'End'],
      ['Yes', 2, 'Great, the company meets both criteria and can claim for R&D tax relief, subject to meeting further requirements.', 'proceed']],
    subjectToCorporateTax: [
      ['No', 2, 'Applicants must be subject to corporation tax to claim for R&D tax relief. Click End to exit the claim process.', 'End'],
      ['Yes', 2, 'Great, the company meets both criteria and can claim for R&D tax relief, subject to meeting further requirements.', 'proceed']]
  },
  {
    isUnderFormalAdminOrder: [
      ['Yes', 3, 'Claimants cannot make a claim for R&D tax relief while in administration. Click \'End\' to exit the claim process.', 'End'],
      ['No', 3, 'Great! The claimant meets the basic criteria to claim for R&D tax relief.', 'proceed']],
    isUnderLiquidator: [
      ['No', 3, 'Great! The claimant meets the basic criteria to claim for R&D tax relief.', 'proceed'],
      ['Yes', 3, 'Claimants cannot make a claim for R&D tax relief while in liquidation. Click \'End\' to exit the claim process.', 'End']],
    isAccountsConcernBasis: [
      ['No', 3, 'Claimants must be a going concern to make a claim for R&D tax relief. Click \'End\' to exit the claim process.', 'End'],
      ['Yes', 3, 'Great! The claimant meets the basic criteria to claim for R&D tax relief.', 'proceed']]
  },
  { stopProcessOnCeaseOfGoingConcern: [[true, 4, 'Great! Lets move on.', 'proceed'], [false, 4, 'For proceed please select option', 'End']] },
  {
    startDate: [['12/01/2022', 5, '','proceed']],
    endDate: [['10/31/2024', 5, '','proceed']]
  },
  {
    revenue: [[99000000, 6, 'This company breaches the SME thresholds for revenue and total balance sheet assets. Any claim it may have must be made through the Research and Development Expenditure Credit. ', 'proceed'],
    [100000000, 6, 'This company breaches the SME thresholds for revenue and total balance sheet assets. Any claim it may have must be made through the Research and Development Expenditure Credit.', 'info']],
    totalBalanceSheetAssets: [[85000000, 6, 'This company passes the SME tests for revenue and total balance sheet assets. However, its SME status may still be affected by staff numbers and grants received. This will be checked later in the process.', 'proceed'],
    [85000000, 6, 'This company breaches the SME thresholds for revenue and total balance sheet assets. Any claim it may have must be made through the Research and Development Expenditure Credit.', 'info']],
    grantsDuringClaimPeriod: [[25000000, 6, 'This company passes the SME tests for revenue and total balance sheet assets. However, its SME status may still be affected by staff numbers and grants received. This will be checked later in the process.', 'proceed'],
    [25000000, 6, 'This company breaches the SME thresholds for revenue and total balance sheet assets. Any claim it may have must be made through the Research and Development Expenditure Credit.', 'info']]
  },
  {
    shouldAddCost: [['Yes', 7, 'Great! You will be given access to the full question set, and the report will cover all aspects of a claim for R&D tax relief.', 'proceed'],
    ['No', 7, 'You will not be asked the questions on Costs, and the report will not include any cost information. You should provide your own cost information separately using your own methodology.', 'info']]
  },
  {
    mainContactAtCompany: [['dropdown value', 8, 'Great! This person will appear as main contact on the first page of report.', 'proceed']]
  },
  {
    companyDirectors: [[10, 9, 'Look’s like only directors were involved  in the work, that’s fine- in the next question we’ll check how they were paid so we can work outif the company is able to claim ', 'info']],
    fullStaffCount: [[200, 9, 'Directors, staff and subcontractors were employed during the claim period - thats great, as these costs usually form the bulk of a companys claim.', 'proceed']],
    externalConsultantsCount: [[50, 9, 'Directors, staff and subcontractors were employed during the claim period - thats great, as these costs usually form the bulk of a companys claim.', 'proceed'],
    [100, 9, 'The company employs 500 or more staff. This means that the company is not eligible to claim under the SME scheme, and will have to claim RDEC instead.', 'info']],
  },
  {
    companyNameForReport: [['One Private Limited', 10, `${companyName} will be used once, with one private limited used throughout the remainder of the report.`, 'proceed']],
    customerNameOnClientDetails: [[true, 10, `${companyName} will be used throughout the report.`, 'proceed']],
  },
  {
    wasPartOfGroup: [['Yes', 11, `As ${companyName}. is part of a group, well need to ask you about its size. This is important in working out whether it qualifies under the SME scheme.`, 'info'],
    ['No', 12, `Ok, that makes things easier. Next we need to ask you about whether any other company held shares in ${companyName}. This is important in working out whether ${companyName}. qualifies under the SME scheme for this claim period.`, 'proceed']]
  },
  {
    endOfPeriodEmployeesCount: [[500, 12, `As ${companyName} belongs to a group with 500 or more staff, the claim will be made through the RDEC scheme.`, 'info'],
    [10, 0, 'The size of the group should be equal to or greater than 11, the total number you entered for staff and Directors earlier.', 'End'],
    [11, 12, 'Great! If the projects are led by people with both relevant skills and experience, its easy to say that those people are competent professionals.', 'proceed']]
  },
  {
    didEntityOwnSharesPercent: [
      ['Yes, atleast one entity owned more than 25% or more of company\'s shares', 13, `Ok, in the next question well ask you which entities or individuals owned shares in ${companyName}, and roughly how many staff they had. This is important in working out ${companyName}’s SME status.`, 'info'],
      ['No, the entity owned less than 25% of the applicant\'s company', 14, 'Great, that means we dont need to ask for any more details.', 'proceed'],
      ['No, there were no other shareholders in the company', 14, 'Ok, no problem, that makes things easier!', 'proceed']],
  },
  {
    stakeholderType: [["Limited Company", 14, `As the combined total of ${companyName}s staff, group staff and relevant shareholders staff comes to fewer than 500, it initially qualifies for the SME scheme. However, to confirm this well need to ask about the companys corporate shareholdings. If youve finished adding shareholders, click Next, otherwise add another.`, 'proceed']],
    companyName: [["One Private Limited", 14, '', 'proceed']],
    sharesPercent: [[12, 14, '', 'proceed']],
    approxStaff: [[150, 14, '', 'proceed'], [500, 14, `As the combined total of ${companyName}'s staff, group staff and relevant shareholder's staff comes to 500 or more, this claim must be made through the RDEC scheme. If you've finished adding shareholders, click Next, otherwise add another.`, 'info']],
  },
  {
    didCompanyOwnSharesPercent: [
      ['Yes, the applicant co-owned more than 25% or more shares of the company', 15, `Ok, in the next question well ask you which companies ${companyName} owned shares in, and roughly how many staff they had. This is important in working out whether it qualifies under the SME scheme.`, 'info'],
      ['No, the applicant co-owned less than 25% of the company shares', 16, 'Great, that means we dont need to ask for any more details.', 'proceed'],
      ['No, the applicant co-owned no other company', 16, 'Ok, no problem, that makes things easier!', 'proceed']],
  },
  {
    companyName: [["One Private Limited", 16, `As the combined total of ${companyName}s staff, group staff and relevant shareholders and shareholdings staff comes to fewer than 500, it qualifies for the SME scheme. If youve finished adding shareholdings, click Next, otherwise add another.`, 'proceed']],
    sharesPercent: [[25, 16, '', 'proceed']],
    approxStaff: [[15, 16, '', 'proceed'], [500, 16, `As the combined total of ${companyName}'s staff, group staff and relevant shareholder's staff comes to 500 or more, this claim must be made through the RDEC scheme. If you've finished adding shareholders, click Next, otherwise add another.`, 'info']],
  },
  {
    agreeOnNext: [[false, 17, '', 'proceed']]
  },
  {
    marketList: [["Undertook work to understand target markets better", 18, 'You have selected 1 of 4 options. Please select 3 more, or click proceed to move on.', 'proceed'],
    ["Segemented its markets", 18, 'You have selected 2 of 4 options. Please select 2 more, or click proceed to move on.', 'proceed'],
    ["Repositioned its offering", 18, 'You have selected 3 of 4 options. Please select 1 more, or click proceed to move on.', 'proceed'],
    ["Diversified into new markets", 18, 'You have selected 4 of 4 options. Please click proceed to move on.', 'proceed']],
    competitionList: [[]],
    scaleList: [[]],
    processesList: [[]],
    productsList: [[]],
    financeList: [[]],

  },
  {
    agreeOnNext: [[false, 19, '', '']]
  },
  {
    doesWorkfallIntoCategoryA: [[0, 20, ' No, nothing at all like this was done.', 'info'],
    [25, 20, 'Yes, a small amount of this type of work was carried out.', 'info'],
    [50, 20, 'Yes, a moderate amount of this type of work was carried out.', 'proceed'],
    [75, 20, 'Yes, a significant amount of this type of work was carried out.', 'proceed'],
    [100, 20, 'Absolutely, lots of this type of work was done.', 'proceed']]
  },
  {
    doesWorkfallIntoCategoryB: [[0, 21, ' No, nothing at all like this was done.', 'info'],
    [25, 21, 'Yes, a small amount of this type of work was carried out.', 'info'],
    [50, 21, 'Yes, a moderate amount of this type of work was carried out.', 'proceed'],
    [75, 21, 'Yes, a significant amount of this type of work was carried out.', 'proceed'],
    [100, 21, 'Absolutely, lots of this type of work was done.', 'proceed']]
  },
  {
    doesWorkfallIntoCategoryC: [[0, 22, ' No, nothing at all like this was done.', 'info'],
    [25, 22, 'Yes, a small amount of this type of work was carried out.', 'info'],
    [50, 22, 'Yes, a moderate amount of this type of work was carried out.', 'proceed'],
    [75, 22, 'Yes, a significant amount of this type of work was carried out.', 'proceed'],
    [100, 22, 'Absolutely, lots of this type of work was done.', 'proceed']]
  },
  {
    doesWorkfallIntoCategoryD: [[0, 23, ' No, nothing at all like this was done.', 'info'],
    [25, 23, 'Yes, a small amount of this type of work was carried out.', 'info'],
    [50, 23, 'Yes, a moderate amount of this type of work was carried out.', 'proceed'],
    [75, 23, 'Yes, a significant amount of this type of work was carried out.', 'proceed'],
    [100, 23, 'Absolutely, lots of this type of work was done.', 'proceed']]
  },
  {
    didWorkAsSubcontractor: [
      [`No, ${companyName} did not work as subcontractor`, 24, 'Ok, that makes things easy!', 'proceed'],
      [`Yes, ${companyName} was involved in routine work and no R&D`, 24, 'Ok, if subcontracted work was done but it didnt involve any R&D, that makes things easy!', 'proceed'],
      [`Yes, ${companyName} was involved in R&D project`, 25, `As ${companyName} belongs to a group with fewer than 500 staff, it initially qualifies for the SME scheme. However, to confirm this well need to ask about the companys corporate shareholders.`, 'info']],
  },
  {
    technicalProjectLeadExp: [
      ["Qualifications relevant to the work", 27, 'Good - if the projects have been led by someone with relevant qualifications, this helps to reassure HMRC that the person is able to distinguish between R&D and routine problem-solving in their area of specialism.', 'proceed'],
      ["Industry experience relevant to the work", 27, 'Great! If the projects are led by people with both relevant skills and experience, its easy to say that those people are competent professionals.', 'proceed'],
      ["No qualifications or industry experience", 27, 'Please be aware that HMRC may challenge the claim if the work was not directed by someone they would regard as a competent professional.', 'info']
    ]
  },
  {
    workDoneForCompanySake: [[0, 26, `You\'ve indicated that all of the R&D ${companyName} carried out was while it was acting as a subcontractor, and none was on its own behalf.`, 'proceed'],
    [25, 24, `You’ve indicated that ${companyName} carried out its own R&D around % (percentage on the left of bar) of the time. Conversely, % (percentage on the right of bar) of the time it performed R&D while acting as a subcontractor.`, 'proceed'],
    [50, 26, `You’ve indicated that ${companyName} carried out its own R&D around % (percentage on the left of bar) of the time. Conversely, % (percentage on the right of bar) of the time it performed R&D while acting as a subcontractor.`, 'proceed'],
    [75, 26, `You’ve indicated that ${companyName} carried out its own R&D around % (percentage on the left of bar) of the time. Conversely, % (percentage on the right of bar) of the time it performed R&D while acting as a subcontractor.`, 'proceed'],
    [100, 26, `You have indicated that all of the R&D carried out was on ${companyName}s own behalf, and none of it was done whilst the company was acting as a subcontractor.`, 'proceed']]
  },
  {
    largeCompaniesActedPercent: [[0, 24, `As ${companyName} belongs to a group with fewer than 500 staff, it initially qualifies for the SME scheme. However, to confirm this well need to ask about the companys corporate shareholders.`, 'proceed'],
    [50, 24, `When ${companyName} was contracted to perform R&D, it acted for Large Companies % (percentage on the left of bar) of the time and for SMEs % (percentage on the right of bar) of the time.`, 'proceed'],
    [100, 24, `When ${companyName} was contracted to perform R&D, it acted for Large Companies 100% of the time and for SMEs 0% of the time.`, 'proceed']]
  },
  {
    troublesDuringClaimTime: [["Knowledge of whether components of project are scientifically possible or technologically feasible is not readily available or deducible", 28, ' You have selected at least one option - great! Please either select further options, or click Next to continue.', 'proceed'],
    ["How to achieve the main objective of project is not readily available", 28, '', 'Disable'],
    ["System uncertainty exists even though the main objective is already established as scientifically feasible", 28, '', 'Disable'],
    ["All the information required to achieve main objective of project was easily available", 28, '', 'Disable'],
    ["Technological uncertainty exists even though the main product is scientifically feasible", 28, '', 'Disable'],
    ["Conflicts in development arose while turning something that is already scientifically feasible into something which is cost-effective or reliable or reproducible", 28, '', 'Disable'],
    ["It was hard to expect how various parts or factors would interrelate", 28, '', 'Disable'],
    ["The result of changing numerous factors at the same time was complex and unpredictable", 28, '', 'Disable'],
    ["Nothing unless there are other options - all the necessary data was openly accessible", 28, `Please be aware that HMRC may challange the claim if the information required to carry out the work was freely avaliable, and no problem solving or research was required on ${companyName}`, 'info']]
  },
  {
    workRelatedToIndustry: [
      ["R&D is related to a trade that the company carries on", 29, `Your work was relevant to ${companyName} current trade. This is great - HMRC likes to see that the R&D is likely to increase company revenues.`, 'proceed'],
      ["R&D is realted to a subject from which it is intended that a trade to be carried on by the company will be derived", 29, `Your work was relevant to trade ${companyName}. intends to carry out in future. This is great - HMRC likes to see that your R&D is likely to help a company diversify`, 'proceed'],
      ["There is no connection to company's current or future trade", 29, `Please be aware that HMRC may challenge the claim if the work you wish to claim for was not related to any current or future trade of ${companyName}.`, 'info']
    ]
  },
  {
    softwareRelated: [["Trying to find, diagnose and rectify race conditions", 30, 'You have selected 1 of 5 options. Please select 4 more, or click proceed to move on.', 'proceed'],
    ["Trying to find, diagnose and rectify intermittent faults", 30, 'You have selected 2 of 5 options. Please select 3 more, or click proceed to move on.', 'proceed'],
    ["Trying to overcome the constraints imposed by legacy systems and code to achieve more modern performance or behavior", 30, 'You have selected 3 of 5 options. Please select 2 more, or click proceed to move on.', 'proceed'],
    ["Trying to integrate technologies in ways that they were not designed for", 30, 'You have selected 4 of 5 options. Please select 1 more, or click proceed to move on.', 'proceed'],
    ["Trying to develop new communications protocols where none existed", 30, 'You have selected 5 of 5 options. Please click proceed to move on.', 'proceed']],
    engineeringRelated: [[]],
    materialsRelated: [[]],
    biotechAndChemicalManufacturingRelated: [[]],
    otherDifficulties: [[]],

  },
  {
    technicalDifficultiesDuringClaimPeriod: [[0, 31, 'Technical issues were easily anticipated and simple to resolve. This unfortunately means that HIROSE FINANCIAL UK LTD. is ineligible to claim for this claim period - HMRC would say that the projects didnt contain sufficient technological uncertainty.', 'End'],
    [25, 31, `Please be aware that HMRC may challange the claim if the information required to carry out the work was freely avaliable, and no problem solving or research was required on ${companyName}`, 'info'],
    [50, 31, ' Even using experts, it wasnt immediately apparent how best to solve the issues. There was some technical risk and uncertainty about whether the solution would work.', 'proceed'],
    [75, 31, `Even using experts, it took a significant amount of time to diagnose the issues, and to come up with possible solutions. These solutions were not ones ${companyName} had used in the past, and would be of interest to its competitors as something novel.`, 'proceed'],
    [100, 31, ' Even using experts, some of the technical challenges faced were too difficult to resolve and were abandoned.', 'proceed']]
  },
  {
    mathematics: [["Applied mathematics", 32, 'You have selected 1 of 3 options. Please select 2 more, or click proceed to move on.', 'proceed'],
    ["Statistics and probability", 32, 'You have selected 2 of 3 options. Please select 1 more, or click proceed to move on.', 'proceed'],
    ["Other", 32, 'You have selected 3 of 3 options. Please click proceed to move on', 'proceed']],
    computerAndInformationScience: [[]],
    physicalScience: [[]],
    chemicalScience: [[]],
    environmentScience: [[]],
    biologicalScience: [[]],
    civilEngineering: [[]],
    electricalElectronicInformationEngineering: [[]],
    mechanicalEngineering: [[]],
    chemicalEngineering: [[]],
    materialEngineering: [[]],
    medicalEngineering: [[]],
    industrialBiotechnology: [[]],
    nanotechnology: [[]],
    foodAndBeverages: [[]],
    basicMedicine: [[]],
    clinicalMedicine: [[]],
    healthScience: [[]],
    medicalBiotechnology: [[]],
    agricultureForestryFisheries: [[]],
    animalDairyScience: [[]],
    agricultureBiotechnology: [[]],

  },
  {
    startDate: [['12/01/2022', 33, '', 'proceed']],
    endDate: [['10/31/2024', 33, '', 'proceed']]
  },
  {
    technicalChallenges: [["Using search engines to find and review information online", 34, 'Great - you have selected at least one option! Please either select further options, or click Next to continue.', 'proceed'],
    ["No routine activities were carried out during the claim period", 34, 'Ok, thats fine. Just be aware that HMRC might find it unusual that no routine activities were undertaken to support the R&D.', 'info']]
  },
  {
    directActivitiesContribution: [[]],
    indirectActivitiesContribution: [["Producing documentation or other reports related to the R&D", 35, 'You have selected 1 of 5 options. Please select 4 more, or click proceed to move on.', 'proceed'],
    ["Maintaining facilities where the work took place", 35, 'You have selected 2 of 5 options. Please select 3 more, or click proceed to move on.', 'proceed'],
    ["Providing IT support for computers used during the work", 35, 'You have selected 3 of 5 options. Please select 2 more, or click proceed to move on.', 'proceed'],
    ["Providing security for facilities where work took place", 35, 'You have selected 4 of 5 options. Please select 1 more, or click proceed to move on.', 'proceed'],
    ["Carrying out administration, finance, HR activities related to the work", 35, 'You have selected 5 of 5 options. Please click proceed to move on.', 'proceed']],

  },
  {
    taxClaimEvidence: [["Emails relevant to the work", 36, ' Great - you have selected at least one option. When you are finished, click next.', 'proceed'],
    ["Nothing is available to evidence the work", 36, 'Please be aware that if there is nothing to evidence the work, HMRC may challenge the claim.', 'info']]
  },
  {
    grantFunding: [[true, 37, 'Ok, next we need to know how much of the companys grants were used on the R&D projects.', "info"]],
    grantFundingAlt: [[16, 37, 'Ok, next we need to know how much of the companys grants were used on the R&D projects.', "info"]]
  },
  {
    grantFundingUsedOnProjects: [[100000, 38, 'Some of the grants were used on R&D projects. Ok, thats fine - the claim will be adjusted to take account of this.', "proceed"],
    [85000, 38, 'All of the grant funding was used on R&D projects. Ok, thats fine - the claim will be adjusted to take account of this', "proceed"]],
  },
  {
    percentForTechnicalAspects: [[0, 39, ' None of the grant money was used on technical aspects of the work. Great - that means we dont need to ask further questions on grants.', "proceed"],
    [39, 39, ' Approximately £39 was used to fund technical aspects of the projects. Ok, that means we need to ask a few more questions.', "proceed"],
    [100, 39, ' The whole amount was used on technical aspects of the work. Ok, that means we need to ask a few more questions. ', "proceed"]],
    amountForTechnicalAspects: [[39, 39, 'Approximately £39 was used to fund technical aspects of the projects. Ok, that means we need to ask a few more questions.', "proceed"]]
  },
  {
    notifiedStateAidPercent: [[0, 40, 'Great - none of the grants were Notified State Aid. This will have the least impact on the claim.', "proceed"],
    [50, 40, '£ (amount entered by user out of total grant amount) of the grants was Notified State Aid and £ (amount remaining after what user entered out of total grant amount) was Other Funding. This will have some impact on the claim.', "info"],
    [100, 40, ' Ok, all of the grants were Notified State Aid. This will have the most impact on the claim.', "info"]],
    spentOnTechnicalAspects: [[40, 40, '£ (amount entered by user out of total grant amount) of the grants was Notified State Aid and £ (amount remaining after what user entered out of total grant amount) was Other Funding. This will have some impact on the claim.', "proceed"]]
  },
  {
    sme: [[16, 41, ' Please allocate the £31 of Other Funding across the three categories of activity. (The boxes in the column should sum to £31.) ', "info"]],
    lc: [[16, 41, ' Please allocate the £31 of Other Funding across the three categories of activity. (The boxes in the column should sum to £31.) ', "info"]],
    inHouse: [[16, 42, ' Thank you for successfully allocating £65 of State Aid and £31 of Other Funding across the three categories of activity.', "info"]],
  },
  {
    notifiedStateAidPercentReceived: [[0, 42, 'You have indicated that 0% of the in-house projects received at least £1 of Notified State Aid.', "proceed"],
    [50, 42, 'You have indicated that 56% of the in-house projects received at least £1 of Notified State Aid.', "proceed"],
    [100, 42, 'You have indicated that 100% of the in-house projects received at least £1 of Notified State Aid.', "proceed"]],
  },
  {
    addMoreDetail: [
      ['No', 44, 'Great! You\'ve entered all of the required information. ', 'proceed'],
      ['Yes', 43, 'Ok, click \'next\' and you\'ll be given space to enter more details about the projects', 'proceed']]
  },
  {
    projectTitle: [['R&D Project', 44, 'Thanks for providing additional technical details. This information will appear in an appendix in the R&D report.', "proceed"]],
    technicalLead: [['R&D Project', 44, 'Thanks for providing additional technical details. This information will appear in an appendix in the R&D report.', "proceed"]],
    projectDescription: [['R&D Project', 44, 'Thanks for providing additional technical details. This information will appear in an appendix in the R&D report.', "proceed"]]
  },
  {
    salaries: [[44, 45, 'Thanks for providing additional technical details. This information will appear in an appendix in the R&D report.', "proceed"]],
    pensionContributions: [[44, 45, 'Thanks for providing additional technical details. This information will appear in an appendix in the R&D report.', "proceed"]],
    employerContributionsNIC: [[44, 45, 'Thanks for providing additional technical details. This information will appear in an appendix in the R&D report.', "proceed"]],
    bonuses: [[44, 45, 'Thanks for providing additional technical details. This information will appear in an appendix in the R&D report.', "proceed"]],
  },
  {
    staffTimeSpentPercent: [[0, 46, 'None of the staff spent time working on R&D. If youre happy this is correct, please continue. However, bear in mind that excluding staff costs may result in a very small claim.', "info"],
    [50, 46, '50% of the staffs time was spent working on R&D. If you are happy that this is correct, please continue.', "info"],
    [100, 46, '100% of the staffs time was spent working on R&D. If you are happy that this is correct, please continue. However, bear in mind that this can be seen as unrealistic by HMRC.', "proceed"]],
    staffTimeSpentAmount: [[45, 46, '50% of the staffs time was spent working on R&D. If you are happy that this is correct, please continue.', "proceed"]]
  },
  { employmentAllowanceDuringClaimPeriod: [[2500, 47, 'Great! You’ve entered a figure for Employment Allowance. We’ll take this into consideration when calculating staff costs.', "proceed"]] },
  { expenditureOnReimbursedExpenses: [[12345, 48, `Great, thanks for including ${companyName}s spend on software. Next you can apportion how much of this was relevant to the R&D.`, "proceed"]] },
  { expenditureOnSoftware: [[35000, 49, `Great, thanks for including ${companyName}’s spend on software. Next you can apportion how much of this was relevant to the R&D.`, "proceed"]] },
  {
    directAndIndirectPercent: [[0, 50, ' If you are happy that no software was used for any aspect of the R&D, leave the slider in this position.', "info"],
    [85, 50, '85% of the software costs will be treated as eligible.', "proceed"],
    [100, 50, 'Be careful. HMRC often considers it unreasonable to apportion 100% of a companys spend on software to R&D.', "info"]],
    directAndIndirectAmount: [[35000, 50, '85% of the software costs will be treated as eligible.', "proceed"]]
  },
  {
    didCompanyPayForClinicalTrials: [[true, 51, `Thanks for confirming that ${companyName} did not make any payments for clinical trials.`, "proceed"]],
    phaseFourAmount: [[50, 51, `${companyName} spent a total of £ (sum of phase 1, phase 2, phase 3 and phase 4) on clinical trials`, "proceed"]],
    phaseOneAmount: [[50, 51, `${companyName} spent a total of £ (sum of phase 1, phase 2, phase 3 and phase 4) on clinical trials`, "proceed"]],
    phaseThreeAmount: [[50, 51, `${companyName} spent a total of £ (sum of phase 1, phase 2, phase 3 and phase 4) on clinical trials`, "proceed"]],
    phaseTwoAmount: [[50, 51, `${companyName} spent a total of £ (sum of phase 1, phase 2, phase 3 and phase 4) on clinical trials`, "proceed"]],
  },
  {
    expenditureOnRawMaterials: [[5678, 52, 'Ok, lets move on to apportioning this cost to the R&D.', "proceed"]]
  },
  {
    rawMaterialExpenditurePercent: [[0, 53, 'Are you sure that none of the raw materials were used on or to support R&D?', "info"],
    [65, 53, `% (value selected on line bar) of the annual spend on raw materials will be included in ${companyName}s claim.`, "proceed"],
    [100, 53, 'Be careful. HMRC often considers it unreasonable to apportion 100% of a companys raw material spend to R&D.', "info"]],
    rawMaterialExpenditureAmount: [['', 53, `% (value selected on line bar) of the annual spend on raw materials will be included in ${companyName}s claim.`, "proceed"]]
  },
  {
    didPayForHeatAndLight: [
      ['Included within rent', 54, `Ok, now lets enter ${companyName}s total expenditure on rent.`, 'proceed'],
      ['Charged separately from rent', 55, `Ok, now lets enter ${companyName}s total expenditure on heat and light.`, 'proceed']]
  },
  {
    expenditureOnRent: [
      [1000, 56, 'Great! now let’s apportion how much of the rent was attributable to heat and light used on the R&D.', 'proceed']]
  },
  {
    expenditureOnHeatAndLight: [
      [1000, 58, `Now lets apportion ${companyName}s heat and light costs to R&D.`, 'proceed']]
  },
  {
    associatedWithRNDPercent: [[0, 57, 'Are you sure that none of the heat and light cost is attributable to the R&D?', "proceed"],
    [50, 57, '% (value selected on line bar) of the heat and light is attributable to the R&D and will be included in the claim.', "proceed"],
    [100, 57, 'Be careful. HMRC often considers it unreasonable to apportion 100% of the heat and light costs to R&D.', "proceed"]],
    associatedWithRNDAmount: [['', 57, '', "proceed"]]
  },
  {
    workersEmployedByGroupCompany: [
      ['Yes', 59, `Ok. Next we will ask how much ${companyName}. spent on these workers.`, 'proceed'],
      ['No', 61, `Ok, ${companyName} did not use a group companys staff. Next we will ask if it used an external staff-provider.`, 'proceed']]
  },
  {
    totalUsedPercent: [[0, 57, 'Are you sure that none of the heat and light costs were related to R&D?', "info"],
    [50, 57, `% (value selected on line bar) of ${companyName}s annual spend on heat and light will be included in the claim.`, "proceed"],
    [100, 57, 'Be careful. HMRC often considers it unreasonable to apportion 100% of the heat and light costs to R&D.', "info"]],
    totalUsedAmount: [['', 57, '', "proceed"]]
  },
  {
    totalSpentOnGroupRecharges: [
      [1000, 60, 'Next, lets apportion how much of this cost was associated with the R&D.', 'proceed']]
  },
  {
    relevantExpenditurePercent: [[0, 61, `None of the spend on group staff is relevant to ${companyName}.s R&D. If you are happy that this is correct, please continue. Otherwise, please adjust the slider.`, "info"],
    [50, 61, `% (value selected on line bar) of ${companyName}s spend on group staff will be treated as eligible.`, "proceed"],
    [100, 61, 'Be careful. HMRC might consider it unreasonable to apportion 100% of the group EPW costs to R&D.', "proceed"]],
    relevantExpenditureAmount: [['', 61, '', "proceed"]]
  },
  {
    didUseExternalWorkers: [[true, 62, `${companyName} did not use any EPWs on the R&D activities.`, "proceed"]],
    connectedStaffProviders: [[3500, 63, `${companyName} spent a total of £ (amount entered in part 1) on EPWs from connected staff providers, and £ (amount entered in part 2) on EPWs from unconnected staff providers.`, "proceed"]],
    unconnectedStaffProviders: [[2500, 63, `${companyName} spent a total of £ (amount entered in part 1) on EPWs from connected staff providers, and £ (amount entered in part 2) on EPWs from unconnected staff providers.`, "proceed"]],
  },
  {
    didNotUseSubcontractors: [[true, 64, `${companyName} did not use any subcontractors on its R&D activities.`, "proceed"]]
  },
  {
    connectedStaffProvidersPercent: [[0, 63, 'None of the spend on EPWs is relevant to the R&D. If you are happy that this is correct, please continue. Otherwise, please adjust the sliders.', "info"],
    [50, 63, ' 48% of the spend on EPWs from connected staff providers was relevant to the R&D. In line with the terms of the scheme, 100 % of the connected spend will be included.', "proceed"],
    [100, 63, 'Be careful. HMRC often considers it unreasonable to apportion 100% of a company’s spend on EPWs to R&D.', "info"]],
    connectedStaffProvidersAmount: [['', 63, '', "proceed"]],
    unconnectedStaffProvidersPercent: [[0, 63, 'None of the spend on EPWs is relevant to the R&D. If you are happy that this is correct, please continue. Otherwise, please adjust the sliders.', "info"],
    [50, 63, ' 48% of the spend on EPWs from connected staff providers was relevant to the R&D. In line with the terms of the scheme, 100 % of the connected spend   will be included.', "proceed"],
    [100, 63, 'Be careful. HMRC often considers it unreasonable to apportion 100% of a company’s spend on EPWs to R&D.', "info"]],
    unconnectedStaffProvidersAmount: [['', 63, '', "proceed"]],
  },
  {
    connectedSubcontractorsPercent: [[0, 64, `None of ${companyName}s spend on subcontractors is relevant to the R&D. If you are happy that this is correct, please continue. Otherwise, please adjust the sliders.`, "info"],
    [50, 64, `% (value selected on line bar) of the spend on connected subcontractors was relevant to ${companyName}s R&D. In line with the terms of the scheme, 100% of the connected spend will be included.`, "info"],
    [100, 64, 'Be careful. HMRC might consider it unreasonable to apportion 100% of a companys spend on subcontractors to R&D. ', "info"]],
    connectedSubcontractorsAmount: [['', 64, '', "proceed"]],
    unconnectedSubcontractorsPercent: [[0, 64, `None of ${companyName}s spend on subcontractors is relevant to the R&D. If you are happy that this is correct, please continue. Otherwise, please adjust the sliders.`, "info"],
    [50, 64, `% (value selected on line bar for Option A) of the spend on connected subcontractors and % (value selected on line bar for Option C) of the spend on unconnected subcontractors was relevant to ${companyName}s R&D. In line with the terms of the scheme, 65% of the unconnected spend and 100% of the connected spend will be included.`, "info"],
    [100, 64, 'Be careful. HMRC might consider it unreasonable to apportion 100% of a companys spend on subcontractors to R&D. ', "info"]],
    unconnectedSubcontractorsAmount: [['', 64, '', "proceed"]],
  },
]

return ansArray
}