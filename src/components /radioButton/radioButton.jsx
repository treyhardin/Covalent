import styles from './radioButton.module.css'

export default function RadioButton(props) {
    return (
        <div className={styles.radioButton}>
            <input type="radio" id={props.id} name={props.name} value={props.value} className={styles.input} />
            <label htmlFor={props.id} className={styles.label}>{props.text}</label>
        </div>
    )
}