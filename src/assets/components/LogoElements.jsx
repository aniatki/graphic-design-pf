import { logoElements } from '@/assets/projects/costcutter/logoElements'

export default function LogoElements() {
    return (
        <section className="logo-elements">
            {logoElements.map((elem, index) => (
                <div key={index}>
                    <img src={elem.imageSource} alt={elem.altText} />
                    <p>{elem.description}</p>
                </div>))}
        </section>
    )
}