import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import FormPage from './component.js/FormPage';


const App = () => {
  return (
    <div>
      <Routes>
      <Route path="FormPage" element={<FormPage />} />
      <Route path='/' element={<Navigate to="/formpage"/>} />
      </Routes>
    </div>
  )
}

export default App;
