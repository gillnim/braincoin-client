import { useState } from 'react'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'

import BalancePage from './pages/BalancePage/BalancePage.jsx'
import TopTenPage from './pages/TopTenPage/TopTenPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/balance" element={<BalancePage/>}/>
      <Route path="/top-ten" element={<TopTenPage />} />
      <Route path="*" element={<h1>Page Not Found 🙈</h1>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
