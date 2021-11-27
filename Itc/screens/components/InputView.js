import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const InputView: () => Node = ({ children,borderColor }) => {
 
    return (

        <View style={{
            width: "80%",
         borderColor:borderColor?"green": "#006593",
        borderWidth: borderColor?2:1,
        marginTop: 10,
        borderRadius: 6,
        marginBottom: 10,
        justifyContent: "center",
        }} >
            {children}
        </View>

    );
}

 

export default InputView