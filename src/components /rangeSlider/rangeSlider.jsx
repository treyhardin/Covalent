import { useGlobalState, useGlobalStateUpdate } from '../../utils/globalState'
import styles from './rangeSlider.module.css'

export default function RangeSlider(props) {

    const globalState = useGlobalState()
    const updateGlobalState = useGlobalStateUpdate()

    const handleChange = (e) => {
        const newState = {...globalState}
        newState[props.attribute] = e.target.value
        updateGlobalState(newState)
        props.callback()
    }

    return (
        <div className={styles.rangeSlider}>
            <p>{props.title}: {globalState[props.attribute]}{props.unit}</p>
            <input 
                type="range" 
                min={props.min} 
                max={props.max} 
                step={props.step}
                defaultValue={globalState[props.attribute]} 
                className={styles.sliderInput} 
                id={props.id} 
                onChange={handleChange}
            />
        </div>
    )
}