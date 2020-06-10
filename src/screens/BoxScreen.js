import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={style.viewStyle}>
            <Text style={style.textOneStyle}>Child #1</Text>
            <Text style={style.textTwoStyle}>Child #2</Text>
            <Text style={style.textThreeStyle}>Child #3</Text>
        </View>
    )
};

const style = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "center",
       //justifyContent: "space-around",
        flexDirection: "column",
        height: 200
    },
    textOneStyle: {
        borderWidth: 5,
        borderColor: 'red',
        height: 50,
      //  flex: 4
    },
    textTwoStyle: {
        borderWidth: 5,
        borderColor: 'red',
        height: 50,
        alignSelf: "stretch"
       // flex: 4
    },
    textThreeStyle: {
        borderWidth: 5,
        borderColor: 'red',
        height: 50,
       // flex: 2
    }
});

export default BoxScreen;