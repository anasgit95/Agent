/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import { StyleSheet, Text, View, TextInput,ScrollView } from 'react-native';
 import InputView from '../../components/InputView';
 // import DropDownPicker from 'react-native-dropdown-picker';
 import NextStep from '../../components/NextSteps'
 import { Dimensions } from 'react-native';
 import { AsyncStorage } from 'react-native';
 import { useEffect } from 'react';
  import Head from '../../components/Head'
  import { Formik } from 'formik';
  import Camera from '../pickerImage/camera'

 const Emission: () => Node = ({ setActiveSteps }) => {
     const windowHeight = Dimensions.get('window').height;
     const windowWidth = Dimensions.get('window').width;
     
 
     const [loading, setLoading] = useState(true)
     const [images, setImages] = useState([]);

      const [mur, setMur] = useState({

        energieDeChuaffage: "",
        typeGenerateur:  "",
        puissanceNominale:  "",
        nombreDeGenerateur:  "",
        poisition: "",
        annee:""
      });
  
 
     async function fetchData() {
         try {
             const value = JSON.parse(await AsyncStorage.getItem('emission'));
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
                energieDeChuaffage: mur.energieDeChuaffage,
                typeGenerateur:  mur.typeGenerateur,
                puissanceNominale:  mur.puissanceNominale,
                nombreDeGenerateur:  mur.nombreDeGenerateur,
                position:  mur.position,
                annee:  mur.annee,
                systempoint:  mur.systempoint,
                puissance:  mur.puissance,


             }}
            onSubmit={async values => 
  {
                    try {
                        values.images=images
                   
                        await AsyncStorage.setItem(
                            'activeStep',
                            JSON.stringify(17)
                        );
                        
                        await AsyncStorage.setItem(
                            'emission',
                            JSON.stringify(values)
                        );
                        
                   
                    } catch (error) {
                        console.log("error", error)
                        // Error saving data
                    }
                   
                    setActiveSteps(active=>active+1)}
                   
                   
 
 
                
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
                            width: windowWidth,
 
                        }}
                        contentContainerStyle={{
                            flexGrow: 1,
                        }}>

<View style={{  textAlign: "center", justifyContent: "center", width: "100%", height: 80, display: "flex", position: "relative" }}>

<Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "black" }}>
     Systéme de chauffage
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
                                    placeholder="Energie de chauffage"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('energieDeChuaffage')}
                                     value={values.energieDeChuaffage}


                                />
                            </InputView>


                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Type de générateur"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('typeGenerateur')}
                                     value={values.typeGenerateur}



                                />
                            </InputView>
                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Puissance nominale"
                                    placeholderTextColor="#003f5c"
                                    keyboardType="numeric"

                                    onChangeText={handleChange('puissanceNominale')}
                                    value={values.puissanceNominale}


                                />
                            </InputView>
                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Nombre de générateur"
                                    keyboardType="numeric"

                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('nombreDeGenerateur')}
                                    value={values.nombreDeGenerateur}


                                />
                            </InputView>
                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Position (en vol chauffé )"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('position')}
                                    value={values.position}


                                />
                            </InputView>
                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Année"
                                    keyboardType="numeric"

                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('annee')}
                                    value={values.annee}


                                />
                            </InputView>
                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Systéme d'appoint"
 
                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('systempoint')}
                                    value={values.systempoint}


                                />
                            </InputView>
                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Puissance de l'appoint (kw)"
                                    keyboardType="numeric"

                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('puissance')}
                                    value={values.puissance}


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
 
 
 
 export default Emission;
 