import dayjs from "dayjs";
import Image from "next/image";
import PdfIcon from "../../assets/images/accountsettings/pdf-icon.png";

export const InvoicesTableConstants = (
    invoicesPDF: Function,
) => {
    return [
        {
            title: "Date",
            render: (rowData: any) => {
                return (
                    <span className="text-no-wrap">
                        {dayjs(rowData.date).format('DD/MM/YYYY')}
                    </span>
                );
            },
        },
        {
            title: "Time",
            render: (rowData: any) => {
                return <span className="text-no-wrap">{dayjs(rowData.date).format('HH:mm')}</span>;
            },
        },
        {
            title: "Description",
            render: (rowData: any) => {
                return (
                    <span className="text-no-wrap" >
                        {rowData.description}
                    </span>
                );
            },
        },
        {
            title: "Total",
            render: (rowData: any) => {
                return (
                    <span className="text-no-wrap">
                        {rowData.total}
                    </span>
                );
            },
        },
        {
            title: "Action",
            render: (rowData: any) => {
                return (
                    <div className="text-no-wrap fitContent cursor-pointer">
                        <span

                            className="cursor-pointer"
                            onClick={() => invoicesPDF(rowData.id)}
                        >
                            <Image src={PdfIcon} alt='pdf' />
                        </span>
                    </div>
                );
            },
        },
    ];
};