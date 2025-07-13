import styles from "./TypographyList.module.css"

export default function TypographyList({ typographyList } ) {
    return (
        <div className={styles.typography}>
            {typographyList.map((typeface, index) => (
                <p
                    key={index}
                    style={{
                        opacity: typeface.opacity,
                        fontWeight: typeface.weight,
                        filter: `blur(${typeface.blur}px)`,
                        fontStyle: `${typeface.fontStyle}`,
                        marginBlock: "-1rem",
                    }}
                >
                    {typeface.typeface}
                </p>
            ))}
        </div>
    )
}