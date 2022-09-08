import {
  WiDaySunny,
  WiCloud,
  WiDayFog,
  WiDaySnow,
  WiDayRain,
  WiDayThunderstorm,
} from "weather-icons-react";

export const Weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getWeatherIcon = (id) => {
  if (id === 800) {
    return <WiDaySunny size={100} color="yellow" />;
  }

  if (800 < id && id < 805) {
    return <WiCloud size={100} color="grey" />;
  }

  if (id > 700 && id < 782) {
    return <WiDayFog size={100} color="grey" />;
  }

  if (id > 599 && id < 623) {
    return <WiDaySnow size={100} color="cyan" />;
  }

  if (id > 299 && id < 532) {
    return <WiDayRain size={100} color="#7b68ee" />;
  }

  if (id > 199 && id < 233) {
    return <WiDayThunderstorm size={100} color="grey" />;
  }
};

export const CitiesCoords = [
  { city: "Vilnius", lat: 54.6892, lon: 25.2798 },
  { city: "Kaunas", lat: 54.8985, lon: 23.903 },
];
