import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={style.viewStyle}>
            <Text style={style.textStyle}>Child #1</Text>
            <Text style={style.textStyle}>Child #2</Text>
            <Text style={style.textStyle}>Child #3</Text>
        </View>
    )
};

const style = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
       // alignItems: "center",
       justifyContent: "space-around",
        flexDirection: "row",
        height: 200
    },
    textStyle: {
        borderWidth: 5,
        borderColor: 'red',
        height: 50
    }
});

export default BoxScreen;