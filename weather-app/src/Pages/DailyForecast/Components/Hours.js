import { getWeatherIcon } from '../../../types'
import { WiHumidity, WiCelsius, WiCloudyWindy } from 'weather-icons-react';
import './css/Hours.css'

const Hours = ({ res:{ dt, weather, wind_speed, temp, humidity }}) => {
    const hours = new Date(dt*1000).getHours()
    return (
      <div className="Hours">
          <h2>{`${hours} h`}</h2>
          <div className='Description'>
            {getWeatherIcon(weather[0].id)}
          <div>{weather[0].description}</div>
          </div>
          <div className="Degrees">
            <div>{kelvinToCelsius(temp)}</div>
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

  export default Hours;