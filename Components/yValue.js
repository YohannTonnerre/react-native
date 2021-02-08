import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';

export default function App() {
  const [data, setData] = useState({
    y: 0,
  });

 
  const [subscription, setSubscription] = useState(null);


    Gyroscope.setUpdateInterval(100);


//   const fast = () => {
//     Gyroscope.setUpdateInterval(100);
//   };

  const subscribe = () => {
    setSubscription(
      Gyroscope.addListener(gyroscopeData => {
        setData(gyroscopeData);
      })
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, []);

  const { y } = data;
  return (
    <View>
       <Text style={styles.text}>Gyroscope:</Text>
      <Text style={styles.text}>
         y: {round(y)}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? unsubscribe : subscribe} style={styles.button}>
          <Text style={styles.textButton}>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>

      </View>
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
