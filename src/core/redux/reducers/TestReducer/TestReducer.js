export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const  initialState = {
            count: 0,
            amount: 1,
        }

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
          return Object.assign({}, state, {
            count: state.count + action.amount
          })
        case DECREMENT:
            return Object.assign({}, state, {
                count: state.count - action.amount
            })
        default:
          return state
    }
};
