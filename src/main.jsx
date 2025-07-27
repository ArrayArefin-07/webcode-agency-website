import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/pricing" element={<div> Pricing Page </div>} />
        <Route path="/services" element={<div> Services Page </div>} />
        <Route path="/blogs" element={<div> Blog page </div>} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
