import React, {useState } from "react";
import { NavLink } from "react-router-dom";

export const LoginFormWithGoogle = ({isExistent}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeExitent = () => {
    isExistent(true)
   }

  return (
    <div className="login-form">
      <h1>Log in</h1>
      <input
        type="email"
        id="email"
        value={email}
        placeholder="email"
        onChange={(e) => console.log(e.target.value)}
      />
      <input
        type="password"
        id="password"
        value={password}
        placeholder="password"
        onChange={(e) => console.log(e.target.value)}
      />
      <p>or</p>

      <button>Log in with Google</button>

      <div>
        <p>Don`t have an account? <button onClick={changeExitent}>Sign up</button></p> 
      </div>
    </div>
  );
};

export default LoginFormWithGoogle;
