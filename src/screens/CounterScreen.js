import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const CounterScreen = () => {
    const [ counter, setCounter ] = useState(0);
    // setCounter is used to update the counter variable
    return (
        <View>
            <Button title="Increase" onPress={() => {
                setCounter(counter + 1)
            }}/>
            <Button title="Decrease" onPress={() => {
                setCounter(counter -1)
            }} />
            <Text>Counter: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;