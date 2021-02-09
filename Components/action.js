import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class Action extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            text: "action",
        }

        this.action = [
            "tourne ton téléphone à droite, ",
            "tourne ton téléphone à gauche, ",
            "laisse ton téléphone droit, ",
        ]
        this.actionArray= [];

        for(let i = 0; i<3; i++){
            this.actionArray.push(this.action[Math.floor(Math.random() * this.action.length)]);
        }
    }

    componentDidMount(){
        this.setState({text : this.actionArray});
    }



  
    render(){
        return (
            <View style={styles.container}>

                <Text style={styles.button}>{this.state.text}</Text>
            </View>
        );
    }
}
export default Action
    

    const styles = StyleSheet.create({
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
