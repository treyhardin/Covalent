import { useContext, useEffect, useState } from 'react'
import RadioButton from '../radioButton/radioButton'
import RangeSlider from '../rangeSlider/rangeSlider'
import styles from './previewSettings.module.css'
import { updateGlobalState, useGlobalState, useGlobalStateUpdate } from '../../utils/globalState'
import { easingFunctions, easingTypes } from '../../utils/options'
import Preview from '../preview/preview'
import RadioGroup from '../radioGroup/radioGroup'

export default function PreviewSettings(props) {

    const [ previewToggle, setPreviewToggle ] = useState(false)

    const updatePreview = () => {
        setPreviewToggle(!previewToggle)
    }

    return (
        <section className={styles.previewSettings} >
            <Preview 
                toggle={previewToggle}
                toggleAction={setPreviewToggle}
                showText={true}
                showImage={true}
            />
            <div className={styles.settings}>
                <h2 className='h3'>Animation Settings</h2>
                
                <RadioGroup 
                    title="Easing Type"
                    dataType={easingTypes}
                    stateAttribute={'easingType'}
                    callback={updatePreview}
                />

                <RadioGroup 
                    title="Easing Function"
                    dataType={easingFunctions}
                    stateAttribute={'easingFunction'}
                    callback={updatePreview}
                />

                {/* <p>Duration: {globalState.duration}s</p> */}
                {/* <RangeSlider
                    title="Duration"
                    unit="s"
                    min="0"
                    max="3"
                    step="0.1"
                    attribute={'duration'}
                    callback={updatePreview}
                /> */}
                
            </div>
        </section>
    )
}