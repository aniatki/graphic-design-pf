// Component imports
import ColorPalette from '@/assets/components/ColorPalette'
import ImageScroller from '@/assets/components/ImageScroller'
import List from '@/assets/components/List'
import LogoElements from '@/assets/components/logoElements'
import TypographyList from '@/assets/components/TypographyList'

// Data imports
import { contentBlocks } from '@/assets/projects/costcutter/projectContent'
import { colorPalette } from '@/assets/projects/costcutter/colorPalette'

const componentMap = {
  List: <List />,
  LogoElements: <LogoElements />,
  TypographyList: <TypographyList />,
  ColorPalette: <ColorPalette />
}

function renderBlock(block, index) {
  switch (block.type) {
    case 'paragraph':
      return <p key={index}>{block.text}</p>
    case 'heading':
      return <h2 key={index}>{block.text}</h2>
    case 'component':
      return <div key={index}>{componentMap[block.name]}</div>
    case 'image':
      return <img key={index} src={block.src} alt={block.alt || ''} />
    default:
      return null
  }
}

export default function Project({ heroImage, projectTitle, heading }) {
  return (
    <div className="project">
      <h4 className="title">
        <code>Project: </code>{projectTitle}
      </h4>
      <ImageScroller src={heroImage} />
      <h1
        className="hero-heading"
        style={{
          fontFamily: "system-ui, sans-serif",
          marginBlockStart: "30rem",
          color: colorPalette[1].hex,
        }}
      >
        {heading}
      </h1>

      {contentBlocks.map(renderBlock)}
    </div>
  )
}