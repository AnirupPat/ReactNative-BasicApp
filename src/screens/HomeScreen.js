import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// we have used object destructuring for props.navigation.navigate
const HomeScreen = ( {navigation} ) => {

  return (
    <View>
      <Text style={styles.text}>First Step to React</Text>
      <Button 
        onPress={ () => navigation.navigate('Components') }
        title="Go to Component Demo"/>

        <Button 
          title="Go to List Demo"
          onPress={ () => navigation.navigate('List') } />

          <Button 
            title="Go to Image Screen"
            onPress={ () => navigation.navigate('Image') } />

        <TouchableOpacity onPress={ () => navigation.navigate('List') }>
          <Text>Go to List Demo</Text>
          <Text>Go to List Demo</Text>
        </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;