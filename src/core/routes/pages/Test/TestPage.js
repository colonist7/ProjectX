import React from 'react';
import { connect } from 'react-redux';
import TestShell from './TestPage.shell';
import {incrementAction, decrementAction} from '../../../redux/reducers/TestReducer/TestActions';


const Test = (props) => {
    const {count, increment, decrement} = props;

    return <TestShell increment={increment} decrement={decrement} count={count}/>
}

const mapStateToProps = (state) => {
    let {count} = state;

    return {count};
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (amount) => {dispatch(incrementAction(amount))},
        decrement: (amount) => {dispatch(decrementAction(amount))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);