import logo from '../../images/cosmic-brew/logo.svg'
import orange from '../../images/cosmic-brew/orange.png'
import orangeInWater from '../../images/cosmic-brew/orange-in-water.jpg'
import orangeJuice from '../../images/cosmic-brew/orange-juice.mp4'
import slicesOfOrange from '../../images/cosmic-brew/slices-of-orange.mp4'

export const contentBlocks = [
  {
    type: 'paragraph',
    text: "Humans dating robots is sick. You people wonder why I'm still single? It's 'cause all the fine robot sisters are dating humans! No, I'm Santa Claus! I guess because my parents keep telling me to be more ladylike. As though!",
    gridCol: "1/6",
    gridRow: "4",
    margin: "-7rem 0 0 0",
  },
  {
    type: 'heading',
    text: 'Target audience:',
    gridCol: "1/6",
    gridRow: "5",
    classes: "push-down"
  },
  {
    type: 'component',
    name: 'List',
    gridCol: "1/6",
    gridRow: "6",
  },
  {
    type: 'heading',
    text: "Let's go through the logo design process.",
    gridCol: "1/5",
    gridRow: "7",
    classes: "push-down"
  },
  {
    type: 'paragraph',
    text: "Looking at the former logo with the red swoosh underneath, I wanted to stray away from that and find an alternative communicative icon that would fit rather well with our brand.",
    gridCol: "1/6",
    gridRow: "8",
  },
  {
    type: 'paragraph',
    text: "What came to mind first was a shopping bill and scissors cutting through it, but I thought it was too cliché and rather illustrative for its purpose. After some thinking and brainstorming, I came down to two primitive shapes: a triangle and a circle.",
    gridCol: "1/6",
    gridRow: "9",
  },
  {
    type: 'paragraph',
    text: "Amazingly so, there's a bit more connection to these shapes, rather than just randomly placed there.",
    gridCol: "1/6",
    gridRow: "10",
  },
  {
    type: 'component',
    name: 'LogoElements',
    gridCol: "1/6",
    gridRow: "11",
  },
  {
    type: 'paragraph',
    text: "I wanted the roundness of the circle and the pointiness of the triangle combined into one powerful icon people can trust and rely on daily.",
    gridCol: "1/7",
    gridRow: "12",
  },
  {
    type: 'image',
    src: logo,
    alt: 'Final Costcutter logo',
    gridCol: "6/11",
    gridRow: "9",
    classes: "push-down final-logo",
  },
  {
    type: 'image',
    src: orange,
    alt: 'Sliced Orange',
    gridCol: "1/4",
    gridRow: "15/16",
    classes: "orange",
  },
  {
    type: 'video',
    src: orangeJuice,
    alt: 'Orange Juice',
    gridCol: "2/5",
    gridRow: "15/16",
    classes: "orange",
  },
  {
    type: 'image',
    src: orangeInWater,
    alt: 'Orange in Water',
    gridCol: "3/6",
    gridRow: "15/16",
    classes: "orange",
  },
  {
    type: 'video',
    src: slicesOfOrange,
    alt: 'Slices of Orange',
    gridCol: "4/8",
    gridRow: "15/16",
    classes: "orange",
  },
  {
    type: 'paragraph',
    text: "The typography choice was this very bold, sans serif font:",
    gridCol: "7/12",
    gridRow: "10",
  },
  {
    type: 'component',
    name: 'TypographyList',
    gridCol: "7/12",
    gridRow: "11/13",
  },
  {
    type: 'paragraph',
    text: "As for the colours, the original palette was kept, as I didn't want to stray too far off the original... for obvious reasons.",
    gridCol: "7/12",
    gridRow: "14",
  },
  {
    type: 'component',
    name: 'ColorPalette',
    gridCol: "7/12",
    gridRow: "15",
  },
]
