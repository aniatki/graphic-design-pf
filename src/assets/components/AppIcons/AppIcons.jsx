import appIcons from "../../images/costcutter/app-icons.png"
import styles from "./AppIcons.module.css"

export default function AppIcons() {
    return (
        <div className={styles.appIcons}>
            <img src={appIcons} alt="Costcutter App Icons" />
            <h3>Proud to be local</h3>
        </div>
        )
}