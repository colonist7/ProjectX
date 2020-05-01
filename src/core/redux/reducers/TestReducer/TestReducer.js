import { createStore } from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


let initialState = {
    count: 0,
    amount: 1,
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
          console.log(action); 
          return Object.assign({}, state, {
            count: state.count + action.amount
          })
        case DECREMENT:
            console.log(action);
            return Object.assign({}, state, {
                count: state.count - action.amount
            })
        default:
          return state
    }
}

export const testStore = createStore(testReducer);