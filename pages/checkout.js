import { useState, useEffect } from "react";

export default function Checkout() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Retrieved cart items:", cartItems);
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
        console.log("No items in the cart or cart data is not an array");
        return;
      }
  
      cartItems.forEach((item, index) => {
        console.log(`Item ${index}:`, item);
      });
    setItems(cartItems);
    const totalAmount = cartItems.reduce((sum, item) => {
        console.log("Item price (raw):", item.price, "Item quantity (raw):", item.quantity);
  
        const price = parseFloat(item.price);
        const quantity = parseInt(item.quantity, 10);
  
        console.log("Parsed price:", price, "Parsed quantity:", quantity);
  
        if (isNaN(price) || isNaN(quantity)) {
          console.warn("Invalid price or quantity for item:", item);
          return sum;
        }
  
        return sum + price * quantity;
      }, 0);
      setTotal(totalAmount);})

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });

    const session = await response.json();
    if (session.id) {
      window.location.href = session.url;
    } else {
      alert(session.error);
    }
  };

  return (
    <div className="p-24">
      <h1 className="text-4xl font-bold mb-8">Page de Paiement</h1>
      <p>Merci de procéder au paiement pour compléter votre commande.</p>
      <div>
        {items.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg mb-4">
            <h2 className="text-2xl font-semibold">{item.name}</h2>
            <p>{item.description}</p>
            <p className="text-xl font-bold">${item.price} x {item.quantity}</p>
          </div>
        ))}
        <h2 className="text-2xl font-bold mt-8">Total: ${total.toFixed(2)}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="mt-8 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Payer avec Stripe
        </button>
      </form>
    </div>
  );
}
