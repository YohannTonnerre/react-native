import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Value from './Components/yValue';
import Action from './Components/action';
import HomePage from './Components/homePage';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'


// function HomeScreen(){
//   return(
//     <View>
//       <Text>Home Screen</Text>
//     </View>
//   )
// }

// const Stack = createStackNavigator();

export default function App() {


  return (
    <View style={styles.container}>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>   
      </NavigationContainer> */}
      <Value/>
      <Action/>
      <HomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
