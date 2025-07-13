import '@/App.css'
import { Routes, Route, useParams } from "react-router-dom"

import Home from './assets/pages/Home/Home.jsx'
import ProjectPage from './assets/pages/ProjectPage.jsx'

function GetProjectPage() {
  const { projectName } = useParams()

  switch (projectName) {
    case 'costcutter':
      return <ProjectPage heading="Costcutter" projectTitle="Costcutter Clonshaugh" />
    case 'cosmic-brew':
      return <ProjectPage heading="Cosmic Brew" projectTitle="Cosmic Brew" />
    default:
      return <div>Project not found</div>
  }
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:projectName" element={<GetProjectPage/>} />
    </Routes>
  )
}


