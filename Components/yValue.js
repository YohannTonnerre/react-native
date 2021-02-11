import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import Action from './action';


export default function App() {
  const [data, setData] = useState({
    x: 0,
  });

  
  const [subscription, setSubscription] = useState(null);

  // Frequence de refresh de l'affichage de l'accelerometre 
  Accelerometer.setUpdateInterval(100);

  // function subscribe qui permet de mettre en 'on' le gyroscope
  const subscribe = () => {
    setSubscription(

      // Observe les changements du gyroscope et change la valeur
      Accelerometer.addListener(AccelerometerData => {
        setData(AccelerometerData);
      })
    );
  };


  // function unsubscribe qui permet de desactiver le gyroscope
  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };


  // equivalent à componentDidMount, componentDidUpdate, et componentWillUnmount.
  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, []);

  

  const { x } = data;
  return (
    <View>
      <Text style={styles.text}>Accelerometre:</Text>
      <Text style={styles.text}>
         x: {round(x)}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? unsubscribe : subscribe} style={styles.button}>
          <Text style={styles.textButton}>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>

      </View>
      <Action dataFromParent = {x}/>
    </View>
  );
}


function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100);
}





const styles = StyleSheet.create({
  text: {
      color: '#fff',
      fontSize: 35,
  },
  button: {
      alignItems: "center",  
      backgroundColor: '#fff',
      color: '#000',
      marginTop: 50,
      padding: 15,
  },
  textButton: {
        color: '#000',
        fontSize: 35,
    }
});
