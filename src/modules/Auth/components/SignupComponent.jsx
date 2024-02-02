import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../store/firebase-config";
import { setProperty } from "./../../../helper/setPropertyToNestedObj";
import { withRouter } from "../../../hoc/withRouter";
import useCustomNavigate from "../../../hooks/useCastomNavigate";
import { useNavigate } from "react-router-dom";

export const SignupComponent = ({ isExistent }) => {
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    const userName =
      "" + userCredentials.firstName + " " + userCredentials.lastName;

    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then(
        updateProfile(auth.currentUser, {
          displayName: userName,
        })
          .then(() => {
            console.log("Profile updated!");
          })
          .catch((error) => {
            console.log("An error occurred");
          })
      )
      .catch((error) => {
        alert(error.message, error.code);
      });
    // navigate('/login')

    isExistent(false);
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials(setProperty(userCredentials, name, value));
  };

  return (
    <div className="login-form">
      <h1 className="form-title">Sign Up</h1>
      <label className="input-label" htmlFor="email">
        E-mail
      </label>
      <input
        className="form-input"
        name="email"
        type="email"
        id="email"
        value={userCredentials.email}
        placeholder="email"
        onChange={onInputChange}
      />
      <label className="input-label" htmlFor="firstName">
        First name
      </label>
      <input
        className="form-input"
        name="firstName"
        type="text"
        id="firstName"
        value={userCredentials.firstName}
        placeholder="first name"
        onChange={onInputChange}
      />
      <label className="input-label" htmlFor="lastName">
        Last name
      </label>
      <input
        className="form-input"
        name="lastName"
        type="text"
        id="lastName"
        value={userCredentials.lastName}
        placeholder="last name"
        onChange={onInputChange}
      />
      <label className="input-label" htmlFor="password">
        Password
      </label>
      <input
        className="form-input"
        name="password"
        type="password"
        id="password"
        value={userCredentials.password}
        placeholder="password"
        onChange={onInputChange}
      />

      <div>
        <button className="signup-page-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default withRouter(SignupComponent);
