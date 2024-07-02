import "../app/styles/login.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent.");
      // Afficher un message à l'utilisateur indiquant que l'e-mail de réinitialisation a été envoyé
      alert("Un e-mail de réinitialisation de mot de passe a été envoyé. Veuillez vérifier votre boîte de réception.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      // Gérer les erreurs liées à l'envoi de l'e-mail de réinitialisation
      alert("Erreur lors de l'envoi de l'e-mail de réinitialisation de mot de passe. Veuillez réessayer plus tard.");
    }
  };

  const handleAppleLogin = () => {
    alert("La connexion avec Apple sera bientôt disponible !");
    // Vous pouvez également rediriger vers une page d'information ou laisser le message d'alerte
  };

  return (
    <div className="container">
      <div className="login-box">
        <h1>Connecte-toi !</h1>
        <form onSubmit={handleLogin}>
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
          />
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
          />
          <div className="forgot-password">
            <a href="#" onClick={handleForgotPassword}>Mot de passe oublié ?</a>
          </div>
          <button type="submit" className="login-button">Connexion</button>
        </form>
        <div className="divider" role="separator"></div>
        <div className="other-login">
          <p>AUTRES CONNEXION</p>
          <div className="login-options">
            <button className="login-option" onClick={handleGoogleLogin} aria-label="Se connecter avec Google">
              <img src="../pages/assets/img/google.svg" alt="Google" />
            </button>
            <button className="login-option" onClick={handleAppleLogin} aria-label="Se connecter avec Apple">
              <img src="../pages/assets/img/mac.svg" alt="Apple" />
            </button>
          </div>
          <p className="new-account">
            <a href="/signup" className="signup-link">Pas encore de compte ?{" "}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
