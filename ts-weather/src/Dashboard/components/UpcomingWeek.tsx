import Redirect from "../../Images/redirect.png";
import { Busyness, Weekdays } from "../../types";
import "./css/UpcomingWeek.css";
import Weekday from "./Weekday";

function UpcomingWeek() {
  const [sunday, ...week] = Weekdays;
  const newWeekDays = [...week, sunday];
  const weekDays = newWeekDays.map((day, idx) => {
    const number = new Date(
      new Date().setDate(new Date().getDate() - new Date().getDay() + idx + 1)
    ).getDate();
    return (
      <Weekday
        key={day}
        day={day}
        number={number}
        busyness={Busyness[Math.floor(Math.random() * Busyness.length)]}
      />
    );
  });

  return (
    <div className="UpcomingWeek">
      <div className="title">
        <h2>Upcoming Week</h2>
        <img src={Redirect} alt="Redirect"></img>
      </div>
      {weekDays}
    </div>
  );
}

export default UpcomingWeek;
