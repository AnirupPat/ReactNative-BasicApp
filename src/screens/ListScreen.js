import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        {
            name: 'Sangram',
        },{
            name: 'Gangotree'
        },{
            name: 'Rutu'
        },{
            name: 'Sharan'
        },{
            name: 'Adarsh'
        },{
            name: 'Rajan'
        },{
            name: 'Aish'
        },{
            name: 'Tapas'
        },{
            name: 'Pujary'
        }
    ]
    return (
        // we have used object destructuring here
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={ (friend) => friend.name }
            data={friends} 
            renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name}</Text>
        }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    }
});

export default ListScreen