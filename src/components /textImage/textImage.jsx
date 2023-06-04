import styles from './textImage.module.css'

export default function TextImage(props){
    return (
        <section className={styles.textImage}>
            <img className={styles.image} src={props.image} />
            <div className={styles.text}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <button className='button'>View Settings</button>
            </div>
        </section>
    )
}