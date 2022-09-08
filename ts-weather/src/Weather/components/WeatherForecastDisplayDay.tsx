import "./css/WeatherForecastDisplayDay.css";
import { kelvinToCelsius } from "./utils/kelvinToCelsius";
import Humidity from "../../Images/humidity.png";
import Wind from "../../Images/wind.png";
import Pressure from "../../Images/atmospheric.png";

const WeatherForecastDisplayDay = ({ res }: any) => {
  const data = res.daily.find(
    ({ dt }: { dt: number }) =>
      new Date(dt * 1000).getDay() === new Date().getDay()
  );
  const tempDay = `${kelvinToCelsius(data.temp.day)}°C`;
  const tempNight = `${kelvinToCelsius(data.temp.night)}°C`;

  console.log({ res });
  return (
    <div className="WeatherForecastDisplayDay">
      <>
        <div className="grid">
          <img
            className="gridItem image"
            src={`https://openweathermap.org/img/wn/${res.current.weather[0].icon}.png`}
            alt="Weather"
          />
          <h1 className="gridItem tempDay">{tempDay}</h1>
          <h2 className="gridItem tempNight">{`${tempNight} (night)`}</h2>
        </div>
        <div className="weatherDetails">
          <p>
            <img src={Humidity} alt="Humidity" />
            {`${data.humidity}%`}
          </p>
          <p>
            <img src={Wind} alt="Wind" />
            {`${data.wind_speed}m/s`}
          </p>
          <p>
            <img src={Pressure} alt="Pressure" />
            {`${data.pressure}hPa`}
          </p>
        </div>
      </>
    </div>
  );
};

export default WeatherForecastDisplayDay;
