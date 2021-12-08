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
 import EditEau from './EditEau';
 import Head from '../../components/Head'
 import { RadioButton } from 'react-native-paper';
 
 const EauSanitaire: () => Node = ({ setActiveSteps }) => {
     const windowHeight = Dimensions.get('window').height;
     const windowWidth = Dimensions.get('window').width;
 
 
 
 
     const [mur, setMur] = useState([
         { Type: "1", id: 1 },
         { Type: "2", id: 2 },
  
     ]);
     const [sousSol, setSousSol] = useState({
        emplacementduballon: "En volume chauffé",
      
 
     });
     const [edit, setEdit] = useState(false);
     const [murToEdit, setMurToEdit] = useState();
     const [index, setIndex] = useState();
 
 
 
     async function fetchData() {
         try {
             const value = JSON.parse(await AsyncStorage.getItem('eauSanitaire'));
             if (value !== null && value.length > 0) {
                 console.log(value)
                 setMur(value)
             }
             else await AsyncStorage.setItem(
                 'eauSanitaire',
                 JSON.stringify(mur)
             );
             const valueOfSoous = JSON.parse(await AsyncStorage.getItem('emplacementduballon'));
             if (valueOfSoous !== null ) {
                  setSousSol(valueOfSoous)
             }
             else await AsyncStorage.setItem(
                 'emplacementduballon',
                 JSON.stringify(sousSol)
             );
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
 
         edit ?
             <EditEau
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
             <Head title={"Eau chaude Sanitaire"} setActiveSteps={setActiveSteps} />
 
 
                 <ScrollView
 
                     horizontal={false}
                     style={{
                         flex: 1,
                         width: "100%"
                     }}
                     contentContainerStyle={{
                         flexGrow: 1,
                     }}>
 <View style={{  textAlign: "center", justifyContent: "center", width: "100%", height: 80, display: "flex", position: "relative" }}>

<Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "black" }}>
Système ECS


</Text>

</View>
 
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
                                 <InputView borderColor={item.typeEcs?"green":null}>
                                     <Text key={item.nomDeMur} style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 5 }}> {item.Type}</Text>
                                 </InputView>
                             </TouchableOpacity>
                         )}
 
 
 
                     </View>
                     <View >
                         <Text style={{ marginLeft: "10%", fontWeight: "bold", color: "black", fontSize: 20 }}> Emplacement du ballon
</Text>
                         <RadioButton.Group onValueChange={newValue => {
                             let newSoulSol = { ...sousSol }
                             newSoulSol.emplacementduballon = newValue
 
                             setSousSol(newSoulSol)
                         }}
                             value={sousSol.emplacementduballon}>
 
                             <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
 
                                 <View style={{ flexDirection: "row", flex: 1 }}>
                                     <RadioButton value="En volume chauffé" />
                                     <Text style={{ paddingTop: 10 }}>En volume chauffé</Text>
 
                                 </View>
                                 <View style={{ flexDirection: "row", flex: 1 }}>
                                     <RadioButton value="Hors volume chauffé" />
                                     <Text style={{ paddingTop: 10 }}>Hors volume chauffé</Text>
 
 
 
                                 </View>
                              
                             </View>
 
                         </RadioButton.Group>
                          
                     </View>
                 </ScrollView>
 
                 <NextStep onPress={async () => {
 
                     try {
 
                         await AsyncStorage.setItem(
                             'activeStep',
                             JSON.stringify(20)
                         );
                         await AsyncStorage.setItem(
                             'sousSol',
                             sousSol
                         );
                     } catch (error) {
                         console.log("error", error)
                         // Error saving data
                     }
 
                     setActiveSteps(active=>active+1)
 
 
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
 
 
 
 export default EauSanitaire;
 