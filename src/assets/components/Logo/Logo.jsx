import styles from "./Logo.module.css"
import { Link } from "react-router-dom"

export default function Logo() {
    return (
        <Link to={"https://atki.ie/"}>
            <div className={styles.logo}></div>
        </Link>
    )
}