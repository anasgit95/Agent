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
  import Head from '../../components/Head'
  import { Formik } from 'formik';
  import Camera from '../pickerImage/camera'

 const Emetteur: () => Node = ({ setActiveSteps }) => {
     const windowHeight = Dimensions.get('window').height;
     const windowWidth = Dimensions.get('window').width;
     
     const [images, setImages] = useState([]);

     const [loading, setLoading] = useState(true)

 
 
     
     
      const [mur, setMur] = useState({
 
        annee:""
      });
  
 
     async function fetchData() {
         try {
             const value = JSON.parse(await AsyncStorage.getItem('emetteur'));
              if (value !== null ) {
                  setMur(value)
                  if(value.images)
                  setImages(value.images)
             }
             setLoading(false)
           
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
                 <Head title={"Emission"} setActiveSteps={setActiveSteps} />
                {!loading?
                 <Formik
                initialValues={{
                typeDeEmmetteur: mur.typeDeEmmetteur,
                systemeDeregulation:  mur.systemeDeregulation,
                ProgrammationChauffage:  mur.ProgrammationChauffage,
                nombreDeGenerateur:  mur.nombreDeGenerateur,
                systemDappoint:  mur.systemDappoint,
                annee:  mur.annee,
              


             }}
            onSubmit={async values => 
  {
                    try {
                   
                        await AsyncStorage.setItem(
                            'activeStep',
                            JSON.stringify(18)
                        );
                        values.images=images;

                        await AsyncStorage.setItem(
                            'emetteur',
                            JSON.stringify(values)
                        );
                        
                   
                    } catch (error) {
                        console.log("error", error)
                        // Error saving data
                    }
                   
                    setActiveSteps(step=>step+1)}
                   
                   
 
 
                
                 }
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={{
                    alignItems: 'center',
                    minHeight: windowHeight-100,
                    justifyContent: 'center',
                    position: "relative",
                }}>
         
                    <ScrollView
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        style={{
                            flex: 1,
                            width: windowWidth
                        }}
                        contentContainerStyle={{
                            flexGrow: 1,
                        }}>

<View style={{  textAlign: "center", justifyContent: "center", width: "100%", height: 80, display: "flex", position: "relative" }}>

<Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "black" }}>
     Emetteurs
</Text>

</View>

                        <View
                            style={{

                                alignItems: 'center',
                                justifyContent: 'center',
                                width: "100%"
                            }}>
                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Type d'??metteur"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('typeDeEmmetteur')}
                                     value={values.typeDeEmmetteur}


                                />
                            </InputView>


                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Syst??me de r??gulation"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('systemeDeregulation')}
                                     value={values.systemeDeregulation}



                                />
                            </InputView>
                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Programmation chauffage"
                                    placeholderTextColor="#003f5c"
 
                                    onChangeText={handleChange('ProgrammationChauffage')}
                                    value={values.ProgrammationChauffage}


                                />
                            </InputView>
                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Syst??me d'appoint"
 
                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('systemDappoint')}
                                    value={values.systemDappoint}


                                />
                            </InputView>
                             
                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Ann??e"
                                    keyboardType="numeric"

                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('annee')}
                                    value={values.annee}


                                />
                            </InputView>
                            
                             

                            <Camera images={images} setImages={setImages} />

                        </View>
                    </ScrollView>
                    <NextStep onPress={handleSubmit} />

                </View>
            )}
        </Formik>
        :null}
                 
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
 
 
 
 export default Emetteur;
 