import { useRef } from 'react'
import styles from './textQuote.module.css'
import ViewportAnimation from '../viewportAnimation/viewportAnimation'

export default function TextQuote(props) {

    const titleRef = useRef(null)
    const textRef = useRef(null)

    return (
        <section className={styles.textQuote}>
            <div className={styles.text}>

                <ViewportAnimation
                    element={titleRef}
                    style="fade-up"
                >
                    <p ref={titleRef}>{props.title}</p>
                </ViewportAnimation>
                <ViewportAnimation
                    element={textRef}
                    style="skew"
                    delay="0.3"
                >
                    <h2 ref={textRef}>{props.text}</h2>
                </ViewportAnimation>
            </div>
        </section>
    )
}