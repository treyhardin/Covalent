import styles from './linkBlock.module.css'

export default function LinkBlock(props) {
    return (
        <div className={styles.linkBlock}>
            <div className={styles.text}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
            <button className={`${styles.button} button`}>Button Text</button>
            <img className={styles.backgroundImage} src={props.image} />
        </div>
    )
}