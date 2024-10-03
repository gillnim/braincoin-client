import { useState } from 'react'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'

import BalancePage from './pages/BalancePage/BalancePage.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/balance" element={<BalancePage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
