import styles from './HeroImage.module.css'
import { useState, useEffect } from "react"

export default function HeroImage({ customClass, heroImage, heroImageMobile }) {
    const [opacity, setOpacity] = useState(1);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(()=> {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [])

    const hero = windowWidth < 850 ? heroImageMobile : heroImage

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const fadePoint = 1000
            const newOpacity = Math.max(1 - scrollY / fadePoint, 0);
            setOpacity(newOpacity)
        };

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div className={`${styles.container} ${customClass}`} style={{ opacity: opacity }}>
            <div
                className={styles.hero}
                style={{ backgroundImage: `url(${hero})` }}
            >
                <div className={styles.nest}></div>
            </div>
        </div>
    )
}