import { Box } from "@mui/material";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState<string | undefined | null>(
    null
  );
  const handleSubmit = async (event: any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const { error } = await stripe.confirmSetup({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://gateway-dev.rndtaxclaims.uk/users/card-redirect",
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
      console.log(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };


  return (
    <form onSubmit={handleSubmit} className="custom-form">
      <PaymentElement />
      {/* <AddressElement options={{ mode: 'billing', blockPoBox: true, fields: { phone: 'always', }, validation: { phone: { required: 'never', }, }, }} /> */}
      <Box className="flex justify-end" sx={{ pt: 4 }} >
        <button
          disabled={!stripe}
          className="add-button fw-700 fs-16 h-48 common-button-hover white-color"
        >

          Add
        </button>
      </Box>

      {errorMessage && <div>{errorMessage}</div>}
      {/* Show error message to your customers */}
    </form>
  );
};

export default CheckoutForm;
