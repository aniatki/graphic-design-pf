import styles from './ColorPalette.module.css'

export default function ColorPalette({ colorPalette }) {
    return (
        <div className={styles.grid}>
            {colorPalette.map((color, index) => (
                <div key={index} className={styles.row}>
                    <div className={styles.square} style={{ backgroundColor: color.hex }}></div>
                    <span className={styles.span}>{color.name}</span>
                    <div>
                        <div className={styles.row}><span>Hex: </span><code>{color.hex}</code></div>
                        <div className={styles.row}><span>RGB: </span><code>{color.rgb}</code></div>
                        <div className={styles.row}><span>CMYK: </span><code>{color.cmyk}</code></div>
                    </div>
                </div>
            ))}
        </div>
    );
};