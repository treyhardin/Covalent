import { useRef } from 'react'
import styles from './textQuote.module.css'
import ViewportAnimation from '../viewportAnimation/viewportAnimation'
import { useGlobalState } from '../../utils/globalState'

export default function TextQuote(props) {

    const globalState = useGlobalState()

    const titleRef = useRef(null)
    const textRef = useRef(null)

    return (
        <section className={styles.textQuote}>
            <div className={styles.text}>

                <ViewportAnimation
                    element={titleRef}
                    style={globalState.textAnimationStyle.value}
                    type="text"
                >
                    <p ref={titleRef}>{props.title}</p>
                </ViewportAnimation>
                <ViewportAnimation
                    element={textRef}
                    style={globalState.textAnimationStyle.value}
                    delay="0.3"
                    type="text"
                >
                    <h2 ref={textRef}>{props.text}</h2>
                </ViewportAnimation>
            </div>
        </section>
    )
}