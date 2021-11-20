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
  import { AsyncStorage } from 'react-native';
  import Camera from './camera'
 import { useEffect } from 'react';
 DropDownPicker.setMode("BADGE");
 
 const AddImage: () => Node = ({ setActiveSteps }) => {
     const windowHeight = Dimensions.get('window').height;
 
     
     return (
         <View style={{
             alignItems: 'center',
             minHeight: windowHeight,
             position: "relative",
              width:"100%",
              flex:1
         }}>
             <Head title={"Ajouter des images"} setActiveSteps={setActiveSteps} />
             <ScrollView
 
                 horizontal={false}
                 style={{
                     flex: 1,
                 }}
                 contentContainerStyle={{
                     flexGrow: 1,
                 }}>
 <Camera/>
 
                  
             </ScrollView>
 
             <NextStep onPress={async () => {
 
 
                  
 
 
 
 
                 // }
                 try {
                     // await AsyncStorage.setItem(
                     //     'Linetique',
                     //     JSON.stringify(gener)
                     // );
                     await AsyncStorage.setItem(
                         'activeStep',
                         JSON.stringify(12)
                     );
                 } catch (error) {
                     console.log("error", error)
                     // Error saving data
                 }
 
                 setActiveSteps(12)
 
 
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
 
 
 
 export default AddImage;
 