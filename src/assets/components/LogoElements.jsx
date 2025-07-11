export default function LogoElements({ logoElements }) {
    return (
        <section className="logo-elements">
        {logoElements.map((element, index) => (
            <div key={index}>
                <img src={element.imageSrc} alt={element.altText} />
                <p>{element.description}</p>
            </div>
        ))}
        </section>
    )
}