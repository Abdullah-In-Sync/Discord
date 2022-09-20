import React from "react";
import "./features/Login.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "./firebase";
import { login, logout } from "./features/userSlice";

export const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((authUser) => {
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-branding-2.png"
          alt="discord"
        />
      </div>
      <button onClick={signIn} className="login-button">
        Sign In
      </button>
    </div>
  );
};
