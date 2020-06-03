import React, { useState, useReducer } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const reducer = (state, action) => {
    // state === {counter: number}
    // action === {type: 'increment' || 'decrement', payload: 1 || -1}

    switch(action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
}

const CounterScreen = () => {
    // ----------using reducers-------------
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const counter = state.count
    // const [ counter, setCounter ] = useState(0);
    // setCounter is used to update the counter variable
    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({ type: 'increment', payload: 1})
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({ type: 'decrement', payload: 1})
            }} />
            <Text>Counter: {counter}</Text>
        </View>





        // <View>
        //     <Button title="Increase" onPress={() => {
        //         setCounter(counter + 1)
        //     }}/>
        //     <Button title="Decrease" onPress={() => {
        //         setCounter(counter -1)
        //     }} />
        //     <Text>Counter: {counter}</Text>
        // </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;