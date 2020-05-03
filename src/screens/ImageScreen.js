import React from 'react';
import { View, StyleSheet, Text, ImageEditor } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Forest" 
                imageSource={require('../../assets/beach.jpg')}
                imageScore="7"/>
            <ImageDetail 
                title="Beach" 
                imageSource={require('../../assets/forest.jpg')}
                imageScore="8"/>
            <ImageDetail 
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')}
                imageScore="9"/>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default ImageScreen;


