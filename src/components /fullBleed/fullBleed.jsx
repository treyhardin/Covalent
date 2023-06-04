import styles from './fullBleed.module.css'

export default function FullBleed(props) {
    return (
        <section className={styles.fullBleed}>
            <div className={styles.fullBleedInner}>
                <img className={styles.backgroundImage} src={props.image} />
                <div className={`${styles.text} ${
                    props.color == 'reverse' ? 'colorReverse' : 
                    props.color == 'light' ? 'colorLight' :
                    props.color == 'ink' ? 'colorInk' :
                    ""
                }`}>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                    <button className='button button--secondary'>Button Text</button>
                </div>
            </div>
        </section>
    )
}