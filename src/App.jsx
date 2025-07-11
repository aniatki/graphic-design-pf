import '@/App.css'
import { Routes, Route } from "react-router-dom"

import Costcutter from './assets/pages/Costcutter'

export default function App() {
  return (
    <Routes>
      <Route path="costcutter" element={<Costcutter />} />
    </Routes>
  )
}