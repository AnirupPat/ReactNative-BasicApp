import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('')
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={style.input}
                value={password}
                onChangeText={(newValue) => {
                    setPassword(newValue)
                }}
            />
            {password.length < 4 ? <Text>Password must be atleast 4 char</Text> : null}
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