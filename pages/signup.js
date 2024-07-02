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
      if (password.length < 8 || !/[0-9]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password) || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
        setSignupError("Password must be at least 8 characters long and include at least one number, one special character, one uppercase letter, and one lowercase letter.");
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
        setSignupError("Email address is already in use.");
      } else {
        setSignupError("Failed to sign up. Please try again later.");
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
          <small className="password-requirements">
            • 8 caractères minimum, un numéro,<br />
            • un caractère spatial, #@,[?/.;:<br />
            • une Majuscule minimum,<br />
            • une minuscule minimum
          </small>

          <label htmlFor="confirmation mail" className="sr-only">Confirmation mail</label>
          <div className="password_confirmation-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="confirmation mail"
              placeholder="Confirmation mail"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
              aria-required="true"
            />
          </div>
          {signupError && <p className="error-message">{signupError}</p>}
          <button type="submit" className="signup-button">
            Valider
          </button>
        </form>

        {signupSuccess && (
          <p className="success-message">Account created successfully. Redirecting to marketplace...</p>
        )}
      </div>
    </div>
  );
}
