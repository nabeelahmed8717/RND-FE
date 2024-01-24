import { STATUS } from "../../common/constants/store";
export interface IRecentActivity {
  activityMessage: string;
  id: string;
  userStatus: string;
}
export interface IRecentActivitiesState {
  todayData:IRecentActivity[];
  yesterdayData:IRecentActivity[];
  status: STATUS;
  errors: any;
  message: string;
}
