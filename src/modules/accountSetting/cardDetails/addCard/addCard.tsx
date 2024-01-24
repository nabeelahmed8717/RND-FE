import React, { FC, useState, useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import CommonModal from "../../../../common/components/commonModal/commonModal";
import { Box, Button, Grid, Modal } from "@mui/material";
import { ICardAddList } from "../../../../common/interfaces/accountSettingsInterface";
import { addCardCommonModalSxStyling, addClientModalSxStyling, sameCommonModalSxStyling, userCardStyle } from "../../../../common/components/commonModal/commonModalSxStyle";
import { displayToastr } from "../../../../redux/toaster/toasterSlice";
import { loadStripe } from "@stripe/stripe-js";
import { useAppDispatch } from "../../../../hooks/use-store.hooks";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm/checkoutForm";
import PaymentStatus from "./paymentStatus/paymentStatus";
import { apiGetRequest } from "../../../../helpers/request";
import { endpoints } from "../../../../config/endpoints";
import { useDispatch } from "react-redux";

const stripePromise = loadStripe(
  "pk_test_51M5RHiJXqpWyU6gnr5T6ISZNebdRAZLOiDTG9a882aCEB06Pelv6p6VpvIn42MVKUVYPwmk8KcAy3y8Qc1Q7OxRZ00peRpF921"
);

interface IClientSecret {
  clientSecret: string;
  customerId: string;
}

const AddCard: FC<ICardAddList> = (props) => {
  const dispatch = useDispatch()
  const [clientSecret, setClientSecret] =
    useState<IClientSecret | undefined>(undefined);

  const fetchClientSecret = async () => {
    try {
      // setIsloading(true);
      const response = await apiGetRequest(`${endpoints.cardSetupIntent}`);
      console.log(response.data);
      if (response.data.error) {
        alert("error");
        // setIsloading(false);
        // setErrorMessage("error occured");
      } else {
        console.log("response", response.data.data);
        setClientSecret(response.data.data);

        // setClaimData(response.data.data);
        // setData(response.data.data);
        // setTotalRecords(response.data.total);
        // setIsloading(false);
      }
    } catch (error) {
      alert("error");
      // setIsloading(false);
      // setErrorMessage("error occured");
    }
  };

  useEffect(() => {
    fetchClientSecret();
  }, []);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret?.clientSecret,
  };
  // const elements = elements({clientSecret, appearance});
  return (
    <div>
      <Modal
        open={props.IsAddCard}
        onClose={() => props.setIsAddCard(false)}
      >
        <Box sx={userCardStyle}>
          <Grid container  >
            <Grid item xs={12}
              className="flex justify-between"
              sx={{ pb: 1, pt: 2 }}
            >
              <span className="fs-24 fw-600 dark-color lh-32 font-source-sans-pro">
                Add Card
              </span>
              <CancelIcon
                onClick={() => props.setIsAddCard(false)}
                fontSize="medium"
                style={{ color: "#C2C4C6" }}
                className="cursor-pointer"
              />
            </Grid>

            <Grid item xs={12} sx={{ pt: 4 }}>
              <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
                <PaymentStatus />
              </Elements>
            </Grid>
          </Grid>

        </Box>


      </Modal>












      {/* <CommonModal
        title="Add Card"
        modalopenHandler={props.IsAddCard}
        setModalOpenHandler={props.setIsAddCard}
        modalSxStyle={addCardCommonModalSxStyling}
      // isLoading={isLoading}
      >
        <Grid container sx={{ pt: 3 }}>
          <Grid item xs={12}>
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm />
              <PaymentStatus />
            </Elements>
          </Grid>
        </Grid>
      </CommonModal> */}
    </div>
  );
};

export default AddCard;
