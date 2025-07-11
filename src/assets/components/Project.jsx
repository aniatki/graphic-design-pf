// Component imports
import ColorPalette from './ColorPalette.jsx'
import ImageScroller from './ImageScroller.jsx'
import List from './List.jsx'
import LogoElements from './logoElements.jsx'
import TypographyList from './TypographyList.jsx'

// Data imports
import { contentBlocks } from '../projects/costcutter/projectContent.js'
import { colorPalette } from '../projects/costcutter/colorPalette.js'

const componentMap = {
  List: <List />,
  LogoElements: <LogoElements />,
  TypographyList: <TypographyList />,
  ColorPalette: <ColorPalette />
}

function renderBlock(block, index) {
  switch (block.type) {
    case 'paragraph':
      return <p className={block.classes} key={index} style={{gridColumn: block.gridCol, gridRow: block.gridRow }}>{block.text}</p>
    case 'heading':
      return <h2 className={block.classes} key={index} style={{gridColumn: block.gridCol, gridRow: block.gridRow }}>{block.text}</h2>
    case 'component':
      return <div className={block.classes} key={index} style={{gridColumn: block.gridCol, gridRow: block.gridRow}}>{componentMap[block.name]}</div>
    case 'image':
      return <img className={block.classes} key={index} src={block.src} alt={block.alt || ''} style={{gridColumn: block.gridCol, gridRow: block.gridRow}}/>
    case 'video':
      return <video src={block.src} width={300} height={400} loop autoPlay muted className={block.classes} key={index} style={{gridColumn: block.gridCol, gridRow: block.gridRow}} />
    default:
      return null
  }
}

export default function Project({ heroImage, projectTitle, heading }) {
  return (
    <div className="project">
      <h4 className="title" style={{paddingBlock: "1.5rem"}}>
        <code>Project: </code>{projectTitle}
      </h4>
      <ImageScroller src={heroImage}/>
      <h1
        className="hero-heading"
        style={{
          fontFamily: "system-ui, sans-serif",
          marginBlock: "30rem 3rem",
          color: colorPalette[1].hex,
          gridColumn: "1/7",
          gridRow: "2/3",
        }}
      >
        {heading}
      </h1>

      {contentBlocks.map(renderBlock)}
    </div>
  )
}
