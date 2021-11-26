/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Head from '../../components/Head'
import InputView from '../../components/InputView';
// import DropDownPicker from 'react-native-dropdown-picker';
 import { Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const AddMasque: () => Node = ({ setAdd, setMur }) => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;

 
    const [designation, setDesignation] = useState(null);
    const [masqueProche, setMasqueProche] = useState(null);
    const [masqueLoitin, setMasqueLointin] = useState(null);
    const [distanceMoyenne, setDistanceMoyenne] = useState(null);
    const [hauteurMoyenne, setHauteurMoyenne] = useState(null);
    
  

    const addOneMur = (event, selectedDate) => {
        let NewMur = {
            designation,
            masqueProche,
            masqueLoitin,
            distanceMoyenne,
            hauteurMoyenne,
             
        }
          setMur(oldArray => [...oldArray, NewMur]);
        setAdd(false)
    };
    return (
        <View style={{
            alignItems: 'center',
            minHeight: windowHeight,
            justifyContent: 'center',
            display:"flex",
            width:windowWidth,
            position: "relative"
         }}>
            <View style={{  backgroundColor: "rgb(0,101,147)", textAlign: "center", justifyContent: "center", width: "100%", height: 80, display: "flex", position: "relative" }}>

                <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "white" }}>
                    Masque mur
                </Text>
                <TouchableOpacity
                    onPress={() => setAdd(false)}
                    style={{ position: "absolute", left: 20, bottom: 20 }}>

                    <AntDesign name="arrowleft" color="white" size={30} />

                </TouchableOpacity>
            </View>
            <ScrollView
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                style={{
                    flex: 1,
                    width:windowWidth
                }}
                contentContainerStyle={{
                    flexGrow: 1,
                }}>


                <View
                    style={{

                        alignItems: 'center',
                        justifyContent: 'center',
                     }}>
            
               

                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Désignation des murs avec orientation et niveau"
                            placeholderTextColor="#003f5c"
                            onChangeText={setDesignation}
                            value={designation}


                        />
                    </InputView>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Masque proche "
                            placeholderTextColor="#003f5c"
                            onChangeText={setMasqueProche}
                            value={masqueProche}

                        />
                    </InputView>

                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Masque lointin"
                            placeholderTextColor="#003f5c"
                            keyboardType="numeric"
                            value={masqueLoitin}
                            onChangeText={setMasqueLointin} />
                    </InputView>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Distance moyenne"
                            value={distanceMoyenne}
                            keyboardType="numeric"

                            placeholderTextColor="#003f5c"
                            onChangeText={setDistanceMoyenne} />
                    </InputView>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Hauteur moyenne"
                            value={hauteurMoyenne}
                            keyboardType="numeric"

                            placeholderTextColor="#003f5c"
                            onChangeText={setHauteurMoyenne}
                        />
                    </InputView>
                   
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.validateButton}
                onPress={addOneMur}
            >
                <View style={{ flexDirection: "row", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                        Valider

                    </Text>
                    <AntDesign name="check" color="white" size={30} />
                </View>
            </TouchableOpacity>
        </View>
    );
};




const styles = StyleSheet.create({
    validateButton: {
        backgroundColor: "rgb(0,101,147)",
        borderColor: "rgb(0,101,147)",
        borderWidth: 1,
        marginTop: 10,
        width: "80%",
        borderRadius: 5,
        position: "absolute",
        bottom: 0,
        zIndex: 5000,
        left: "10%",
        marginBottom: 10,
        justifyContent: "center",
        padding: 10
    },
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
         backgroundColor: "white",
        borderColor: "#006593",
        borderWidth: 1,

        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        flex:1
    },
    inputText: {
        height: 50,
        color: "#006593",
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



export default AddMasque;
