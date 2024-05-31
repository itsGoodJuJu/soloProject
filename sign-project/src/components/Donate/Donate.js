import React from 'react';
import './Donate.css'

function Donate() {
  return (
    <>
      <h1 className='donate'>Donations and Merch</h1>
      <div className='page'>
        {/* ILY merch shirt */}
        <stripe-buy-button
          buy-button-id="buy_btn_1PLUXYLjW4WRSldjfrToTrfE"
          publishable-key="pk_test_51PLPwHLjW4WRSldjISLiKRZdFMRYRCmVhq1sZFwWBHDBsBmQ7UPBUTaKE9i1ARUGBAiPzBVmZGEfR2Oif97kfV7L00sCkSPOsb"
        >
        </stripe-buy-button>
        {/* donate to Handy-Dandy */}
        <stripe-buy-button
          buy-button-id="buy_btn_1PLTztLjW4WRSldjRoVU30U6"
          publishable-key="pk_test_51PLPwHLjW4WRSldjISLiKRZdFMRYRCmVhq1sZFwWBHDBsBmQ7UPBUTaKE9i1ARUGBAiPzBVmZGEfR2Oif97kfV7L00sCkSPOsb"
        >
        </stripe-buy-button>
        {/* donate to AASD */}
        <stripe-buy-button
          buy-button-id="buy_btn_1PLUIoLjW4WRSldjOlA7nr1q"
          publishable-key="pk_test_51PLPwHLjW4WRSldjISLiKRZdFMRYRCmVhq1sZFwWBHDBsBmQ7UPBUTaKE9i1ARUGBAiPzBVmZGEfR2Oif97kfV7L00sCkSPOsb"
        >
        </stripe-buy-button>
      </div>
      
    </>
  )
}

export default Donate

// import React, { useCallback, useState, useEffect } from "react";
// import {loadStripe} from '@stripe/stripe-js';
// import {
//   EmbeddedCheckoutProvider,
//   EmbeddedCheckout
// } from '@stripe/react-stripe-js';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect
// } from "react-router-dom";

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// // This is your test public API key.
// const stripePromise = loadStripe("pk_test_51PLPwHLjW4WRSldjISLiKRZdFMRYRCmVhq1sZFwWBHDBsBmQ7UPBUTaKE9i1ARUGBAiPzBVmZGEfR2Oif97kfV7L00sCkSPOsb");

// const CheckoutForm = () => {
//   const fetchClientSecret = useCallback(() => {
//     // Create a Checkout Session
//     return fetch("/create-checkout-session", {
//       method: "POST",
//     })
//       .then((res) => res.json())
//       .then((data) => data.clientSecret);
//   }, []);

//   const options = {fetchClientSecret};

//   return (
//     <div id="checkout">
//       <EmbeddedCheckoutProvider
//         stripe={stripePromise}
//         options={options}
//       >
//         <EmbeddedCheckout />
//       </EmbeddedCheckoutProvider>
//     </div>
//   )
// }

// const Return = () => {
//   const [status, setStatus] = useState(null);
//   const [customerEmail, setCustomerEmail] = useState('');

//   useEffect(() => {
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     const sessionId = urlParams.get('session_id');

//     fetch(`/session-status?session_id=${sessionId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setStatus(data.status);
//         setCustomerEmail(data.customer_email);
//       });
//   }, []);

//   if (status === 'open') {
//     return (
//       <Route path="/checkout" />
//     )
//   }

//   if (status === 'complete') {
//     return (
//       <section id="success">
//         <p>
//           We appreciate your business! A confirmation email will be sent to {customerEmail}.

//           If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
//         </p>
//       </section>
//     )
//   }

//   return null;
// }

// const Donate = () => {
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route path="/checkout" element={<CheckoutForm />} />
//           <Route path="/return" element={<Return />} />
//         </Switch>
//       </Router>
//     </div>
//   )
// }

// export default Donate;