import styles from "./Masonry.module.css"
import informative from '../../images/costcutter/social_media/informative.jpg'
import special from '../../images/costcutter/social_media/special.jpg'
import standard from '../../images/costcutter/social_media/standard.jpg'
import orangesMockup from "../../images/costcutter/oranges-mockup.jpg"
import ImageSquare from "./ImageSquare.jsx"

export default function Masonry({ customClass }) {
    return (
        <>
            <div className={`${styles.masonry} ${customClass}`}>
                {[informative, special, standard, orangesMockup].map((el, index) => (
                    <ImageSquare key={index} bgUrl={el} />
                ))}
            </div>
        </>
    )
}