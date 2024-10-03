import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
import { Toaster } from "sonner";

import BalancePage from './pages/BalancePage/BalancePage.jsx'
import TopTenPage from './pages/TopTenPage/TopTenPage';
import Header from './components/Header/Header.jsx';
import About from './components/About/About';
import Sidebar from './components/SideBar/SideBar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Toaster richColors position="top-right" />
      <Sidebar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/balance" element={<BalancePage />} />
        <Route path="/top-ten" element={<TopTenPage />} />
        <Route path="*" element={<h1>Page Not Found 🙈</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
