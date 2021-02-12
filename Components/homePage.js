import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';




class homePage extends React.Component{

    render () {
        return (
        
            <View style={styles.imgContainer}> 
                <Image style={styles.imgCatcheur} source={require('../img/catcheur-milieu.png')}></Image>
                <View style={styles.imgTextContainer}>
                    <TouchableOpacity>
                        <Image style={styles.imgText} source={require('../img/play.png')}/>  
                    </TouchableOpacity>  
                    <TouchableOpacity onPress={quit}>
                        <Image style={styles.imgText} source={require('../img/quit.png')}/>  
                    </TouchableOpacity> 
                </View>
            </View>
        );
    }
}

export default homePage

const styles = StyleSheet.create({
    
    imgContainer:{
        alignItems: "center", 
        justifyContent: 'center',
    },
    imgTextContainer:{
        marginTop: '45%',
    },
    imgText: {
        resizeMode: "contain",
        height: 150,
        width: 300,
        
    },
    imgCatcheur:{
        position: 'absolute',
        alignSelf: 'center',
        bottom: '18%',
        height: 450,
        width: 300,
    }
    
    


});

