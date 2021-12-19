/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Head from '../../components/Head'
import InputView from '../../components/InputView';
// import DropDownPicker from 'react-native-dropdown-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import NextStep from '../../components/NextSteps'
import { Dimensions } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AsyncStorage } from 'react-native';
import { useEffect } from 'react';
import Camera from '../pickerImage/camera'

DropDownPicker.setMode("BADGE");

const linetique: () => Node = ({ setActiveSteps }) => {
    const windowHeight = Dimensions.get('window').height;

    const [liason, setLiaison] = React.useState();
    const [liasonLongeur, setLongeurLiaison] = React.useState();

    const [detail, setDetail] = React.useState("Béton");
    const [isolationPoutrse, setIsolationPoutres] = React.useState('Non isolées');
    const [plancherIntermediare, setPlancherIntermediare] = React.useState('Béton');
    const [comble, setComble] = React.useState('Isolation totale');
    const [hauteurMoyenne, setHauteurMoyenne] = React.useState();
    const [surfaceComble, setSurfaceComble] = useState(null);
    const [images, setImages] = useState([]);

    async function fetchData() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('Linetique'));
            if (value !== null) {
                setDetail(value.detail)
                setLiaison(value.liason)
                setIsolationPoutres(value.isolationPoutrse)
                setLongeurLiaison(value.liasonLongeur)
                setPlancherIntermediare(value.plancherIntermediare)
                setComble(value.comble)
                setHauteurMoyenne(value.hauteurMoyenne)
                setSurfaceComble(value.surfaceComble)
                if(value.images)
                setImages(value.images)


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

    return (
        <View style={{
            alignItems: 'center',
            minHeight: windowHeight,
            position: "relative",
            paddingBottom: 40
        }}>
            <Head title={"Linéique"} setActiveSteps={setActiveSteps} />
            <ScrollView

                horizontal={false}
                style={{
                    flex: 1,
                    width:"100%"
                }}
                contentContainerStyle={{
                    flexGrow: 1,
                }}>


                <View
                    style={{

                        alignItems: 'center',
                        justifyContent: 'center',
                   
                    }}>




                    <Text style={{ paddingTop: 10, fontWeight: "bold",color:"black",fontSize:20 }}>Type Mur refend? ?</Text>

                    <RadioButton.Group onValueChange={newValue => setDetail(newValue)} value={detail}>

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
                            <Text style={{ paddingTop: 10, fontWeight: "bold", flex: 2 }}>Détail :</Text>

                            <View style={{ flexDirection: "row", flex: 2 }}>
                                <Text style={{ paddingTop: 10 }}>Béton </Text>
                                <RadioButton value="Béton" />
                            </View>
                            <View style={{ flexDirection: "row", flex: 2 }}>
                                <Text style={{ paddingTop: 10 }}>Maconnerie</Text>
                                <RadioButton value="Maconnerie" />


                            </View>

                        </View>



                    </RadioButton.Group>




                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
                        <Text style={{ paddingTop: 10, fontWeight: "bold", flex: 2 }}>Longeur :</Text>

                        <View style={{ flexDirection: "row", flex: 8 }}>

                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Liaison Mur ext/Mur refend"
                                    placeholderTextColor="#003f5c"
                                    keyboardType="numeric"
                                    value={liason}
                                    onChangeText={text => setLiaison(text)} />
                            </InputView>
                        </View>

                    </View>








                    <Text style={{paddingTop: 10, fontWeight: "bold",color:"black",fontSize:20 }}>Isolation poutres plancher bas ?</Text>

                    <RadioButton.Group onValueChange={newValue => setIsolationPoutres(newValue)} value={isolationPoutrse}>

                        <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "1%", marginTop: 10 }}>

                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <RadioButton value="Non isolées" />
                                <Text style={{ paddingTop: 10 }}>{"Non isolées"}</Text>

                            </View>
                            <View style={{ flexDirection: "row", flex: 1.2 }}>
                                <RadioButton value="Isolées 2 faces" />
                                <Text style={{ paddingTop: 10 }}>Isolées 2 faces</Text>


                            </View>
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <RadioButton value="Isolées 3 faces" />
                                <Text style={{ paddingTop: 10 }}>Isolées 3 faces</Text>


                            </View>

                        </View>
                    </RadioButton.Group>

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
                        <Text style={{ paddingTop: 10, fontWeight: "bold", flex: 2 }}>Longeur :</Text>

                        <View style={{ flexDirection: "row", flex: 8 }}>

                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Liaison Mur et plancher bas"
                                    placeholderTextColor="#003f5c"
                                    keyboardType="numeric"
                                    value={liasonLongeur}
                                    onChangeText={text => setLongeurLiaison(text)} />
                            </InputView>
                        </View>

                    </View>


                    <Text style={{ paddingTop: 10, fontWeight: "bold",color:"black",fontSize:20 }}>Plancher intermédiaire   ?</Text>


                    <RadioButton.Group
                        onValueChange={setPlancherIntermediare} value={plancherIntermediare}
                    >

                        <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", marginLeft: "5%", marginTop: 10 }}>

                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <Text style={{ paddingTop: 10 }}>Béton </Text>
                                <RadioButton value="Béton" />
                            </View>
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <Text style={{ paddingTop: 10 }}>Entrevous</Text>
                                <RadioButton value="Entrevous" />


                            </View>
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <Text style={{ paddingTop: 10 }}>Plancher léger</Text>
                                <RadioButton value="Plancher léger" />


                            </View>


                        </View>



                    </RadioButton.Group>

                    <Text style={{paddingTop: 10, fontWeight: "bold",color:"black",fontSize:20 }}>Comble aménagé    ?</Text>


                    <RadioButton.Group
                        onValueChange={setComble} value={comble}
                    >

                        <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 10 }}>

                            <View style={{ flexDirection: "row", flex: 1.1 }}>
                                <RadioButton value="Isolation totale" />
                                <Text style={{ paddingTop: 10, fontSize: 11 }}>Isolation totale </Text>

                            </View>
                            <View style={{ flexDirection: "row", flex: 1.3 }}>
                                <RadioButton value="Isolation partielle" />
                                <Text style={{ paddingTop: 10, fontSize: 11 }}>Isolation partielle</Text>


                            </View>
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <RadioButton value="Comble non isolé" />
                                <Text style={{ paddingTop: 10, fontSize: 11 }}>Comble non isolé</Text>


                            </View>


                        </View>



                    </RadioButton.Group>

                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Surface plancher bas comble"
                            placeholderTextColor="#003f5c"
                            keyboardType="numeric"
                            value={surfaceComble}
                            onChangeText={text => setSurfaceComble(text)} />
                    </InputView>



                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Hauteur moyenne sous plafond"
                            placeholderTextColor="#003f5c"
                            keyboardType="numeric"
                            value={hauteurMoyenne}
                            onChangeText={text => setHauteurMoyenne(text)} />
                    </InputView>

                    <Camera images={images} setImages={setImages} />

                </View>

            </ScrollView>

            <NextStep onPress={async () => {


                let gener = {
                    liason,
                    liasonLongeur,
                    detail,
                    isolationPoutrse,
                    plancherIntermediare,
                    comble,
                    hauteurMoyenne,
                    surfaceComble,
                    images
                





                }
                try {
                    await AsyncStorage.setItem(
                        'Linetique',
                        JSON.stringify(gener)
                    );
                    await AsyncStorage.setItem(
                        'activeStep',
                        JSON.stringify(14)
                    );
                } catch (error) {
                    console.log("error", error)
                    // Error saving data
                }

                setActiveSteps(14)


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



export default linetique;
