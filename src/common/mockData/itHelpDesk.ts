import profilePic from "../../assets/images/itHelpDesk/user1.png";
import user2 from "../../assets/images/itHelpDesk/user1.png";
import user3 from "../../assets/images/itHelpDesk/user2.png";
import user4 from "../../assets/images/itHelpDesk/user3.png";
import user5 from "../../assets/images/itHelpDesk/user4.png";
import user6 from "../../assets/images/itHelpDesk/user5.png";
import user7 from "../../assets/images/itHelpDesk/user6.png";
import user8 from "../../assets/images/itHelpDesk/user7.png";

export interface userProfile {
  id: number,
  heading: string,
  span: string
}

export const userData: userProfile[] = [
  { id: 1, heading: 'Name', span: 'David Williams' },
  { id: 2, heading: 'Number ', span: '+62 897 9097 0978' },
  { id: 3, heading: 'Email ', span: 'davidwilliams@gmail.com' },
]

export const InitialValues = {
  id: '0',
  userName: '',
  title: "",
  userImg: '',
  messages: [],
  notification: 0,
}

export const allUser = [
  {
    id: "1",
    userName: "David Williams",
    title: "Hello! When can we review...",
    userImg: user2,
    messages: [{ message: "Hi arthur, good afternoon,I'm from the key agency want to offer you freelance work,are you interested in this job?", time: "09.30 pm", isSender: false }],
    notification: 1,
  },
  {
    id: "2",
    userName: "Mark Cooper",
    title: "Hi! I need help with my RND... ",
    userImg: user3,
    messages: [{ message: "this ishjgjgjghj message", time: "09.30 pm", isSender: false }],
    notification: 4,
  },
  {
    id: "3",
    userName: "Neng Kinasih",
    title: "Hey, Can you help me pay...",
    userImg: user4,
    messages: [{ message: "this isghjjghjghjghjghjghjghj message", time: "09.30 pm", isSender: true }],
    notification: "",
  },
  {
    id: "4",
    userName: "Andrew Simmons",
    title: "Hi! I have paid my claim and...",
    userImg: user5,
    messages: [{ message: "this is mesgfhgfhgfhgfhgfhgfhgfhgfhgfhgfhsage", time: "09.30 pm", isSender: false }],
    notification: 3,
  },
  {
    id: "5",
    userName: "jSebastian Stan",
    title: "Hello! I am looking for an RN...",
    userImg: user6,
    messages: [{ message: "this is message", time: "09.30 pm", isSender: true }],
    notification: "",
  },
  {
    id: "6",
    userName: "Robert Williams",
    title: "Hi! I want to download my...",
    userImg: user7,
    messages: [{ message: "this is message", time: "09.30 pm", isSender: true }],
    notification: "",
  },
  {
    id: "7",
    userName: "Natasha Ramanoff",
    title: "Hey, I want to add collaborat...",
    userImg: user8,
    messages: [{ message: "this is message", time: "09.30 pm", isSender: true }],
    notification: "",
  },
];
