import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/home/mainPage";
import LoginPage from "./pages/login/loginPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
