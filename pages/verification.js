// pages/verification.js

import { useState } from "react";
import { useRouter } from "next/router";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../config/firebase";
import styles from "../app/styles/verification.css";

export default function Verification() {
  const [code, setCode] = useState("");
  const [verificationError, setVerificationError] = useState(null);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const router = useRouter();

  const handleEmailVerification = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
        await sendEmailVerification(user);
        console.log("Verification email sent.");
        setVerificationSuccess(true);
      } else {
        setVerificationError("No user is signed in.");
      }
    } catch (error) {
      console.error("Error sending verification email:", error);
      setVerificationError("Failed to send verification email.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>vérification mail</h1>
      <p>Checker ta boite mail pour valider ton compte</p>
      <input
        type="text"
        placeholder="Code de validation"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className={styles.inputField}
      />
      <button onClick={handleEmailVerification} className={styles.submitButton}>
        Valider
      </button>
      <button className={styles.resendButton}>
        Renvoyer le code
      </button>
      {verificationError && <p className={styles.errorMessage}>{verificationError}</p>}
      {verificationSuccess && <p className={styles.successMessage}>Un email de vérification a été envoyé ! Veuillez vérifier votre boîte de réception.</p>}
    </div>
  );
}
