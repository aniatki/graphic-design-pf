// Component imports
import { ColorPalette, ImageScroller, List, LogoElements, TypographyList } from './'

function renderBlock(block, index, componentMap) {
  const commonProps = {
    className: block.classes,
    key: index,
    style: {
      gridColumn: block.gridCol,
      gridRow: block.gridRow,
      maxWidth: block.maxWidth,
    },
  }

  switch (block.type) {
    case 'paragraph':
      return <p {...commonProps}>{block.text}</p>
    case 'heading':
      return <h2 {...commonProps}>{block.text}</h2>
    case 'component':
      return <div {...commonProps}>{componentMap[block.name]}</div>
    case 'image':
      return <img
        {...commonProps}
        src={block.src}
        alt={block.alt || ''}
        loading="lazy" />
    case 'video':
      return <video
        {...commonProps}
        src={block.src}
        loop
        autoPlay
        muted />
    default:
      return null
  }
}

export default function Project({ 
  projectTitle, 
  heading, 
  contentBlocks, 
  colorPalette, 
  listContent, 
  logoElements, 
  projectHeroImage, 
  typographyList 
}) {

  const componentMap = {
    ColorPalette: <ColorPalette colorPalette={colorPalette} />,
    List: <List listContent={listContent} />,
    LogoElements: <LogoElements logoElements={logoElements} />,
    TypographyList: <TypographyList typographyList={typographyList} />,
  }

  return (
    <div className="project">
      <h4 className="title" style={{ paddingBlock: "1.5rem" }}>
        <code>Project: </code>{projectTitle}
      </h4>
      <ImageScroller projectHeroImage={projectHeroImage} />
      <h1
        className="hero-heading"
        style={{
          fontFamily: "system-ui, sans-serif",
          marginBlock: "30rem 3rem",
          color: colorPalette && colorPalette.length > 1 ? colorPalette[1].hex : 'inherit',
          gridColumn: "1/7",
          gridRow: "2/3",
        }}
      >
        {heading}
      </h1>

      {contentBlocks && contentBlocks.map((block, index) => renderBlock(block, index, componentMap))}
    </div>
  )
}