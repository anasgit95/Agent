/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState,useEffect} from 'react';
 import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
 import InputView from '../../components/InputView';
 // import DropDownPicker from 'react-native-dropdown-picker';
  import { Dimensions } from 'react-native';
 import AntDesign from 'react-native-vector-icons/AntDesign'
  import { AsyncStorage } from 'react-native';
 import { Formik } from 'formik';
 import NextStep from '../../components/NextSteps'
 import { RadioButton } from 'react-native-paper';
 import Head from '../../components/Head'
 import Camera from '../pickerImage/camera'

 const Refroidissement: () => Node = ({setActiveSteps}) => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const [refroidissement, setRefroidissement] = useState({
        systemeRefroidissement: "Bâtiment non Refroidie",
      
 
     });
     const [loading, setLoading] = useState(true);

     const [images, setImages] = useState([]);
     async function fetchData() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('refroidissement'));
             if (value !== null  ) {
                await setRefroidissement(value)
                setLoading(false)
                if(value.images)
                setImages(value.images)
            }
            else {
                await AsyncStorage.setItem(
                'refroidissement',
                JSON.stringify(refroidissement)
            )
            setLoading(false)

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
           
           <Head title={"Refroidissements"} setActiveSteps={setActiveSteps} />
           { !loading?
         <Formik
             initialValues={{
                systemeRefroidissement: refroidissement.systemeRefroidissement,
                  
             }}
             onSubmit={async (values) => {
 
                try {
                    values.images=images
                    await AsyncStorage.setItem(
                        'activeStep',
                        JSON.stringify(20)
                    );
                    await AsyncStorage.setItem(
                        'refroidissement',
                        JSON.stringify(values)
                    );
                } catch (error) {
                    console.log("error", error)
                    // Error saving data
                }
               
                setActiveSteps(active=>active+1)
               
               
               }
             }
         >
             {({ handleChange, handleBlur, handleSubmit, values }) => (
              

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
 
 <View style={{  textAlign: "center", justifyContent: "center", width: "100%", height: 80, display: "flex", position: "relative" }}>

<Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "black" }}>
Système de Refroidissement 



</Text>

</View>
                         <View
                             style={{
 
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 width: "100%"
                             }}>
                             
                            <RadioButton.Group onValueChange={handleChange('systemeRefroidissement')}
                             value={values.systemeRefroidissement}>
 
                             <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
 
                                 <View style={{ flexDirection: "row", flex: 1 }}>
                                     <RadioButton value="Bâtiment non Refroidie" />
                                     <Text style={{ paddingTop: 10 }}>Bâtiment non Refroidie</Text>
 
                                 </View>
                                 <View style={{ flexDirection: "row", flex: 1 }}>
                                     <RadioButton value="Présence d'une cheminé sans trappe" />
                                     <Text style={{ paddingTop: 10 }}> Présence d'une cheminé sans trappe</Text>
 
 
 
                                 </View>
                                 <View style={{ flex: 1 }}>

                                 <View style={{ flexDirection: "row", flex: 1 }}>
                                    
                                     <RadioButton value="Surfaces refroidie" />
                                     <Text style={{ paddingTop: 10 }}>Surfaces refroidie</Text>
 
                                
                                </View>
                                {values.systemeRefroidissement==="Surfaces refroidie"?
                                      <InputView>
                                      <TextInput
                                         style={styles.inputText}
                                         placeholder="Surfaces refroidie"
                                         placeholderTextColor="#003f5c"
                                         value={values.surfacesRefroidie}
                                         onChangeText={handleChange("SurfacesRefroidie")} />
                                 </InputView>
                                 :null
                                }
                                 </View>
                              
                             </View>
 
                         </RadioButton.Group>
 
                         <Camera images={images} setImages={setImages} />

                         </View>
                         <NextStep onPress={handleSubmit} />

                     </ScrollView>
                 
 
             )}
         </Formik>
         :<View style={{height:windowHeight}}> 
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
 
 
 
 export default Refroidissement;
 