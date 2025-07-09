import './App.css'
import ColorPalette from './assets/components/colorPalette'
import ImageScroller from './assets/components/imageScroller'
import List from './assets/components/ui/list'
import ListElement from './assets/components/ui/li'
import Paragraph from './assets/components/ui/paragraph'
import TypeElement from './assets/components/typeElement'

// Image imports
import supermarketInterior from './assets/images/supermarket-interior.avif'
import triangle from './assets/images/triangle.png'
import circle from './assets/images/circle.png'
import logo from './assets/images/logo.png'

export default function App() {
    return (
    <>
      <div className="hero">
        <h4 className="title">Project: Costcutter Clonshaugh</h4>
          <ImageScroller src={supermarketInterior}/>
          <h1 
            style={{ 
              fontFamily: "system-ui, sans-serif", 
              marginBlockStart: "30rem" ,
            }}
          >COSTCUTTER</h1>
        <Paragraph text="Humans dating robots is sick. You people wonder why I'm still single? It's 'cause all the fine robot sisters are dating humans! No, I'm Santa Claus! I guess because my parents keep telling me to be more ladylike. As though!" />
        <h2>Target audience:</h2>
        <List>
          <ListElement content="I was having the most wonderful dream. Except you were there, and you were there, and you were there!"/>
          <ListElement content="We'll go deliver this crate like professionals, and then we'll go home."/>
          <ListElement content="Can we have Bender Burgers again?"/>
          <ListElement content="Don't act so surprised, Your Highness. You weren't on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened to the plans they sent you.
            "/>
          <ListElement content="As you wish."/>
          <ListElement content="Dantooine. They're on Dantooine."/>
        </List>
        <h2>Let's go through the logo design process.</h2>
        <Paragraph text="Looking at the former logo with the red swoosh underneath, I wanted to straw away from that and find an alternative communicative icon that would fit rather well with our brand." />
        <Paragraph text="What came to mind first, was a shopping bill and scissors cutting through it, but I thought it was too cliché and rather illustrative for its purpose. After some thinking and brainstorming, I came down to two primitive shapes: a triangle and a circle."/>
        <Paragraph text="Amazingly so, there's a bit more connection to these shapes, rather than just randomly placed there."/>
        <section className="logo-elements">
          <div>
            <img src={triangle} alt="" />
            <Paragraph text="mostly associated with stability" />
          </div>
          <div>
            <img src={circle} alt="" />
            <Paragraph text="associated with security, community and continuity" />
          </div>
        </section>
        <em>
          And just like that, it all fell into place.
        </em>
        <Paragraph text="I wanted the roundness of the circle and the pointiness of the triangle combined into one powerful icon people can trust and rely to daily."/>
        <img src={logo} alt="" />
        <Paragraph text="The typography choice was this very bold, sans serif font:" />
        <div className="typography-list">
          <TypeElement typeface={'Franklin Gothic Book'} opacity={.5} weight={100} blur={2} fontStyle={'normal'}/>
          <TypeElement typeface={'Franklin Gothic Book'} opacity={.7} weight={100} blur={1} fontStyle={'italic'}/>
          <TypeElement typeface={'Franklin Gothic Demi'} opacity={1} weight={500} blur={0} fontStyle={'normal'}/>
          <TypeElement typeface={'Franklin Gothic Demi'} opacity={.7} weight={500} blur={1} fontStyle={'italic'}/>
          <TypeElement typeface={'Franklin Gothic Heavy'} opacity={.5} weight={900} blur={2} fontStyle={'normal'}/>
          <TypeElement typeface={'Franklin Gothic Heavy'} opacity={.3} weight={900} blur={3} fontStyle={'italic'}/>
        </div>
        <Paragraph text="As for the colours, the original palette was kept, as I didn't want to stray too far off the original...for obvious reasons." />
        <div className="color-grid">
          <ColorPalette />          
        </div>
      </div>
    </>
  )
}