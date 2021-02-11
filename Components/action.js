import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native'


class Action extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            text: "action",
            imageURL : require('../img/fakeScreen.png'),
            imageAction : require('../img/fakeScreen.png'),
            playAgain : false,
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


    }

    componentDidMount(){
        this.setState({text : this.actionDisplay});
        this.play();
    }

    render(){
        const hideAndshow = ()=>{
            this.setState({text : 0});
            this.setState({
                playAgain : true,
            });
        }

        const Load_New_Image=(pos)=>{
            if(pos === "gauche"){
                this.setState({
                    imageURL : require(`../img/catcheur-gauche.png`),
                    imageAction : require(`../img/gauche.png`),
                })
            }
            if(pos === "droite"){
                this.setState({
                    imageURL : require(`../img/catcheur-droite.png`),
                    imageAction : require(`../img/droite.png`),
                })
            }
            if(pos === "milieu"){
                this.setState({
                    imageURL : require(`../img/catcheur-milieu.png`),
                    imageAction : require(`../img/milieu.png`),
                })
            }           
        }

        this.playAgainFunction = ()=>{
            this.actionArray = [];
            this.setState({
                playAgain : false,
            });
            this.play();
            setTimeout(()=>{
                this.ready = true;
            },4000)
        }
        

        this.play = ()=>{
            
            this.counter = 0;
            this.replay = setInterval(()=>{
                this.counter++;
                this.actionDisplay = this.action[Math.floor(Math.random() * this.action.length)];
                this.setState({text : this.actionArray});
                this.actionArray.push(this.actionDisplay);
                Load_New_Image(this.actionDisplay);
                this.actionDisplay = 0 ;
                if(this.counter >= 3){
                    this.counter = 0;
                    clearInterval(this.replay);
                }
            },1000)
        }
    
        const spliceTab = ()=>{
            setTimeout(()=>{
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
            })
        }
        setTimeout(()=>{
            this.win = false;
            if(this.ready){
                this.ready = false;
                setTimeout(()=>{
                    if(this.actionArray[0] === "gauche"){
                        if(this.props.dataFromParent*100 < 120 && this.props.dataFromParent*100>40){
                            spliceTab();
                        }
                        else {
                            alert(this.actionArray[0] + this.props.dataFromParent * 100);
                            hideAndshow();
                        }
                    }
                    if(this.actionArray[0] === "droite" && this.props.dataFromParent*100 > -120 && this.props.dataFromParent*100<-40){
                        if(this.props.dataFromParent*100 > -120 && this.props.dataFromParent*100<-40){
                            spliceTab();
                        }
                        else {
                            alert(this.actionArray[0] + this.props.dataFromParent * 100);
                            hideAndshow();
                        }
                    }
                    if(this.actionArray[0] === "milieu"){
                        if(this.props.dataFromParent*100 < 30 && this.props.dataFromParent*100>-30){
                            spliceTab();
                        }
                        else{
                            alert(this.actionArray[0] + this.props.dataFromParent * 100);
                            hideAndshow();
                        }
                    }
                },1000)    
            }   
        },4000)
        
        
        
        
        return (
            
            <View style={styles.container}>
                
                <Text style={styles.button}>{this.state.text}</Text>
                
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={this.state.imageAction}/>
                    <Image style={styles.img} source={this.state.imageURL} />
                </View>
                {this.state.playAgain ?
                <View>
                    <TouchableOpacity onPress={this.playAgainFunction} style={styles.button}>
                        <Text style={styles.textButton}>REJOUER</Text>
                    </TouchableOpacity> 
                </View>: null
                }
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
