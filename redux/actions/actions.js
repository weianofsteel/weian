import { DAY, NIGHT } from './constants'


export const modeToDay = () => {
    return {
        type: DAY,
    }
}

export const modeToNight = () => {
    return {
        type: NIGHT,
    }
}