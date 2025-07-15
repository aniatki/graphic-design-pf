import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function TiltComponent({ href, title }) {
  const tiltRef = useRef(null)

  useEffect(() => {
    if (window.$ && window.$.fn.tilt) {
      window.$(tiltRef.current).tilt({
        glare: true,
        maxGlare: 0.7,
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
    <div ref={tiltRef}  data-tilt className={styles.titlecard}>
      <Link to={href}>{title}</Link>
    </div>
  )
}