import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={style.viewStyle}>
            <Text style={style.textStyle}>Box Screen</Text>
        </View>
    )
};

const style = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 10,
        borderColor: 'red',
        margin: 20
    }
});

export default BoxScreen;