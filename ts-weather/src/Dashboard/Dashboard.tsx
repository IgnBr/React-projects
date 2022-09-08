import moment from "moment";
import CurrentTasks from "./components/CurrentTasks";
import Overview from "./components/Overview";
import Summary from "./components/Summary";
import UpcomingWeek from "./components/UpcomingWeek";
import "./css/Dashboard.css";

const mockTasks = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta quibusdam magni accusamus.",
    dueTo: moment().add(2, "days"),
    tags: ["January", "February", "March", "April"],
  },
  {
    title:
      "At soluta quibusdam magni accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta quibusdam magni accusamus.",
    dueTo: moment().subtract(2, "days"),
    tags: ["January"],
  },
];

function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <CurrentTasks tasks={mockTasks} />
      <Overview completed={10} left={7} />
      <UpcomingWeek />
      <Summary />
    </div>
  );
}

export default Dashboard;
