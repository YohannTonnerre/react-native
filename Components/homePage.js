import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';



class homePage extends React.Component{

    render ( ) {
        
    return (
       
        <View>

            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>JOUER</Text>
            </TouchableOpacity>

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

    button: {
        alignItems: "center",  
        backgroundColor: '#fff',
        color: '#000',
        marginTop: 50,
        padding: 15,
    }
 });

