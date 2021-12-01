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
 import DropDownPicker from 'react-native-dropdown-picker';
 import { Dimensions } from 'react-native';
 import AntDesign from 'react-native-vector-icons/AntDesign'
 import { useEffect } from 'react';
 import { AsyncStorage } from 'react-native';

 const EditRepartition: () => Node = ({ setEdit, setMur,mur,index,murs }) => {
      const windowHeight = Dimensions.get('window').height;
 
  
      const [designation, setDesignation] = useState(null);
     const [typeDeParoi, setTypeDeParoi] = useState(null);
     const [typeDeMenuiserie, setTypeDeMenesuiserie] = useState(null);

     const [materiaux, setMateriaux] = useState(null);
     const [TypeDeViltrage, setTypeDeViltrage] = useState(null);
      const [epaisseurLame, setEpaisseurLame] = useState(null);
     const [gazDeRemplissage, setGazDeRemplissage] = useState(null);
 
 
 
     //  const [date, setDate] = useState(new Date());
  
     useEffect(() => {
         const  {
            designation,
            typeDeParoi,
            typeDeMenuiserie,
            materiaux,
            TypeDeViltrage,
            epaisseurLame,
            gazDeRemplissage,
          
        } = mur 
        setDesignation(designation)
       setTypeDeParoi(typeDeParoi)
       setTypeDeMenesuiserie(typeDeMenuiserie)
       setMateriaux(materiaux)
       setTypeDeViltrage(TypeDeViltrage)
       setEpaisseurLame(epaisseurLame)
       setGazDeRemplissage(gazDeRemplissage)
    

    }, [mur]);

        async function setOuvrant(ouvrant) {
        try {
            await AsyncStorage.setItem(
                'Ouvrant',
                JSON.stringify(ouvrant)
            );

        } catch (error) {
            console.log("error", error)
            // Error saving data
        }
    }
     const addOneMur = () => {
         let NewMur = {
            nom:mur.nom,
            designation,
            typeDeParoi,
            typeDeMenuiserie,
            materiaux,
            TypeDeViltrage,
            epaisseurLame,
            gazDeRemplissage,
         }
         let mursAll = murs 
         mursAll[index] = NewMur
         setMur(mursAll);
         setOuvrant(mursAll)
         setEdit(false)
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
                    {mur.name}
                 </Text>
                 <TouchableOpacity
                     onPress={() => setEdit(false)}
                     style={{ position: "absolute", left: 20, bottom: 20 }}>
 
                     <AntDesign name="arrowleft" color="white" size={30} />
 
                 </TouchableOpacity>
             </View>
             <ScrollView
                 nestedScrollEnabled={true}
                 showsVerticalScrollIndicator={false}
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
                         width: "100%"
                     }}>
                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="Désignation"
                             placeholderTextColor="#003f5c"
                             onChangeText={setDesignation}
                             value={designation}
 
 
                         />
                     </InputView>
                     
 
                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="Type de parois vitrée"
                             placeholderTextColor="#003f5c"
                             onChangeText={setTypeDeParoi}
                             value={typeDeParoi}
 
 
                         />
                     </InputView>
                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="Type de menuiserie "
                             placeholderTextColor="#003f5c"
                             onChangeText={setTypeDeMenesuiserie}
                             value={typeDeMenuiserie}
 
                         />
                     </InputView>
                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="Matérieux de menuiserie "
                             placeholderTextColor="#003f5c"
                             onChangeText={setMateriaux}
                             value={materiaux}
 
                         />
                     </InputView>
                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="Type de viltrage "
                             placeholderTextColor="#003f5c"
                             onChangeText={setTypeDeViltrage}
                             value={TypeDeViltrage}
 
                         />
                     </InputView>
                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="Epaisseur de lame (Double)"
                             placeholderTextColor="#003f5c"
                             keyboardType="numeric"
                             value={setEpaisseurLame}
                             onChangeText={epaisseurLame} />
                     </InputView>
                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="Gaz de remplissage"
                             value={gazDeRemplissage}
                             placeholderTextColor="#003f5c"
                             onChangeText={setGazDeRemplissage} />
                     </InputView>
                     
                     
                
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
 
 
 
 export default EditRepartition;
 