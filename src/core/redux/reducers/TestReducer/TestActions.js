import {INCREMENT, DECREMENT} from './TestReducer';

export const incrementAction = (amount = 1) => {
    return {
        type: INCREMENT,
        amount,
    }
}

export const decrementAction = (amount = 1) => {
    return {
        type: DECREMENT,
        amount,
    }
}