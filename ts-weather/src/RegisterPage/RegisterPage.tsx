import React from "react";
import "./css/RegisterPage.css";

const RegisterPage = () => {
  const firstNameRef = React.useRef<HTMLInputElement>(null);
  const lastNameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const confirmPasswordRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const handleRegister = (e: any) => {
    e.preventDefault();
    console.log(firstNameRef?.current?.value);
    console.log(lastNameRef?.current?.value);
    console.log(emailRef?.current?.value);
    console.log(passwordRef?.current?.value);
    console.log(confirmPasswordRef?.current?.value);
  };

  return (
    <div className="RegisterPage">
      <h1>REGISTER</h1>
      <form className="form">
        <div className="username">
          <label className="label">First Name </label>
          <input
            className="input"
            type="text"
            id="firstName"
            placeholder="First Name"
            ref={firstNameRef}
          />
        </div>
        <div className="lastname">
          <label className="label">Last Name </label>
          <input
            type="text"
            name=""
            id="lastName"
            className="input"
            placeholder="LastName"
            ref={lastNameRef}
          />
        </div>
        <div className="email">
          <label className="label">Email </label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="Email"
            ref={emailRef}
          />
        </div>
        <div className="password">
          <label className="label">Password </label>
          <input
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </div>
        <div className="confirmPassword">
          <label className="label">Confirm Password </label>
          <input
            className="input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            ref={confirmPasswordRef}
          />
        </div>

        <button
          type="submit"
          className="button"
          onClick={(e) => handleRegister(e)}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
