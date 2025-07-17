import logo from '../../images/costcutter/logo.svg'
import orangeJuice from '../../images/costcutter/orange-juice.mp4'

export const contentBlocks = [
  {
    type: 'paragraph',
    text: "Costcutter is a well-established convenience store and supermarket chain operating across Ireland, including numerous locations throughout Dublin. Known for its strong presence in both residential neighbourhoods and city centre areas, Costcutter offers a mix of everyday groceries, fresh produce, chilled foods, baked goods, and household essentials. The stores are typically smaller in size than full-scale supermarkets, making them ideal for quick shopping trips and top-up purchases.",
    gridCol: "1/6",
    gridRow: "4",
    margin: "-7rem 0 0 0",
  },
  {
    type: 'heading',
    text: 'Target audience:',
    gridCol: "1/6",
    gridRow: "5",
  },
  {
    type: 'component',
    name: 'List',
    gridCol: "1/7",
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
    gridRow: "8",
  },
  {
    type: 'video',
    src: orangeJuice,
    alt: 'Orange Juice',
    classes: "orange",
  },
  {
    type: 'paragraph',
    text: "The typography choice was this very bold, sans serif font:",
    gridCol: "7/12",
    gridRow: "9",
  },
  {
    type: 'component',
    name: 'TypographyList',
    gridCol: "7/12",
    gridRow: "10/12",
  },
  {
    type: 'paragraph',
    text: "As for the colours, the original palette was kept, as I didn't want to stray too far off the original... for obvious reasons.",
    gridCol: "7/12",
    gridRow: "13",
  },
  {
    type: 'component',
    name: 'ColorPalette',
    gridCol: "7/12",
    gridRow: "14",
  },
]
