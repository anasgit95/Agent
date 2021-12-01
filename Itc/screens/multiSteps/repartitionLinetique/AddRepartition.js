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

 
    const [L, setL] = useState(null);
    const [L1, setL1] = useState(null);
    const [L2, setL2] = useState(null);
    const [L3, setL3] = useState(null);
    const [L4, setL4] = useState(null);
    const [H1, setH1] = useState(null);
    const [H2, setH2] = useState(null);

  

    const addOneMur = (event, selectedDate) => {
        let NewMur = {
            L,
            L1,
            L2,
            L3,
            L4,
            H1,
            H2
             
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
                            placeholder="L"
                            placeholderTextColor="#003f5c"
                            onChangeText={setL}
                            keyboardType="numeric"

                            value={L}


                        />
                    </InputView>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="L1"
                            placeholderTextColor="#003f5c"
                            onChangeText={setL1}
                            keyboardType="numeric"

                            value={L1}


                        />
                    </InputView>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="L2"
                            placeholderTextColor="#003f5c"
                            keyboardType="numeric"

                            onChangeText={setL2}
                            value={L2}

                        />
                    </InputView>

                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="L3"
                            placeholderTextColor="#003f5c"
                            keyboardType="numeric"
                            value={L3}
                            onChangeText={setL3} />
                    </InputView>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="L4"
                            value={L4}
                            keyboardType="numeric"

                            placeholderTextColor="#003f5c"
                            onChangeText={setL4} />
                    </InputView>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="H1"
                            value={H1}
                            keyboardType="numeric"

                            placeholderTextColor="#003f5c"
                            onChangeText={setH1}
                        />
                    </InputView>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="H2"
                            value={H2}
                            keyboardType="numeric"

                            placeholderTextColor="#003f5c"
                            onChangeText={setH2}
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
         width: "80%",
        borderRadius: 5,
        position: "absolute",
        bottom: 60,
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
