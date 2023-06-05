import RadioButton from '../radioButton/radioButton'
import styles from './previewImage.module.css'

export default function PreviewImage(props) {
    return (
        <section className={styles.previewImage} >
            <div className={styles.preview}>
                <img className={styles.image} src="/images/tier1/ImagePreview.jpg" />
            </div>
            <div className={styles.settings}>
                <h2 className='h3'>Image Load-In</h2>
                <p>Animation Style</p>
                <div className={styles.styleButtons}>
                    <RadioButton text="Fade" value="fade" id="fade" name="image-animation" />
                    <RadioButton text="Fade Up" value="fade-up" id="fade-up" name="image-animation" />
                    <RadioButton text="Zoom" value="zoom" id="zoom" name="image-animation" />
                    <RadioButton text="Skew" value="skew" id="skew" name="image-animation" />
                    <RadioButton text="Blur" value="blur" id="blur" name="image-animation" />
                </div>
                
            </div>
        </section>
    )
}