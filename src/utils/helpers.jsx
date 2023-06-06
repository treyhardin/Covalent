import { easingFunctions, easingTypes } from "./options"

export const getEasingBezier = (state) => {
    const currentEasingType = state.easingType
    const currentEasingFunction = state.easingFunction

    switch (currentEasingType) {

        case easingTypes.easeIn:
            switch(currentEasingFunction) {
                case easingFunctions.quad:
                    return 'cubic-bezier(0.11, 0, 0.5, 0)'
                case easingFunctions.cubic:
                    return 'cubic-bezier(0.32, 0, 0.67, 0)'
                case easingFunctions.quart:
                    return 'cubic-bezier(0.5, 0, 0.75, 0)'
                case easingFunctions.quint:
                    return 'cubic-bezier(0.64, 0, 0.78, 0)'
                case easingFunctions.expo:
                    return 'cubic-bezier(0.7, 0, 0.84, 0)'
                case easingFunctions.circ:
                    return 'cubic-bezier(0.55, 0, 1, 0.45)'
            }

        case easingTypes.easeOut:
            switch(currentEasingFunction) {
                case easingFunctions.quad:
                    return 'cubic-bezier(0.5, 1, 0.89, 1)'
                case easingFunctions.cubic:
                    return 'cubic-bezier(0.33, 1, 0.68, 1)'
                case easingFunctions.quart:
                    return 'cubic-bezier(0.25, 1, 0.5, 1)'
                case easingFunctions.quint:
                    return 'cubic-bezier(0.22, 1, 0.36, 1)'
                case easingFunctions.expo:
                    return 'cubic-bezier(0.16, 1, 0.3, 1)'
                case easingFunctions.circ:
                    return 'cubic-bezier(0, 0.55, 0.45, 1)'
            }
            return

        case easingTypes.easeInOut:
            switch(currentEasingFunction) {
                case easingFunctions.quad:
                    return 'cubic-bezier(0.45, 0, 0.55, 1)'
                case easingFunctions.cubic:
                    return 'cubic-bezier(0.65, 0, 0.35, 1)'
                case easingFunctions.quart:
                    return 'cubic-bezier(0.76, 0, 0.24, 1)'
                case easingFunctions.quint:
                    return 'cubic-bezier(0.83, 0, 0.17, 1)'
                case easingFunctions.expo:
                    return 'cubic-bezier(0.87, 0, 0.13, 1)'
                case easingFunctions.circ:
                    return 'cubic-bezier(0.85, 0, 0.15, 1)'
            }
            return
        default:
            switch(currentEasingFunction) {
                case easingFunctions.quad:
                    return 'cubic-bezier(0.11, 0, 0.5, 0)'
                case easingFunctions.cubic:
                    return 'cubic-bezier(0.32, 0, 0.67, 0)'
                case easingFunctions.quart:
                    return 'cubic-bezier(0.5, 0, 0.75, 0)'
                case easingFunctions.quint:
                    return 'cubic-bezier(0.64, 0, 0.78, 0)'
                case easingFunctions.expo:
                    return 'cubic-bezier(0.7, 0, 0.84, 0)'
                case easingFunctions.circ:
                    return 'cubic-bezier(0.55, 0, 1, 0.45)'
            }
            return

    }
}