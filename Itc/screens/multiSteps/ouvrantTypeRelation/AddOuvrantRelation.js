/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Head from '../../components/Head'
import InputView from '../../components/InputView';
// import DropDownPicker from 'react-native-dropdown-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { AsyncStorage } from 'react-native';

const AddRepartition: () => Node = ({ setAdd, setMur,mur }) => {
    const windowHeight = Dimensions.get('window').height;

    const [open, setOpen] = useState(false);
    const [openDesignation, setOpenDesignation] = useState(false);
    const [openLaison, setOpenLaison] = useState(false);
 
    const [masque, setMasque] = useState(null);
 
    const [longeur, setLongeur] = useState(null);
    const [hauteur, setHauteur] = useState(null);
    const [ouvrantNumber, setOuvrantNumber] = useState(null);
    const [protection, setProtection] = useState(null);

    const [designation, setDesignation] = useState([

    ]);
    const [repartitionList, setRepartitionList] = useState([

    ]);
    const [laison, setLaison] = useState();

    const [designationValue, setDesignationValue] = useState();

    const [orientValue, setOrientValue] = useState([
        { label: 'Sud', value: 'Sud' },
        { label: 'Ouest', value: 'Ouest' },
        { label: 'Est', value: 'Est' },
        { label: 'Nord', value: 'Nord' },
    ]);

    const [orienation, setOrienatation] = useState();

    async function fetchData() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('Ouvrant'));
            if (value !== null && value.length > 0) {
                setDesignation(value.map(person => ({ label: person.Type, value: person.Type })))

            }
            const mur = JSON.parse(await AsyncStorage.getItem('Repartition'));
            if (mur !== null && mur.length > 0) {

                console.log("values", mur)
                setRepartitionList(mur.map(person => ({ label: person.nomDeMur, value: person.nomDeMur })))

            }
        } catch (error) {
            console.log(error)
            // Error retrieving data
        }
        // ...
    }
    useEffect(() => {
        fetchData()
        // Update   document title using the browser API
    }, []);
  async function getMur(data) {
        try {
            await AsyncStorage.setItem(
                'OuvrantTypeList',
                JSON.stringify(data)
            );

        } catch (error) {
            console.log("error", error)
            // Error saving data
        }
    }
    const addOneMur = (event, selectedDate) => {
        let NewMur = {
            longeur,
            hauteur,
            designationValue,
            laison,
            ouvrantNumber,
            masque,
            orienation,
            protection
        }
        setMur(oldArray => [...oldArray, NewMur]);
        getMur( [...mur, NewMur])
        setAdd(false)
    };
    return (
        <View style={{
            alignItems: 'center',
            minHeight: windowHeight,
            justifyContent: 'center',
            position: "relative",
        }}>
            <View style={{ backgroundColor: "rgb(0,101,147)", textAlign: "center", justifyContent: "center", width: "100%", height: 80, display: "flex", position: "relative" }}>

                <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "white" }}>
                    Ouvrant Type
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
                }}
                contentContainerStyle={{
                    flexGrow: 1,
                }}>


                <View
                    style={{

                        alignItems: 'center',
                        justifyContent: 'center',
                        width: "83%"
                    }}>

                    <View style={{
                        width: "80%",
                        marginTop: 20,


                    }}>
                        <DropDownPicker

                            style={{ borderColor: "#006593", color: "#006593", zIndex: 5000 }}
                            placeholder="Designation (type)"
                            open={openDesignation}
                            value={designationValue}
                            items={designation}
                            setOpen={setOpenDesignation}
                            setValue={setDesignationValue}
                            setItems={setDesignationValue}
                        />
                    </View>

                    <View style={{ width: "100%", marginLeft: "20%" }}>
                        <InputView>
                            <TextInput
                                style={styles.inputText}
                                placeholder="Largeur (m)"
                                keyboardType="numeric"
                                value={longeur}
                                placeholderTextColor="#003f5c"
                                onChangeText={setLongeur} />
                        </InputView>
                    </View>
                    <View style={{ width: "100%", marginLeft: "20%" }}>
                        <InputView>
                            <TextInput
                                style={styles.inputText}
                                placeholder="Hauteur (m)"
                                keyboardType="numeric"
                                value={hauteur}
                                placeholderTextColor="#003f5c"
                                onChangeText={setHauteur} />
                        </InputView>
                    </View>
                    <View style={{ width: "100%", marginLeft: "20%" }}>
                        <InputView>
                            <TextInput
                                style={styles.inputText}
                                placeholder="Nombre d'ouvrants"
                                keyboardType="numeric"
                                value={ouvrantNumber}
                                placeholderTextColor="#003f5c"
                                onChangeText={setOuvrantNumber} />
                        </InputView>
                    </View>
                    <View style={{
                        width: "80%",
 


                    }}>
                        <DropDownPicker

                            style={{ borderColor: "#006593", color: "#006593", zIndex: 50000 }}
                            placeholder="Orientation"
                            open={open}
                            value={orienation}
                            items={orientValue}
                            setOpen={setOpen}
                            setValue={setOrienatation}
                            setItems={setOrienatation}
                        />
                    </View>
                    <View style={{
                        width: "80%",
                        marginTop: 20,


                    }}>
                        <DropDownPicker
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                            }}
                            style={{ borderColor: "#006593", zIndex: 1 }}
                            placeholder="Laison Mur/toit"
                            open={openLaison}
                            value={laison}
                            items={repartitionList}
                            setOpen={setOpenLaison}
                            setValue={setLaison}
                            setItems={setLaison}
                        />
                    </View>
                    <View style={{ width: "100%", marginLeft: "20%",marginTop:10 }}>
                        <InputView>
                            <TextInput
                                style={styles.inputText}
                                placeholder="Protection (N)"
                                keyboardType="numeric"
                                value={protection}
                                placeholderTextColor="#003f5c"
                                onChangeText={setProtection} />
                        </InputView>
                    </View>
                    
                    <View style={{ width: "100%", marginLeft: "20%"  }}>
                        <InputView>
                            <TextInput
                                style={styles.inputText}
                                placeholder="Masque"
                                 value={masque}
                                placeholderTextColor="#003f5c"
                                onChangeText={setMasque} />
                        </InputView>
                    </View>

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



export default AddRepartition;
