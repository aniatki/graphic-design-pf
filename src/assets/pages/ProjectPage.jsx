import Project from '@/assets/components/Project/Project.jsx'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import loadProjectData from './loadProjectData.js'

export default function ProjectPage({ heading, projectTitle }) {
  const { projectName } = useParams()

  const [projectData, setProjectData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setProjectData(null)
    setLoading(true)
    setError(null)

    async function fetchData() {
      try {
        const data = await loadProjectData(projectName)
        setProjectData(data)
      } catch (err) {
        setError(err.message || "Error loading project")
      } finally {
        setLoading(false)
      }
    }
    if (projectName) fetchData()
  }, [projectName])

  if (loading) return <div>Loading project...</div>
  if (error) return <div>Error {error}</div>
  if (!projectData) return <div>No project data available.</div>

  const {
    contentBlocks,
    colorPalette,
    heroImage,
    listContent,
    logoElements,
    typographyList,
  } = projectData

  return (
    <Project
      heading={heading}
      projectTitle={projectTitle}
      contentBlocks={contentBlocks}
      colorPalette={colorPalette}
      heroImage={heroImage}
      listContent={listContent}
      logoElements={logoElements}
      typographyList={typographyList}
    />
  )
}