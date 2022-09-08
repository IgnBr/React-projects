import Dashboard from "../Dashboard/Dashboard";
import Weather from "../Weather/Weather";
import "./css/MainPage.css";

function MainPage() {
  return (
    <div className="MainPage">
      <Weather />
      <Dashboard />
    </div>
  );
}

export default MainPage;
