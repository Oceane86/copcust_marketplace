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
        {/* Balises SEO optimisées */}
        <title>Vérification de l'email - MyWebsite</title>
        <meta name="description" content="Vérifiez votre adresse e-mail pour activer votre compte sur MyWebsite." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.mywebsite.com/verification" />
        <meta property="og:title" content="Vérification de l'email - MyWebsite" />
        <meta property="og:description" content="Vérifiez votre adresse e-mail pour activer votre compte sur MyWebsite." />
        <meta property="og:url" content="https://www.mywebsite.com/verification" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.mywebsite.com/images/verification-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vérification de l'email - MyWebsite" />
        <meta name="twitter:description" content="Vérifiez votre adresse e-mail pour activer votre compte sur MyWebsite." />
        <meta name="twitter:image" content="https://www.mywebsite.com/images/verification-twitter-image.jpg" />
      </Head>
      <div className="verification-box">
        <h1>Vérification mail</h1>
        <p>Checker ta boîte mail pour valider ton compte.</p>
        <label htmlFor="email" className="visually-hidden">Adresse e-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required
          aria-required="true"
        />
        <div 
          className="resend-link" 
          onClick={handleEmailVerification} 
          role="button" 
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') handleEmailVerification(); }}
        >
          Renvoyer le code
        </div>
        <div className="container-button">
          <button onClick={handleEmailVerification} className="login-button">
            Valider
          </button>
        </div>
        {verificationError && <p className={styles.errorMessage} role="alert">{verificationError}</p>}
        {verificationSuccess && <p className={styles.successMessage} role="alert">Compte vérifié avec succès ! Redirection...</p>}
      </div>
    </div>
  );
}
