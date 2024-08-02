import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import PatientSearch from './components/PatientSearch';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/patientSearch" element={<PatientSearch />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
