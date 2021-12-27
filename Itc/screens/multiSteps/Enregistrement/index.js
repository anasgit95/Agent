/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState,useEffect } from 'react';
 
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

 import { ActivityIndicator  } from "react-native";

 DropDownPicker.setMode("BADGE");

 const Validation: () => Node = ({ setActiveSteps }) => {
  const windowHeight = Dimensions.get('window').height;
  const [loading, setLoading] = useState(false);

  const [fullName, setFullName] = useState();
  const [signatureBenefique, setSignateurBenefique] = useState();
  const [signatureInspecteur, setSignatureInspecteur] = useState();

  const [adresse, setAdresse] = useState();
  useEffect(() => {
      
    fetchData();

     
   


},[]);
  async function fetchData() {
    try { 
        const  value = JSON.parse(await AsyncStorage.getItem('Generalite')) ;
         if (value !== null){
            

             setFullName(value.fullName)
            setAdresse(value.adresse)
           
          // We have data!!
         }
      } catch (error) {
          console.log(error)
        // Error retrieving data
      }
    // ...
  }
  
  
 const valider= async()=>{
     if(signatureBenefique && signatureInspecteur)
{    try {
    setLoading(true)
     
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
        const   planMasse = JSON.parse(await AsyncStorage.getItem('planMasse'));

        const sousSol = JSON.parse(await AsyncStorage.getItem('sousSol'));
        const plancherHaut = JSON.parse(await AsyncStorage.getItem('PlancherHaut'));
        const linetique = JSON.parse(await AsyncStorage.getItem('Linetique'));
        const dimension = JSON.parse(await AsyncStorage.getItem('dimension'));
        const user = JSON.parse(await AsyncStorage.getItem('user'));
        const images = JSON.parse(await AsyncStorage.getItem('images'));
        const decrechement = JSON.parse(await AsyncStorage.getItem('Decrechement'));
        const emission =JSON.parse(await AsyncStorage.getItem('emission'))
        const emetteur = JSON.parse(await AsyncStorage.getItem('emetteur'));
        const repartitionLinetique = JSON.parse(await AsyncStorage.getItem('RepartitionLinetique'));
        const reseau = JSON.parse(await AsyncStorage.getItem('reseau'));
        const emplacementduballon = JSON.parse(await AsyncStorage.getItem('emplacementduballon'));
        const eauSanitaire = JSON.parse(await AsyncStorage.getItem('eauSanitaire'));
        const refroidissement = JSON.parse(await AsyncStorage.getItem('refroidissement'));
        const ventilation = JSON.parse(await AsyncStorage.getItem('ventilation'));
         const eclairage = JSON.parse(await AsyncStorage.getItem('eclairage'));
          const cuisson = JSON.parse(await AsyncStorage.getItem('cuisson'));
          const bureautique = JSON.parse(await AsyncStorage.getItem('bureautique'));
          const electromenager = JSON.parse(await AsyncStorage.getItem('electromenager'));
          const diver = JSON.parse(await AsyncStorage.getItem('diver'));
          const consomation = JSON.parse(await AsyncStorage.getItem('consomation'));
          const gazGenral = JSON.parse(await AsyncStorage.getItem('gazGenral'));
          const electriciter = JSON.parse(await AsyncStorage.getItem('electriciter'));
          const programmation = JSON.parse(await AsyncStorage.getItem('programmation'));
           const puissance = JSON.parse(await AsyncStorage.getItem('puissance'));
           const consomationenergie = JSON.parse(await AsyncStorage.getItem('consomationenergie'));
           const photovoltaique = JSON.parse(await AsyncStorage.getItem('photovoltaique'));
        const masqueMurImages = JSON.parse(await AsyncStorage.getItem('MasqueMurImages'));
        const ouvrantTypeRelationImages = JSON.parse(await AsyncStorage.getItem('OuvrantTypeListImages'));
        const ouvrantTypeImages = JSON.parse(await AsyncStorage.getItem('OuvrantImages'));
        const plancherHautImages = JSON.parse(await AsyncStorage.getItem('PlancherHautImages'));
        const porteImages = JSON.parse(await AsyncStorage.getItem('PorteImages'));
        const porteDesignationImages = JSON.parse(await AsyncStorage.getItem('PorteDesignationImages'));

        const repartissantImages = JSON.parse(await AsyncStorage.getItem('RepartitionImages'));

           axios.post('evaluation', {
            masqueMurImages,
            ouvrantTypeRelationImages,
            ouvrantTypeImages,
            plancherHautImages,
            porteImages,
            porteDesignationImages,
            repartissantImages,


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
            emetteur,
            repartitionLinetique,
            reseau,
            eauSanitaire,
            emplacementduballon,
            refroidissement,
            ventilation,
            eclairage,
            cuisson,
            bureautique,
            electromenager,
            diver,
            consomation,
            electriciter,
            gazGenral,
            programmation,
            puissance,
            consomationenergie,
            photovoltaique,
            planMasse,
            signatureInspecteur,
            signatureBenefique





        }).then(async response =>


{  
    setLoading(false)

    ToastAndroid.showWithGravityAndOffset("Votre projet a été bien enregistré",
    ToastAndroid.LONG,
    ToastAndroid.TOP, 0, 400)

    const keys = await AsyncStorage.getAllKeys()
    await AsyncStorage.multiRemove(keys)
    setActiveSteps(0)

    // await AsyncStorage.setItem(
    //     'user',
    //     JSON.stringify(user)
    // );
   
//    await AsyncStorage.setItem(
//     'activeStep',
//     JSON.stringify(0)
// );

 }




            ).catch(error =>
               { setLoading(false)

            console.log(error)}
        )


    } catch (error) {
        console.log("error", error)
        // Error saving data
    }

}
else   ToastAndroid.showWithGravityAndOffset("Il faut enregistrer les deux signatures",
ToastAndroid.LONG,
ToastAndroid.TOP, 0, 400)
 }
     return (
        loading?
        <ScrollView
 
                 horizontal={false}
                 style={{
                      marginTop:10,
                      padding:20
                 }}
                 contentContainerStyle={{
                     flexGrow: 1,
                 }}>
        <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" />
    <Text style={{fontWeight:"bold",fontSize:20}}> Veuillez patienter svp</Text>
   
  </View>  
  </ScrollView>
 : <View style={{
             alignItems: 'center',
             minHeight: windowHeight,
             position: "relative",
             width: "100%",
             flex: 1
         }}>
            
             <Head title={"Attestation de passage"} setActiveSteps={setActiveSteps} />
          
   
             <ScrollView
 
                 horizontal={false}
                 style={{
                      marginTop:10,
                      padding:20
                 }}
                 contentContainerStyle={{
                     flexGrow: 1,
                 }}>
                     <Text style={{fontWeight:"bold",color:"black",fontSize:20}}>
                     Par la présente, nous confirmons le passage d'un technicien mandaté par ITC ENGINEERING pour réaliser la visite préalable à l'établissement de l'audit énergétique de mon logement" Ce document n'engage à aucun travaux ni la validation d'aucun devis.
                         </Text>
                         <Text style={{fontWeight:"bold",color:"black",fontSize:20}}>
                           Date et heure : Le  <Text style={{color:"red"}}> {new Date().toISOString().slice(0, 10)  }</Text>
                         </Text>
                         <Text style={{fontWeight:"bold",color:"black",fontSize:20}}>
                           Lieu :  <Text style={{color:"red"}}>   {adresse }</Text>
                         </Text>
                         <Text style={{fontWeight:"bold",color:"black",fontSize:20}}>
                          Nom et prénom du bénificiaire <Text style={{color:"red"}}> {fullName }</Text>                         </Text>
                         <View style={{display:"flex",flexDirection:"row",marginTop:40,height:100,width:"100%",flex:1}}>
                         <Signature title={"Signature du bénificiaire"} saveImage={setSignateurBenefique}/>
                         <Signature title={"Signature de l'inspecteur"} saveImage={setSignatureInspecteur}/>

                       
                             </View>
                

           
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
        justifyContent: "center",
        alignContent:"center",
        alignItems:"center",
        paddingTop:"40%"
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
 