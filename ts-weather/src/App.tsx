import "./App.css";
import Corner from "./Corner/Corner";
import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";
import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./RegisterPage/RegisterPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Corner />
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
