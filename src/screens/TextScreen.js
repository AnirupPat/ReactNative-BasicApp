import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('')
    return (
        <View>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={style.input}
                value={name}
                onChangeText={(newValue) => {
                    setName(newValue)
                }}
            />
            <Text>My name is: {name}</Text>
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