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
  import { AsyncStorage } from 'react-native';
 import NextStep from '../../components/NextSteps'
  import Head from '../../components/Head'
 import DropDownPicker from 'react-native-dropdown-picker';
 import Camera from '../pickerImage/camera'

 const PhotVoltaique: () => Node = ({ setActiveSteps }) => {
    const [images, setImages] = useState([]);

    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
     const [itemsType, setItemsType] = useState([
         { label: 'Monocristallin', value: 'Monocristallin' },
         { label: 'Multi-cristallin', value: 'Multi-cristallin' },
         { label: 'Amorphe', value: 'Amorphe' },
  
 
 
     ]);
     const [moduleType, setModuleType] = useState(null);
     const [itemsPose, setItemsPose] = useState([
         { label: 'Sur structure abrite', value: 'Sur structure abrite' },
         { label: 'Intégrée sur le comble', value: 'Intégrée sur le comble' },
     ]);
     const [pose, setPose] = useState(null);
     const [open, setOpen] = useState(false);
     const [openElectro, setOpenElectro] = useState(false);

     
     const [surfaceDuModule, setSurfaceDuModule] = useState();
     const [capeteurNombre, setCapteurNombre] = useState();
     const [orientation, setOrientation] = useState();
     const [inclinaison, setInclinaison] = useState();

     const [loading, setLoading] = useState(false);
 
 
 
     async function fetchData() {
         try {
              const photovoltaique = JSON.parse(await AsyncStorage.getItem('photovoltaique'));
               
                if(photovoltaique)
     {       
             await setModuleType(photovoltaique.moduleType)
             await setPose(photovoltaique.pose)
             await setSurfaceDuModule(photovoltaique.surfaceDuModule)
             await setCapteurNombre(photovoltaique.capeteurNombre)
             await setOrientation(photovoltaique.orientation)
             await setInclinaison(photovoltaique.inclinaison)
             if(photovoltaique.images)
             setImages(photovoltaique.images)
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
 
             <Head title={"Systéme Photovolataique "} setActiveSteps={setActiveSteps} />
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
                             placeholder="Type de module "
                             open={open}
                             multiple={true}
                             value={moduleType}
                             items={itemsType}
                             setOpen={setOpen}
                             setValue={setModuleType}
                             setItems={setItemsType }
                         />
                     </View>
 </View>
 
 <View style={{justifyContent:"center",paddingLeft:"10%",width:"110%"}}> 
<InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Surface de module"
                            placeholderTextColor="#003f5c"
                            keyboardType="number-pad"

                            value={surfaceDuModule}
                            onChangeText={setSurfaceDuModule} />
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
                             placeholder="Pose"
                             open={openElectro}
                             multiple={true}
                             value={pose}
                             items={itemsPose}
                             setOpen={setOpenElectro}
                             setValue={setPose}
                             setItems={setItemsPose}
                         />
                     </View>
 </View>
 
                    
 <View style={{justifyContent:"center",paddingLeft:"10%",width:"110%"}}> 
<InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Nombre de capteur"
                            placeholderTextColor="#003f5c"
                            keyboardType="number-pad"

                            value={capeteurNombre}
                            onChangeText={setCapteurNombre} />
                    </InputView>
                    
                    </View>
                    <View style={{justifyContent:"center",paddingLeft:"10%",width:"110%"}}> 
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Orienatation"
                            placeholderTextColor="#003f5c"
 
                            value={orientation}
                            onChangeText={setOrientation} />
                    </InputView>
                    
      
                    
                    <InputView>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Inclinaison"
                            placeholderTextColor="#003f5c"
 
                            value={inclinaison}
                            onChangeText={setInclinaison} />
                    </InputView>

                                        </View>
                                        <View
                            style={{

                                alignItems: 'center',
                                justifyContent: 'center',
                                width: "100%"
                            }}>
                                        <Camera images={images} setImages={setImages} />
</View>
                     <NextStep
                         onPress={async () =>
                               {
                         
                                 await AsyncStorage.setItem(
                                     'photovoltaique',
                                     JSON.stringify({
                                        moduleType,
                                        pose,
                                        surfaceDuModule,
                                        capeteurNombre,
                                        orientation,
                                        inclinaison,
                                        images
                                     })
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
 
 
 
 export default PhotVoltaique;
 