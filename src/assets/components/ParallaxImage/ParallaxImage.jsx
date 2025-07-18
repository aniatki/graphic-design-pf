import styles from "./ParallaxImage.module.css"
import { parallaxImage } from "../../projects/costcutter/parallaxImage.js"
import { useEffect, useRef, useState } from "react"

export default function ParallaxImage({ customClass }) {
    const ref = useRef(null)
    const [offsetY, setOffsetY] = useState(-100)

    useEffect(() => {
        const el = ref.current

        const handleScroll = () => {
            if (!el) return

            const rect = el.getBoundingClientRect()
            const windowHeight = window.innerHeight

            if (rect.top < windowHeight && rect.bottom > 0) {
                const scrollProgress = 1 - rect.top / windowHeight
                const clamped = Math.min(Math.max(scrollProgress, 0), 1)
                const translateY = -100 + clamped * 100
                setOffsetY(translateY)
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={`${styles.container} ${customClass}`}>
            <div ref={ref}
                aria-hidden={true}
                className={styles.name} 
                style={{
                    right: `${1.5*offsetY}px`,
                }}
                >
                {new Array(50).fill(1).map((_, index) => (
                    <span key={index}>Costcutter</span>
                ))}
            </div>
            <div className={styles.image} style={{backgroundImage: `url(${parallaxImage.src})` }} aria-description={parallaxImage.alt} />
        </div>
    )
}