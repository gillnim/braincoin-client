import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
import { Toaster } from "sonner";

import BalancePage from './pages/BalancePage/BalancePage.jsx'
import TopTenPage from './pages/TopTenPage/TopTenPage';
import CurrencyConverter from './pages/CurrencyConvertorPage/CurrencyConvertorPage.jsx';

function App() {
  return (
    <BrowserRouter>
    <Toaster richColors position="top-right" /> 
    <CurrencyConverter />
    <Routes>
      <Route path = "/balance" element={<BalancePage/>}/>
      <Route path="/top-ten" element={<TopTenPage />} />
      <Route path="*" element={<h1>Page Not Found 🙈</h1>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
