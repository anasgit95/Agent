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
import { AsyncStorage } from 'react-native';
import { useEffect } from 'react';
import EditPlancher from './EditPlancher';
import Head from '../../components/Head'
import { RadioButton } from 'react-native-paper';
import Camera from '../pickerImage/camera'

const PlancherHaut: () => Node = ({ setActiveSteps }) => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;



    const [images, setImages] = useState([]);

    const [mur, setMur] = useState([
        { Type: "1", id: 1 },
        { Type: "2", id: 2 },
        { Type: "3", id: 3 }

    ]);
    
    const [edit, setEdit] = useState(false);
    const [murToEdit, setMurToEdit] = useState();
    const [index, setIndex] = useState();



    async function fetchData() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('PlancherHaut'));
            if (value !== null && value.length > 0) {
                console.log(value)
                setMur(value)
            }
            else await AsyncStorage.setItem(
                'PlancherHaut',
                JSON.stringify(mur)
            );
            const valueonr = JSON.parse(await AsyncStorage.getItem('PlancherHautImages'));
             if (valueonr !== null) {
                if(valueonr.images)
                setImages(valueonr.images)
            }  
        } catch (error) {
            console.log(error)
            // Error retrieving data
        }
        // ...
    }
    useEffect(() => {

        fetchData();




    }, []);
    // useEffect(() => {


    //     getMur()


    // }, [mur]);
    // async function getMur() {
    //     try {
    //         await AsyncStorage.setItem(
    //             'Ouvrant',
    //             JSON.stringify(mur)
    //         );

    //     } catch (error) {
    //         console.log("error", error)
    //         // Error saving data
    //     }
    // }
    return (

        edit ?
            <EditPlancher
                index={index}
                murs={mur}
                setEdit={setEdit}
                mur={murToEdit}
                setMur={setMur}

            />

            : <View style={{
                alignItems: 'center',
                minHeight: windowHeight,
                minWidth: windowWidth,
                position: "relative",
                paddingBottom: 40
            }}>
                <Head title={"Plancher haut"} setActiveSteps={setActiveSteps} />


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


                        {mur.map((item, index) =>
                            <TouchableOpacity key={index} style={{ width: "100%", marginLeft: "20%" }} onPress={

                                () => {
                                    setIndex(index)
                                    setMurToEdit(item)
                                    setEdit(true)
                                }
                            }>
                                 <InputView borderColor={item.compositionPlancherBas?"green":null}>
                                    <Text key={item.nomDeMur} style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 5 }}> {item.Type}</Text>
                                </InputView>
                            </TouchableOpacity>
                        )}


<Camera images={images} setImages={setImages} /> 

                    </View>
            
                 </ScrollView>

                <NextStep onPress={async () => {

                    try {
                        await AsyncStorage.setItem(
                            'PlancherHautImages',
                            JSON.stringify({images})
                        );  
                        await AsyncStorage.setItem(
                            'activeStep',
                            JSON.stringify(13)
                        );
 
                    } catch (error) {
                        console.log("error", error)
                        // Error saving data
                    }

                    setActiveSteps(13)


                }} />
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



export default PlancherHaut;
