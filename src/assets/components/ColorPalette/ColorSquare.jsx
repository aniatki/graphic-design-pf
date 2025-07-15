import styles from "./ColorPalette.module.css"
import { useEffect, useRef } from 'react'

export default function ColorSquare({ color }) {
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
            style={{ backgroundColor: color }}>
        </div>)
}