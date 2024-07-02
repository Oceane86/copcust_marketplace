// server.js or index.js
const express = require('express');
const stripe = require('stripe')('your_stripe_secret_key');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/checkout_sessions', async (req, res) => {
  const { items } = req.body;
  const transformedItems = items.map((item) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: transformedItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success', // your success url
    cancel_url: 'http://localhost:3000/cancel', // your cancel url
  });

  res.json({ id: session.id, url: session.url });
});

app.listen(3000, () => console.log('Server running on port 3000'));
