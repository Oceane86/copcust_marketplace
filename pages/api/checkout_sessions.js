// checkout_sessions.sj
const stripe = require('stripe')('sk_test_51PTfgqP8rSXKZMmR7lcNDO9FwOldjjcYUAp3D4tL5bU6h0ghswQaIFJlf5akmvKXWb4WnPifdzRnXDE3RunM0Key00Dsjn62ZH'); 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { items, shippingMethod, firstName, lastName, email, phone, address, city, postalCode, country } = req.body;

      console.log("Received request body:", req.body); // Log for request body

      // Validate items
      if (!items || items.length === 0) {
        console.error('No items provided');
        return res.status(400).json({ error: 'No items provided' });
      }

      // Convert items to Stripe line items
      const lineItems = items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100), // amount in cents
        },
        quantity: item.quantity,
      }));

      console.log("Line items for Stripe:", lineItems); // Log for line items

      // Create a checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success', // Replace with your success URL
        cancel_url: 'http://localhost:3000/cancel',   // Replace with your cancel URL
        customer_email: email,
        shipping_address_collection: {
          allowed_countries: ['US', 'CA', 'FR'], // Add more countries if needed
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: shippingMethod === 'express' ? 1500 : 500, // Adjust shipping rates
                currency: 'usd',
              },
              display_name: shippingMethod === 'express' ? 'Express Shipping' : 'Standard Shipping',
            },
          },
        ],
      });

      console.log("Stripe session created:", session); // Log for created session

      res.status(200).json({ id: session.id, url: session.url });
    } catch (err) {
      console.error('Error creating Stripe session:', err); // Log for error
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
