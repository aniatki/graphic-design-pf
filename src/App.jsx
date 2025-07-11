import '@/App.css'
import { Routes, Route, useParams } from "react-router-dom"

import Costcutter from './assets/pages/Costcutter.jsx'
import Home from './assets/pages/Home.jsx'
import CosmicBrew from './assets/pages/CosmicBrew.jsx'

function ProjectPage() {
  const { projectName } = useParams()

  switch (projectName) {
    case 'costcutter':
      return <Costcutter heading="COSTCUTTER" projectTitle="Costcutter Clonshaugh" />
    case 'cosmic-brew':
      return <CosmicBrew heading="COSMIC BREW" projectTitle="Cosmic Brew" />
    default:
      return <div>Project not found</div>
  }
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:projectName" element={<ProjectPage/>} />
    </Routes>
  )
}


