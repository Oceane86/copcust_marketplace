// pages/about.js


import React, { useState } from "react";
import { useRouter } from 'next/router';
import Head from "next/head"; // Pour l'optimisation SEO
import styles from "../app/styles/about.css";

export default function About() {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const router = useRouter();

  // Fonction pour gérer le changement de genre
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="container">
      {/* Optimisation SEO */}
      <Head>
        <title>À propos de vous</title>
        <meta name="description" content="Parlez-nous de vous en remplissant ce formulaire." />
      </Head>
      <div className="about-box">
        <h1>Parle nous de toi</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Prénom*"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="date"
            placeholder="Date de naissance"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="input-field"
            required
          />
          <div className="gender-container">
            <label className="gender-label">Genre</label>
            <div className="gender-option">
              <input
                type="radio"
                id="homme"
                name="gender"
                value="homme"
                checked={gender === "homme"}
                onChange={handleGenderChange}
              />
              <label htmlFor="homme">Homme</label>
            </div>
            <div className="gender-option">
              <input
                type="radio"
                id="femme"
                name="gender"
                value="femme"
                checked={gender === "femme"}
                onChange={handleGenderChange}
              />
              <label htmlFor="femme">Femme</label>
            </div>
            <div className="gender-option">
              <input
                type="radio"
                id="autre"
                name="gender"
                value="autre"
                checked={gender === "autre"}
                onChange={handleGenderChange}
              />
              <label htmlFor="autre">Autre</label>
            </div>
          </div>
          <div className="container-button">
            <button type="submit" className="submit-button">
              Valider
              <span className={styles.icon}> ✔</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
