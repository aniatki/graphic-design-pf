import { useEffect, useRef } from "react"
import styles from "./Masonry.module.css"

export default function ImageSquare({ bgUrl }) {
    const tiltRef = useRef(null)

    useEffect(() => {
        if (window.$ && window.$.fn.tilt) {
            window.$(tiltRef.current).tilt({
                glare: true,
                maxGlare: .5,
                scale: 1.1,
            })
        } else {
            console.warn('jQuery or Tilt.js is not available')
        }

        return () => {
            if (window.$ && window.$.fn.tilt) {
                window.$(tiltRef.current).tilt.destroy?.call()
            }
        }
    }, [])

    return (
        <div
            ref={tiltRef}
            data-tilt
            className={styles.square}
            style={{ backgroundImage: `url(${bgUrl})` }}>
        </div>
    )
}