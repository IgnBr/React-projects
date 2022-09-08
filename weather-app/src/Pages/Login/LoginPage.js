import React from "react";
import "./css/LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("creds", {
      username: e.target[0].value,
      password: e.target[1].value,
    });

    navigate("/");
  };

  return (
    <div className="LoginPage">
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="labels">Username:</div> <input></input>
        </div>
        <div>
          <div className="labels">Password:</div>
          <input type="password"></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
