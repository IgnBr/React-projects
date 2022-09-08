import "./css/Sidebar.css";
import Home from "../Images/home.png";
import Calendar from "../Images/calendar.png";
import Question from "../Images/question.png";
import TodoList from "../Images/to-do-list.png";
import Setting from "../Images/settings.png";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="sidebar-item home">
        <img src={Home} alt="Home" />
      </div>
      <div className="sidebar-item calendar">
        <img src={Calendar} alt="Calendar" />
      </div>
      <div className="sidebar-item question">
        <img src={Question} alt="Question" />
      </div>
      <div className="sidebar-item todoList">
        <img src={TodoList} alt="TodoList" />
      </div>
      <div className="sidebar-item setting">
        <img src={Setting} alt="Settings" />
      </div>
    </div>
  );
};

export default Sidebar;
