import { DAY, NIGHT } from '../actions/constants'

let initialState = {
    mode : 'day'
}

const modeReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case DAY:
            return {
                ...state,
                mode: 'day'
            };
        
        case NIGHT:
            return {
                ...state,
                mode: 'nigth'
            };
        
        default:
            return state;
    }
}

export default modeReducer;