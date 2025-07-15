import { useEffect } from "react"

const colorCombinations = [
  { iconBg: "#015941", fill: "#f3f3f3" },
  { iconBg: "#EF4036", fill: "#f3f3f3" },
  { iconBg: "#FDB615", fill: "#333333" },
  { iconBg: "#BDD73A", fill: "#333333" },
]

const ICON_SIZE = 130

export default function Icon() {
  useEffect(() => {
    if (window.$ && window.$.fn.tilt) {
      window.$(".tilt-icon").tilt({
        glare: true,
        maxGlare: 0.5,
        perspective: 1000,
      })
    } else {
      console.warn("jQuery or Tilt.js is not available")
    }

    return () => {
      if (window.$ && window.$.fn.tilt) {
        window.$(".tilt-icon").tilt.destroy?.call()
      }
    }
  }, [])

  return (
    <div
      style={{
        display: "flex",
        marginInline: "auto",
        justifyContent: "space-around",
        gap: "2rem",
      }}
    >
      {colorCombinations.map((el, index) => (
        <div
          key={index}
          className="tilt-icon"
          data-tilt
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <svg
            viewBox="0 0 130.12 130.12"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <rect
              fill={el.iconBg}
              width={ICON_SIZE}
              height={ICON_SIZE}
              rx="20"
              style={{ transform: "translateZ(0px)" }}
            />
            <path
              fill="none"
              stroke={el.fill}
              strokeMiterlimit="10"
              strokeWidth="11"
              d="M22.05,71.6l9.66,9.66a47.18,47.18,0,0,0,66.7,0l9.66-9.66"
              style={{ transform: "translateZ(20px)" }}
            />
            <polyline
              fill="none"
              stroke={el.fill}
              strokeMiterlimit="10"
              strokeWidth="11"
              points="92.56 62.8 65.76 35.05 38.97 62.8"
              style={{ transform: "translateZ(30px)" }}
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
