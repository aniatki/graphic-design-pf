import styles from "./LogoElements.module.css"

export default function LogoElements({ logoElements, customClass }) {
    return (
        <section className={customClass}>
        {logoElements.map((element, index) => (
            <div key={index} className={styles.elements}>
                <img src={element.imageSrc} alt={element.altText} />
                <p>{element.description}</p>
            </div>
        ))}
        </section>
    )
}