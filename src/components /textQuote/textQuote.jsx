import styles from './textQuote.module.css'

export default function TextQuote(props) {
    return (
        <section className={styles.textQuote}>
            <div className={styles.text}>
                <p>{props.title}</p>
                <h2>{props.text}</h2>
            </div>
        </section>
    )
}