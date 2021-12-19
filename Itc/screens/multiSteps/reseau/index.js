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

 const Reseau: () => Node = ({ setActiveSteps }) => {
     const windowHeight = Dimensions.get('window').height;
     const windowWidth = Dimensions.get('window').width;
     
     const [images, setImages] = useState([]);

     const [loading, setLoading] = useState(true)

 
 
     
     
      const [mur, setMur] = useState({
 
        typeOfemssion:""
      });
  
 
     async function fetchData() {
         try {
             const value = JSON.parse(await AsyncStorage.getItem('reseau'));
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
                    typeOfemssion: mur.typeOfemssion,
                distrubtionDesReseau:  mur.distrubtionDesReseau,
                regulationTemperature:  mur.regulationTemperature,
                circulateur:  mur.circulateur,
     
              


             }}
            onSubmit={async values => 
  {
                    values.images=images
                    try {
                   
                        await AsyncStorage.setItem(
                            'activeStep',
                            JSON.stringify(18)
                        );
                        
                        await AsyncStorage.setItem(
                            'reseau',
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
Réseau de distrubution
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
                                    placeholder="Type (émission HT, émission BT..)"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('typeOfemssion')}
                                     value={values.typeOfemssion}


                                />
                            </InputView>


                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Distribution des réseaux (Monotube,bitube..)"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('distrubtionDesReseau')}
                                     value={values.distrubtionDesReseau}



                                />
                            </InputView>
                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Régulation température"
                                    placeholderTextColor="#003f5c"
 
                                    onChangeText={handleChange('regulationTemperature')}
                                    value={values.regulationTemperature}


                                />
                            </InputView>
                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Circulateur"
 
                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('circulateur')}
                                    value={values.circulateur}


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
 
 
 
 export default Reseau;
 