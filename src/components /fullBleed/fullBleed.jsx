import { useRef } from 'react'
import ViewportAnimation from '../viewportAnimation/viewportAnimation'
import styles from './fullBleed.module.css'
import { useGlobalState } from '../../utils/globalState'

export default function FullBleed(props) {

    const globalState = useGlobalState()

    const imageRef = useRef(null)
    const textRef = useRef(null)

    return (
        <section className={styles.fullBleed}>
            <div className={styles.fullBleedInner}>
                <ViewportAnimation
                    element={imageRef}
                    style={globalState.imageAnimationStyle.value}
                    delay="0"
                    type="image"
                >
                    <img className={styles.backgroundImage} src={props.image} ref={imageRef} />
                </ViewportAnimation>
                <ViewportAnimation
                    element={textRef}
                    style={globalState.textAnimationStyle.value}
                    delay="0.5"
                    type="text"
                >
                    <div ref={textRef} className={`${styles.text} ${
                        props.color == 'reverse' ? 'colorReverse' : 
                        props.color == 'light' ? 'colorLight' :
                        props.color == 'ink' ? 'colorInk' :
                        ""
                    }`}>
                        <h2>{props.title}</h2>
                        <p>{props.text}</p>
                        {/* <button className='button button--secondary'>Button Text</button> */}
                    </div>
                </ViewportAnimation>
            </div>
        </section>
    )
}