import styles from "./LogoElements.module.css"

export default function LogoElements({ logoElements }) {
    return (
        <section className={styles.elements}>
        {logoElements.map((element, index) => (
            <div key={index} className={styles.div}>
                <img src={element.imageSrc} alt={element.altText} />
                <p>{element.description}</p>
            </div>
        ))}
        </section>
    )
}