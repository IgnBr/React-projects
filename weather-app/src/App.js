import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/Main/MainPage";
import DailyForecast from "./Pages/DailyForecast/DailyForecast";
import Header from "./Pages/Main/Components/Header";
import LoginPage from "./Pages/Login/LoginPage";

export const CityContext = React.createContext();
export const ResponseContext = React.createContext();

function App() {
  const cityState = React.useState(
    JSON.parse(localStorage.getItem("savedCities")) || []
  );
  const [res, setRes] = React.useState([]);

  return (
    <Router>
      <div className="App">
        <CityContext.Provider value={cityState}>
          <ResponseContext.Provider value={[res, setRes]}>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/daily/:city/:date" element={<DailyForecast />} />
            </Routes>
          </ResponseContext.Provider>
        </CityContext.Provider>
      </div>
    </Router>
  );
}

export default App;
