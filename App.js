import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View, Button,Image } from 'react-native';
import Value from './Components/yValue';
import Action from './Components/action';
import HomePage from './Components/homePage';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'



const Stack = createStackNavigator();


class App extends React.Component{
  constructor(props){
      super(props);
  }

  


  render(){
    return (
      // <NavigationContainer>
      //     <Stack.Navigator initialRouteName="HomePage">
      //         <Stack.Screen name="HomePage" component={HomePage}></Stack.Screen>
      //         <Stack.Screen name="Value" component={Value}></Stack.Screen>
      //     </Stack.Navigator>
      // </NavigationContainer>
      <View style={styles.container}>
        
        <Value/>
          {/* <HomePage/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default App;


