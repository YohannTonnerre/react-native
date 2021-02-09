import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Value from './Components/yValue';
import Action from './Components/action';
import HomePage from './Components/HomePage';

export default function App() {
  

  return (
    <View style={styles.container}>
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
