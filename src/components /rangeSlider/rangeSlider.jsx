import styles from './rangeSlider.module.css'

export default function RangeSlider(props) {

    return (
        <div className={styles.rangeSlider}>
            <input type="range" min={props.min} max={props.max} step={props.step} defaultValue={props.default} className={styles.sliderInput} id={props.id} />
        </div>
    )
}