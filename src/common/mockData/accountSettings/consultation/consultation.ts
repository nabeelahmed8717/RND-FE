import * as yup from "yup";

export const timeSlot = [
  {
    id: 1,
    formFields: [
      {
        id: 1,
        label: "StartTime",
        name: "startTime",
        type: "time",
      },
      {
        id: 2,
        label: "End Time",
        name: "endTime",
        type: "time",
      },
    ],
  },
];
export const consultationInitialValues = {
  price: "",
  availability: "",
  duration:"",
  from: "",
  to: "",
};
export const ConsultationValidationSchema = yup.object({
  price: yup.string().required("Price is required"),
  availability: yup.string().required("Please tell your availability"),
  duration: yup.string().required("Please select time duration"),
  from: yup.string().required("Start Time is required"),
  to: yup.string().required("End Time is required"),
});
