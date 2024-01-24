import { IInvoices } from "../../../interfaces/accountSettingsInterface";

export const InvoicesData: IInvoices[] = [
  {
    id: 1,
    date: "28/02/2022",
    time: "12:15",
    description: "Vandelay Group 01 January 2022 RND Report",
    total: 588.0,
  },
];

export const InvoicesBillData = [
  {
    billName: "Vandelay Group",
    billAddress: "68 Buchan Street London C2 5KM United Kingdom",
    billEmail: "hello@vandelaygroup.com",
    shipLabel: "Ship To",
    shipName: "Vandelay Group",
    shipAddress: "68 Buchan Street\nLondon\nC2 5KM United Kingdom",
  },
];
export const InvoicesTableData = [
  {
    label: "Description",
    name: "Vandelay Group 01 January 2022 RND Report",
  },
  {
    label: "Rate",
    name: "£ 490.00",
  },
  {
    label: "Qty",
    name: "1",
  },
  {
    label: "Total",
    name: "£ 490.00",
  },
];
