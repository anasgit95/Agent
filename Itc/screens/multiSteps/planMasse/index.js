/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import { StyleSheet, Text, View, TextInput,   ScrollView } from 'react-native';
 import InputView from '../../components/InputView';
 // import DropDownPicker from 'react-native-dropdown-picker';
 import NextStep from '../../components/NextSteps'
 import { Dimensions } from 'react-native';
 import { AsyncStorage } from 'react-native';
 import { useEffect } from 'react';
  import Head from '../../components/Head'
  import { Formik } from 'formik';
  import Design from './design'
  import { ToastAndroid } from 'react-native';

 const PlanMasse: () => Node = ({ setActiveSteps }) => {
     const windowHeight = Dimensions.get('window').height;
     const windowWidth = Dimensions.get('window').width;
     
 
     const [loading, setLoading] = useState(true)
      const [mur, setMur] = useState({

        longeur: "",
        largeur:  "",
        hauteur:  "",
        orientationPrincipale:  "",
  
      });
  const saveImage=(img)=>{
       let newMur = mur ; 
      newMur.image=img;
      setMur(newMur);
  }
 
     async function fetchData() {
         try {
             const value = JSON.parse(await AsyncStorage.getItem('planMasse'));
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
                 <Head title={"Plan masse"} setActiveSteps={setActiveSteps} />
                {!loading?
                 <Formik
                 
        
                initialValues={{
                    temperaturextarieur: mur.temperaturextarieur,
                    temperatureinterieur:  mur.temperatureinterieur,
                   
           


             }}
            onSubmit={async values => 
  {
                    try {
                   if(mur.image){
                        await AsyncStorage.setItem(
                            'activeStep',
                            JSON.stringify(4)
                        );
                        values.image=mur.image;
                        await AsyncStorage.setItem(
                            'planMasse',
                            JSON.stringify(values)
                        );
                        setActiveSteps(4)
                    }
                    else {
                        
                        ToastAndroid.showWithGravityAndOffset("Vous devez enregistrer l'image",
                    ToastAndroid.LONG,
                    ToastAndroid.TOP, 0, 400) 

                    }
                    } catch (error) {
                        console.log("error", error)
                        // Error saving data
                    }
                   
                   }
                   
                   
 
 
                
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
Relevés de température 
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
                                    placeholder="Température extérieure"
                                    placeholderTextColor="#003f5c"
                                    keyboardType="numeric"

                                    onChangeText={handleChange('temperaturextarieur')}
                                     value={values.temperaturextarieur}


                                />
                            </InputView>


                            <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Température temperatureinterieur"
                                    placeholderTextColor="#003f5c"
                                    keyboardType="numeric"

                                    onChangeText={handleChange('')}
                                     value={values.temperatureinterieur}



                                />
                            </InputView>
                           
                             

                        </View>
                         
                        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "black" ,marginTop:20,marginBottom:20}}>
                        Plan masse (Croquis avec l'indication des orientations)
 
</Text>
                        <Design  saveImage={saveImage}/>
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
 
 
 
 export default PlanMasse;
 