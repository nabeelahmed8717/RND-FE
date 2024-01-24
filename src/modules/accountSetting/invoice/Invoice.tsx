import { Box, Button, Grid } from "@mui/material";
import {
  InvoicesBillData,
  InvoicesData,
  InvoicesTableData,
} from "../../../common/mockData/accountSettings/invoices/invoices";
import React, { useEffect, useState } from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import CommonTable from "../../../common/components/commonTable/commonTable";
import Dialog from "@mui/material/Dialog";
import { IInvoices } from "../../../common/interfaces/accountSettingsInterface";
import Image from "next/image";
import { InvoicesTableConstants } from "../../../common/constants/invoices";
import Logo from "../../../assets/images/accountsettings/logo.png";
import SearchInvoices from "./searchInvoices/SearchInvoices";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { jsPDF } from "jspdf";
import InVoiceDownload from "../../../assets/icons/common/InVoiceDownload";
import CancelIcon from "@mui/icons-material/Cancel";
import { apiGetRequest } from "../../../helpers/request"
import { endpoints } from "../../../config/endpoints";

const Invoices = () => {
  const [page, setPage] = useState(0);
  const [searchInvoice, setSearchInvoice] = useState("");
  const [IsViewInvoice, setIsViewInvoice] = useState(false);
  const [invoiceData, setInvoiceData] = useState([]);
  const [getInvoicePdf, setGetInvoicePdf] = useState({});
  console.log(getInvoicePdf, 'getInvoicePdf');
  
  
  const generatePDF = () => {
    const pdf: any = new jsPDF("portrait", "pt", [900, 920]);
    pdf.setFont("courier", "normal");
    pdf.html(document.querySelector("#report")).then(() => {
      pdf.save("report.pdf");
    });
  };

  const invoicesPDF = async (id:any) => {
    const response =  await apiGetRequest(`${endpoints.invoiceUserList}/${id}`);
    setGetInvoicePdf(response.data.data);
    setIsViewInvoice(true);
  };

  const SearchInvoiceHandler = (data: IInvoices[]) => {
    if (searchInvoice) {
      return data.filter((data: IInvoices) =>
        data.date.toLowerCase().includes(searchInvoice.toLowerCase())
      );
    }
    return data;
  };

  const getInvoice = async () => {
   const response =  await apiGetRequest(`${endpoints.invoiceUserList}`);
   setInvoiceData(response.data.data);
  }


  useEffect(() => {
    getInvoice(); 
  },[])

  return (
    <div className="invoices">
      <Box className="fw-700 fs-24 dark-color"> Invoices </Box>
      <SearchInvoices
        setPage={setPage}
        setSearchCard={setSearchInvoice}
        searchCard={searchInvoice}
      />
      <CommonTable
        cols={InvoicesTableConstants(invoicesPDF)}
        data={SearchInvoiceHandler(invoiceData)}
        isPagination={false}
        recordsPerPage={8}
        heightOfTable={1000}
        setPage={setPage}
        page={page}
      />
      <Dialog
        fullWidth
        maxWidth={"md"}
        onClose={() => {
          setIsViewInvoice(false);
        }}
        open={IsViewInvoice}
      >
        <Box
          className="position-relative invoice-modal border-radius-8 bg-white m-auto "
          sx={{ width: "100%", height: "55.813rem" }}
        >
          <Box  sx={{ width: "100%", height: "50 rem" }}>
          <Grid sx={{ pt: 1, px: 1 }} className="text-right cursor-pointer">
            <CancelIcon
              sx={{
                width: "26.67px",
                height: "26.67px",
                color: "#343A40",
                opacity: "0.35",
              }}
              onClick={() => {
                setIsViewInvoice(false);
              }}
            />
          </Grid>
          <Grid
            container
            sx={{ px: 2.5 }}
            id="report"
            className="wrap-invoice-text-and-logo"
          >
            <Grid item lg={6} md={6} sm={4} xs={12} className="invoice-logo">
              <Image src={Logo} alt="logo" />
              <p className="lh-24 fs-16 fw-600 label-color">202550826</p>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={8}
              xs={12}
              className="invoice-rnd-tax-claims-address flex direction-column align-end lh-24 label-color fs-16 fw-600"
            >
              <span className="invoice-top-address-text">
                RND Tax Claims 103 First Floor, 6th Street
              </span>
              <span className="invoice-top-address-text">London V2V 69T</span>
              <span className="invoice-top-address-text">United Kingdom</span>
              <span className="invoice-top-address-text">+44 900 113 6198</span>
              <span className="invoice-top-address-text">
                support@rndtaxclaims.co.uk
              </span>
            </Grid>

            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{
                minHeight: "192px",
                background: "#0F5156",
                px: 3.3,
                py: 1,
              }}
              className="flex justify-between wrap-invoice-4122-section "
            >
              <Grid
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className="text flex direction-column invoice-4122-section"
              >
                <span className="fw-700 fs-40 lh-48 white-color">
                  Invoice 4122
                </span>

                <span className="fw-600 fs-16 lh-24 white-color  invoice-due-date">
                  Invoice Date : 1 October 2020
                </span>
                <span className="fw-600 fs-16 lh-24 white-color ">
                  Due Date : 6 October 2020
                </span>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={12}
                lg={6}
                className="wrap-invoice-amount-due flex direction-column "
              >
                <span className="fw-600 fs-16 lh-24 white-color text-right invoice-amount-due">
                  Amount Due
                </span>
                <span className="fw-700 fs-40 lh-48 white-color text-right ">
                  £ 588.00
                </span>
              </Grid>
            </Grid>

            <Grid item lg={12} sx={{ pt: 1 }}>
              <Grid container>
                <Grid item lg={4} md={4}>
                  {InvoicesBillData.map((invoicesData: any) => (
                    <Grid container key={invoicesData}>
                      <Grid item lg={4} md={2} sm={6} xs={6}>
                        <span className="lh-24 fs-16 fw-700">Bill To :</span>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        md={3}
                        sm={6}
                        xs={6}
                        className="flex direction-column  mb-15"
                      >
                        <span className="fs-16 fw-700 lh-24 invoice-left-text-spacing">
                          {invoicesData.billName}
                        </span>
                        <span className="fs-14 fw-600 label-color lh-20 invoice-left-text-spacing">
                          Address
                        </span>
                        <span className="fs-14 fw-700 lh-20 invoice-left-text-spacing">
                          {invoicesData.billAddress}
                        </span>
                        <span className="fs-14 fw-600 label-color lh-20 invoice-left-text-spacing">
                          Email
                        </span>
                        <span className="fs-14 fw-700 lh-20 invoice-left-text-spacing">
                          {invoicesData.billEmail}
                        </span>
                      </Grid>
                      <Grid container sx={{ pt: 2 }}>
                        <Grid item lg={4} md={2} sm={6} xs={6}>
                          <span className="lh-24 fs-16 fw-700">Ship To :</span>
                        </Grid>
                        <Grid
                          item
                          lg={6}
                          md={3}
                          sm={6}
                          xs={6}
                          className="flex direction-column"
                        >
                          <span className="fs-16 fw-700 lh-24 invoice-left-text-spacing">
                            {invoicesData.shipName}
                          </span>
                          <span className="fs-14 fw-600 label-color lh-20 invoice-left-text-spacing">
                            Address
                          </span>
                          <span
                            className="fs-14 fw-700 lh-20 invoice-left-text-spacing"
                            style={{ whiteSpace: "pre" }}
                          >
                            {invoicesData.shipAddress}
                          </span>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
                <hr />
                <Grid item lg={7} md={7} sm={12} xs={12}>
                  <Grid container>
                  <Grid item lg={12} md={12}>
                    <TableContainer>
                      <Table
                        aria-label="simple table"
                        sx={{
                          [`& .${tableCellClasses.root}`]: {
                            borderBottom: "none",
                           
                          },
                        }}
                      >
                        <TableHead>
                          <TableRow>
                            {InvoicesTableData.map((invoices: any) => (
                              <TableCell
                                key={invoices}
                                className="primary-color fw-700 font-source-sans-pro fs-16 lh-24 text-no-wrap"
                              >
                                {invoices.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {InvoicesBillData.map((row: any) => (
                            <TableRow
                              key={row.billName}
                              className="table-hover"
                            >
                              <TableCell className="font-source-sans-pro">
                                Vandelay Group 01 January 2022 RND Report
                              </TableCell>
                              <TableCell className="font-source-sans-pro">
                                £ 490.00
                              </TableCell>
                              <TableCell className="font-source-sans-pro">
                                1
                              </TableCell>
                              <TableCell className="font-source-sans-pro">
                                £ 490.00
                              </TableCell>
                            </TableRow>
                          ))}
                          <Grid sx={{ pt: 2 }}></Grid>

                          <TableRow>
                            <TableCell colSpan={2} />
                            <TableCell
                              className="fw-700 fs-16 font-source-sans-pro"
                              style={{ paddingBottom: 0 }}
                            >
                              Sub Total
                            </TableCell>
                            <TableCell
                              align="right"
                              className="fw-600 fs-14 font-source-sans-pro "
                              style={{ paddingBottom: 0 }}
                            >
                              £ 490.00
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell colSpan={2} />
                            <TableCell
                              className="fw-400 fs-16 font-source-sans-pro"
                              style={{ paddingBottom: 0 }}
                            >
                              Tax (20%)
                            </TableCell>
                            <TableCell
                              align="right"
                              className="fw-600 fs-14 font-source-sans-pro"
                              style={{ paddingBottom: 0 }}
                            >
                              £ 490.00
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell colSpan={2} />
                            <TableCell
                              className="fw-700 fs-16 font-source-sans-pro"
                              style={{ paddingBottom: 0 }}
                            >
                              Amount Due
                            </TableCell>
                            <TableCell
                              align="right"
                              className="fw-600 fs-14 font-source-sans-pro"
                              style={{ paddingBottom: 0 }}
                            >
                              £ 490.00
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box 
            className="invoice-border-botttom flex justify-end "
            sx={{bottom:{position:"absolute",lg:"0%"},  width: "100%"}}
          >
            <Box className="wrap-invoice-download-btn flex align-center justify-end ">
              <Button
                variant="contained"
                startIcon={<InVoiceDownload />}
                className="invoice-download-btn bg-gradient-green  fw-700 fs-16 lh-24 font-source-sans-pro cursor-pointer border-radiues-3 white-color flex align-center justify-end"
                onClick={generatePDF}
              >
                Download
              </Button>
            </Box>
          </Box>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default Invoices;
