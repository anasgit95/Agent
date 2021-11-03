import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const InputView: () => Node = ({ children }) => {

    return (

        <View style={styles.inputView} >
            {children}
        </View>

    );
}

const styles = StyleSheet.create({

    inputView: {
        
        width: "80%",
         borderColor: "#006593",
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 6,
        marginBottom: 10,
        justifyContent: "center",
    },
    inputText: {
        height: 50,
        color: "#006593"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "#006593",
        fontWeight: "bold",
        fontSize: 20
    }
});

export default InputView