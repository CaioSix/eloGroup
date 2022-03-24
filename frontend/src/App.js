import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import NavBar from './components/Nav/NavBar.jsx'
import Footer from './components/Footer/Footer'
import Newuser from './pages/NewUser/Newuser.jsx'

export default function App() {
    return(

      <div >
        <NavBar />
          <Routes>
            <Route path="*" element={<>Página não encontrada</>} />
            <Route path="/" element={<Home/>} />
            <Route path="/newuser" element={<Newuser/>} />
          </Routes>
        <Footer />
      </div>
    );
  }
  
