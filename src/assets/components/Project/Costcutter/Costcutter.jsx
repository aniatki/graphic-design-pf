// Component imports
import {
    ColorPalette,
    Logo,
    HeroImage,
    LogoElements,
    Masonry,
    ParallaxImage,
    TypographyList
} from '../../index.js'

// Data imports
import {
    colorPalette,
    logoElements,
    typographyList
} from "../../../projects/costcutter/index.js"

// Styles imports
import styles from "./Costcutter.module.css"

// Imagery imports
import logo from '../../../images/costcutter/logo.svg'
import heroImage from '../../../images/costcutter/proud.jpg'
import heroImageMobile from '../../../images/costcutter/proud_mobile.jpg'
import orangeJuice from '../../../images/costcutter/orange-juice.mp4'

// Misc
import { Link } from 'react-router-dom'

export default function Costcutter() {
    return (
        <div className={styles.project}>
            <div className={styles.navbar}>
                <Logo />
                <h4 className={styles.title}>Costcutter Clonshaugh</h4>
                <Link to={"/"}>Home</Link>
            </div>
            <HeroImage 
                customClass={styles.heroImage} 
                heroImage={heroImage} 
                heroImageMobile={heroImageMobile} 
                />
            <h1
                className={styles.heading}
                style={{
                    color: colorPalette && colorPalette.length > 1 ? colorPalette[1].hex : 'inherit',
                }}
            >
                Costcutter
            </h1>
            <p className={styles.descriptionParagraph}>Costcutter is a well-established convenience store and supermarket chain operating across Ireland, including numerous locations throughout Dublin. Known for its strong presence in both residential neighbourhoods and city centre areas, Costcutter offers a mix of everyday groceries, fresh produce, chilled foods, baked goods, and household essentials. The stores are typically smaller in size than full-scale supermarkets, making them ideal for quick shopping trips and top-up purchases.</p>

            <h2 className={styles.targetAudience}>Target audience:</h2>
            <ol className={styles.list}>
                <li>Urban dwellers seeking quick and convenient grocery options</li>
                <li>Students looking for affordable meals, snacks, and essentials</li>
                <li>Busy professionals who shop on-the-go during commutes or lunch breaks</li>
                <li>Young families needing top-up groceries and household items locally</li>
                <li>Elderly residents who prefer nearby stores with familiar, everyday products</li>
                <li>Tourists in need of quick snacks, drinks, or essentials while exploring the city</li>
                <li>Budget-conscious shoppers who value deals, promotions, and multi-buys</li>
            </ol>
            <h2 className={styles.logoProcess}>Let's go through the logo design process.</h2>
            <p className={styles.formerParagraph}>Looking at the former logo with the red swoosh underneath, I wanted to stray away from that and find an alternative communicative icon that would fit rather well with our brand.</p>
            <p className={styles.initialThought}>What came to mind first was a shopping bill and scissors cutting through it, but I thought it was too cliché and rather illustrative for its purpose. After some thinking and brainstorming, I came down to two primitive shapes: a triangle and a circle.</p>
            <p className={styles.amazingly}>Amazingly so, there's a bit more connection to these shapes, rather than just randomly placed there.</p>
            <LogoElements customClass={styles.logoElements} logoElements={logoElements} />
            <p className={styles.logoDescription}>I wanted the roundness of the circle and the pointiness of the triangle combined into one powerful icon people can trust and rely on daily.</p>
            <img className={styles.finalLogo} src={logo} alt={"Final Costcutter Logo"} />
            <video alt={"Video of fresh orange juice being squeezed"}
                className={styles.video}
                src={orangeJuice}
                loop
                autoPlay
                muted
            />
            <p className={styles.typographyDescription}>The typography choice was this very bold, sans serif font:
            </p>
            <TypographyList customClass={styles.typographyList} typographyList={typographyList} />
            <p className={styles.colorsDescription}>As for the colours, the original palette was kept, as I didn't want to stray too far off the original... for obvious reasons.</p>
            <ColorPalette customClass={styles.colorPalette} colorPalette={colorPalette} />
            <ParallaxImage customClass={styles.parallaxImage} />
            <Masonry customClass={styles.masonry} />
        </div>
    )
}