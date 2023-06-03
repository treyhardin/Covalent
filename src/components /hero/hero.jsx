import styles from './hero.module.css'

export default function Hero(props){
    return (
        <section className={styles.hero}>
            <div className={`${styles.heroText} ${
                    props.color == 'reverse' ? 'colorReverse' : 
                    props.color == 'light' ? 'colorLight' :
                    props.color == 'ink' ? 'colorInk' :
                    ""
                }`}>
                <h1 className="h1 clear-margin">{props.title}</h1>
                <div className={styles.line}></div>
                <h2 className="h1 clear-margin">{props.subtitle}</h2>
            </div>
            <img src={props.image} className={styles.heroImage} />
        </section>
    )
}