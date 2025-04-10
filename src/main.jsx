import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './index.css';
import App from './App'; 
import Login from './pages/login'; 
import SignIn from './components/signIn';
import Validation from './components/validation';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>  
      <Routes>  
        <Route path="/" element={<App />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/signIn" element={<SignIn />} />  
        <Route path="/validation" element={<Validation />} />  

        

      </Routes>
    </Router>
  </React.StrictMode>
);
