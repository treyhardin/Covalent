import { NavLink } from "react-router-dom";
import styles from './header.module.css';
import Icon from "./icons/icons";

export default function Header(props) {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.navigation}>
                <NavLink 
                    to='/tier1'
                    className={({ isActive, isPending }) =>
                        isPending ? `${styles.navigationLink} ${styles.pending}`  : 
                        isActive ? `${styles.navigationLink} ${styles.active}` :
                        styles.navigationLink
                    }
                >
                Tier 1</NavLink>
                <NavLink 
                    to='/tier2' 
                    className={({ isActive, isPending }) =>
                        isPending ? `${styles.navigationLink} ${styles.pending}`  : 
                        isActive ? `${styles.navigationLink} ${styles.active}` :
                        styles.navigationLink
                    }
                >
                Tier 2</NavLink>
                <NavLink 
                    to='/tier3' 
                    className={({ isActive, isPending }) =>
                        isPending ? `${styles.navigationLink} ${styles.pending}`  : 
                        isActive ? `${styles.navigationLink} ${styles.active}` :
                        styles.navigationLink
                    }
                >
                Tier 3</NavLink>
            </div>
            <button className={styles.settingsButton}>
                <Icon type="settings" />
            </button>
        </header>
        </>
    )
}