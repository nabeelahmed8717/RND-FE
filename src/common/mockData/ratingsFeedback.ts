// import Profile1 from "../assets/rating-feedback/profile1.png";

export interface customerFeedback {
  id: string;
  profileImg: any;
  name: string;
  date: string;
  description: string;
  rating: number;
  reply: string;
  replyuser: string;
  feedBackcomment: string;
  feedbackDateTime: "November, 2021 8:32 AM";
  comments: string[];
}

// Star rating number data arry
export const starRating: number[] = [5, 4, 3, 2, 1];
// feedback data
export const feedbackData: customerFeedback[] = [
  {
    id: "1",
    profileImg: require("../../assets/images/ratingsFeedback/profile1.png"),
    name: "Martha Stewart",
    date: "November 1, 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis urna volutpat aliquet viverra. Vulputate pharetra tortor justo, tellus dolor. Euismod a, lacus, ac pellentesque in et at egestas tristique. Scelerisque laoreet integer malesuada gravida a morbi convallis ut leo. Nulla id nec faucibus tincidunt et sapien.",
    rating: 5,
    reply: "Reply",
    replyuser: "Alex Stuart",
    feedBackcomment: "Im john wick",
    feedbackDateTime: "November, 2021 8:32 AM",
    comments: [],
  },
  {
    id: "2",
    profileImg: require("../../assets/images/ratingsFeedback/profile3.png"),
    name: "Bella Watson",
    date: "November 1, 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis urna volutpat aliquet viverra. Vulputate pharetra tortor justo, tellus dolor. Euismod a, lacus, ac pellentesque in et at egestas tristique. Scelerisque laoreet integer malesuada gravida a morbi convallis ut leo. Nulla id nec faucibus tincidunt et sapien.",
    rating: 4,
    reply: "Reply",
    replyuser: "Alex Stuart",
    feedBackcomment: "",
    feedbackDateTime: "November, 2021 8:32 AM",

    comments: [],
  },
  {
    id: "3",
    profileImg: require("../../assets/images/ratingsFeedback/profile2.png"),
    name: "Elijah James",
    date: "November 1, 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis urna volutpat aliquet viverra. Vulputate pharetra tortor justo, tellus dolor. Euismod a, lacus, ac pellentesque in et at egestas tristique. Scelerisque laoreet integer malesuada gravida a morbi convallis ut leo. Nulla id nec faucibus tincidunt et sapien.",
    rating: 3,
    reply: "Reply",
    replyuser: "Alex Stuart",
    feedBackcomment: "",
    feedbackDateTime: "November, 2021 8:32 AM",

    comments: [],
  },
  {
    id: "4",
    profileImg: require("../../assets/images/ratingsFeedback/profile1.png"),
    name: "Martha Stewart",
    date: "November 1, 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis urna volutpat aliquet viverra. Vulputate pharetra tortor justo, tellus dolor. Euismod a, lacus, ac pellentesque in et at egestas tristique. Scelerisque laoreet integer malesuada gravida a morbi convallis ut leo. Nulla id nec faucibus tincidunt et sapien.",
    rating: 5,
    reply: "Reply",
    replyuser: "Alex Stuart",
    feedBackcomment: "Im john wick",
    feedbackDateTime: "November, 2021 8:32 AM",

    comments: [],
  },
  {
    id: "5",
    profileImg: require("../../assets/images/ratingsFeedback/profile3.png"),
    name: "Bella Watson",
    date: "November 1, 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis urna volutpat aliquet viverra. Vulputate pharetra tortor justo, tellus dolor. Euismod a, lacus, ac pellentesque in et at egestas tristique. Scelerisque laoreet integer malesuada gravida a morbi convallis ut leo. Nulla id nec faucibus tincidunt et sapien.",
    rating: 5,
    reply: "Reply",
    replyuser: "Alex Stuart",
    feedBackcomment: "",
    feedbackDateTime: "November, 2021 8:32 AM",

    comments: [],
  },
  // {
  //   id: "6",
  //   profileImg: require("../../assets/images/ratingsFeedback/profile2.png"),
  //   name: "Elijah James",
  //   date: "November 1, 2021",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis urna volutpat aliquet viverra. Vulputate pharetra tortor justo, tellus dolor. Euismod a, lacus, ac pellentesque in et at egestas tristique. Scelerisque laoreet integer malesuada gravida a morbi convallis ut leo. Nulla id nec faucibus tincidunt et sapien.",
  //   rating: 5,
  //   reply: "Reply",
  //   replyuser: "Alex Stuart",
  //   feedBackcomment: "",
  //   comments: [],
  // },
  // {
  //   id: "7",
  //   profileImg: require("../../assets/images/ratingsFeedback/profile1.png"),
  //   name: "Martha Stewart",
  //   date: "November 1, 2021",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis urna volutpat aliquet viverra. Vulputate pharetra tortor justo, tellus dolor. Euismod a, lacus, ac pellentesque in et at egestas tristique. Scelerisque laoreet integer malesuada gravida a morbi convallis ut leo. Nulla id nec faucibus tincidunt et sapien.",
  //   rating: 5,
  //   reply: "Reply",
  //   replyuser: "Alex Stuart",
  //   feedBackcomment: "Im john wick",
  //   comments: [],
  // },
  // {
  //   id: "8",
  //   profileImg: require("../../assets/images/ratingsFeedback/profile3.png"),
  //   name: "Bella Watson",
  //   date: "November 1, 2021",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis urna volutpat aliquet viverra. Vulputate pharetra tortor justo, tellus dolor. Euismod a, lacus, ac pellentesque in et at egestas tristique. Scelerisque laoreet integer malesuada gravida a morbi convallis ut leo. Nulla id nec faucibus tincidunt et sapien.",
  //   rating: 5,
  //   reply: "Reply",
  //   replyuser: "Alex Stuart",
  //   feedBackcomment: "",
  //   comments: [],
  // },
  // {
  //   id: "9",
  //   profileImg: require("../../assets/images/ratingsFeedback/profile2.png"),
  //   name: "Elijah James",
  //   date: "November 1, 2021",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis urna volutpat aliquet viverra. Vulputate pharetra tortor justo, tellus dolor. Euismod a, lacus, ac pellentesque in et at egestas tristique. Scelerisque laoreet integer malesuada gravida a morbi convallis ut leo. Nulla id nec faucibus tincidunt et sapien.",
  //   rating: 2,
  //   reply: "Reply",
  //   replyuser: "Alex Stuart",
  //   feedBackcomment: "",
  //   comments: [],
  // },
  // {
  //   id: "10",
  //   profileImg: require("../../assets/images/ratingsFeedback/profile1.png"),
  //   name: "Martha Stewart",
  //   date: "November 1, 2021",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis urna volutpat aliquet viverra. Vulputate pharetra tortor justo, tellus dolor. Euismod a, lacus, ac pellentesque in et at egestas tristique. Scelerisque laoreet integer malesuada gravida a morbi convallis ut leo. Nulla id nec faucibus tincidunt et sapien.",
  //   rating: 2,
  //   reply: "Reply",
  //   replyuser: "Alex Stuart",
  //   feedBackcomment: "Im john wick",
  //   comments: [],
  // },
  // {
  //   id: "11",
  //   profileImg: require("../../assets/images/ratingsFeedback/profile3.png"),
  //   name: "Bella Watson",
  //   date: "November 1, 2021",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis urna volutpat aliquet viverra. Vulputate pharetra tortor justo, tellus dolor. Euismod a, lacus, ac pellentesque in et at egestas tristique. Scelerisque laoreet integer malesuada gravida a morbi convallis ut leo. Nulla id nec faucibus tincidunt et sapien.",
  //   rating: 1,
  //   reply: "Reply",
  //   replyuser: "Alex Stuart",
  //   feedBackcomment: "",
  //   comments: [],
  // },
  // {
  //   id: "12",
  //   profileImg: require("../../assets/images/ratingsFeedback/profile2.png"),
  //   name: "Elijah James",
  //   date: "November 1, 2021",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis urna volutpat aliquet viverra. Vulputate pharetra tortor justo, tellus dolor. Euismod a, lacus, ac pellentesque in et at egestas tristique. Scelerisque laoreet integer malesuada gravida a morbi convallis ut leo. Nulla id nec faucibus tincidunt et sapien.",
  //   rating: 1,
  //   reply: "Reply",
  //   replyuser: "Alex Stuart",
  //   feedBackcomment: "",
  //   comments: [],
  // },

];

// export const ratingFilter = [
//   {
//     id: "1",
//     ratingText: "1 stars"
//   },
//   {
//     id: "2",
//     ratingText: "2 stars"
//   },
//   {
//     id: "3",
//     ratingText: "3 stars"
//   },
//   {
//     id: "4",
//     ratingText: "4 stars"
//   },
//   {
//     id: "5",
//     ratingText: "5 stars"
//   }
// ];