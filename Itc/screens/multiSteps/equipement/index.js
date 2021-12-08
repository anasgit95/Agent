/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import InputView from '../../components/InputView';
// import DropDownPicker from 'react-native-dropdown-picker';
import { Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { AsyncStorage } from 'react-native';
import NextStep from '../../components/NextSteps'
import { Checkbox } from 'react-native-paper';
import Head from '../../components/Head'
import DropDownPicker from 'react-native-dropdown-picker';

const Equipement: () => Node = ({ setActiveSteps }) => {7
    const [items, setItems] = useState([
        { label: 'Cuisinére électrique', value: 'Cuisinére électrique' },
        { label: 'Cuisinére à Gaz', value: 'Cuisinére à Gaz' },
        { label: 'Four electrique', value: 'Four electrique' },
        { label: 'Four à gaz', value: 'Four à gaz' },
        { label: 'Friteuse', value: 'Friteuse' },
        { label: "Micro-ondes", value: "Micro-ondes" },
        { label: "Mini four ", value: 'Mini four' },
        { label: "Plaques de cuisson ", value: 'Plaques de cuisson' },
        { label: "Plaques fontes", value: 'Plaques fontes' },
        { label: "Plaques vitrocéramique", value: 'Plaques vitrocéramique' },


    ]);
    const [priority, setPriority] = useState(null);

    const [open, setOpen] = useState(false);

    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const [eclairage, setEclaire] = React.useState({
        induction: {
            checked: true,
            nombre: null,
        },
        fluorescent: {
            checked: false,
            nombre: null,
        },
        halogene: {
            checked: false,
            nombre: null,
        },
        fluo: {
            checked: false,
            nombre: null,
        },
        led: {
            checked: false,
            nombre: null,
        },
    });

    const [loading, setLoading] = useState(true);



    async function fetchData() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('eclairage'));
            if (value !== null) {
                await setEclaire(value)
                setLoading(false)

            }
            else {
                await AsyncStorage.setItem(
                    'eclairage',
                    JSON.stringify(eclairage)
                )
                setLoading(false)

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
            minWidth: windowWidth,
            position: "relative",
            paddingBottom: 40
        }}>

            <Head title={"EQUIPEMENTS ELECTRIQUES"} setActiveSteps={setActiveSteps} />
            {!loading ?



                <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    style={{
                        flex: 1,
                        width: "100%"
                    }}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}>

                    <View style={{ textAlign: "center", justifyContent: "center", width: "100%", height: 80, display: "flex", position: "relative" }}>

                        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "black" }}>
                            Eclairage



                        </Text>

                    </View>

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
 




                        <View style={{ flex: 1 }}>

                            <View style={{ flexDirection: "row", flex: 1 }}>

                                <Checkbox
                                    status={eclairage.induction.checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        let newEcalaire = eclairage ;
                                        newEcalaire.induction.checked=!newEcalaire.induction.checked
                                        console.log(newEcalaire)

                                        setEclaire({...newEcalaire})
                                    }}
                                />                               
                                     <Text style={{ paddingTop: 10 }}>Ampoule à induction</Text>


                            </View>
                            {eclairage.induction.checked ?
                                     <InputView>

                                  <TextInput
                                  style={styles.inputText}
                                  placeholder="Nombre des ampoules"
                                  placeholderTextColor="#003f5c"
                                  keyboardType="number-pad"
                                  onChangeText={text=>{
                                     let newEcalaire = eclairage ;
                                     newEcalaire.induction.nombre=text
                         
                                     setEclaire({...newEcalaire})
                                  }}
                                  value={eclairage.induction.nombre}
                              />
                              </InputView>
                                : null
                            }
                        </View>

                        

                        <View style={{ flex: 1 }}>

                            <View style={{ flexDirection: "row", flex: 1 }}>

                                <Checkbox
                                    status={eclairage.fluorescent.checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        let newEcalaire = eclairage ;
                                        newEcalaire.fluorescent.checked=!newEcalaire.fluorescent.checked
                                        console.log(newEcalaire)

                                        setEclaire({...newEcalaire})
                                    }}
                                />                               
                                     <Text style={{ paddingTop: 10 }}>Linéaire fluoréscent</Text>


                            </View>
                            {eclairage.fluorescent.checked ?
                                     <InputView>

                            <TextInput
                            style={styles.inputText}
                            placeholder="Nombre des ampoules"
                            placeholderTextColor="#003f5c"
                            keyboardType="number-pad"
                            onChangeText={text=>{
                               let newEcalaire = eclairage ;
                               newEcalaire.fluorescent.nombre=text
                   
                               setEclaire({...newEcalaire})
                            }}
                            value={eclairage.fluorescent.nombre}
                        />
                        </InputView>
                                : null
                            }
                        </View>

                        

                        <View style={{ flex: 1 }}>

                            <View style={{ flexDirection: "row", flex: 1 }}>

                                <Checkbox
                                    status={eclairage.halogene.checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        let newEcalaire = eclairage ;
                                        newEcalaire.halogene.checked=!newEcalaire.halogene.checked
                                        console.log(newEcalaire)

                                        setEclaire({...newEcalaire})
                                    }}
                                />                               
                                     <Text style={{ paddingTop: 10 }}>Ampoule Halogénes</Text>


                            </View>
                            {eclairage.halogene.checked ?
                                     <InputView>

                                     <TextInput
                                     style={styles.inputText}
                                     placeholder="Nombre des ampoules"
                                     placeholderTextColor="#003f5c"
                                     keyboardType="number-pad"
                                     onChangeText={text=>{
                                        let newEcalaire = eclairage ;
                                        newEcalaire.halogene.nombre=text
                            
                                        setEclaire({...newEcalaire})
                                     }}
                                     value={eclairage.halogene.nombre}
                                 />
                                 </InputView>
                                : null
                            }
                        </View>
                    </View>










                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "20%", marginTop: 10 }}>
 




 

 <View style={{ flex: 1 }}>

     <View style={{ flexDirection: "row", flex: 1 }}>

         <Checkbox
             status={eclairage.fluo.checked ? 'checked' : 'unchecked'}
             onPress={() => {
                 let newEcalaire = eclairage ;
                 newEcalaire.fluo.checked=!newEcalaire.fluo.checked
                 console.log(newEcalaire)

                 setEclaire({...newEcalaire})
             }}
         />                               
              <Text style={{ paddingTop: 10 }}>Linéaire fluo compact</Text>


     </View>
     {eclairage.fluo.checked ?
              <InputView>

         <TextInput
         style={styles.inputText}
         placeholder="Nombre des ampoules"
         placeholderTextColor="#003f5c"
         keyboardType="number-pad"
         onChangeText={text=>{
            let newEcalaire = eclairage ;
            newEcalaire.fluo.nombre=text

            setEclaire({...newEcalaire})
         }}
         value={eclairage.fluo.nombre}
     />
     </InputView>
         : null
     }
 </View>

 

 <View style={{ flex: 1 }}>

     <View style={{ flexDirection: "row", flex: 1 }}>

         <Checkbox
             status={eclairage.led.checked ? 'checked' : 'unchecked'}
             onPress={() => {
                 let newEcalaire = eclairage ;
                 newEcalaire.led.checked=!newEcalaire.led.checked
 
                 setEclaire({...newEcalaire})
             }}
         />                               
              <Text style={{ paddingTop: 10 }}>Led</Text>


     </View>
     {eclairage.led.checked ?
         <InputView>
         <TextInput
             style={styles.inputText}
             placeholder="Nombre des ampoules"
             placeholderTextColor="#003f5c"
             keyboardType="number-pad"
             onChangeText={text=>{
                let newEcalaire = eclairage ;
                newEcalaire.led.nombre=text

                setEclaire({...newEcalaire})
             }}
             value={eclairage.led.nombre}
         />
     </InputView>
         : null
     }
 </View>
</View>


<View style={{ textAlign: "center", justifyContent: "center", width: "100%", height: 80, display: "flex", position: "relative" }}>

<Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "black" }}>
Cuisson




</Text>

</View>

<View
                     style={{
 
                         alignItems: 'center',
                         justifyContent: 'center',
                         width: "80%",
                         marginLeft:"10%"
                     }}>




                    <View style={{
                        width: "100%",



                    }}>
                        <DropDownPicker
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                                zIndex: 5000
                            }}
                            style={{ marginTop: 10, borderColor: "#006593" }}
                            placeholder="Préciser le nombre d'appareils"
                            open={open}
                            multiple={true}
                            value={priority}
                            items={items}
                            setOpen={setOpen}
                            setValue={setPriority}
                            setItems={priority}
                        />
                    </View>
</View>

                    <NextStep
                        onPress={() => console.log(eclairage)}

                    />

                </ScrollView>


                : <View style={{ height: windowHeight }}>
                </View>}
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



export default Equipement;
