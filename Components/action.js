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
            "DROITE!!!!",
            "GAUCHE!!!!",
            "BOUGE PAS!!!!",
        ]
        this.actionDisplay = 0;
        this.actionArray = [];

        this.counter = 0;
        this.ready = true;


        this.win = false;

        
        this.i = 0
        

        this.play = ()=>{
            
            this.counter = 0;
            console.log(this.counter);
            this.replay = setInterval(()=>{
                this.counter++;
                this.actionDisplay = this.action[Math.floor(Math.random() * this.action.length)];
                this.setState({text : this.actionArray});
                this.actionArray.push(this.actionDisplay);
                this.actionDisplay = 0 ;
                if(this.counter >= 3){
                    this.counter = 0;
                    clearInterval(this.replay);
                }
            },1000)
        }
    }

    componentDidMount(){
        this.setState({text : this.actionDisplay});

        this.play();
    }

    render(){

        const spliceTab = ()=>{
            this.actionArray.splice(0,1);
            if(this.actionArray.length == 0){
                this.win === true;
                this.play();
                setTimeout(()=>{
                    this.ready = true;
                },4000)
            }
            else{
                this.ready = true;
            }
        }
        setTimeout(()=>{
            this.win = false;
            if(this.ready){
                this.ready = false;
                setTimeout(()=>{
                    if(this.actionArray[0] === "GAUCHE!!!!" && this.props.dataFromParent*100 < 100 && this.props.dataFromParent*100>31){
                        spliceTab();
                    }
                    else if(this.actionArray[0] === "GAUCHE!!!!" && !(this.props.dataFromParent*100 < 100 && this.props.dataFromParent*100>31)){
                        alert("looser");
                    }
                    if(this.actionArray[0] === "DROITE!!!!" && this.props.dataFromParent*100 > -100 && this.props.dataFromParent*100<-31){
                        spliceTab();
                    }
                    else if(this.actionArray[0] === "DROITE!!!!" &&  !(this.props.dataFromParent*100 > -100 && this.props.dataFromParent*100<-31)){
                        alert("looser");
                    }
                    if(this.actionArray[0] === "BOUGE PAS!!!!" && this.props.dataFromParent*100 < 30 && this.props.dataFromParent*100>-30){
                        spliceTab();
                    }
                    else if(this.actionArray[0] === "BOUGE PAS!!!!" && !(this.props.dataFromParent*100 < 30 && this.props.dataFromParent*100>-30)){
                        alert("looser");
                    }
                },1000)
                

                
            }   
          
        },4000)
        
        
        
        
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
