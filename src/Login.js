import React from 'react'
import "./features/Login.css"
import { auth, provider } from './firebase'
export const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err)=>{
      alert(err.message);
    });
  }
  return (
    <div className="login">
      <div className='login__logo'>
        <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-branding-2.png" alt="discord" />
      </div>
      <button onClick={signIn} className="login-button">Sign In</button>
    </div>
  )
}
