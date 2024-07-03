// pages/signup.js

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Head from "next/head"; // Pour l'optimisation SEO
import "../app/styles/signup.css";

const eyeIcon = "../pages/assets/img/eye.png";

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

  // Fonction pour afficher le mot de passe
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Fonction pour gérer l'envoi du formulaire d'inscription
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Vérifications de validation du mot de passe
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

      console.log("Utilisateur inscrit et ajouté à Firestore:", user);

      setSignupSuccess(true);

    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      if (error.code === "auth/email-already-in-use") {
        setSignupError("Cette adresse e-mail est déjà utilisée.");
      } else if (error.code === "auth/invalid-email") {
        setSignupError("Cette adresse e-mail n'est pas reconnue.");
      } else {
        setSignupError("Échec de l'inscription. Veuillez réessayer plus tard.");
      }
    }
  };

  // useEffect pour rediriger en cas de succès de l'inscription
  useEffect(() => {
    if (signupSuccess) {
      setTimeout(() => {
        router.push("/verification"); // Redirection vers la page de vérification
      }, 2000); // Ajuster le délai si nécessaire
    }
  }, [signupSuccess]);

  return (
    <div className="container">
      {/* Optimisation SEO */}
      <Head>
        <title>Inscription</title>
        <meta name="description" content="Inscrivez-vous pour accéder à notre plateforme et bénéficier de nos services exclusifs." />
      </Head>
      <div className="signup-box">
        <h1>Parles-nous de toi</h1>
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
          <label htmlFor="password" className="sr-only">Mot de passe</label>
          <div className="password-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
              aria-required="true"
            />
            <span
              role="button"
              aria-label={passwordVisible ? "Cacher le mot de passe" : "Afficher le mot de passe"}
              className="password-toggle"
              onClick={togglePasswordVisibility}
              tabIndex={0}
              onKeyPress={(e) => { if (e.key === 'Enter') togglePasswordVisibility(); }}
            >
              👁
            </span>
          </div>
          <label htmlFor="password_confirmation" className="sr-only">Confirmation du mot de passe</label>
          <div className="password_confirmation-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password_confirmation"
              placeholder="Confirmation du mot de passe"
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

          <div className="container-button">
            <button type="submit" className="signup-button">
              Valider
            </button>
            
          </div>

          <div className="login-link-container">
            <p><a href="/login" className="login-link">J'ai déjà un compte ? </a></p>
          </div>
        
        </form>
        {signupSuccess && (
          <p className="success-message">Compte créé avec succès. Redirection vers la page de vérification...</p>
        )}
      </div>
    </div>
  );
}
