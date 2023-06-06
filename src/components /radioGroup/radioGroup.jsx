import { useGlobalState, useGlobalStateUpdate } from "../../utils/globalState"
import RadioButton from "../radioButton/radioButton"
import styles from './radioGroup.module.css'

export default function RadioGroup(props) {

    const globalState = useGlobalState()
    const updateGlobalState = useGlobalStateUpdate()

    const handleRadioClick = (key, value) => {
        const newState = {...globalState}
        newState[key] = value
        updateGlobalState(newState)
        props.callback()
    }

    return (
        <div className={styles.radioGroup}>
            <p>{props.title}</p>
            <div className={styles.radioButtons}>
                {Object.keys(props.dataType).map((key, i) => {
                    return (
                        <RadioButton 
                            key={i}
                            item={props.dataType[key]}
                            attribute={props.stateAttribute}
                            currentValue={globalState[props.stateAttribute]}
                            action={handleRadioClick}
                        />
                    )
                })}
            </div>
        </div>
    )
}