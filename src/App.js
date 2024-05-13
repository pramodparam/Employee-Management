
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { useEffect } from "react";
import axios from 'axios';
import User from './components/Users';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Preloder from './components/Preloder';
import Register from './components/Register';
function App() {
  return(<>
  {/* <Preloder/> */}
  <BrowserRouter>
 
        <Routes>
          <Route exact path="/" element={<User />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
         
        </Routes>
      
      </BrowserRouter>
  </>)
}

export default App;
