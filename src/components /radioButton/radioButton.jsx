import styles from './radioButton.module.css'

export default function RadioButton(props) {

    const handleChange = () => {
        props.action(props.attribute, props.item)
    }

    return (
        <div className={styles.radioButton}>
            <input 
                type="radio" 
                id={props.item.value} 
                name={props.attribute}
                defaultChecked={props.currentValue.value == props.item.value}
                // value={props.item.value} 
                className={styles.input} 
                onClick={handleChange}
            />
            <label htmlFor={props.item.value} className={styles.label}>{props.item.label}</label>
        </div>
    )
}