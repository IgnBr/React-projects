import { WiHumidity, WiCelsius, WiCloudyWindy } from 'weather-icons-react';
import { getWeatherIcon, Weekdays } from '../../../types'
import { Link } from "react-router-dom"
import './css/Weekday.css'

const WeekDay = ({ res: { dt, weather, wind_speed, temp:{ day }, humidity }, city }) => {
  const weekday = Weekdays[new Date(dt * 1000).getDay()]

    return (
      <div className="WeekDay">
          <h2>{weekday}</h2>
          <div className='Description'>
          <Link to={`daily/${city}/${new Date(dt * 1000).toUTCString()}`}>
            {getWeatherIcon(weather[0].id)}
          </Link>
          <div>{weather[0].description}</div>
          </div>
          <div className="Degrees">
            <div>{kelvinToCelsius(day)}</div>
            <WiCelsius size={24} color='grey' />
          </div>
          <div className="Wind">
          <WiCloudyWindy size={24} color='grey' />
          <div>Wind {wind_speed} m/s</div>
          </div>
          <div className="Humidity">
          <WiHumidity size={24} color='#7b68ee' />
          <div>Humidity: {humidity}</div>
          </div>
      </div>
    );
  }
  
  const kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15)
  };

  export default WeekDay;

// https://www.upgrad.com/blog/react-project-ideas-topics-beginners/#3_Weather_App

// https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/

// login?
// hourly forecast