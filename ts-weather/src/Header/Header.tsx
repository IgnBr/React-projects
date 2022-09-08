import "./css/Header.css";
import Logo from "../Images/logo.svg";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [date, setDate] = React.useState(new Date().toLocaleTimeString());
  const [timezone] = React.useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="Header">
      <div className="header-item logo">
        <img src={Logo} alt="Logo" />
        <Link to="/" style={{ textDecoration: "none" }}>
          Weather App
        </Link>
      </div>
      <div className="header-item date">
        <div className="time">{date}</div>
        <div className="timezone">{`(${timezone})`}</div>
      </div>
      {/* TODO: Add name after login */}
      <Link to="/register" style={{ textDecoration: "none" }}>
        <div className="header-item avatar">Guest</div>
      </Link>
    </div>
  );
};

export default Header;
