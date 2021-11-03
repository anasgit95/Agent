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
 import { RadioButton,Checkbox } from 'react-native-paper';
 
 const Architecture: () => Node = ({ setActiveSteps }) => {
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
             <Head title={"ARCHITECTURE"} />
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
                         width: "91%"
                     }}>
 
 
   
                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="Surface habtable"
                             placeholderTextColor="#003f5c"
                             onChangeText={text => console.log(text)} />
                     </InputView>
                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="Nombre de niveaux"
                             placeholderTextColor="#003f5c"
                             onChangeText={text => console.log(text)} />
                     </InputView>
                     <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Niveau du plafond ?</Text>
 
                     <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
 
                     <View style={{display:"flex", flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 10 }}>
 
                             <View style={{ flexDirection: "row",flex:1 }}>
                                 <RadioButton value="first" />
                                 <Text style={{ paddingTop: 10 }}>Comble non aménagés</Text>
 
                             </View>
                             <View style={{ flexDirection: "row",flex:1.3}}>
                                 <RadioButton value="second" />
                                 <Text style={{ paddingTop: 10 }}>Comble aménagés</Text>
 
 
 
                             </View>
                             <View style={{ flexDirection: "row",flex:0.6 }}>
                                 <RadioButton value="second" />
                                 <Text style={{ paddingTop: 10 }}>Toiture terrasse</Text>
 
 
 
                             </View>
                         </View>
                     </RadioButton.Group>
 
  
                      
  
 
  
 
 
                   
 
                     <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Nature du plancher bas ?</Text>
 
 <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>

 <View style={{display:"flex", flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 10 }}>

         <View style={{ flexDirection: "row",flex:1 }}>
             <RadioButton value="first" />
             <Text style={{ paddingTop: 10 }}>Sur terre plein </Text>

         </View>
         <View style={{ flexDirection: "row",flex:1.3}}>
             <RadioButton value="second" />
             <Text style={{ paddingTop: 10 }}>Sur vide sanitaires</Text>



         </View>
         <View style={{ flexDirection: "row",flex:0.9 }}>
             <RadioButton value="second" />
             <Text style={{ paddingTop: 10 }}>Sur sous sol</Text>



         </View>
     </View>
 </RadioButton.Group>


  












 
 
 
 
 
 
                     
 
 
 
  
 
                 </View>
             </ScrollView>
 
             <NextStep onPress={() => setActiveSteps(3)} />
 
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
 
 
 
 export default Architecture;
 