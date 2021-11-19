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
import DropDownPicker from 'react-native-dropdown-picker';
import { Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const AddRepartition: () => Node = ({ setAdd, setMur }) => {
    const windowHeight = Dimensions.get('window').height;

    const [open, setOpen] = useState(false);

    const [nomDeMur, setNomDeMur] = useState(null);
    const [composition, setComposition] = useState(null);
    const [position, setPosition] = useState(null);
    const [epaisseur, setEpaisseur] = useState(null);
    const [isolation, setIsolation] = useState(null);
    const [typeIsolation, setTypeIsolation] = useState(null);
    const [epaisseurIsolation, setEpaisseurIsolation] = useState(null);
    const [resistanceIsolation, setResistanceIsolation] = useState(null);
    const [longeur, setLongeur] = useState(null);
    const [hauteur, setHauteur] = useState(null);
    const [orientValue, setOrientValue] = useState([
        { label: 'Sud', value: 'Sud' },
        { label: 'Ouest', value: 'Ouest' },
        { label: 'Est', value: 'Est' },
        { label: 'Nord', value: 'Nord' },
    ]);

    const [orienation, setOrienatation] = useState();
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const addOneMur = (event, selectedDate) => {
        let NewMur = {
            nomDeMur,
            composition,
            position,
            epaisseur,
            isolation,
            typeIsolation,
            epaisseurIsolation,
            resistanceIsolation,
            longeur,
            hauteur,
            orienation
        }
         setMur(oldArray => [...oldArray, NewMur]);
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
                    Répartition mur
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
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Nom de mur"
                            placeholderTextColor="#003f5c"
                            onChangeText={setNomDeMur}
                            value={nomDeMur}


                        />
                    </InputView>
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

                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Composition mur/ Niveau"
                            placeholderTextColor="#003f5c"
                            onChangeText={setComposition}
                            value={composition}


                        />
                    </InputView>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Position "
                            placeholderTextColor="#003f5c"
                            onChangeText={setPosition}
                            value={position}

                        />
                    </InputView>

                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Epaisseur (cm)"
                            placeholderTextColor="#003f5c"
                            keyboardType="numeric"
                            value={epaisseur}
                            onChangeText={setEpaisseur} />
                    </InputView>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Isolation int Ou Ext"
                            value={isolation}
                            placeholderTextColor="#003f5c"
                            onChangeText={setIsolation} />
                    </InputView>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Type d'isolant"
                            value={typeIsolation}
                            placeholderTextColor="#003f5c"
                            onChangeText={setTypeIsolation}
                        />
                    </InputView>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Epaisseur de l'isolant (cm) "
                            keyboardType="numeric"
                            value={epaisseurIsolation}

                            placeholderTextColor="#003f5c"
                            onChangeText={setEpaisseurIsolation} />
                    </InputView>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Résistance d'isolant (m2.K/W)"
                            keyboardType="numeric"
                            value={resistanceIsolation}
                            placeholderTextColor="#003f5c"
                            onChangeText={setResistanceIsolation} />
                    </InputView>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Longeur (m)"
                            keyboardType="numeric"
                            value={longeur}
                            placeholderTextColor="#003f5c"
                            onChangeText={setLongeur} />
                    </InputView>
                    <View style={{ marginBottom: 80, width: "100%", marginLeft: "20%" }}>
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
