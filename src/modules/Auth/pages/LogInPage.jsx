import React, { useState } from "react";
import LoginFormWithGoogle from "../components/LoginFormWithGoogle";
import SignupComponent from "../components/SignupComponent";
import "./LogInPage.scss";
import LoginIMG from '../../../img/loginPageIMG.png'


const LogInPage = () => {
  const [nonExistentUser, setnonExistentUser] = useState(false);
  console.log('EXISTANt',nonExistentUser);

  const updateExistent = (value) => {
    console.log("cange on true", value);
    setnonExistentUser(value);
  };

  return (
    <div className="login-page-container">
      <div className="login-page-img">
        <img src={LoginIMG} alt="Login Page IMG" />
      </div>
      {nonExistentUser ? (
        <SignupComponent isExistent={updateExistent} />
      ) : (
        <LoginFormWithGoogle isExistent={updateExistent} />
      )}
    </div>
  );
};

export default LogInPage;
