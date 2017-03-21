import Expo from 'expo';
import React from 'react';
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    text: {
        padding: 10,
    },
    buttonContainer:{
      // flexDirection:'row',
        width:100
    },
    button: {
        backgroundColor: 'white',
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 22,
    },
    buttonText: {
        // width: 100,
        fontWeight: '500',
        color: '#333',
    }
});

export default styles;