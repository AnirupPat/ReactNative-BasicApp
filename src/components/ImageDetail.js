import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const ImageDetail = ( props ) => {
    return (
    <View>
        <Image source={require('../../assets/beach.jpg')} />
        <Text>Image Detail of {props.title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageDetail;