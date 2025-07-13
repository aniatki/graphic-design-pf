import styles from './Home.module.css'
import { Link } from "react-router-dom"
import { useState } from "react"
import { projects } from "../../projects/projects.js"

export default function Home() {
    const [index, setIndex] = useState(0)

    
    function downIndex() {
        if (index == 0) return
        setIndex(index - 1)
    }
    function upIndex() {
        if (index == 3) return
        setIndex(index + 1)
    }

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
                
                    <Link to={"https://atki.ie/"}><div className={styles.logo}></div></Link>
                
                <div className={styles.breadcrumbs}>
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className={`${styles.crumb} ${index === i ? styles.active : ''}`}
                        ></div>
                    ))}
                </div>
            </div>
            <div className={styles.titlecard}><Link to={projects[index]?.to}>{projects[index]?.title}</Link></div>
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