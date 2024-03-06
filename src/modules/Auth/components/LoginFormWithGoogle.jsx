import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../store/firebase-config";
import { setProperty } from "./../../../helper/setPropertyToNestedObj";
import goog from "../../../img/G.png";
import CustomButton from "./../../../Custom/Button/CustomButton";

export const LoginFormWithGoogle = ({ isExistent }) => {
  const provider = new GoogleAuthProvider();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then(() => {
        const user = auth.currentUser;
      })
      .catch((error) => {
        alert(error.code, error.message);
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);

        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials(setProperty(userCredentials, name, value));
  };

  const changeExitent = () => {
    isExistent(true);
  };

  return (
    <div className="login-form">
      <h1 className="form-title">Log in</h1>
      <label className="input-label" htmlFor="email">
        E-mail
      </label>
      <input
        name="email"
        className="form-input"
        type="email"
        id="email"
        value={userCredentials.email}
        placeholder="email"
        onChange={onInputChange}
      />
      <label className="input-label" htmlFor="password">
        Password
      </label>
      <input
        name="password"
        className="form-input"
        type="password"
        id="password"
        value={userCredentials.password}
        placeholder="password"
        onChange={onInputChange}
      />
      <CustomButton
        buttonTheme="login"
        title="Login"
        handleProp={handleLogin}
      />
      <p className="or">or</p>
      <span className="line"></span>
      <button
        className="form-google-login-button"
        onClick={handleLoginWithGoogle}
      >
        Login with Google
        <img className="form-google-login-button-img" src={goog} alt="G" />
      </button>

      <div>
        <p>
          Don`t have an account?
          <span className="login-page-signup-button" onClick={changeExitent}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginFormWithGoogle;
