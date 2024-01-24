import QualificationChecksIcon from "../../assets/images/questionLayout/qualificationchecks.png";
import companyIcon from "../../assets/images/questionLayout/company.png";
import costsIcon from "../../assets/images/questionLayout/costs.png";
import Projects from "../../assets/images/questionLayout/Projects.png";
import activesubtab from "../../assets/images/questionLayout/activetab.png";
import Image from "next/image";
import { QuestionSidebar } from "../interfaces/questionsidebar";

export const QuestionProgressBar: QuestionSidebar[] = [
  {
    title: "Qualification Checks",
    icon: <Image src={QualificationChecksIcon} alt="check" priority />,
    submenu: [
      {
        id: 1,
        title: "Background",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
    ],
  },
  {
    title: "Company",
    icon: <Image src={companyIcon} alt="company" priority />,
    submenu: [
      {
        id: 1,
        title: "Basics",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 2,
        title: "SME Status/ RDEC Status",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
    ],
  },
  {
    title: "Projects",
    icon: <Image src={Projects} alt="project" priority />,
    submenu: [
      {
        id: 1,
        title: "Aims",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 2,
        title: "Acting as a Subcontractor",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 3,
        title: "Competent Professionals",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 4,
        title: "Trade",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 5,
        title: "Technical Challenges",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 6,
        title: "Challenge Level",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 7,
        title: "Area of Science",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 8,
        title: "Time Span",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 9,
        title: "Activities",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 10,
        title: "Outputs",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 11,
        title: "Grants",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 12,
        title: "Technical Detail",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
    ],
  },
  {
    title: "Costs",
    icon: <Image src={costsIcon} alt="cross" priority />,
    submenu: [
      {
        id: 1,
        title: "Staff Cost",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 2,
        title: "Software Cost",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 3,
        title: "Clinical Trials Cost",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 4,
        title: "Consumables Cost",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 5,
        title: "EPW Cost",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
      {
        id: 6,
        title: "Subcontractor Cost (SME / RDEC)",
        icon: <Image src={activesubtab} alt="active sub tab" priority />,
      },
    ],
  },
];
