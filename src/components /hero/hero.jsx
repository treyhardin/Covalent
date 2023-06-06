import { useRef } from 'react'
import ViewportAnimation from '../viewportAnimation/viewportAnimation'
import styles from './hero.module.css'
import { useGlobalState } from '../../utils/globalState'

export default function Hero(props){

    const globalState = useGlobalState()

    const imageRef = useRef(null)
    const textRef = useRef(null)

    return (
        <section className={styles.hero}>
            <ViewportAnimation
                element={textRef}
                style={globalState.textAnimationStyle.value}
                delay="0.5"
                type="text"
            >
                <div ref={textRef} className={`${styles.heroText} ${
                        props.color == 'reverse' ? 'colorReverse' : 
                        props.color == 'light' ? 'colorLight' :
                        props.color == 'ink' ? 'colorInk' :
                        ""
                    }`}>
                    <h1 className="h1 clear-margin">{props.title}</h1>
                    <div className={styles.line}></div>
                    <h2 className="h1 clear-margin italic">{props.subtitle}</h2>
                </div>
            </ViewportAnimation>
            <ViewportAnimation
                element={imageRef}
                style={globalState.imageAnimationStyle.value}
                type="image"
            >
                <img src={props.image} className={styles.heroImage} ref={imageRef} />
            </ViewportAnimation>
            
        </section>
    )
}