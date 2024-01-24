import { documentIcon, mobileIcon, rightIcon, veriffStep1, veriffStep2, veriffStep3 } from "../../assets/export";

export const instractions = {
  img: rightIcon,
  text: ["Prepare a valid government-issued identity document", "Check if your device’s camera is uncovered and working", "Be prepared to take a selfie and photos of your ID"],
};

export const stepsData = [
  {
    img: veriffStep1,
    title: "Step 1",
    text: "Take a photo of your identity document",
  },
  {
    img: veriffStep2,
    title: "Step 2",
    text: "Take a self-portrait  photo using your phone’s camera or desktop webcam",
  },
  {
    img: veriffStep3,
    title: "Step 3",
    text: "Your photos and ID are verified with our system",
  },
];

export const infoData = [
  {
    icon: documentIcon,
    title: "Prepare a valid document",
    text: "Make sure it’s not expired or physically damaged",
  },
  {
    icon: mobileIcon,
    title: "Use a smart phone",
    text: "You need a smartphone in order to continue",
  },
];

export const documentTypes = [
  { lable: "ID Card", value: "ID_CARD" },
  { lable: "Passport", value: "PASSPORT" },
  { lable: "Driving License", value: "Driving_License" },
  { lable: "Residence Permit", value: "Residence_Permit" },
];
