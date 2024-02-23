// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './parts/Signup'; 
   
import './App.css'; 
import DashboardComponent from './parts/Dashoboardpage';
import Dashboard from './parts/Dashboard';
import Login from './parts/Login';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={SignUp} />
        <Route path="/login" element={Login} />
        <Route path="/dashboardcomponent" element={DashboardComponent} />
        <Route path="/dashboard" element={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
