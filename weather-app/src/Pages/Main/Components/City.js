/* eslint-disable react-hooks/exhaustive-deps */
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "./css/City.css";
import WeekDay from "./WeekDay";
import React from "react";
import { CityContext, ResponseContext } from "../../../App";

const City = (props) => {
  const [res] = React.useContext(ResponseContext);
  const [cities, setCities] = React.useContext(CityContext);

  const onDelete = () => {
    const newCitiesList = cities.filter(({ city }) => city !== props.city);
    localStorage.setItem("savedCities", JSON.stringify(newCitiesList));
    setCities(newCitiesList);
  };

  const data = res.find(({ city }) => city === props.city);

  return (
    <div className="City">
      <div>
        <h1>{props.city}</h1>
        <RemoveCircleOutlineIcon onClick={onDelete} />
      </div>
      {data &&
        data.daily.map((daily) => (
          <WeekDay res={daily} city={props.city} key={daily.dt} />
        ))}
    </div>
  );
};

export default City;
