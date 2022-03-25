import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home/Home.jsx'
import NavBar from './components/Nav/NavBar.jsx'
import Footer from './components/Footer/Footer'
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'
import Dashbord from './pages/Dashboard/Dashboard.jsx'

export default function App() {
    return(

      <div >
        <NavBar />
          <Routes>
            <Route path="*" element={<>Página não encontrada</>} />
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashbord" element={<Dashbord/>} />
          </Routes>
        <Footer />
      </div>
    );
  }
  
