import styles from './Home.module.css'
import { useState } from "react"
import { projects } from "../../projects/projects.js"
import Logo from "../../components/Logo/Logo.jsx"
import Tilt from "./Tilt.jsx"

export default function Home() {
    const [index, setIndex] = useState(0)

    function downIndex() {index === 0 ? setIndex(0) : setIndex(index - 1)}
    function upIndex() {index === 3 ? setIndex(3) : setIndex(index + 1)}

    return (
        <main className={styles.hero}>
            <div className={styles.svgContainer}>
                <svg>
                    <filter id="grain">
                        <feTurbulence
                            type="turbulence"
                            baseFrequency={.7}
                        />
                    </filter>
                </svg>
            </div>
            <div className={styles.navbar}>
                <Logo />
                <div className={styles.breadcrumbs}>
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className={`${styles.crumb} ${index === i ? styles.active : ''}`}
                        ></div>
                    ))}
                </div>
            </div>
            <Tilt href={projects[index]?.to} title={projects[index]?.title}/>
            <div className={styles.bottomrow}>
                <div className={styles.description}>{projects[index]?.description}</div>
                <div className={styles.chevrons}>
                    <img onClick={downIndex} src={"/chevron.svg"} style={{ opacity: index === 0 ? .1 : 1, }} alt="" />
                    <img onClick={upIndex} src={"/chevron.svg"} style={{ opacity: index === 3 ? .1 : 1, }} alt="" />
                </div>
            </div>
        </main>
    )
}