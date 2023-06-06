import { useRef } from 'react'
import Icon from '../icons/icons'
import ViewportAnimation from '../viewportAnimation/viewportAnimation'
import styles from './valuePropItem.module.css'
import { useGlobalState } from '../../utils/globalState'

export default function ValuePropItem(props) {

    const globalState = useGlobalState()

    const itemRef = useRef(null)

    return (
        <ViewportAnimation
            element={itemRef}
            style={globalState.textAnimationStyle.value}
            delay={props.animDelay}
            type="text"
        >
            <div className={styles.valuePropItem} ref={itemRef}>
                <div className={styles.icon}>
                    <Icon type={props.icon} />
                </div>
                <div className={styles.text}>
                    <p className='colorInk'>{props.title}</p>
                    <p className='colorSecondary'>{props.text}</p>
                </div>
            
            </div>
        </ViewportAnimation>
    )
}