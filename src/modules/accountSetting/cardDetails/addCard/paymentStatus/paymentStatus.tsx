import { useState, useEffect } from 'react';
import { useStripe } from '@stripe/react-stripe-js';

const PaymentStatus = () => {
    const stripe = useStripe();
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        if (!stripe) {
            return;
        }
        console.log("window.location.search", window.location.search)
        if (!window.location.search) {
            return;
        }

        // Retrieve the "setup_intent_client_secret" query parameter appended to
        // your return_url by Stripe.js
        const clientSecret: any = new URLSearchParams(window.location.search).get(
            'setup_intent_client_secret'
        );

        // Retrieve the SetupIntent
        stripe
            .retrieveSetupIntent(clientSecret)
            .then(({ setupIntent }: any) => {
                // Inspect the SetupIntent `status` to indicate the status of the payment
                // to your customer.
                //
                // Some payment methods will [immediately succeed or fail][0] upon
                // confirmation, while others will first enter a `processing` state.
                //
                // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
                switch (setupIntent.status) {
                    case 'succeeded':
                        setMessage('Success! Your payment method has been saved.');
                        break;

                    case 'processing':
                        setMessage("Processing payment details. We'll update you when processing is complete.");
                        break;

                    case 'requires_payment_method':
                        // Redirect your user back to your payment page to attempt collecting
                        // payment again
                        setMessage('Failed to process payment details. Please try another payment method.');
                        break;
                }
            });
    }, [stripe]);


    return (
        <div>

            {message}
        </div>
    )
};

export default PaymentStatus;