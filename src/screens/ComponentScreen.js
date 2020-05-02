import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    // we can pass an array but not an JS Object
    const greeting = ["Hi" , " ", "Anirup"]
    const greeting2 = <Text style={styles.subheaderStyle}>Wassap</Text>
    return (
        <View><Text style={styles.textStyle}>This is the component screen</Text>
            <Text style={styles.subheaderStyle}>{greeting}</Text>
            {greeting2}
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subheaderStyle: {
        fontSize: 20
    }
});

export default ComponentScreen;