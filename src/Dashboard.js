import React from "react";
import { useHistory } from "react-router-dom";
import { logOut } from "./helper";

const Dashboard = () => {
  const history = useHistory();
  const signOut = () => {
    debugger;
    logOut();
    history.push("/");
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => signOut()}>LogOut</button>
    </div>
  );
};

export default Dashboard;
