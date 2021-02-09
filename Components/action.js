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
        this.actionDisplay = 0;
        this.actionArray = [];

        this.counter = 0;

        this.timer = setInterval(()=>{
            this.counter++;
            this.actionDisplay = this.action[Math.floor(Math.random() * this.action.length)];
            this.setState({text : this.actionDisplay});
            this.actionArray.push(this.actionDisplay);
            this.actionDisplay = 0 ;
            if(this.counter >= 3){
                alert(this.actionArray);
                this.counter = 0;
                clearInterval(this.timer);
            }
        },1000)
    }

    

    componentDidMount(){
        this.setState({text : this.actionDisplay});
    }

    render(){
        if(this.props.dataFromParent*100 < 100 && this.props.dataFromParent*100>70){
            console.log("gauche");
        }
        if(this.props.dataFromParent*100 > -100 && this.props.dataFromParent*100<-70){
            console.log("droite");
        }
        if(this.props.dataFromParent*100 < 20 && this.props.dataFromParent*100>-20){
            console.log("tu bouge pas");
        }
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
