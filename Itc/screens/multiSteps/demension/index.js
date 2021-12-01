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
  import AntDesign from 'react-native-vector-icons/AntDesign'

 const Emission: () => Node = ({ setActiveSteps }) => {
     const windowHeight = Dimensions.get('window').height;
     const windowWidth = Dimensions.get('window').width;
     
 
     const [loading, setLoading] = useState(true)

 
 
     
     
      const [mur, setMur] = useState({

        longeur: "",
        largeur:  "",
        hauteur:  "",
        orientationPrincipale:  "",
  
      });
  
 
     async function fetchData() {
         try {
             const value = JSON.parse(await AsyncStorage.getItem('dimension'));
              if (value !== null ) {
                  setMur(value)
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
                 <Head title={"Forme bâtiment"} setActiveSteps={setActiveSteps} />
                {!loading?
                 <Formik
                 
        
                initialValues={{
                    longeur: mur.longeur,
                    largeur:  mur.largeur,
                    hauteur:  mur.hauteur,
                    orientationPrincipale:  mur.orientationPrincipale,
           


             }}
            onSubmit={async values => 
  {
                    try {
                   
                        await AsyncStorage.setItem(
                            'activeStep',
                            JSON.stringify(5)
                        );
                        
                        await AsyncStorage.setItem(
                            'dimension',
                            JSON.stringify(values)
                        );
                        
                   
                    } catch (error) {
                        console.log("error", error)
                        // Error saving data
                    }
                   
                    setActiveSteps(5)}
                   
                   
 
 
                
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
Dimension
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
                                    placeholder="Longeur"
                                    placeholderTextColor="#003f5c"
                                    keyboardType="numeric"

                                    onChangeText={handleChange('longeur')}
                                     value={values.longeur}


                                />
                            </InputView>


                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="largeur"
                                    placeholderTextColor="#003f5c"
                                    keyboardType="numeric"

                                    onChangeText={handleChange('largeur')}
                                     value={values.largeur}



                                />
                            </InputView>
                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Hauteur"
                                    placeholderTextColor="#003f5c"
                                    keyboardType="numeric"

                                    onChangeText={handleChange('hauteur')}
                                    value={values.hauteur}


                                />
                            </InputView>
                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Orientation façade principale"
 
                                    placeholderTextColor="#003f5c"
                                    onChangeText={handleChange('orientationPrincipale')}
                                    value={values.orientationPrincipale}


                                />
                            </InputView>
                             

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
 