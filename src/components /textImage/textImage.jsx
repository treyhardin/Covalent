import { useRef } from 'react'
import styles from './textImage.module.css'
import ViewportAnimation from '../viewportAnimation/viewportAnimation'

export default function TextImage(props){

    const imageRef = useRef(null)
    const textRef = useRef(null)

    return (
        <section className={styles.textImage}>
            <ViewportAnimation
                element={imageRef}
                style="blur"
            >
                <img className={styles.image} src={props.image} ref={imageRef} />
            </ViewportAnimation>
            <ViewportAnimation
                element={textRef}
                style="fade-up"
                delay="0.5"
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