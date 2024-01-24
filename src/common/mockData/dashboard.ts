import {
  BellIcon,
  CheckIcon,
  ClaimsLogo,
  ClientsLogo,
  CollaboratorsLogo,
  PoundSymbol,
  ReminderClock,
  blueRectangleImg,
  greenRectangleImg,
  henryImg,
  infoIcon,
  krisImg,
  kristieImg,
  matteoImg,
  orangeRectangleImg,
  purpleRectangleImg,
} from "../../assets/export";
import {
  IAdminAvailableSpace,
  IAdminDevices,
  IAdminSystemPerformance,
  ICardData,
  IClaimStatsData,
  ICollections,
  IDashboardPeople,
  IDefaultValueInterface,
  IRecentActivity,
  IRndExpertClaim,
  IRndExpertUser,
  IRndExpertUsers,
  ITaxCalculatorFieldsData,
  ITaxCalculatorRadioButtonsData,
  IclaimLimitData,
} from "../interfaces/dashboardInterface";

// ####################### Tax Calculator's Data ###########################
// Claim buttons Data
export const claimLimitData: IclaimLimitData[] = [
  {
    id: "1",
    text: "499 and Under",
  },
  {
    id: "2",
    text: "500 and Above",
  },
];

// tax calculator fields
export const taxCalculatorFieldsData: ITaxCalculatorFieldsData[] = [
  {
    id: "1",
    label: "RND Labour",
    name: "Labour",
  },
  {
    id: "2",
    label: "RND Material",
    name: "Material",
  },
  {
    id: "3",
    label: "RND Sub-Contracted",
    name: "SubContracted",
  },
  {
    id: "4",
    label: "Company Net Profit",
    name: "Profit",
  },
];

// tax calculator radio buttons
export const taxCalculatorRadioButtonsData: ITaxCalculatorRadioButtonsData[] = [
  {
    id: "1",
    name: "rndCoarporationCheck",
    desc: "Is your business registered for corporation tax in the UK?",
  },
  {
    id: "2",
    name: "rndInnovativeCheck",
    desc: "Does your business take innovative technical development projects?",
  },
];

// ####################### Tax Claim's Data ###########################
export const claimStatsData: IClaimStatsData[] = [
  {
    id: "01",
    img: greenRectangleImg,
    text: "Qualification",
    percentage: "100",
  },
  {
    id: "02",
    img: orangeRectangleImg,
    text: "Company",
    percentage: "100",
  },
  {
    id: "03",
    img: blueRectangleImg,
    text: "Project",
    percentage: "40",
  },
  {
    id: "04",
    img: purpleRectangleImg,
    text: "Cost",
    percentage: "0",
  },
];

export const rndExpertsData: IRndExpertUser[] = [
  {
    id: "1",
    img: krisImg,
    name: "Kris Alexander",
    companyName: "Hightspeed Inc.",
    availableDates: [
      {
        year: 2022,
        month: 10,
        day: 1,
      },
      {
        year: 2022,
        month: 10,
        day: 2,
      },
      {
        year: 2022,
        month: 10,
        day: 3,
      },
      {
        year: 2022,
        month: 10,
        day: 4,
      },
    ],
  },
  {
    id: "2",
    img: matteoImg,
    name: "Matteo Mchpee",
    companyName: "Hightspeed Inc.",
    availableDates: [
      {
        year: 2022,
        month: 10,
        day: 11,
      },
      {
        year: 2022,
        month: 10,
        day: 12,
      },
      {
        year: 2022,
        month: 10,
        day: 13,
      },
      {
        year: 2022,
        month: 10,
        day: 14,
      },
    ],
  },
  {
    id: "3",
    img: henryImg,
    name: "Henry Cavill",
    companyName: "Hightspeed Inc.",
    availableDates: [
      {
        year: 2022,
        month: 10,
        day: 16,
      },
      {
        year: 2022,
        month: 10,
        day: 17,
      },
      {
        year: 2022,
        month: 10,
        day: 18,
      },
      {
        year: 2022,
        month: 10,
        day: 19,
      },
    ],
  },
  {
    id: "4",
    img: kristieImg,
    name: "Kristie Stevens",
    companyName: "Hightspeed Inc.",
    availableDates: [
      {
        year: 2022,
        month: 10,
        day: 22,
      },
      {
        year: 2022,
        month: 10,
        day: 23,
      },
      {
        year: 2022,
        month: 10,
        day: 24,
      },
      {
        year: 2022,
        month: 10,
        day: 25,
      },
    ],
  },
];

