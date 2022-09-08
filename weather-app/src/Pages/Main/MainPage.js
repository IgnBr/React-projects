import React, { useEffect } from "react";
import City from "./Components/City";
import { CityContext, ResponseContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";

// 02d08dd555f1a3c3ff95b7f353eefb7b
// 1aa27d1e7a37de78905518b8e10c0327

function MainPage() {
  const [, setRes] = React.useContext(ResponseContext);
  const [cities] = React.useContext(CityContext);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      const data = await Promise.all(
        cities.map(async ({ lat, lon, city }) => {
          let response = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=256e695a57f7bdcabaa1a73ac33c5466`
          );

          response = await response.json();
          response.daily.pop();
          response.city = city;
          return response;
        })
      );

      setRes(data);
      setLoading(false);
    };

    fetchAll();
  }, [cities]);

  return (
    <div className="MainPage">
      {loading ? (
        <CircularProgress sx={{ marginLeft: "48%", marginTop: "10%" }} />
      ) : (
        cities.map(({ city, lat, lon }) => (
          <City city={city} lat={lat} lon={lon} key={city} />
        ))
      )}
    </div>
  );
}

export default MainPage;
