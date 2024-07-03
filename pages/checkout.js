// pages/checkout.js
import { useState, useEffect } from "react";
import styles from '../app/styles/checkout.css';

export default function Checkout() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return;
    }

    setItems(cartItems);
    const totalAmount = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);
      if (isNaN(price) || isNaN(quantity)) {
        return sum;
      }
      return sum + price * quantity;
    }, 0);
    setTotal(totalAmount);
  }, []);

  const handleShippingMethodChange = (event) => {
    setShippingMethod(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          shippingMethod,
          firstName,
          lastName,
          email,
          phone,
          address,
          city,
          postalCode,
          country,
        }),
      });

      const session = await response.json();
      console.log("Stripe session response:", session); // Log for response
      if (session.id) {
        window.location.href = session.url;
      } else {
        alert(session.error);
      }
    } catch (err) {
      console.error("Error submitting payment:", err); // Log for error
      alert("An error occurred while creating the payment session.");
    }
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Page de Paiement</h1>

      <div className="checkout-form">
        <div className="form-section">
          <h2>Information de livraison</h2>
          <div className="form-group">
            <label htmlFor="firstName">Prénom:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Nom:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Téléphone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Adresse:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Ville:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Code Postal:</label>
            <input
              type="text"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Pays:</label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="FR">France</option>
              {/* Add other countries as needed */}
            </select>
          </div>
        </div>

        <div className="form-section">
          <h2>Méthode de livraison</h2>
          <div className="form-group">
            <input
              type="radio"
              id="standard"
              name="shippingMethod"
              value="standard"
              checked={shippingMethod === 'standard'}
              onChange={handleShippingMethodChange}
            />
            <label htmlFor="standard">Standard (3-5 jours ouvrables)</label>
          </div>
          <div className="form-group">
            <input
              type="radio"
              id="express"
              name="shippingMethod"
              value="express"
              checked={shippingMethod === 'express'}
              onChange={handleShippingMethodChange}
            />
            <label htmlFor="express">Express (24h-48h jours ouvrables)</label>
          </div>
        </div>

        <div className="form-section">
          <h2>Récapitulatif de commande</h2>
          <div className="items-list">
            {items.map((item, index) => (
              <div key={index} className="item-card">
                <h2 className="item-name">{item.name}</h2>
                <p className="item-price">${item.price} x {item.quantity}</p>
              </div>
            ))}
          </div>
          <h2 className="total-amount">Total: ${total.toFixed(2)}</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="payment-form">
        <button type="submit" className="pay-button">
          Payer avec Stripe
        </button>
      </form>

    </div>
  );
}
