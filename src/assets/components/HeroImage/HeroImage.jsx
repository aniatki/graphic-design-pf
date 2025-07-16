import styles from './HeroImage.module.css'
import { useState, useEffect } from "react"

export default function HeroImage({ heroImage }) {
    const [opacity, setOpacity] = useState(1);

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
        <div className={styles.container} style={{ opacity: opacity }}>
            <div
                className={styles.hero}
                style={{ backgroundImage: `url(${heroImage?.src})` }}
            >
                <div className={styles.nest}></div>
            </div>
        </div>
    )
}