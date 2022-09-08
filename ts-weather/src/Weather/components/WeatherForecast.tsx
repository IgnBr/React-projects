import React, { useEffect } from "react";
import "./css/WeatherForecast.css";
import WeatherForecastDisplayDay from "./WeatherForecastDisplayDay";
import WeatherForecastDisplayWeek from "./WeatherForecastDisplayWeek";

type ButtonStyle = {
  backgroundColor: string;
  color: string;
  borderColor: string;
};

const notClickedButtonStyle = {
  backgroundColor: "white",
  color: "black",
  borderColor: "white",
};

const clickedButtonStyle = {
  backgroundColor: "#4ac767",
  color: "white",
  borderColor: "#4ac767",
};

const defaultButtonStyles = [clickedButtonStyle, notClickedButtonStyle];

const WeatherForecast = ({ res }: any) => {
  const [clickedButton, setClickedButton] = React.useState(0);
  const [buttonStyles, setButtonStyles] =
    React.useState<ButtonStyle[]>(defaultButtonStyles);

  useEffect(() => {
    if (clickedButton === 0) {
      setButtonStyles(defaultButtonStyles);
    } else {
      setButtonStyles([notClickedButtonStyle, clickedButtonStyle]);
    }
  }, [clickedButton]);

  return (
    <div className="WeatherForecast">
      <h1>Weather forecast</h1>
      <div className="btn-group">
        <button
          className="button"
          onClick={() => setClickedButton(0)}
          style={buttonStyles[0]}
        >
          24 hours
        </button>
        <button
          className="button"
          onClick={() => setClickedButton(1)}
          style={buttonStyles[1]}
        >
          Weekly
        </button>
      </div>
      {clickedButton === 0 ? (
        <WeatherForecastDisplayDay res={res} />
      ) : (
        <WeatherForecastDisplayWeek res={res} />
      )}
    </div>
  );
};

export default WeatherForecast;
