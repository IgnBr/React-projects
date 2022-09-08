import { Weekdays } from "../../types";
import "./css/WeatherForecastDisplayWeek.css";
import { kelvinToCelsius } from "./utils/kelvinToCelsius";

const WeatherForecastDisplayWeek = ({ res }: any) => {
  const weekDays = res.daily.map(({ dt, weather, temp: { min, max } }: any) => {
    return (
      <div className="weekDay" key={dt}>
        <h1>
          {Weekdays[new Date(dt * 1000).getDay()].slice(0, 3).toUpperCase()}
        </h1>
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt="WeatherIcon"
        />
        <h2>{`${kelvinToCelsius(max)}°C`}</h2>
        <h2>{`${kelvinToCelsius(min)}°C`}</h2>
      </div>
    );
  });

  return <div className="WeatherForecastDisplayWeek">{weekDays}</div>;
};

export default WeatherForecastDisplayWeek;
