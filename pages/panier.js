// pages/panier.js

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../app/styles/panier.css";

export default function Panier() {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(cartItems);
  }, []);

  const removeItemFromCart = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  const clearCart = () => {
    setItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const proceedToCheckout = () => {
    localStorage.setItem("cart", JSON.stringify(items));
    router.push("/checkout");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Panier</h1>
      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className={styles.cartItems}>
          {items.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <div className={styles.details}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>{item.price} €</p>
                <div className={styles.quantity}>
                  <button>-</button>
                  <span>0</span>
                  <button>+</button>
                </div>
                <button onClick={() => removeItemFromCart(index)}>Supprimer</button>
              </div>
            </div>
          ))}
          <div className={styles.summary}>
            <p>LIVRAISON : 5 a 8 jours ouvres offerte</p>
            <p>PRIX : 900 €</p>
            <p>Dont TVA Incluse : 150 €</p>
            <p>TOTAL : 900 €</p>
            <button onClick={proceedToCheckout}>Payer</button>
            <button onClick={clearCart}>vider le panier</button>
          </div>
        </div>
      )}
    </div>
  );
}
