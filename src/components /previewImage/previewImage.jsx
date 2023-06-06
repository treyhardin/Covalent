import { useState } from 'react'
import { imageAnimationStyles } from '../../utils/options'
import RadioButton from '../radioButton/radioButton'
import styles from './previewImage.module.css'
import { useGlobalState, useGlobalStateUpdate } from '../../utils/globalState'
import RadioGroup from '../radioGroup/radioGroup'
import Preview from '../preview/preview'
import RangeSlider from '../rangeSlider/rangeSlider'

export default function PreviewImage(props) {

    const globalState = useGlobalState()

    const [ previewToggle, setPreviewToggle ] = useState(false)

    const updatePreview = () => {
        setPreviewToggle(!previewToggle)
    }
    
    return (
        <section className={styles.previewImage} >
            <Preview 
                toggle={previewToggle}
                toggleAction={setPreviewToggle}
                showText={false}
                showImage={true}
            />
            <div className={styles.settings}>

                <h2 className='h3'>Image Load-In</h2>

                <RadioGroup 
                    title="Animation Style"
                    dataType={imageAnimationStyles}
                    stateAttribute={'imageAnimationStyle'}
                    callback={updatePreview}
                />

                {globalState.imageAnimationStyle == imageAnimationStyles.fadeUp ? 
                    <RangeSlider
                        title="Move Amount"
                        unit="px"
                        min="0"
                        max="120"
                        step="1"
                        attribute={'moveAmount'}
                        callback={updatePreview}
                    />
                : ''}

                {globalState.imageAnimationStyle == imageAnimationStyles.skew ?
                    <RangeSlider
                        title="Skew Amount"
                        unit="deg"
                        min="0"
                        max="10"
                        step="0.5"
                        attribute={'skewAmount'}
                        callback={updatePreview}
                    />
                : ''}

                {globalState.imageAnimationStyle == imageAnimationStyles.zoom ?
                    <RangeSlider
                        title="Scale Amount"
                        min="0"
                        max="2"
                        step="0.1"
                        attribute={'scaleAmount'}
                        callback={updatePreview}
                    />
                : ''}

                {globalState.imageAnimationStyle == imageAnimationStyles.blur ?
                    <RangeSlider
                        title="Blur Amount"
                        unit="px"
                        min="0"
                        max="60"
                        step="1"
                        attribute={'blurAmount'}
                        callback={updatePreview}
                    />
                : ''}
                
            </div>
        </section>
    )
}