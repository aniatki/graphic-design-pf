import styles from './HeroImage.module.css'

export default function HeroImage() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.nest}></div>
            </div>
            <div className={styles.hero}>
                <div className={styles.nest}></div>
            </div>
            <div className={styles.hero}>
                <div className={styles.nest}></div>
            </div>
        </div>
    )
}