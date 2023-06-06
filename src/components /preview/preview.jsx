import { useEffect, useState } from 'react'
import styles from './preview.module.css'
import { useRef } from 'react'
import { useGlobalState } from '../../utils/globalState'

export default function Preview(props) {

    const globalState = useGlobalState()
    const textAnimation = globalState.textAnimationStyle.value
    const imageAnimation = globalState.imageAnimationStyle.value

    const textRef = useRef(null)
    const imageRef = useRef(null)

    const updatePreview = () => {
        props.toggleAction(!props.toggle)
    }

    useEffect(() => {

        const resetDelay = 100

        if (props.showImage) {
            imageRef.current.classList.remove('visible')
            setTimeout(() => {
                imageRef.current.classList.add('visible')
            }, resetDelay);
        }

        if (props.showText) {
            textRef.current.classList.remove('visible')
            setTimeout(() => {
                textRef.current.classList.add('visible')
            }, resetDelay);
        }
        
    }, [props.toggle])

    return (
        <div className={styles.preview}>

            {props.showText ? 
                <div className={`${styles.text} anim--${textAnimation} anim-text`} ref={textRef}>
                    <h4>Lorem Ipsum Dolor Sit Amet.</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                </div>
            : ''}

            {props.showImage ? 
                <img className={`${styles.image} anim--${imageAnimation} anim-image`} src="/images/preview/ImagePreview.jpg" ref={imageRef} />
            : ''}

            <button className={`${styles.previewButton} button button--primary`} onClick={updatePreview}>Preview</button>
        </div>
    )
}