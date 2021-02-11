import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native'


class Action extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            text: "action",
            imageURL : require('../img/catcheur-milieu.png'),
        }

        this.action = [
            "droite",
            "gauche",
            "milieu",
        ]
        this.actionDisplay = 0;
        this.actionArray = [];

        this.counter = 0;
        this.ready = true;


        this.win = false;

        
        this.i = 0;


        this.Load_New_Image=(pos)=>{
            if(pos === "gauche"){
                this.setState({
            
                    imageURL : require(`../img/catcheur-gauche.png`),
            
                })
            }
            if(pos === "droite"){
                this.setState({
            
                    imageURL : require(`../img/catcheur-droite.png`),
            
                })
            }
            if(pos === "milieu"){
                this.setState({
            
                    imageURL : require(`../img/catcheur-milieu.png`),
            
                })
            }
            
        }
        

        this.play = ()=>{
            
            this.counter = 0;
            console.log(this.counter);
            this.replay = setInterval(()=>{
                this.counter++;
                this.actionDisplay = this.action[Math.floor(Math.random() * this.action.length)];
                this.setState({text : this.actionArray});
                this.actionArray.push(this.actionDisplay);
                this.Load_New_Image(this.actionDisplay);
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
                    if(this.actionArray[0] === "gauche" && this.props.dataFromParent*100 < 120 && this.props.dataFromParent*100>40){
                        spliceTab();
                    }
                    else if(this.actionArray[0] === "gauche" && !(this.props.dataFromParent*100 < 120 && this.props.dataFromParent*100>40)){
                        alert("looser");
                    }
                    if(this.actionArray[0] === "droite" && this.props.dataFromParent*100 > -120 && this.props.dataFromParent*100<-40){
                        spliceTab();
                    }
                    else if(this.actionArray[0] === "droite" &&  !(this.props.dataFromParent*120 > -100 && this.props.dataFromParent*100<-40)){
                        alert("looser");
                    }
                    if(this.actionArray[0] === "milieu" && this.props.dataFromParent*100 < 30 && this.props.dataFromParent*100>-30){
                        spliceTab();
                    }
                    else if(this.actionArray[0] === "milieu" && !(this.props.dataFromParent*100 < 30 && this.props.dataFromParent*100>-30)){
                        alert("looser");
                    }
                },1000)    
            }   
        },4000)
        
        
        
        
        return (
            <View style={styles.container}>
                <Text style={styles.button}>{this.state.text}</Text>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={this.state.imageURL} />
                </View>
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
    },
    img: {
        resizeMode: "contain",
        height: 200,
        width: 200,
        
    },
    imgContainer:{
        alignItems: "center", 
        justifyContent: 'center',
    }
    });
