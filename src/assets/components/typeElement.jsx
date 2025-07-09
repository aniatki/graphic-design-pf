export default function TypeElement({ typeface, opacity, weight, blur, fontStyle }) {
    const style = {
        opacity: opacity,
        fontWeight: weight,
        filter: `blur(${blur}px)`,
        fontStyle: `${fontStyle}`,
        marginBlock: "-1rem",
    }
    return <p style={style}>{typeface}</p>
}