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
 import Camera from '../pickerImage/camera'
 import Head from '../../components/Head'
 import DropDownPicker from 'react-native-dropdown-picker';
 
 const Carecteristique: () => Node = ({ setActiveSteps }) => {7
    const [images, setImages] = useState([]);

    
    const [itemsElectriciter, setItemsElectriciter] = useState([
         { label: 'Tarif option creux', value: 'Tarif option creux' },
         { label: 'Tarif option creuses', value: 'Tarif option creuses' },
         { label: 'Tarif option EJP', value: 'Tarif option EJP' },
         { label: 'Tarif Tempo', value: 'Tarif Tempo' },
 
 
 
     ]);
     const [electriciter, setElectriciter] = useState(null);
 
     const [itemsGazGeneral, setItemsGazGeneral] = useState([
         { label: 'Tarif de base', value: 'Tarif de base' },
         { label: 'Tarif BO', value: 'Tarif BO' },
         { label: 'Tarif B1 et 3GP', value: 'Tarif B1 et 3GP' },
         { label: 'Tarif B2I', value: 'Tarif B2I' },
         { label: 'Tarif B2S', value: 'Tarif B2S' },
         { label: 'Tarif Tel', value: 'Tarif Tel' },
         { label: 'Tarif tel nuit', value: 'Tarif tel nuit' },
         { label: 'Autre abonnements', value: 'Autre abonnements' },


         
 
 
     ]);
     const [gazGeneral, setGazGeneral] = useState(null);
     const [itemProgrammation, setItemsProgrammation] = useState([
         { label: 'Bouilloire', value: 'Bouilloire' },
         { label: 'Cafetière', value: 'Cafetière' },
         { label: 'Fer à repasser', value: 'Fer à repasser' },
         { label: 'Micro-onde', value: 'Micro-onde' },
         { label: 'Mixeur', value: 'Mixeur' },
         
 
 
     ]);
     const [programmation, setProgrammation] = useState(null);

 
     const [open, setOpen] = useState(false);
     const [openBureau, setOpenBureau] = useState(false);
     const [openElectro, setOpenElectro] = useState(false);
     const [openDiver, setOpenDiver] = useState(false);
     const [puissance, setPuissance] = useState();
 
     const windowHeight = Dimensions.get('window').height;
     const windowWidth = Dimensions.get('window').width;
     
 
     const [loading, setLoading] = useState(false);
 
 
 
     async function fetchData() {
         try {
              const electric = JSON.parse(await AsyncStorage.getItem('electriciter'));
             const gazGenral = JSON.parse(await AsyncStorage.getItem('gazGenral'));
             const prog = JSON.parse(await AsyncStorage.getItem('programmation'));
             const puiss = JSON.parse(await AsyncStorage.getItem('puissance'));

              await setGazGeneral(gazGenral)
             await setProgrammation(prog)
             await setElectriciter(electric)
             await setPuissance(puiss?puiss.puissance:null)
             if(puiss.images)
             setImages(puiss.images)
 
  
 
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
 
             <Head title={"Caractéristique d'abonnement"} setActiveSteps={setActiveSteps} />
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
                                zIndex:5000
                             }}
                             style={{ marginTop: 10, borderColor: "#006593",zIndex:5000 }}
                             placeholder="Tarif electricité général "
                             open={openBureau}
                             multiple={true}
                             value={electriciter}
                             items={itemsElectriciter}
                             setOpen={setOpenBureau}
                             setValue={setElectriciter}
                             setItems={setItemsElectriciter }
                         />
                     </View>
 </View>
 
 <View style={{justifyContent:"center",paddingLeft:"10%",width:"110%"}}> 
<InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Puissance en KW"
                            placeholderTextColor="#003f5c"
                            keyboardType="number-pad"

                            value={puissance}
                            onChangeText={setPuissance} />
                    </InputView>
                    
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
                              }}
                             style={{ marginTop: 10, borderColor: "#006593",zIndex:1 }}
                             placeholder="Tarif gaz Général"
                             open={openElectro}
                             multiple={true}
                             value={gazGeneral}
                             items={itemsGazGeneral}
                             setOpen={setOpenElectro}
                             setValue={setGazGeneral}
                             setItems={setItemsGazGeneral}
                         />
                     </View>
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
                              }}
                             style={{ marginTop: 10, borderColor: "#006593",zIndex:0 }}
                             placeholder="Programmation"
                             multiple={true}
                             open={openDiver}
                              value={programmation}
                             items={itemProgrammation}
                             setOpen={setOpenDiver}
                             setValue={setProgrammation}
                             setItems={setItemsProgrammation}
                         />
                     </View>
                     <Camera images={images} setImages={setImages} />

                     
 </View>

 
                     <NextStep
                         onPress={async () =>
                               {
                      
                                 await AsyncStorage.setItem(
                                     'electriciter',
                                     JSON.stringify(electriciter)
                                 )
                                 await AsyncStorage.setItem(
                                     'gazGenral',
                                     JSON.stringify(gazGeneral)
                                 )
                                 await AsyncStorage.setItem(
                                     'programmation',
                                     JSON.stringify(programmation)
                                 )
                                 let newItem ={
                                    puissance,
                                    images
                                };
                                  
                                 await AsyncStorage.setItem(
                                    'puissance',
                                    JSON.stringify(newItem)
                                )
                                 const nextStep = JSON.parse(await AsyncStorage.getItem('activeStep'));
 
                                 await AsyncStorage.setItem(
                                     'activeStep',
                                     JSON.stringify(nextStep+1)
                                 );
                                 setActiveSteps(active=>active+1)
 
                               }
                             
                             }
 
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
 
 
 
 export default Carecteristique;
 