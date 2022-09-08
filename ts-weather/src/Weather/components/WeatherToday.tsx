import "./css/WeatherToday.css";
import { Weekdays } from "../../types";
import { getDateString } from "./utils/getDateString";
import WeatherTodayDisplay from "./WeatherTodayDisplay";

const WeatherToday = ({ res }: any) => {
  const weekday = Weekdays[new Date().getDay()];
  const date = getDateString();

  return (
    <div className="WeatherToday">
      <h1>Weather's today</h1>
      <h2>{weekday}</h2>
      <div className="currentDate">{date}</div>
      <div className="recentWeather">
        <WeatherTodayDisplay res={res} />
      </div>
    </div>
  );
};

export default WeatherToday;
