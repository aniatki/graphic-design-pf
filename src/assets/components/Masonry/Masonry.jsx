import styles from "./Masonry.module.css"
import informative from '../../images/costcutter/social_media/informative.jpg'
import special from '../../images/costcutter/social_media/special.jpg'
import standard from '../../images/costcutter/social_media/standard.jpg'
import orangesMockup from "../../images/costcutter/oranges-mockup.jpg"

export default function Masonry() {
    return (
        <>
            <div className={styles.masonry}>
                {[informative, special, standard, orangesMockup].map((el, index) => (
                    <div key={index} style={{ backgroundImage: `url(${el})` }}></div>
                ))}
            </div>
        </>
    )
}