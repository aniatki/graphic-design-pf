import Project from '@/assets/components/Project.jsx' 
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Costcutter({ heading, projectTitle }) {
  const { projectName } = useParams()

  const [projectData, setProjectData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setProjectData(null)
    setLoading(true)
    setError(null)

    async function loadProjectData() {
      try {
        const dataModule = await import(`../projects/${projectName}/index.js`)
        setProjectData(dataModule)
      } catch (err) {
        console.error(`Failed to load project data for ${projectName}:`, err)
        setError("Project not found or failed to load data.")
      } finally {
        setLoading(false)
      }
    }

    if (projectName) loadProjectData()
  }, [projectName])

  if (loading) return <div>Loading project...</div>
  if (error) return <div>Error {error}</div>
  if (!projectData) return <div>No project data available.</div>

  const {
    contentBlocks,
    colorPalette,
    listContent,
    logoElements,
    projectHeroImage,
    typographyList,
  } = projectData

  return (
  <Project 
    heading={heading}
    projectTitle={projectTitle}
    contentBlocks={contentBlocks}
    colorPalette={colorPalette}
    listContent={listContent}
    logoElements={logoElements}
    projectHeroImage={projectHeroImage}
    typographyList={typographyList}
  />
  )
}