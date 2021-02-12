import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View, Button,Image } from 'react-native';
import Value from './Components/yValue';
import Action from './Components/action';
import HomePage from './Components/homePage';




class App extends React.Component{
  constructor(props){
      super(props);
  }

  


  render(){
    return (
      <View style={styles.container}>
        
        <Value/>
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


