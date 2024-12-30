import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { SignInArea } from "./styles/SignInStyle";

const SignIn = () => {
  return (
    <SignInArea>
      <div id="signin-container">
        <Link to="/">
          <img src="./assets/Logo.png" alt="Echoes Logo" />
        </Link>

        <h1>Sign in</h1>
        <p>Don't have an account? <Link to="/signup">sign up</Link></p>

        <button>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.68 11.2292C20.68 10.5142 20.6158 9.82675 20.4967 9.16675H11V13.0672H16.4267C16.1929 14.3276 15.4825 15.3955 14.4146 16.1105V18.6405H17.6733C19.58 16.8851 20.68 14.3001 20.68 11.2292Z" fill="#202020" />
            <path d="M11.0001 21.0833C13.7226 21.0833 16.0051 20.1804 17.6734 18.6404L14.4147 16.1104C13.5118 16.7154 12.3568 17.0729 11.0001 17.0729C8.37384 17.0729 6.15092 15.2991 5.35801 12.9158H1.98926V15.5283C3.64842 18.8237 7.05842 21.0833 11.0001 21.0833Z" fill="#202020" />
            <path d="M5.35824 12.9158C5.15658 12.3108 5.04199 11.6646 5.04199 11C5.04199 10.3354 5.15658 9.68918 5.35824 9.08418V6.47168H1.98949C1.28366 7.8768 0.91637 9.42757 0.916993 11C0.916993 12.6271 1.30658 14.1671 1.98949 15.5283L5.35824 12.9158Z" fill="#202020" />
            <path d="M11.0001 4.92716C12.4805 4.92716 13.8097 5.43591 14.8547 6.43508L17.7468 3.543C16.0005 1.91591 13.718 0.916748 11.0001 0.916748C7.05842 0.916748 3.64842 3.17633 1.98926 6.47175L5.35801 9.08425C6.15092 6.70091 8.37384 4.92716 11.0001 4.92716Z" fill="#202020" />
          </svg>
          Sign in with Google
        </button>

        <div>
          <div></div>
          <span>Or</span>
          <div></div>
        </div>

        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Password" />

        <button id="signin">Sign in</button>
      </div>
    </SignInArea>
  )
}

export default SignIn;