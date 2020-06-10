import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={style.viewStyle}>
            <View style={style.textOneStyle}></View>
            <View style={style.textTwoStyle}></View>
            <View style={style.textThreeStyle}></View>
        </View>
    )
};

const style = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        //alignItems: "center",
       justifyContent: "space-between",
        flexDirection: "row",
        height: 200
    },
    textOneStyle: {
        borderWidth: 5,
        borderColor: 'red',
        height: 50,
        width: 100,
        backgroundColor: 'red'
      //  flex: 4
    },
    textTwoStyle: {
        borderWidth: 5,
        borderColor: 'blue',
        height: 50,
        width: 100,
        alignSelf: "center",
        backgroundColor: 'blue'
        // position: "absolute", // otherwise position is relative by default
        // bottom: 0, // top, bottom, left , right
        // top: 0,
        // left: 0,
        // right: 0,
        //...StyleSheet.absoluteFillObject
       // flex: 4
    },
    textThreeStyle: {
        borderWidth: 5,
        borderColor: 'green',
        height: 50,
        width: 100,
        backgroundColor: 'green'
       // flex: 2
    }
});

export default BoxScreen;