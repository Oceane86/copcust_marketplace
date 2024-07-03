// pages/login.js


import "../app/styles/login.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import Image from 'next/image';
import GoogleIcon from "../pages/assets/img/google.svg";
import AppleIcon from "../pages/assets/img/mac.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null); // État pour gérer les erreurs de connexion
  const router = useRouter();

  // Fonction pour gérer la connexion avec l'e-mail et le mot de passe
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError(null); // Réinitialiser les erreurs avant de tenter la connexion
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Redirection vers la page d'accueil après connexion réussie
    } catch (error) {
      console.error("Error logging in:", error);
      let errorMessage = "Erreur de connexion. Veuillez réessayer.";
      if (error.code === "auth/invalid-email") {
        errorMessage = "L'adresse e-mail saisie est invalide.";
      } else if (error.code === "auth/user-not-found") {
        errorMessage = "Aucun utilisateur trouvé avec cette adresse e-mail.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Le mot de passe est incorrect.";
      }
      setLoginError(errorMessage); // Affichage du message d'erreur en cas de problème
    }
  };

  // Fonction pour gérer la connexion avec Google
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/"); // Redirection vers la page d'accueil après connexion réussie
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  // Fonction pour envoyer un e-mail de réinitialisation de mot de passe
  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent.");
      alert("Un e-mail de réinitialisation de mot de passe a été envoyé. Veuillez vérifier votre boîte de réception.");
    } catch (error) {
      console.error("Error sending password reset email:", error.code, error.message);
      let errorMessage = "Erreur lors de l'envoi de l'e-mail de réinitialisation de mot de passe. Veuillez réessayer plus tard.";
      if (error.code === "auth/invalid-email") {
        errorMessage = "L'adresse e-mail saisie est invalide.";
      } else if (error.code === "auth/user-not-found") {
        errorMessage = "Aucun utilisateur trouvé avec cette adresse e-mail.";
      }
      alert(errorMessage);
    }
  };

  // Fonction pour gérer la connexion avec Apple
  const handleAppleLogin = () => {
    alert("La connexion avec Apple sera bientôt disponible !");
  };

  return (
    <div className="container">
      {/* Optimisation SEO */}
      <Head>
        <title>Connexion - MyWebsite</title>
        <meta name="description" content="Connectez-vous à MyWebsite pour accéder à votre compte et profiter de nos services exclusifs." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.mywebsite.com/login" />
        <meta property="og:title" content="Connexion - MyWebsite" />
        <meta property="og:description" content="Connectez-vous à MyWebsite pour accéder à votre compte et profiter de nos services exclusifs." />
        <meta property="og:url" content="https://www.mywebsite.com/login" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.mywebsite.com/images/login-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Connexion - MyWebsite" />
        <meta name="twitter:description" content="Connectez-vous à MyWebsite pour accéder à votre compte et profiter de nos services exclusifs." />
        <meta name="twitter:image" content="https://www.mywebsite.com/images/login-twitter-image.jpg" />
      </Head>
      <div className="login-box">
        <h1>Connecte-toi !</h1>
        <form onSubmit={handleLogin}>
          {/* Champ pour l'adresse e-mail */}
          <label htmlFor="email" className="sr-only">E-Mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-Mail"
            className="input-field"
            required
            aria-required="true"
            aria-label="Adresse e-mail" // Balise pour l'accessibilité
          />
          {/* Champ pour le mot de passe */}
          <label htmlFor="password" className="sr-only">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            className="input-field"
            required
            aria-required="true"
            aria-label="Mot de passe" // Balise pour l'accessibilité
          />
          {/* Affichage des erreurs de connexion */}
          {loginError && <p className="error-message" role="alert">{loginError}</p>}
          {/* Lien pour réinitialiser le mot de passe */}
          <div className="forgot-password">
            <a href="#" onClick={handleForgotPassword} aria-label="Réinitialiser le mot de passe">Mot de passe oublié ?</a>
          </div>
          <div className="container-button">
            {/* Bouton pour soumettre le formulaire de connexion */}
            <button type="submit" className="login-button">
              Connexion
            </button>
          </div>
        </form>
        {/* Séparateur pour diviser les options de connexion */}
        <div className="divider" role="separator" aria-hidden="true"></div>
        <div className="other-login">
          <p>AUTRES CONNEXIONS</p>
          <div className="login-options">
            {/* Bouton pour se connecter avec Google */}
            <button className="login-option" onClick={handleGoogleLogin} aria-label="Se connecter avec Google">
              <Image src={GoogleIcon} alt="Google" width={24} height={24} />
            </button>
            {/* Bouton pour se connecter avec Apple */}
            <button className="login-option" onClick={handleAppleLogin} aria-label="Se connecter avec Apple">
              <Image src={AppleIcon} alt="Apple" width={24} height={24} />
            </button>
          </div>
          <p className="new-account">
            {/* Lien pour s'inscrire */}
            <a href="/signup" className="signup-link" aria-label="Créer un nouveau compte">Pas encore de compte ?{" "}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
