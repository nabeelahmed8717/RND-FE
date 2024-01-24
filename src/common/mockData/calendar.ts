export interface calendarEvents {
  title: string;
  eventType: string;
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  description: string;
}

// category option data
// export const categoryOptions: string[] = ["Meeting", "Important", "Personal", "Work", "Travel"];

export const categoryOptions = [
  {id:'1', name:'Meeting', },
  {id:'2', name:'Important', },
  {id:'3', name:'Personal', },
  {id:'4', name:'Work', },
  {id:'5', name:'Travel',},
]

export const initialValues = { id: '', title: '', eventType: '', start: '', end: '', description: '' };

// category filter options
export const categoryFilterOptions: { cat: string, isChecked: boolean }[] = [{ cat: 'work', isChecked: false }, { cat: 'personal', isChecked: false }, { cat: 'important', isChecked: false }, { cat: 'travel', isChecked: false }, { cat: 'friends', isChecked: false }];

export const breadCrumbData = [
  { name: "Calendar " }, { name: "  Dashboard ", onClickNavigateTo: "/" },
  { name: " / My Calender"},
];

// calendar events data
export const eventsData = [
  {
    id: "1",
    title: "Meeting with RND expert",
    eventType: "Meeting",
    start: "2022-10-24T11:00:00.155Z",
    end: "2022-10-24T12:00:00.155Z",
    description: "Corner Rounded St London, United Kingdom",
  },
  {
    id: "2",
    title: "Meeting with RND individual",
    eventType: "Important",
    start: "2022-09-15T13:00",
    end: "2022-09-18T11:30",
    description: "Corner Rounded St London, United Kingdom",
  },
  {
    id: "3",
    title: "Meeting with RND admin",
    eventType: "Personal",
    start: "2022-11-13T11:00",
    end: "2022-11-15T13:30",
    description: "Corner Rounded St London, United Kingdom",
  },
];


