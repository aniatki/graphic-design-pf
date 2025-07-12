export default async function loadProjectData(projectName) {
  try {
    const dataModule = await import(`../projects/${projectName}/index.js`)
    return dataModule.default || dataModule
  } catch (err) {
    throw new Error(`Failed to load project data for ${projectName}`)
  }
}