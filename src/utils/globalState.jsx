import { createContext, useContext, useState } from 'react';
import { easingFunctions, easingTypes, imageAnimationStyles, textAnimationStyles } from './options';
import { getEasingBezier } from './helpers';

const GlobalStateContext = createContext()
const GlobalStateUpdateContext = createContext()

export const useGlobalState = () => {
    return useContext(GlobalStateContext)
}
export const useGlobalStateUpdate = () => {
    return useContext(GlobalStateUpdateContext)
}

export const updateGlobalState = (key, value) => {

    const globalState = useGlobalState()
    const updateGlobalState = useGlobalStateUpdate()

    const newState = globalState
    newState[key] = value
    updateGlobalState(newState)
}

export default function GlobalState({children}) {

    const state = {
        textAnimationStyle: textAnimationStyles.fadeUp,
        imageAnimationStyle: imageAnimationStyles.zoom,
        duration: 0.5,
        easingType: easingTypes.easeOut,
        easingFunction: easingFunctions.quart,
        moveAmount: 60,
        skewAmount: 3,
        scaleAmount: 1.2,
        blurAmount: 40,
    }

    const [ globalState, setGlobalState ] = useState(state)

    const updateGlobalState = (input) => {
        setGlobalState(input)

        const rootStyle = document.documentElement.style
        rootStyle.setProperty('--anim-duration', input.duration + 's')
        rootStyle.setProperty('--anim-easing', getEasingBezier(input))
        rootStyle.setProperty('--move-amount', input.moveAmount + 'px')
        rootStyle.setProperty('--skew-amount', input.skewAmount + 'deg')
        rootStyle.setProperty('--scale-amount', input.scaleAmount)
        rootStyle.setProperty('--blur-amount', input.blurAmount + 'px')
    }

    return (
        <GlobalStateContext.Provider value={globalState}>
            <GlobalStateUpdateContext.Provider value={updateGlobalState}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>
    )
}