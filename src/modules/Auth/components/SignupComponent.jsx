import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../store/firebase-config";
import { setProperty } from "./../../../helper/setPropertyToNestedObj";
import { withRouter } from "../../../hoc/withRouter";
import { useDispatch } from 'react-redux';
import { addUserToFirebase } from "../../../store/slices/userSlice";

export const SignupComponent = ({ isExistent }) => {
  const dispatch = useDispatch();
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
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: userName,
        })
          .then(() => {
            console.log('USER TO FIRE', auth.currentUser);
            dispatch(addUserToFirebase(auth.currentUser))
            console.log("Profile updated!");
          })
          .catch((error) => {
            console.log("An error occurred");
          });
      })
      .catch((error) => {
        alert(error.message, error.code);
      });

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
