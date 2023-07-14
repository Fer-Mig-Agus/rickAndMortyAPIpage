
import './App.css';
import { Routes, Route, } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import DetailPage from "./views/DetailPage";
import FavoritePage from "./views/FavoritesPage";
import HomePage from "./views/HomePage";
import LeandingPage from "./views/LeandingPage";
import AboutPage from "./views/AboutPage";
import ErrorPage from './views/ErrorPage';
import ForgetPasswordOne from './components/ForgetPasswordOne';
import { saveUser } from "./redux/actions";
import ConfirmedUser from "./components/ConfirmedUser";


import Nav from './components/Nav';

//important: Esta configuracion de axios es para el deploy
import axios from "axios";
import ResetPasswordTwo from './components/ResetPasswordTwo';

const desarrolloApp = "http://localhost:3001";
const produccionApp = "https://backend-rick-and-morty.onrender.com";

axios.defaults.baseURL = desarrolloApp;

function App() {

  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const user = window.localStorage.getItem('user');
    if (user) {
      const userParseado = JSON.parse(user);
      if (userParseado.length != 0) {
        dispatch(saveUser(userParseado));
      }
    }
  }, []);

  const verificarRutas = () => {
    switch (pathname) {
      case "/": return true
      case "/login": return true
      case "/home": return true
      case "/about": return true
      case "/favorite/:id": return true
      case "/detail/:id": return false
      default: return false
    }
  }




  return (
    <div className="App">

      {verificarRutas() && <Nav />}

      <Routes>

        <Route path="/login" element={< LeandingPage />} />
        <Route path="/" element={< HomePage />} />
        <Route path="/favorite/:id" element={< FavoritePage />} />
        <Route path="/about" element={< AboutPage />} />
        <Route path="/user/confirmar/:token" element={< ConfirmedUser />} />
        <Route path="/detail/:id" element={< DetailPage />} />
        <Route path="/reset_password_one" element={< ForgetPasswordOne />} />
        <Route path="/reset_password_two/:id" element={< ResetPasswordTwo />} />
        <Route path='*' element={<ErrorPage />} />

      </Routes>

    </div>
  );
}

export default App;
