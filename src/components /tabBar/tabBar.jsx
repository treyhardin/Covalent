import styles from './tabBar.module.css'
import { Route, Link, NavLink } from "react-router-dom";

export default function TabBar(props) {

    return (
        <section className={styles.tabBar}>
            <div className={styles.tabBarInner}>
                {props.tabs.map((tab, i) => {
                    return (
                            <NavLink 
                                key={i} 
                                // className={`${styles.tab} h3 clear-margin`} 
                                to={tab.url}
                                className={({ isActive, isPending }) =>
                                    isPending ? `${styles.pending} ${styles.tab}` : 
                                    isActive ? `${styles.active} ${styles.tab}` : 
                                    `${styles.tab}`
                                }
                            >
                                <p className={`${styles.tabText} h3`}>{tab.label}</p>
                            </NavLink>
                    )
                })}
            </div>
        </section>
    )
}