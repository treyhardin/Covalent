import { useRef } from 'react'
import ViewportAnimation from '../viewportAnimation/viewportAnimation'
import styles from './linkBlock.module.css'

export default function LinkBlock(props) {

    const imageRef = useRef(null)
    const textRef = useRef(null)
    const buttonRef = useRef(null)

    return (
        <div className={styles.linkBlock}>
            <ViewportAnimation
                element={textRef}
                style="fade-"
                delay="0.25"
            >
                <div className={styles.text} ref={textRef}>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </ViewportAnimation>

            <ViewportAnimation
                element={buttonRef}
                style="fade"
                delay="0.5"
            >
                <button className={`${styles.button} button`} ref={buttonRef}>Button Text</button>
            </ViewportAnimation>

            <ViewportAnimation
                element={imageRef}
                style="zoom"
            >
                <img ref={imageRef} className={styles.backgroundImage} src={props.image} />
            </ViewportAnimation>
        </div>
    )
}