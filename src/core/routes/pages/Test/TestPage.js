import React from 'react';
import { connect } from 'react-redux';
import TestShell from './TestPage.shell';
import {incrementAction, decrementAction} from '../../../redux/reducers/Test/TestActions';
import ModelFactory from '../../../http/resources';


const Test = (props) => {
    const {count, increment, decrement} = props;
    let get = () => {
        ModelFactory().Test().get().then((res) => {
            console.log(res)
        });
    }
    
    let findAll = () => {
        ModelFactory().Test().post("TEST CALL", "David", count).then((res) => {
            console.log(res)
        });
    }
    return <TestShell increment={increment} decrement={decrement} count={count} get={get} findAll={findAll}/>
}

const mapStateToProps = (state) => {
    let {count} = state.testReducer;

    return {count};
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (amount) => {dispatch(incrementAction(amount))},
        decrement: (amount) => {dispatch(decrementAction(amount))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);