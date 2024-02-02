import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
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
  
  const navigate = useNavigate();
 
  const handleSignUp = () => {
    const userName =
      "" + userCredentials.firstName + " " + userCredentials.lastName;

    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("user: ", user);
      })
      .catch((error) => {
        alert(error.code, error.message);
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
      <h1>Sign Up</h1>
      <input
        name="email"
        type="email"
        id="email"
        value={userCredentials.email}
        placeholder="email"
        onChange={onInputChange}
      />
      <input
        name="firstName"
        type="text"
        id="firstName"
        value={userCredentials.firstName}
        placeholder="first name"
        onChange={onInputChange}
      />
      <input
        name="lastName"
        type="text"
        id="lastName"
        value={userCredentials.lastName}
        placeholder="last name"
        onChange={onInputChange}
      />
      <input
        name="password"
        type="password"
        id="password"
        value={userCredentials.password}
        placeholder="password"
        onChange={onInputChange}
      />

      <div>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default withRouter(SignupComponent);
