interface Ioptions {
  id: number;
  label: string;
}

interface IcheckBoxLabels {
  question: number;
  questionHeading: string;
  questionText?: string;
  qulification?: string;
  industryExp?: string;
  noQulification?: string;
  options: Ioptions[];
}
export const CheckBoxLabelList: IcheckBoxLabels[] = [
  {
    question: 24,
    questionHeading: "HMRC states that it's significant that organizations use competent professionals to lead their ventures and to direct technical problem-solving. This is because they want to grant R&D charge to organization  that are attempting to resolve  genuinely difficult technical problems, as against to supporting organization that are struggling because they don’t have appropriately experienced or qualified individuals included.",
    questionText: "Generally, did the person or people leading CNAME's technical projects have:",
    options: [
      {
        id: 1,
        label: "Qualification relevant to the work",
      },
      {
        id: 2,
        label: "Industry experience relevant to the work",
      },
      {
        id: 3,
        label: "No qualification or industry experience",
      },
    ],
  },
];
