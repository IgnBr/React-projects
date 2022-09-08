import "./css/Weather.css";
import Map from "../Images/map.jpg";
import WeatherToday from "./components/WeatherToday";
import WeatherForecast from "./components/WeatherForecast";
import React from "react";
import { Coords } from "../types";

const Weather = () => {
  const [res, setRes] = React.useState<any>();
  React.useEffect(() => {
    const targetCity = Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.split("/")[1];
    const coords = Coords.find(({ city }) => city === targetCity);
    if (!coords) {
      return;
    }

    const fetchData = async () => {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=02d08dd555f1a3c3ff95b7f353eefb7b`
      );
      response = await response.json();

      setRes(response);
    };

    fetchData();
  }, []);

  return (
    <div className="Weather">
      <img src={Map} alt="Map" />
      <div className="content">
        {res && (
          <>
            <WeatherToday res={res} />
            <WeatherForecast res={res} />
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
