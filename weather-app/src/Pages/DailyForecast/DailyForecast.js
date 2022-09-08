import React from "react";
import { useParams } from "react-router-dom";
import { ResponseContext } from "../../App";
import Hours from "./Components/Hours";
import "./css/DailyForecast.css";

const DailyForecast = (props) => {
  const [res] = React.useContext(ResponseContext);
  const params = useParams();
  const targetDay = new Date(params.date).getDay();
  const targetRes = res.find(({ timezone }) => timezone.includes(params.city));
  const hourlyForecasts = targetRes?.hourly.filter(
    ({ dt }) => new Date(dt * 1000).getDay() === targetDay
  );
  const forecastsJsx = hourlyForecasts?.map((hourly) => (
    <Hours res={hourly} key={hourly.dt} />
  ));

  return (
    <div className="DailyForecast">
      <h1>{params.city}</h1>
      {forecastsJsx ?? (
        <h2>There are currently no forecast for your selected city</h2>
      )}
    </div>
  );
};

export default DailyForecast;
