// pages/verification.js

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { applyActionCode, sendEmailVerification } from "firebase/auth";
import { auth } from "../config/firebase";
import Head from "next/head";
import styles from "../app/styles/verification.css";

export default function Verification() {
  const [email, setEmail] = useState("");
  const [verificationError, setVerificationError] = useState(null);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleVerifyEmail = async () => {
      try {
        const { mode, oobCode } = router.query;
        if (mode === "verifyEmail" && oobCode) {
          await applyActionCode(auth, oobCode);
          const user = auth.currentUser;
          setEmail(user.email);
          setVerificationSuccess(true);

          setTimeout(() => {
            router.push("/about");
          }, 2000);
        }
      } catch (error) {
        console.error("Error verifying email:", error);
        setVerificationError("Échec de la vérification de l'e-mail.");
      }
    };

    handleVerifyEmail();
  }, [router]);

  const handleEmailVerification = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
        if (email && user.email !== email) {
          setVerificationError("L'adresse e-mail saisie ne correspond pas à celle de l'utilisateur connecté.");
          return;
        }

        await sendEmailVerification(user);
        console.log("E-mail de vérification envoyé.");
        setVerificationSuccess(true);
        setVerificationError(null);

        setTimeout(() => {
          router.push("/about");
        }, 2000);
      } else {
        setVerificationError("Aucun utilisateur n'est connecté.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail de vérification:", error);
      setVerificationError("Échec de l'envoi de l'e-mail de vérification.");
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Vérification de l'email</title>
        <meta name="description" content="Vérifiez votre adresse e-mail pour activer votre compte." />
      </Head>
      <div className="verification-box">
        <h1>Vérification mail</h1>
        <p>Vérifiez votre boîte mail pour valider votre compte.</p>
        <input
          type="email"
          placeholder="Votre adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required
          disabled // Désactivez l'entrée d'e-mail car elle sera automatiquement remplie
        />
        <div className="resend-link" onClick={handleEmailVerification}>
          Renvoyer le code
        </div>
        <div className="container-button">
          <button onClick={handleEmailVerification} className="login-button">
            Valider
          </button>
        </div>
        {verificationError && <p className={styles.errorMessage}>{verificationError}</p>}
        {verificationSuccess && <p className={styles.successMessage}>Compte vérifié avec succès ! Redirection...</p>}
      </div>
    </div>
  );
}
