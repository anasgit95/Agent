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
 import EditEau from './EditConsomation';
 import Head from '../../components/Head'
  
 const Consomation: () => Node = ({ setActiveSteps }) => {
     const windowHeight = Dimensions.get('window').height;
     const windowWidth = Dimensions.get('window').width;
 
 
 
 
     const [mur, setMur] = useState([
         { anner: "2019", id: 1 },
         { anner: "2020", id: 2 },
  
     ]);
      
     const [edit, setEdit] = useState(false);
     const [murToEdit, setMurToEdit] = useState();
     const [index, setIndex] = useState();
 
 
 
     async function fetchData() {
         try {
             const value = JSON.parse(await AsyncStorage.getItem('consomationenergie'));
             if (value !== null && value.length > 0) {
                  setMur(value)
             }
             else await AsyncStorage.setItem(
                 'consomationenergie',
                 JSON.stringify(mur)
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
             <Head title={"Consomation"} setActiveSteps={setActiveSteps} />
 
 
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
Consomation d'énergie(s) de 2ans 


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
                                 <InputView borderColor={item.chauffage?"green":null}>
                                     <Text key={item.nomDeMur} style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 5 }}> {item.anner}</Text>
                                 </InputView>
                             </TouchableOpacity>
                         )}
 
 
 
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
 
 
 
 export default Consomation;
 