import { useRef } from 'react'
import styles from './textImage.module.css'
import ViewportAnimation from '../viewportAnimation/viewportAnimation'
import { useGlobalState } from '../../utils/globalState'

export default function TextImage(props){

    const globalState = useGlobalState()

    const imageRef = useRef(null)
    const textRef = useRef(null)

    return (
        <section className={styles.textImage}>
            <ViewportAnimation
                element={imageRef}
                style={globalState.imageAnimationStyle.value}
                type="image"
            >
                <img className={styles.image} src={props.image} ref={imageRef} />
            </ViewportAnimation>
            <ViewportAnimation
                element={textRef}
                style={globalState.textAnimationStyle.value}
                delay="0.5"
                type="text"
            >
                <div className={styles.text} ref={textRef}>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                    <button className='button'>View Settings</button>
                </div>
            </ViewportAnimation>
        </section>
    )
}