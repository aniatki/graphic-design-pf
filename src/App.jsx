import '@/App.css'
import { Routes, Route } from "react-router-dom"

import Home from './assets/pages/Home/Home.jsx'
import Costcutter from './assets/components/Project/Costcutter/Costcutter.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/costcutter" element={<Costcutter />} />
    </Routes>
  )
}


