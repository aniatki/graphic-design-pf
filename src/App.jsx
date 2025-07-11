import '@/App.css'
import { Routes, Route } from "react-router-dom"

import Costcutter from './assets/pages/Costcutter.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/:projectName" element={<Costcutter heading={"COSTCUTTER"} projectTitle={"Costcutter Clonshaugh"}/>} />
    </Routes>
  )
}