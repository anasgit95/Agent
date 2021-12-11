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
  import { Dimensions } from 'react-native';
 import AntDesign from 'react-native-vector-icons/AntDesign'
  import { AsyncStorage } from 'react-native';
 import { Formik } from 'formik';
 
 const EditPlancher: () => Node = ({ setEdit, setMur, mur, index, murs }) => {
     const windowHeight = Dimensions.get('window').height;
     async function setOuvrant(ouvrant) {
         try {
             await AsyncStorage.setItem(
                 'eauSanitaire',
                 JSON.stringify(ouvrant)
             );
 
         } catch (error) {
             console.log("error", error)
             // Error saving data
         }
     }
  
     return (
         <Formik
             initialValues={{
                typeEcs: mur.typeEcs,
                 typeGenerator: mur.typeGenerator,
                 capacityBallon: mur.capacityBallon,
                 nombreBallon: mur.nombreBallon,
                 anneGenerator: mur.anneGenerator,
           
             }}
             onSubmit={values => 
         
           {      let mursAll = murs
             values.Type=mur.Type
                 mursAll[index] = values
                 setMur(mursAll);
                 setOuvrant(mursAll)
                 setEdit(false)}
                 
                  }
         >
             {({ handleChange, handleBlur, handleSubmit, values }) => (
                 <View style={{
                     alignItems: 'center',
                     minHeight: windowHeight,
                     justifyContent: 'center',
                     position: "relative",
                 }}>
                     <View style={{ backgroundColor: "rgb(0,101,147)", textAlign: "center", justifyContent: "center", width: "100%", height: 80, display: "flex", position: "relative" }}>
 
                         <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "white" }}>
                             {mur.Type}
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
                             width: "100%"
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
                                     placeholder="Type ECS (lié au 
                                        chauffage, élec…)"
                                     placeholderTextColor="#003f5c"
                                     onChangeText={handleChange('typeEcs')}
                                      value={values.typeEcs}
 
 
                                 />
                             </InputView>
 
 
                             <InputView>
                                 <TextInput
                                     style={styles.inputText}
                                     placeholder="Type Générateur (accumulation, 
                                        instantanné)"
                                     placeholderTextColor="#003f5c"
                                     onChangeText={handleChange('typeGenerator')}
                                      value={values.typeGenerator}
 
 
 
                                 />
                             </InputView>
                             <InputView>
                                 <TextInput
                                     style={styles.inputText}
                                     placeholder="Capacité 
                                     ballon (L)"
                                     placeholderTextColor="#003f5c"
                                     keyboardType="numeric"

                                     onChangeText={handleChange('capacityBallon')}
                                     value={values.capacityBallon}
 
 
                                 />
                             </InputView>
                             <InputView>
                                 <TextInput
                                     style={styles.inputText}
                                     placeholder="Nombre de 
                                     ballon"
                                     keyboardType="numeric"

                                     placeholderTextColor="#003f5c"
                                     onChangeText={handleChange('nombreBallon')}
                                     value={values.nombreBallon}
 
 
                                 />
                             </InputView>
                             <InputView>
                                 <TextInput
                                     style={styles.inputText}
                                     placeholder="Année de generator"
                                     keyboardType="numeric"

                                     placeholderTextColor="#003f5c"
                                     onChangeText={handleChange('anneGenerator')}
                                     value={values.anneGenerator}
 
 
                                 />
                             </InputView>
                             <InputView>
                                 <TextInput
                                     style={styles.inputText}
                                     placeholder="Epaisseur de l'isolant (cm)"
                                     placeholderTextColor="#003f5c"
                                     keyboardType="numeric"
                                     onChangeText={handleChange('EpaisseurIsolant')}
                                     value={values.EpaisseurIsolant}
 
                                 />
                             </InputView>
                             <InputView>
                                 <TextInput
                                     style={styles.inputText}
                                     placeholder="Résistance d'isolant"
                                     placeholderTextColor="#003f5c"
                                     onChangeText={handleChange('ResistanceIsolant')}
                                     value={values.ResistanceIsolant}
                               />
                             </InputView>
 
 
 
                         </View>
                     </ScrollView>
                     <TouchableOpacity
                         style={styles.validateButton}
                         onPress={handleSubmit}
                         title="Submit"
                     >
                         <View style={{ flexDirection: "row", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                             <Text style={{ color: "white", fontWeight: "bold" }}>
                                 Valider
 
                             </Text>
                             <AntDesign name="check" color="white" size={30} />
                         </View>
                     </TouchableOpacity>
 
                 </View>
             )}
         </Formik>
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
 
 
 
 export default EditPlancher;
 