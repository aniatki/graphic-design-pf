import './App.css'
import Project from './assets/components/Project' 
import supermarketInterior from './assets/images/supermarket-interior.avif'

export default function App() {
    return (
    <Project 
      heroImage={supermarketInterior}
      projectTitle="Costcutter Clonshaugh"
      heading="COSTCUTTER"
      />
  )
}