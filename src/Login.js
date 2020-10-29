import React from "react";
import { useHistory } from "react-router-dom";
import { login } from "./helper";

const Login = () => {
  const history = useHistory();

  const signIn = () => {
    debugger;
    login();
    history.push("/Dashboard");
  };

  return (
    <div>
      <h1>Login...</h1>
      <button onClick={() => signIn()}>Login</button>
    </div>
  );
};

export default Login;
