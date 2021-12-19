/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
// import Head from '../components/Head'
import InputView from '../components/InputView';
// import DropDownPicker from 'react-native-dropdown-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import NextStep from '../components/NextSteps'
import { Dimensions } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AsyncStorage } from 'react-native';
import { useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Camera from './pickerImage/camera'
import { ToastAndroid } from 'react-native';

DropDownPicker.setMode("BADGE");

 const Context: () => Node = ({ setActiveSteps }) => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;

    const [occupation, setOccupation] = React.useState('Oui');
    const [logement, setLogement] = React.useState('Depuis plus de 2ans');
    const [confortHiver, setConfortHiver] = React.useState('Mauvais');
    const [confortEte, setConforEte] = React.useState('Mauvais');
    const [confortAccoutique, setConfortAccoustique] = React.useState('Mauvais');
    const [profond, setProfond] = React.useState('< 20593');
    const [certificatEco, setCertificatEco] = React.useState('Oui');
    const [extensionBatimant, setExtensionBattimant] = React.useState('Oui');
    const [priority, setPriority] = useState(null);
    const [preciser, setPreciser] = useState(null);

    const [valueTechnique, setValueTechnique] = useState(null);
    const [solution, setSolutions] = useState();
    const [open, setOpen] = useState(false);
    const [openTechnique, setOpenTechnique] = useState(false);
    const [items, setItems] = useState([
        { label: 'Améliorer le confort thermique', value: 'Améliorer le confort thermique' },
        { label: 'Embellir le logement', value: 'Embellir le logement' },
        { label: 'Faire des économies', value: 'Faire des économies' },
        { label: 'Augmenter la valeur du bien immobilier', value: 'Augmenter la valeur du bien immobilier' },
        { label: 'Adapter le logement', value: 'Adapter le logement ' },
        { label: "Réduire l'empreinte environnementale", value: "Réduire l'empreinte environnementale" },
        { label: "Résoudre une panne /une dégradation", value: 'Résoudre une panne /une dégradation' },

    ]);
    const [technique, setItemsTechnique] = useState([
        { label: 'oui je sais ce que je veux', value: 'MI' },
        { label: "oui j'ai une idée mais je suis ouvert à d'autre propositions", value: 'Ap' },
        { label: "seulement en partie ", value: 'Lc' },
        { label: 'Non', value: 'T' },


    ]);
    // const [date, setDate] = useState(new Date());

    const [images, setImages] = useState([]);

    async function fetchData() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('Context'));
           console.log(value)
            if (value !== null) {
                setOccupation(value.occupation)
                setLogement(value.logement)
                setConforEte(value.confortEte)
                setConfortAccoustique(value.confortAccoutique)
                setProfond(value.profond)
                setCertificatEco(value.certificatEco)
                setExtensionBattimant(value.extensionBatimant)
                setPriority(value.priority)
                setValueTechnique(value.valueTechnique)
                setSolutions(value.solution)
                setPreciser(value.preciser)
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
            <View style={{ backgroundColor: "rgb(0,101,147)", textAlign: "center", justifyContent: "center", width: "100%", height: 80, display: "flex", position: "relative" }}>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "white" }}>
                        Context
                    </Text>
                    {/* <TouchableOpacity style={{ position: "absolute", right: 20 }} onPress={() => setAdd(true)}>

                        <AntDesign name="plus" color="white" size={30} />

                    </TouchableOpacity> */}
                    <TouchableOpacity
                    onPress={() => setActiveSteps(prev=>prev-1)}
                    style={{ position: "absolute", left: 20, bottom: 20 }}>

                    <AntDesign name="arrowleft" color="white" size={30} />

                </TouchableOpacity>
                </View>
            {/* <Head title={"CONTEXTE"}  setActiveSteps={setActiveSteps}/> */}
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
                         width: "88%"
                     }}>




                    <View style={{
                        width: "80%",



                    }}>
                        <DropDownPicker
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                                zIndex: 5000
                            }}
                            style={{ marginTop: 10, borderColor: "#006593" }}
                            placeholder="Priorités du client"
                            open={open}
                            multiple={true}
                            value={priority}
                            items={items}
                            setOpen={setOpen}
                            setValue={setPriority}
                            setItems={priority}
                        />
                    </View>
                    <View style={{
 
                        width:"80%"

                    }}>
                        <DropDownPicker
 
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                            }}
                            style={{ marginTop: 10, borderColor: "#006593", zIndex: 1 }}
                            placeholder="Solutions technique"
                            open={openTechnique}
                            multiple={true}
                            value={valueTechnique}
                            items={technique}
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
                            value={solution}
                            onChangeText={setSolutions} />
                    </InputView>
                    <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Occupation de logement ?</Text>

                    <RadioButton.Group onValueChange={setLogement} value={logement}>

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>

                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <RadioButton value="Depuis plus de 2ans" />
                                <Text style={{ paddingTop: 10 }}>Depuis plus de 2ans</Text>

                            </View>
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <RadioButton value="second" />
                                <Text style={{ paddingTop: 10 }}>Depuis moins de 2ans</Text>



                            </View>
                        </View>
                    </RadioButton.Group>

                    <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Logement occupé pendant les travaux?</Text>

                    <RadioButton.Group onValueChange={newValue => setOccupation(newValue)} value={occupation}>

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>

                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <RadioButton value="Oui" />
                                <Text style={{ paddingTop: 10 }}>Oui</Text>

                            </View>
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <RadioButton value="Non" />
                                <Text style={{ paddingTop: 10 }}>Non</Text>



                            </View>
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <RadioButton value="Ne sais pas" />
                                <Text style={{ paddingTop: 10 }}>Ne sais pas</Text>



                            </View>
                        </View>
                    </RadioButton.Group>

                    <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Niveaux de confort ?</Text>
                    <RadioButton.Group onValueChange={newValue => setConfortHiver(newValue)} value={confortHiver}>

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
                            <Text style={{ paddingTop: 10, fontWeight: "bold", flex: 2 }}>Hiver :</Text>

                            <View style={{ flexDirection: "row", flex: 2 }}>
                                <Text style={{ paddingTop: 10 }}>Mauvais</Text>
                                <RadioButton value="Mauvais" />
                            </View>
                            <View style={{ flexDirection: "row", flex: 2 }}>
                                <Text style={{ paddingTop: 10 }}>Correct</Text>
                                <RadioButton value="Correct" />


                            </View>
                            <View style={{ flexDirection: "row", flex: 2 }}>
                                <Text style={{ paddingTop: 10 }}>Bon</Text>
                                <RadioButton value="Bon" />


                            </View>
                        </View>



                    </RadioButton.Group>



                    <RadioButton.Group onValueChange={newValue => setConforEte(newValue)} value={confortEte}>

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
                            <Text style={{ paddingTop: 10, fontWeight: "bold", flex: 2 }}>Eté :</Text>

                            <View style={{ flexDirection: "row", flex: 2 }}>
                                <Text style={{ paddingTop: 10 }}>Mauvais</Text>
                                <RadioButton value="Mauvais" />
                            </View>
                            <View style={{ flexDirection: "row", flex: 2 }}>
                                <Text style={{ paddingTop: 10 }}>Correct</Text>
                                <RadioButton value="Correct" />


                            </View>
                            <View style={{ flexDirection: "row", flex: 2 }}>
                                <Text style={{ paddingTop: 10 }}>Bon</Text>
                                <RadioButton value="Bon" />


                            </View>
                        </View>



                    </RadioButton.Group>


                    <RadioButton.Group onValueChange={newValue => setConfortAccoustique(newValue)} value={confortAccoutique}>

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
                            <Text style={{ paddingTop: 10, fontWeight: "bold", flex: 2 }}>Accoustique :</Text>

                            <View style={{ flexDirection: "row", flex: 2 }}>
                                <Text style={{ paddingTop: 10 }}>Mauvais</Text>
                                <RadioButton value="Mauvais" />
                            </View>
                            <View style={{ flexDirection: "row", flex: 2 }}>
                                <Text style={{ paddingTop: 10 }}>Correct</Text>
                                <RadioButton value="Correct" />


                            </View>
                            <View style={{ flexDirection: "row", flex: 2 }}>
                                <Text style={{ paddingTop: 10 }}>Bon</Text>
                                <RadioButton value="Bon" />


                            </View>
                        </View>



                    </RadioButton.Group>





                    <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Profond de ressource ?</Text>

                    <RadioButton.Group onValueChange={newValue => setProfond(newValue)} value={profond}>

                        <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>

                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <RadioButton value="< 20593" />
                                <Text style={{ paddingTop: 10 }}>{"< 20593"}</Text>

                            </View>
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <RadioButton value="entre 42381 et 51597" />
                                <Text style={{ paddingTop: 10 }}>entre 42381 et 51597</Text>


                            </View>

                        </View>


                        <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10, display: "flex" }}>

                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <RadioButton value="entre 30225 et 36792" />
                                <Text style={{ paddingTop: 10 }}>{"entre 30225 et 36792"}</Text>

                            </View>
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <RadioButton value="entre 48488 et 59026" />

                                <Text style={{ paddingTop: 10 }}>entre 48488 et 59026</Text>

                            </View>

                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>

                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <RadioButton value="Entre 36792 et 44124" />
                                <Text style={{ paddingTop: 10 }}>{"Entre 36792 et 44124"}</Text>

                            </View>
                            <View style={{  flex: 1 }}>
                                <View style={{ flexDirection: "row" }}> 
                                <RadioButton value="Préciser" />
                                <Text style={{ paddingTop: 10 }}>Préciser</Text>
                               
                                </View>
                                <View style={{width:"80%"}}>
                                    {profond==="Préciser"?
                                     <InputView>
                                     <TextInput
                                        style={styles.inputText}
                                        placeholder="Préciser"
                                        placeholderTextColor="#003f5c"
                                        value={preciser}
                                        onChangeText={setPreciser} />
                                </InputView>
                                :null
                                    }
                               
                                    </View>

                            </View>

                        </View>

                    </RadioButton.Group>




                    <Text style={{ paddingTop: 10, fontWeight: "bold" }}>*/ Photo copie dernier d'imposition ?</Text>
                    <Camera images={images} setImages={setImages} />

                   
                    <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Projet béneficiant des certificates d'économies d'énergie  ?</Text>


                    <RadioButton.Group
                        onValueChange={setCertificatEco} value={certificatEco}
                    >

                        <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", marginLeft: "10%", marginTop: 10 }}>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ paddingTop: 10 }}>Oui </Text>
                                <RadioButton value="Oui" />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ paddingTop: 10 }}>Non</Text>
                                <RadioButton value="Non" />


                            </View>

                        </View>



                    </RadioButton.Group>









                    <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Extension Effectué au batimant   ?</Text>


                    <RadioButton.Group
                        onValueChange={setExtensionBattimant} value={extensionBatimant}
                    >

                        <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", marginLeft: "10%", marginTop: 10 }}>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ paddingTop: 10 }}>Oui </Text>
                                <RadioButton value="Oui" />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ paddingTop: 10 }}>Non</Text>
                                <RadioButton value="Non" />


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

            <NextStep onPress={async () => {
if(images && images.length>0 && images.filter(item=>!item.name).length===0)
{
                let gener = {
                    occupation,
                    logement,
                    confortHiver,
                    confortAccoutique,
                    confortEte,
                    profond,
                    certificatEco,
                    priority,
                    extensionBatimant,
                    valueTechnique,
                    solution,
                    preciser,
                    images





                }
                try {
                    await AsyncStorage.setItem(
                        'Context',
                        JSON.stringify(gener)
                    );
                    await AsyncStorage.setItem(
                        'activeStep',
                        JSON.stringify(2)
                    );
                } catch (error) {
                    console.log("error", error)
                    // Error saving data
                }

                setActiveSteps(2)

}
else  ToastAndroid.showWithGravityAndOffset("Vous devez ajouter des images avec leurs noms",
ToastAndroid.LONG,
ToastAndroid.TOP, 0, 400)
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



export default Context;
