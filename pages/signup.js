// pages/signup.js

import { useState } from "react";
import { useRouter } from "next/router";
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "../app/styles/signup.css";
import eyeIcon from "../pages/assets/img/eye.png"; 

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [signupError, setSignupError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const router = useRouter();

  // Password visibility toggle function
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Function to handle signup form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Password validation checks
      if (password.length < 8) {
        setSignupError("Le mot de passe doit comporter au moins 8 caractères.");
        return;
      }
      if (!/[0-9]/.test(password)) {
        setSignupError("Le mot de passe doit inclure au moins un chiffre.");
        return;
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        setSignupError("Le mot de passe doit inclure au moins un caractère spécial.");
        return;
      }
      if (!/[A-Z]/.test(password)) {
        setSignupError("Le mot de passe doit inclure au moins une lettre majuscule.");
        return;
      }
      if (!/[a-z]/.test(password)) {
        setSignupError("Le mot de passe doit inclure au moins une lettre minuscule.");
        return;
      }

      if (password !== passwordConfirmation) {
        setSignupError("Le mot de passe et la confirmation ne correspondent pas.");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        uid: user.uid,
        firstName: firstName,
        lastName: lastName,
      });

      console.log("User signed up and added to Firestore:", user);

      setSignupSuccess(true);

      setTimeout(() => {
        router.push("/");
      }, 2000);

    } catch (error) {
      console.error("Error signing up:", error);
      if (error.code === "auth/email-already-in-use") {
        setSignupError("Cette adresse e-mail est déjà utilisée.");
      } else {
        setSignupError("Échec de l'inscription. Veuillez réessayer plus tard.");
      }
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        <h1>Parles nous de toi</h1>
        <form onSubmit={handleSignup} className="signup-form">
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
            aria-required="true"
          />
          <label htmlFor="password" className="sr-only">Password</label>
          <div className="password-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
              aria-required="true"
            />
            <img
              src={eyeIcon}
              alt="Toggle password visibility"
              className="password-toggle"
              onClick={togglePasswordVisibility}
            />
          </div>
          <label htmlFor="password_confirmation" className="sr-only">Confirmation mail</label>
          <div className="password_confirmation-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password_confirmation"
              placeholder="Confirmation mail"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="input-field"
              required
              aria-required="true"
            />
          </div>
          {signupError && <p className="error-message">{signupError}</p>}
          <small className={`password-requirements ${signupError ? 'error-text' : ''}`}>
            • 8 caractères minimum, un numéro,<br />
            • un caractère spécial, #@,[?/.;:<br />
            • une majuscule minimum,<br />
            • une minuscule minimum
          </small>
          <button type="submit" className="signup-button">
            Valider
          </button>
        </form>
        {signupSuccess && (
          <p className="success-message">Compte créé avec succès. Redirection vers le marché...</p>
        )}
      </div>
    </div>
  );
}
