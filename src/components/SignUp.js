import React, { useState } from "react";
import AuthService from './auth/auth-service';
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { SignUpArea } from "./styles/SignUpStyle";

const SignUp = (props) => {
  const [userState, setUserState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [errMsg, setErrMsg] = useState(null);

  const history = useHistory();

  const service = new AuthService();

  const signup = e => {
    e.preventDefault();
    const username = userState.username;
    const email = userState.email;
    const password = userState.password;
    const confirmPassword = userState.confirmPassword;

    service.signup(username, email, password, confirmPassword)
      .then(response => {
        setUserState({
          username: "",
          email: "",
          password: "",
          confirmPassword: ""
        });
        props.getUser(response)
        history.push("/");
      })
      .catch(error => {
        setErrMsg(error.message)
        console.log(error)
      });
  }

  const google = e => {
    e.preventDefault();
    service.google()
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setUserState({ ...userState, [name]: value });
  }

  return (
    <SignUpArea>
      <div id="signup-container">
        <Link to="/">
          <img src="./assets/Logo.png" alt="Echoes Logo" />
        </Link>

        <h1>Sign up</h1>
        <p>Already have an account? <Link to="/signin">sign in</Link></p>

        <button onClick={google}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.68 11.2292C20.68 10.5142 20.6158 9.82675 20.4967 9.16675H11V13.0672H16.4267C16.1929 14.3276 15.4825 15.3955 14.4146 16.1105V18.6405H17.6733C19.58 16.8851 20.68 14.3001 20.68 11.2292Z" fill="#202020" />
            <path d="M11.0001 21.0833C13.7226 21.0833 16.0051 20.1804 17.6734 18.6404L14.4147 16.1104C13.5118 16.7154 12.3568 17.0729 11.0001 17.0729C8.37384 17.0729 6.15092 15.2991 5.35801 12.9158H1.98926V15.5283C3.64842 18.8237 7.05842 21.0833 11.0001 21.0833Z" fill="#202020" />
            <path d="M5.35824 12.9158C5.15658 12.3108 5.04199 11.6646 5.04199 11C5.04199 10.3354 5.15658 9.68918 5.35824 9.08418V6.47168H1.98949C1.28366 7.8768 0.91637 9.42757 0.916993 11C0.916993 12.6271 1.30658 14.1671 1.98949 15.5283L5.35824 12.9158Z" fill="#202020" />
            <path d="M11.0001 4.92716C12.4805 4.92716 13.8097 5.43591 14.8547 6.43508L17.7468 3.543C16.0005 1.91591 13.718 0.916748 11.0001 0.916748C7.05842 0.916748 3.64842 3.17633 1.98926 6.47175L5.35801 9.08425C6.15092 6.70091 8.37384 4.92716 11.0001 4.92716Z" fill="#202020" />
          </svg>
          Sign un with Google
        </button>

        <div>
          <div></div>
          <span>Or</span>
          <div></div>
        </div>

        {
          errMsg ? (
            <div id="error">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0516 7.64648C13.0598 7.36471 12.8337 7.13182 12.5518 7.13182H11.4486C11.1666 7.13182 10.9403 7.36495 10.9488 7.64685L11.1105 13.0215C11.1115 13.0553 11.1159 13.0882 11.1232 13.1199C11.1747 13.342 11.3738 13.5065 11.6103 13.5065H12.3942C12.6646 13.5065 12.886 13.2914 12.8939 13.0211L13.0516 7.64648Z" fill="black" />
                <path d="M11.1874 16.7391C11.4143 16.9628 11.686 17.0746 12.0024 17.0746C12.2069 17.0746 12.3955 17.0235 12.5681 16.9212C12.7407 16.8158 12.8797 16.6767 12.9852 16.5042C13.0938 16.3284 13.1498 16.135 13.153 15.9241C13.1498 15.6109 13.0331 15.3424 12.803 15.1187C12.5729 14.895 12.306 14.7831 12.0024 14.7831C11.686 14.7831 11.4143 14.895 11.1874 15.1187C10.9605 15.3424 10.8486 15.6109 10.8518 15.9241C10.8486 16.2405 10.9605 16.5121 11.1874 16.7391Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="black" />
              </svg>

              <span>Um ou mais campos incorreto</span>
            </div>
          ) : ""
        }

        <form onSubmit={signup}>
          <input
            type="text"
            name="username"
            maxLength="30"
            size="25"
            required
            value={userState.username}
            onChange={handleChange}
            placeholder="Username" />

          <input
            type="email"
            name="email"
            maxLength="30"
            size="25"
            required
            value={userState.email}
            onChange={handleChange}
            placeholder="E-mail" />

          <input
            type="password"
            name="password"
            maxLength="30"
            size="25"
            required
            value={userState.password}
            onChange={handleChange}
            placeholder="Password" />

          <input
            type="password"
            name="confirmPassword"
            maxLength="30"
            size="25"
            required
            value={userState.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password" />

          <button type="submit" id="signup">Create account</button>
        </form>
      </div>
    </SignUpArea>
  )
}

export default SignUp;