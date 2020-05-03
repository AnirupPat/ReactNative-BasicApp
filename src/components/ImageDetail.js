import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

// Object destructuring of props
const ImageDetail = ( {imageSource, title, imageScore} ) => {
    return (
    <View>
        <Image source={imageSource} />
        <Text>Image Detail of {title}</Text>
        <Text>Image Score - {imageScore}</Text>
    </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageDetail;