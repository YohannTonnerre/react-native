import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';



class homePage extends React.Component{


   

    render ( ) {
        
    return (
       
        <View>

            <Text  style={styles.homePage}> Accueil </Text>

        </View>
    );
    }
}

export default homePage

const styles = StyleSheet.create({
    homePage: {
        marginTop : 50,     
        color: '#FFF',
        fontSize : 50,
    },
  });