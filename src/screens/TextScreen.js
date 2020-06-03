import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {
    return (
        <View>
            <Text>Text Screen</Text>
            <TextInput style={style.input} />
        </View>
    )
};

const style = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;