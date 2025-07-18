// Component imports
import {
  ColorPalette,
  List,
  Logo,
  HeroImage,
  LogoElements,
  Masonry,
  ParallaxImage,
  TypographyList
} from '..'
import styles from "./Project.module.css"
import { Link } from 'react-router-dom'

function renderBlock(block, index, componentMap) {
  const style = {
    gridColumn: block.gridCol,
    gridRow: block.gridRow,
    maxWidth: block.maxWidth,
  }

  const className = block.classes

  switch (block.type) {
    case 'paragraph':
      return <p key={index} className={className} style={style}>{block.text}</p>
    case 'heading':
      return <h2 key={index} className={className} style={style}>{block.text}</h2>
    case 'component':
      return <div key={index} className={className} style={style}>
        {componentMap[block.name]}
      </div>
    case 'image':
      return <img
        key={index}
        className={className}
        style={style}
        src={block.src}
        alt={block.alt || ''}
        loading="lazy"
      />
    case 'video':
      return <video
        key={index}
        className={className}
        src={block.src}
        loop
        autoPlay
        muted
      />
    default:
      return null
  }
}

export default function Project({
  projectTitle,
  heading,
  contentBlocks,
  colorPalette,
  heroImage,
  listContent,
  logoElements,
  typographyList
}) {

  const componentMap = {
    ColorPalette: <ColorPalette colorPalette={colorPalette} />,
    List: <List listContent={listContent} />,
    LogoElements: <LogoElements logoElements={logoElements} />,
    TypographyList: <TypographyList typographyList={typographyList} />,

  }

  return (
    <div className={styles.project}>
      <div className={styles.navbar}>
        <Logo />
        <h4 className={styles.title}>{projectTitle}</h4>
        <Link to={"/"}>Home</Link>
      </div>
      <HeroImage heroImage={heroImage}/>
      <h1
        className={styles.heading}
        style={{
          color: colorPalette && colorPalette.length > 1 ? colorPalette[1].hex : 'inherit',
        }}
      >
        {heading}
      </h1>

      {contentBlocks && contentBlocks.map((block, index) => renderBlock(block, index, componentMap))}
      <ParallaxImage />
      <Masonry />
    </div>
  )
}