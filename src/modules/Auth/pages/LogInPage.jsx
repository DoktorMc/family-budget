import React, { useEffect, useState } from "react";
import LoginFormWithGoogle from "../components/LoginFormWithGoogle";
import SignupComponent from "../components/SignupComponent";
import "./LogInPage.css";
import LoginIMG from '../../../img/loginPageIMG.png'
import LoginImgSVG from "../../../img/loginPageIMG.svg";

const LogInPage = () => {
  const [nonExistentUser, setnonExistentUser] = useState(false);
  console.log(nonExistentUser);

  const updateExistent = (value) => {
    console.log("cange on true", value);
    setnonExistentUser(value);
  };
  // useEffect(() => {
  //   const getExt=() => nonExistentUser;
  //   return () => {
  //    getExt()
  //   };
  // }, nonExistentUser);

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
