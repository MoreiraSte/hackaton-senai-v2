import React from 'react'
import Login from './components/Login';
import Cadastro from './components/Cadastro'
import Forum from './pages/forum'
// import Us from './components/US'

import DefaultScreen from "./DefaultScreen"
import './styles/global.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DefaultScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/forum' element={<Forum />} />
      </Routes>
    </Router>
  );
}

export default App;