export const rndExpertClaims: IRndExpertClaim[] = [
  {
    id: 1,
    claimName: "Capso Therapeutics",
    claimDate: "01 Nov 2020 to 30 Nov 2021",
  },
  {
    id: 2,
    claimName: "Visions Technology",
    claimDate: "01 Nov 2020 to 30 Nov 2021",
  },
  {
    id: 3,
    claimName: "Urban Decay",
    claimDate: "01 Nov 2020 to 30 Nov 2021",
  },
];

export const cardData: ICardData[] = [
  {
    id: 1,
    title: "Clients",
    amount: 3,
    img: ClientsLogo,
    color: "linear-gradient(275.51deg, #5AC996 0%, #C0F6B8 100%)",
    link: "/clients",
    classWrap: "clientsLayer",
  },
  {
    id: 2,
    title: "Claims",
    amount: 10,
    img: ClaimsLogo,
    color: "linear-gradient(275.51deg, #006E77 0%, #54C8D1 100%)",
    link: "/claims",
    classWrap: "claimsLayer",
  },
  {
    id: 3,
    title: "Collaborators",
    amount: 3,
    img: CollaboratorsLogo,
    color: "linear-gradient(275.51deg, #035E5E 0%, #14AAAA 100%)",
    link: "/collaborators",
    classWrap: "collaboratorsLayer",
  },
];

export const recentActivityData: IRecentActivity = {
  todayData: [
    {
      id: "1",
      description:
        "Collaborator has been added against  claim 20 \n Januaray 2019 to 20 December 2020. ",
      time: "12:13 PM",
    },
    {
      id: "2",
      description:
        "Claim 01 October 2020 to 01 September 2021 \n has been added. ",
      time: "11:09 PM",
    },
    {
      id: "3",
      description: "Client One Private Limited has been added.",
      time: "09:03 PM",
    },
    {
      id: "4",
      description: "Client One Private Limited has been added.",
      time: "14:45 AM",
    },
    {
      id: "5",
      description: "Client One Private Limited has been added.",
      time: "12:13 PM",
    },
    {
      id: "6",
      description: "Client One Private Limited has been added.",
      time: "12:13 PM",
    },
  ],
  yesterdayData: [
    {
      id: "1",
      description:
        "Collaborator has been added against claim 20 \n Januaray 2019 to 20 December 2020.",
      time: "14:45 AM",
    },
    {
      id: "2",
      description: "Client One Private Limited has been added. ",
      time: "12:13 PM",
    },
  ],
};

export const collectionsData: ICollections = {
  id: 1,
  title: "Collections",
  amount: 984.34,
  img: PoundSymbol,
  accountNumber: "**** **** **** 1234",
  accountName: "Martha Stewart",
};

