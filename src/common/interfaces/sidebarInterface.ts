export interface RouteInfo {
  id?:string | number,
  path: string;
  title?: string;
  description?:string;
  icon?: any;
  iconOpenend?:any;
  iconClosed?:any;
  submenu?: RouteInfo[];
  hours?:string;
  date?:string;
  hideIcon?: any;
}