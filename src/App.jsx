import '@/App.css'
import Project from '@/assets/components/Project' 
import supermarketInterior from '@/assets/images/costcutter/supermarket-interior.webp'

export default function App() {
    return (
    <Project 
      heroImage={supermarketInterior}
      projectTitle="Costcutter Clonshaugh"
      heading="COSTCUTTER"
      />
  )
}