import Task from "./Task";
import Redirect from "../../Images/redirect.png";
import "./css/CurrentTasks.css";

function CurrentTasks({ tasks }: any) {
  const [firstTask, secondTask] = tasks;

  return (
    <div className="CurrentTasks">
      <div className="title">
        <h2>Current tasks</h2>
        <img src={Redirect} alt="Redirect"></img>
      </div>
      <Task key={"firstTask"} task={firstTask} />
      <Task key={"secondTask"} task={secondTask} />
    </div>
  );
}

export default CurrentTasks;
