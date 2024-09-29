import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/home/mainPage';
import LoginPage from './pages/login/loginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoardPage from './pages/board/boardPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/board" element={<BoardPage />}></Route>
    </Routes>
  );
}

export default App;
