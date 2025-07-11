import triangle from "../images/costcutter/triangle.svg"
import circle from "../images/costcutter/circle.svg"

export default function LogoElements() {
    return (
        <section className="logo-elements">
            <div>
                <img src={triangle} alt="Triangle that is part of the logo" />
                <p>mostly associated with stability</p>
            </div>
            <div>
                <img src={circle} alt="Circle that is part of the logo" />
                <p>associated with security, community and continuity</p>
            </div>
        </section>
    )
}