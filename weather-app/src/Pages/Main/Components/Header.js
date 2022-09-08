import { Button, Alert } from "@mui/material";
import React from "react";
import { CityContext } from "../../../App";
import { getCoords } from "./utils/Geocode";
import "./css/Header.css";

const Header = (props) => {
  const [cities, setCities] = React.useContext(CityContext);
  const [alert, setAlert] = React.useState();
  const [creds, setCreds] = React.useState(localStorage.getItem("creds"));

  React.useEffect(() => {
    if (alert) {
      setTimeout(() => setAlert(), 5000);
    }
  }, [alert]);

  React.useEffect(() => {
    setCreds(localStorage.getItem("creds"));
  }, [localStorage.getItem("creds")]);

  const handleChange = async (e) => {
    e.preventDefault();
    const cityName = e.target[0].value;
    if (!cityName) {
      return;
    }

    const idx = cities.find(({ city }) => city === cityName);

    if (!idx) {
      getCoords(cityName)
        .then((data) => {
          localStorage.setItem(
            "savedCities",
            JSON.stringify([...cities, data])
          );
          setCities([...cities, data]);
          setAlert({
            type: "success",
            message: `City ${cityName} was added sucessfully!`,
          });
        })
        .catch(() =>
          setAlert({
            type: "error",
            message: `City ${cityName} was not found!`,
          })
        );

      e.target[0].value = "";
    }

    setAlert({
      type: "error",
      message: `City ${cityName} is already on the list!`,
    });
    e.target[0].value = "";
  };

  return (
    <div className="Header">
      <div id="cityForm">
        <form onSubmit={handleChange}>
          <input type="text" placeholder="Add city" />
          <Button type="submit">Add</Button>
          {alert && (
            <Alert variant="filled" severity={alert.type}>
              {alert.message}
            </Alert>
          )}
        </form>
      </div>
      <div id="logo">
        <a href="/"> Weather Forecast</a>
      </div>
      <div id="login">
        {creds ? (
          <div
            id="logout"
            onClick={() => {
              localStorage.removeItem("creds");
              setCreds();
            }}
          >
            LogOut
          </div>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </div>
  );
};

export default Header;
