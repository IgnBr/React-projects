import "./css/Weekday.css";

function Weekday({ day, number, busyness }: any) {
  const formattedDay = day.substring(0, 3);
  const numberColor = busyness === "transparent" ? "black" : "white";
  const isCurrentDay = new Date().getDate() === number;

  return (
    <div className="Weekday">
      <div
        className="dayName"
        style={{
          fontWeight: isCurrentDay ? "bold" : "normal",
          color: isCurrentDay ? "green" : "grey",
        }}
      >
        {formattedDay}
      </div>
      <div
        className="dayNumber"
        style={{ backgroundColor: busyness, color: numberColor }}
      >
        {number}
      </div>
    </div>
  );
}

export default Weekday;
