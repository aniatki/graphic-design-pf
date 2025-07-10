import { useState, useEffect } from 'react'

export default function ImageScroller ({ src }) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadePoint = 150
      const newOpacity = Math.max(1 - scrollY / fadePoint, 0);
      setOpacity(newOpacity)
    };

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div
      className="project-hero-image"
      aria-label="Supermarket Interior"
      role="img"
      style={{
        maxWidth: "90em",
        height: "25rem",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",

        width: '100%',
        transition: 'opacity 0.1s ease-out',
        opacity: opacity,
        pointerEvents: "none",
      }}
    />
  )
}