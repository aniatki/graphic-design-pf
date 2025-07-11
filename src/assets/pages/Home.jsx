import '@/Home.css'
import { Link } from "react-router-dom"

export default function Home () {
    return (
        <main className="homepage-main">
            <nav className="homepage-nav">
                <ul>
                    <li><Link to={"costcutter"}>Costcutter</Link></li>
                    <li><Link to={"cosmic-brew"}>Cosmic Brew</Link></li>
                    <li><Link to={"/"}>Kamela Nails</Link></li>
                    <li><Link to={"/"}>Dreamwear</Link></li>
                </ul>
            </nav>
        </main>
    )
}