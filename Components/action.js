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
            "DROITE!!!! ",
            "GAUCHE!!!!",
            "BOUGE PAS!!!!",
        ]
        this.actionArray = 0;

        this.counter = 0;

        this.timer = setInterval(()=>{
            this.counter++;
            this.actionArray = this.action[Math.floor(Math.random() * this.action.length)];
            this.setState({text : this.actionArray});
            this.actionArray = 0 ;
            if(this.counter >= 3){
                this.counter = 0;
                clearInterval(this.timer);
            }
            
        },1000)
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