export const remindersData = [
  // urgentData: [
  {
    id: 1,
    reminderClock: ReminderClock,
    meetingDetails: "Meeting with R&D Expert\nfor a claim request",
    meetingDate: "16 Feb 2022",
    urgentBell: BellIcon,
    urgentStatus: "URGENT",
  },
  // ],
  // progressData: [
  {
    id: 2,
    reminderClock: ReminderClock,
    meetingDetails: "Claim Completion date\n 28 Feb 2022",
    meetingDate: "16 Feb 2022",
    urgentBell: CheckIcon,
    urgentStatus: "Progress",
    innerIcon: infoIcon,
    innerCardData: [
      {
        label: "Claim Number:",
        data: "#139131093",
      },
      {
        label: "Name:",
        data: "99 News Limited",
      },
      {
        label: "User:",
        data: "Martin Anthony",
      },
    ],
  },
  {
    id: 3,
    reminderClock: ReminderClock,
    meetingDetails: "Claim Completion date\n 28 Feb 2022",
    meetingDate: "16 Feb 2022",
    urgentBell: CheckIcon,
    urgentStatus: "Progress",
    innerIcon: infoIcon,
    innerCardData: [
      {
        label: "Claim Number:",
        data: "#139131093 ",
      },
      {
        label: "Name:",
        data: "99 News Limited",
      },
      {
        label: "User:",
        data: "Martin Anthony",
      },
    ],
  },
  {
    id: 4,
    reminderClock: ReminderClock,
    meetingDetails: "Meeting with R&D Expert\nfor a claim request",
    meetingDate: "16 Feb 2022",
    urgentBell: BellIcon,
    urgentStatus: "URGENT",
  },
  // ],
];

export const rndExpertUsers: IRndExpertUsers[] = [
  {
    id: "1",
    name: "Kris Alexander",
    img: krisImg,
    companyName: "Highspeed Inc.",
  },
  {
    id: "2",
    name: "Matteo Mcphee",
    img: matteoImg,
    companyName: "Highspeed Inc.",
  },
  {
    id: "3",
    name: "Matteo Mcphee",
    img: matteoImg,
    companyName: "Highspeed Inc.",
  },
];

export const defaultValue: IDefaultValueInterface = {
  year: 2022,
  month: 10,
  day: 10,
};

// Admin Dashboard

export const dashboardPeople: IDashboardPeople[] = [
  {
    id: "01",
    name: "Users",
    pathLink: "",
    quantity: "11",
    active: "08",
    inactive: "03",
  },
  {
    id: "02",
    name: "RND Experts",
    pathLink: "",
    quantity: "05",
    active: "01",
    inactive: "04",
  },
];

export const adminDevices: IAdminDevices[] = [
  {
    id: "01",
    text: "Laptop / PC",
    percentage: "38",
  },
  {
    id: "02",
    text: "Mobile",
    percentage: "10",
  },
  {
    id: "03",
    text: "Tablet",
    percentage: "52",
  },
];

export const adminAvailableSpace: IAdminAvailableSpace[] = [
  {
    id: "01",
    text: "Used Space",
    percentage: "600",
  },
  {
    id: "02",
    text: "Available Space",
    percentage: "400",
  },
];

// admin system performance
export const adminSystemPerformance: IAdminSystemPerformance[] = [
  {
    id: "01",
    name: "Sessions",
    performanceTime: "87.2",
    performancePercentage: "+47",
  },
  {
    id: "02",
    name: "Page Load Time",
    performanceTime: "230.85",
    performancePercentage: "+12.5",
  },
  {
    id: "03",
    name: "Bounce Rate",
    performanceTime: "26.3",
    performancePercentage: "-28",
  },
  {
    id: "04",
    name: "Session Duration",
    performanceTime: "2m 18s",
    performancePercentage: "+13",
  },
];

// Collaborator Card Mock Data
export const cardDataCollaborator: ICardData[] = [
  {
    id: 1,
    title: "Clients",
    amount: 3,
    img: ClientsLogo,
    color: "linear-gradient(275.51deg, #5AC996 0%, #C0F6B8 100%)",
    link: "/clients",
    classWrap: "clientsLayer",
  },
  {
    id: 2,
    title: "Claims",
    amount: 10,
    img: ClaimsLogo,
    color: "linear-gradient(275.51deg, #006E77 0%, #54C8D1 100%)",
    link: "/claims",
    classWrap: "claimsLayer",
  },
];
