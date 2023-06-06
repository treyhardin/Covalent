import { useState } from 'react'
import { textAnimationStyles } from '../../utils/options'
import Preview from '../preview/preview'
import RadioButton from '../radioButton/radioButton'
import styles from './previewText.module.css'
import RadioGroup from '../radioGroup/radioGroup'
import RangeSlider from '../rangeSlider/rangeSlider'
import { useGlobalState } from '../../utils/globalState'

export default function PreviewText(props) {

    const globalState = useGlobalState()

    const [ previewToggle, setPreviewToggle ] = useState(false)

    const updatePreview = () => {
        setPreviewToggle(!previewToggle)
    }

    return (
        <section className={styles.previewText}>
            <Preview 
                toggle={previewToggle}
                toggleAction={setPreviewToggle}
                showText={true}
                showImage={false}
            />
            <div className={styles.settings}>
                <h2 className='h3'>Text Load-In</h2>
                <RadioGroup 
                    title="Animation Style"
                    dataType={textAnimationStyles}
                    stateAttribute={'textAnimationStyle'}
                    callback={updatePreview}
                />

                {globalState.textAnimationStyle == textAnimationStyles.fadeUp ? 
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

                {globalState.textAnimationStyle == textAnimationStyles.skew ?
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
                
            </div>
        </section>
    )
}