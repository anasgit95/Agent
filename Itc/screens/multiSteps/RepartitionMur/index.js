/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
 import InputView from '../../components/InputView';
// import DropDownPicker from 'react-native-dropdown-picker';
 import NextStep from '../../components/NextSteps'
import { Dimensions } from 'react-native';
 import AntDesign from 'react-native-vector-icons/AntDesign'
import AddRepartition from './AddRepartition';
const RepartitionMur: () => Node = ({ setActiveSteps }) => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;

 
   

     const [mur, setMur] = useState([]);

  
     const [add, setAdd] = useState(false);




    return (
        add?
        <AddRepartition setAdd={setAdd} mur={mur} setMur={setMur}/>
        :
        <View style={{
            alignItems: 'center',
            minHeight: windowHeight,
            minWidth: windowWidth,
            position: "relative",
            paddingBottom: 40
        }}>
            <View style={{ backgroundColor: "rgb(0,101,147)", textAlign: "center", justifyContent: "center", width: "100%", height: 80, display: "flex", position: "relative" }}>
                <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "white" }}>
                    Répartition mur
                </Text>
                <TouchableOpacity style={{ position: "absolute", right: 20 }} onPress={() => setAdd(true)}>

                    <AntDesign name="plus" color="white" size={30} />

                </TouchableOpacity>
            </View>


            <ScrollView

                horizontal={false}
                style={{
                    flex: 1,
                    width: "100%"
                }}
                contentContainerStyle={{
                    flexGrow: 1,
                }}>


                <View
                    style={{

                        alignItems: 'center',
                        justifyContent: 'center',
                        width: "100%"
                    }}>


                    {mur.map(item =>
                        <InputView>
                            <Text style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 5 }}> Tests</Text>
                        </InputView>
                    )}









                </View>
            </ScrollView>

            <NextStep onPress={() => setActiveSteps(2)} />

        </View>
    );
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#006593',
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "white",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "white",
        borderColor: "#006593",
        borderWidth: 1,

        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
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



export default RepartitionMur;
