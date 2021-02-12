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
            visible : 1,
            score: 0,
            bestScore: 0,
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
            this.setState({
                playAgain : true,
                imageURL : require(`../img/catcheur-triste.png`),
                imageAction : require(`../img/perdu.png`),
            });  
        }

        const Load_New_Image=(pos)=>{
            this.setState({
                visible : 0,
            });
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
            setTimeout(()=>{
                this.setState({
                    visible : 1,
                });
            },100)          
        }

        this.playAgainFunction = ()=>{
            this.actionArray = [];
            this.setState({
                playAgain : false,
                score : 0,
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
                    this.setState({score : this.state.score + 1});
                    if(this.state.score>this.state.bestScore){
                        this.setState({bestScore : this.state.bestScore + 1});
                    }
                    console.log(this.state.score);
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
                            hideAndshow();
                        }
                    }
                    if(this.actionArray[0] === "droite"){
                        if(this.props.dataFromParent*100 > -120 && this.props.dataFromParent*100<-40){
                            spliceTab();
                        }
                        else {
                            hideAndshow();
                        }
                    }
                    if(this.actionArray[0] === "milieu"){
                        if(this.props.dataFromParent*100 < 30 && this.props.dataFromParent*100>-30){
                            spliceTab();
                        }
                        else{
                            hideAndshow();
                        }
                    }
                },1000)    
            }   
        },4000)
        
        
        
        
        return (
            
            <View style={styles.container}>
                <Text style={styles.score}>score: {this.state.score}</Text>
                <Text style={styles.meilleurScore}>meilleur score: {this.state.bestScore}</Text>
                <Text style={styles.button}>{this.state.text}</Text>
                
                <View style={styles.imgContainer}>
                    <Image opacity={this.state.visible} style={styles.imgText} source={this.state.imageAction}/>
                    
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
    imgText: {
        resizeMode: "contain",
        height: 200,
        width: 300,
        
    },
    img: {
        resizeMode: "cover",
        height: 300,
        width: 300,
        
    },
    imgContainer:{
        alignItems: "center", 
        justifyContent: 'center',
    },
    score : {
        position: 'absolute',
        left:     0,
        top:      0,
        color: 'white',
    },
    meilleurScore : {
        position: 'absolute',
        left:     0,
        top:      20,
        color: 'white',
    },
    });
