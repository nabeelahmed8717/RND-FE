export interface QuestionSidebar {
  id?:string | number,
  title?: string;
  icon?: any;
  submenu?: QuestionSidebar[];
}