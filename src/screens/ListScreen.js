import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        {
            name: 'Sangram',
            age: 20
        },{
            name: 'Gangotree',
            age: 21
        },{
            name: 'Rutu',
            age: 22
        },{
            name: 'Sharan',
            age: 23
        },{
            name: 'Adarsh',
            age: 24
        },{
            name: 'Rajan',
            age: 25
        },{
            name: 'Aish',
            age: 26
        },{
            name: 'Tapas',
            age: 27
        },{
            name: 'Pujary',
            age: 28
        }
    ]
    return (
        // we have used object destructuring here
        <FlatList 
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={ (friend) => friend.name }
            data={friends} 
            renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    }
});

export default ListScreen