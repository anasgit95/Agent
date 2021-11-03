/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Head from '../components/Head'
import InputView from '../components/InputView';
// import DropDownPicker from 'react-native-dropdown-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import NextStep from '../components/NextSteps'
import { Dimensions } from 'react-native';
import { RadioButton } from 'react-native-paper';

const Context: () => Node = ({ setActiveSteps }) => {
    const windowHeight = Dimensions.get('window').height;
    const [checked, setChecked] = React.useState('first');

    const [open, setOpen] = useState(false);
    const [openTechnique, setOpenTechnique] = useState(false);

    const [value, setValue] = useState(null);
    const [valueTechnique, setValueTechnique] = useState(null);

    const [items, setItems] = useState([
        { label: 'Améliorer le confort thermique', value: 'MI' },
        { label: 'Embellir le logement', value: 'Ap' },
        { label: 'Faire des économies', value: 'Lc' },
        { label: 'Augmenter la valeur du bien immobilier', value: 'T' },
        { label: 'Adapter le logement ', value: 'Ts' },
        { label: "Réduire l'empreinte environnementale ", value: 'Tsa' },
        { label: "Résoudre une panne /une dégradation ", value: 'Tdqsdqs' },

    ]);
    const [technique, setItemsTechnique] = useState([
        { label: 'oui je sais ce que je veux', value: 'MI' },
        { label: "oui j'ai une idée mais je suis ouvert à d'autre propositions", value: 'Ap' },
        { label: "seulement en partie ", value: 'Lc' },
        { label: 'Non', value: 'T' },


    ]);
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };


    return (
        <View style={{
            alignItems: 'center',
            minHeight: windowHeight,
            position: "relative",
            paddingBottom:40
        }}>
            <Head title={"CONTEXTE"} />
            <ScrollView

                horizontal={false}
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



                    }}>
                        <DropDownPicker
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                            }}
                            style={{ borderColor: "transparent", zIndex: 50000 }}
                            placeholder="Priorités du client"
                            open={open}
                            multiple={true}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                    </View>
                    <View style={{
                        width: "80%",



                    }}>
                        <DropDownPicker
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                            }}
                            style={{ borderColor: "transparent", zIndex: 50000 }}
                            placeholder="Solutions technique"
                            open={openTechnique}
                            multiple={true}
                            value={valueTechnique}
                            items={items}
                            setOpen={setOpenTechnique}
                            setValue={setValueTechnique}
                            setItems={setItemsTechnique}
                        />
                    </View>
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Décrire la solution"
                            placeholderTextColor="#003f5c"
                            onChangeText={text => console.log(text)} />
                    </InputView>
                    <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Occupation de logement ?</Text>

                    <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>

                    <View style={{display:"flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>

                            <View style={{ flexDirection: "row",flex:1 }}>
                                <RadioButton value="first" />
                                <Text style={{ paddingTop: 10 }}>Depuis plus de 2ans</Text>

                            </View>
                            <View style={{ flexDirection: "row",flex:1 }}>
                                <RadioButton value="second" />
                                <Text style={{ paddingTop: 10 }}>Depuis moins de 2ans</Text>



                            </View>
                        </View>
                    </RadioButton.Group>

                    <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Logement occupé pendant les travaux?</Text>

                    <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>

                        <View style={{display:"flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>

                            <View style={{ flexDirection: "row" ,flex:1}}>
                                <RadioButton value="first" />
                                <Text style={{ paddingTop: 10 }}>Oui</Text>

                            </View>
                            <View style={{ flexDirection: "row" ,flex:1}}>
                                <RadioButton value="second" />
                                <Text style={{ paddingTop: 10 }}>Non</Text>



                            </View>
                            <View style={{ flexDirection: "row" ,flex:1}}>
                                <RadioButton value="second" />
                                <Text style={{ paddingTop: 10 }}>Ne sais pas</Text>



                            </View>
                        </View>
                    </RadioButton.Group>

                    <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Niveaux de confort ?</Text>

                    <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>

                        <View style={{ display:"flex",flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
                            <Text style={{ paddingTop: 10, fontWeight: "bold",flex:2}}>Hiver :</Text>

                            <View style={{ flexDirection: "row",flex:2 }}>
                                <Text style={{ paddingTop: 10 }}>Mauvais</Text>
                                <RadioButton value="first" />
                            </View>
                            <View style={{ flexDirection: "row",flex:2 }}>
                                <Text style={{ paddingTop: 10 }}>Correct</Text>
                                <RadioButton value="second" />


                            </View>
                            <View style={{ flexDirection: "row",flex:2 }}>
                                <Text style={{ paddingTop: 10 }}>Bon</Text>
                                <RadioButton value="second" />


                            </View>
                        </View>



                    </RadioButton.Group>





                    <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>

                    <View style={{ display:"flex",flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
                            <Text style={{ paddingTop: 10, fontWeight: "bold",flex:2 }}>Eté :</Text>

                            <View style={{ flexDirection: "row",flex:2 }}>
                                <Text style={{ paddingTop: 10 }}>Mauvais</Text>
                                <RadioButton value="first" />
                            </View>
                            <View style={{ flexDirection: "row",flex:2 }}>
                                <Text style={{ paddingTop: 10 }}>Correct</Text>
                                <RadioButton value="second" />


                            </View>
                            <View style={{ flexDirection: "row",flex:2 }}>
                                <Text style={{ paddingTop: 10 }}>Bon</Text>
                                <RadioButton value="second" />


                            </View>
                        </View>



                    </RadioButton.Group>


                    <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>

                    <View style={{ display:"flex",flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
                            <Text style={{ paddingTop: 10, fontWeight: "bold",flex:2 }}>Accoustique :</Text>

                            <View style={{ flexDirection: "row",flex:2 }}>
                                <Text style={{ paddingTop: 10 }}>Mauvais</Text>
                                <RadioButton value="first" />
                            </View>
                            <View style={{ flexDirection: "row",flex:2 }}>
                                <Text style={{ paddingTop: 10 }}>Correct</Text>
                                <RadioButton value="second" />


                            </View>
                            <View style={{ flexDirection: "row",flex:2 }}>
                                <Text style={{ paddingTop: 10 }}>Bon</Text>
                                <RadioButton value="second" />


                            </View>
                        </View>



                    </RadioButton.Group>





                    <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Profond de ressource ?</Text>

<RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>

    <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
 
    <View style={{ flexDirection: "row",flex:1 }}>
            <RadioButton value="first" />
            <Text style={{ paddingTop: 10 }}>{"< 20593"}</Text>

        </View>
        <View style={{ flexDirection: "row",flex:1 }}>
            <RadioButton value="second" />
            <Text style={{ paddingTop: 10 }}>entre 42381 et 51597</Text>


        </View>
       
    </View>


    <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10,display:"flex" }}>
 
        <View style={{ flexDirection: "row",flex:1 }}>
            <RadioButton value="third" />
            <Text style={{ paddingTop: 10 }}>{"entre 30225 et 36792"}</Text>

        </View>
        <View style={{ flexDirection: "row",flex:1 }}>
            <RadioButton value="four" />

            <Text style={{ paddingTop: 10 }}>entre 48488 et 59026</Text>

        </View>
       
    </View> 
    <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
 
    <View style={{ flexDirection: "row",flex:1 }}>
     <RadioButton value="five" />
     <Text style={{ paddingTop: 10 }}>{"Entre 36792 et 44124 "}</Text>

 </View>
 <View style={{ flexDirection: "row",flex:1 }}>
     <RadioButton value="second" />
     <Text style={{ paddingTop: 10 }}>Préciser</Text>


 </View>

</View> 

</RadioButton.Group>




<Text style={{ paddingTop: 10, fontWeight: "bold" }}>*/ Photo copie dernier d'imposition ?</Text>
<Text style={{ paddingTop: 10, fontWeight: "bold" }}>Projet béneficiant des certificates d'économies d'énergie  ?</Text>


                    <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>

                        <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", marginLeft: "10%", marginTop: 10 }}>
 
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ paddingTop: 10 }}>Oui </Text>
                                <RadioButton value="first" />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ paddingTop: 10 }}>Non</Text>
                                <RadioButton value="second" />


                            </View>
                            
                        </View>



                    </RadioButton.Group>









                    <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Extension Effectué au batimant   ?</Text>


<RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>

    <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", marginLeft: "10%", marginTop: 10 }}>

        <View style={{ flexDirection: "row" }}>
            <Text style={{ paddingTop: 10 }}>Oui </Text>
            <RadioButton value="first" />
        </View>
        <View style={{ flexDirection: "row" }}>
            <Text style={{ paddingTop: 10 }}>Non</Text>
            <RadioButton value="second" />


        </View>
        
    </View>

    

</RadioButton.Group>

<InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Date d'extension"
                            placeholderTextColor="#003f5c"
                            onChangeText={text => console.log(text)} />
                    </InputView>

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



export default Context;
