import "./css/WeatherTodayDisplay.css";
import React from "react";
import { kelvinToCelsius } from "./utils/kelvinToCelsius";
import Humidity from "../../Images/humidity.png";
import Wind from "../../Images/wind.png";
import Pressure from "../../Images/atmospheric.png";

const WeatherTodayDisplay = ({ res }: any) => {
  const celsius = res ? `${kelvinToCelsius(res.current.temp)}°C` : "";
  const time = res ? new Date(res.current.dt * 1000).toLocaleTimeString() : "";

  return (
    <div className="WeatherTodayDisplay">
      <>
        <div className="grid">
          <img
            className="gridItem image"
            src={`https://openweathermap.org/img/wn/${res.current.weather[0].icon}.png`}
            alt="Weather"
          />
          <h1 className="gridItem temp">{celsius}</h1>
          <h2 className="gridItem time">{time}</h2>
        </div>
        <div className="weatherDetails">
          <p>
            <img src={Humidity} alt="Humidity" />
            {`${res.current.humidity}%`}
          </p>
          <p>
            <img src={Wind} alt="Wind" />
            {`${res.current.wind_speed}m/s`}
          </p>
          <p>
            <img src={Pressure} alt="Pressure" />
            {`${res.current.pressure}hPa`}
          </p>
        </div>
      </>
    </div>
  );
};

export default WeatherTodayDisplay;
