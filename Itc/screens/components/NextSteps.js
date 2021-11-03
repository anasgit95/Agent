import React from 'react';
import { StyleSheet ,TouchableOpacity,View, } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Next: () => Node = ({onPress}) => {

    return (
<TouchableOpacity style={styles.inputView} onPress={onPress}>
        <View  >
            <AntDesign name="arrowright"  color="white" size={30}/>
        </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    inputView: {
         backgroundColor: "rgb(0,101,147)",
        borderColor: "rgb(0,101,147)",
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 30,
        position:"absolute",
        bottom:0,
        zIndex:5000,
        right:"10%",
        marginBottom: 10,
        justifyContent: "center",
        padding:10
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

export default Next