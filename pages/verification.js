// pages/verification.js
import { useState } from "react";
import { useRouter } from "next/router";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../config/firebase";
import styles from "../app/styles/verification.module.css"; // Utilisation de module.css

export default function Verification() {
  const [email, setEmail] = useState("");
  const [verificationError, setVerificationError] = useState(null);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const router = useRouter();

  const handleEmailVerification = async () => {
    try {
      const user = auth.currentUser;

      if (user && user.email === email) {
        await sendEmailVerification(user);
        console.log("Verification email sent.");
        setVerificationSuccess(true);
      } else {
        setVerificationError("Email does not match with the signed-in user.");
      }
    } catch (error) {
      console.error("Error sending verification email:", error);
      setVerificationError("Failed to send verification email.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.verificationBox}>
        <h1>Vérification de l'e-mail</h1>
        <p>Veuillez saisir votre adresse e-mail pour recevoir un lien de vérification.</p>
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.submitButton}>
          <button type="button" onClick={handleEmailVerification}>Envoyer le lien de vérification</button>
        </div>
        {verificationError && <p className={styles.errorMessage}>{verificationError}</p>}
        {verificationSuccess && (
          <p className={styles.successMessage}>Un email de vérification a été envoyé ! Veuillez vérifier votre boîte de réception.</p>
        )}
      </div>
    </div>
  );
}
