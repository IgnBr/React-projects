import "./css/Overview.css";
import CircularProgress from "@mui/material/CircularProgress";

function Overview({ completed, left }: any) {
  const percentage = Math.round((completed / (completed + left)) * 100);
  return (
    <div className="Overview">
      <h2>Overview</h2>
      <div className="circle">
        <CircularProgress
          value={percentage}
          variant="determinate"
          size={250}
          sx={{ marginBottom: "20px" }}
        />
      </div>
      <div>Completed: {completed}</div>
      <div>Left: {left}</div>
    </div>
  );
}

export default Overview;
