
import './App.css';
import {Routes,Route, useLocation} from "react-router-dom";

import DetailPage from "./views/DetailPage";
import FavoritePage from "./views/FavoritesPage";
import HomePage from "./views/HomePage";
import LeandingPage from "./views/LeandingPage";
import AboutPage from "./views/AboutPage";
import ErrorPage from './views/ErrorPage';
import Register from "./components/Register";

import Nav from './components/Nav';

//important: Esta configuracion de axios es para el deploy
import axios from "axios";

const desarrolloApp ="http://localhost:3001";
const produccionApp="";
axios.defaults.baseURL=desarrolloApp;

function App() {

  const {pathname}=useLocation();

  const verificarRutas=()=>{
    switch(pathname){
      case "/": return false
      case "/home": return true
      case "/about": return true
      case "/favorite":return true
      case "/detail/:id":return false
      case "/register": return false
      default: return false
    }
  }




  return (
    <div className="App">

      {verificarRutas() && <Nav />}
      
      <Routes>

        <Route path="/" element={< LeandingPage/>}/>
        <Route path="/home" element={< HomePage/>}/>
        <Route path="/favorite" element={< FavoritePage />} />
        <Route path="/about" element={< AboutPage />} />
        <Route path="/detail/:id" element={< DetailPage />} />
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<ErrorPage />}/>

      </Routes>

    </div>
  );
}

export default App;
