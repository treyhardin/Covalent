import RadioButton from '../radioButton/radioButton'
import RangeSlider from '../rangeSlider/rangeSlider'
import styles from './previewSettings.module.css'

export default function PreviewSettings(props) {
    return (
        <section className={styles.previewSettings} >
            <div className={styles.preview}>
                <img className={styles.image} src="/images/tier1/ImagePreview.jpg" />
            </div>
            <div className={styles.settings}>
                <h2 className='h3'>Animation Settings</h2>
                
                <p>Easing Type</p>
                <div className={styles.styleButtons}>
                    <RadioButton text="Ease-In" value="fade" id="fade" name="text-animation" />
                    <RadioButton text="Ease-Out" value="fade-up" id="fade-up" name="text-animation" />
                    <RadioButton text="Ease-In-Out" value="skew" id="skew" name="text-animation" />
                    <RadioButton text="Linear" value="blur" id="blur" name="text-animation" />
                </div>

                <p>Easing Function</p>
                <div className={styles.styleButtons}>
                    <RadioButton text="Sine" value="fade" id="fade" name="text-animation" />
                    <RadioButton text="Quart" value="fade-up" id="fade-up" name="text-animation" />
                    <RadioButton text="Cubic" value="skew" id="skew" name="text-animation" />
                    <RadioButton text="Quint" value="fade-up" id="fade-up" name="text-animation" />
                    <RadioButton text="Expo" value="skew" id="skew" name="text-animation" />
                    <RadioButton text="Circ" value="blur" id="blur" name="text-animation" />
                </div>

                <p>Duration</p>
                <div className={styles.styleButtons}>
                    <RangeSlider />
                </div>
                
            </div>
        </section>
    )
}