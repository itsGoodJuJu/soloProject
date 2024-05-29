// This is your test secret API key.
const stripe = require('stripe')('sk_test_51PLPwHLjW4WRSldjbnJ5oBxzue8DmfjSJk05DMQCexpmhGEOTbr4cfz10Wp6JjciMttuKI7wxIDDKEm3mgr1j47f00lucZYu4R');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    // success_url: 'https://example.com/success',
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1PLRtALjW4WRSldj32KAi5LN',
        quantity: 1,
      },
    ],
    mode: 'payment',
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

//   res.send(session)
  res.send({clientSecret: session.client_secret});
});

app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

app.get('/session', async (req, res) => {
    const stripe = require('stripe')('sk_test_51PLPwHLjW4WRSldjbnJ5oBxzue8DmfjSJk05DMQCexpmhGEOTbr4cfz10Wp6JjciMttuKI7wxIDDKEm3mgr1j47f00lucZYu4R');
    const sessions = await stripe.checkout.sessions.list({
        limit: 3,
    });
    res.send(sessions)
})

app.listen(4242, () => console.log('Running on port 4242'));