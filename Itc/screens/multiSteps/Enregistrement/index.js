/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native';
 import Head from '../../components/Head'
  // import DropDownPicker from 'react-native-dropdown-picker';
 import DropDownPicker from 'react-native-dropdown-picker';
  import { Dimensions } from 'react-native';
 import { AsyncStorage } from 'react-native';
   import axios from '../../../utils/Api'
  import AntDesign from 'react-native-vector-icons/AntDesign'
 import Signature from './sign'
 import { ToastAndroid } from 'react-native';


 DropDownPicker.setMode("BADGE");
 
 const Validation: () => Node = ({ setActiveSteps }) => {
     const windowHeight = Dimensions.get('window').height;
  
 const valider= async()=>{
    try {
        // await AsyncStorage.setItem(
        //     'Linetique',
        //     JSON.stringify(gener)
        // );
     
        const generaliter = JSON.parse(await AsyncStorage.getItem('Generalite'));
        const context = JSON.parse(await AsyncStorage.getItem('Context'));
        const architecture = JSON.parse(await AsyncStorage.getItem('Architecture'));
        const repartissant = JSON.parse(await AsyncStorage.getItem('Repartition'));
        const ouvrantType = JSON.parse(await AsyncStorage.getItem('Ouvrant'));
        const ouvrantTypeRelation = JSON.parse(await AsyncStorage.getItem('OuvrantTypeList'));
        const porte = JSON.parse(await AsyncStorage.getItem('Porte'));
        const porteDesignation = JSON.parse(await AsyncStorage.getItem('PorteDesignation'));
        const masqueMur = JSON.parse(await AsyncStorage.getItem('MasqueMur'));
        const plancherBas = JSON.parse(await AsyncStorage.getItem('PlancherBas'));
        const sousSol = JSON.parse(await AsyncStorage.getItem('sousSol'));
        const plancherHaut = JSON.parse(await AsyncStorage.getItem('PlancherHaut'));
        const linetique = JSON.parse(await AsyncStorage.getItem('Linetique'));
        const dimension = JSON.parse(await AsyncStorage.getItem('dimension'));
        const user = JSON.parse(await AsyncStorage.getItem('user'));
        const images = JSON.parse(await AsyncStorage.getItem('images'));
        const decrechement = JSON.parse(await AsyncStorage.getItem('Decrechement'));
        const emission =JSON.parse(await AsyncStorage.getItem('emission'))
        const emetteur = JSON.parse(await AsyncStorage.getItem('emetteur'));

        axios.post('evaluation', {

            generaliter,
            context,
            architecture,
            repartissant,
            ouvrantType,
            ouvrantTypeRelation,
            porte,
            porteDesignation,
            masqueMur,
            plancherBas,
            sousSol,
            plancherHaut,
            linetique,
            Creator: user._id,
            images,
            dimension,
            decrechement,
            emission,
            emetteur



        }).then(async response =>


{  
    ToastAndroid.showWithGravityAndOffset("Votre projet a été bien enregistré",
    ToastAndroid.LONG,
    ToastAndroid.TOP, 0, 400)

    const keys = await AsyncStorage.getAllKeys()
    await AsyncStorage.multiRemove(keys)
    await AsyncStorage.setItem(
        'user',
        JSON.stringify(user)
    );
   
   await AsyncStorage.setItem(
    'activeStep',
    JSON.stringify(0)
);
setActiveSteps(0)

 }




            ).catch(error =>

            console.log(error)
        )


    } catch (error) {
        console.log("error", error)
        // Error saving data
    }



 }
     return (
         <View style={{
             alignItems: 'center',
             minHeight: windowHeight,
             position: "relative",
             width: "100%",
             flex: 1
         }}>
             <Head title={"Validation"} setActiveSteps={setActiveSteps} />
             <ScrollView
 
                 horizontal={false}
                 style={{
                      width:250,
                     marginTop:10
                 }}
                 contentContainerStyle={{
                     flexGrow: 1,
                 }}>
           <Signature/>

           
             </ScrollView>
             <TouchableOpacity
                style={styles.validateButton}
                onPress={valider}
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
     container: {
         flex: 1,
         backgroundColor: '#006593',
         alignItems: 'center',
         justifyContent: 'center',
 
     },
     validateButton: {
        backgroundColor: "rgb(0,101,147)",
        borderColor: "rgb(0,101,147)",
        borderWidth: 1,
        marginTop: 10,
        width: "80%",
        borderRadius: 5,
        position: "absolute",
        bottom: 20,
        zIndex: 5000,
        left: "10%",
        marginBottom: 10,
        justifyContent: "center",
        padding: 10
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
 
 
 
 export default Validation;
 