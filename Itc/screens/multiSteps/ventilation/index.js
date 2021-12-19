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

 const Ventilation: () => Node = ({setActiveSteps}) => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const [images, setImages] = useState([]);

    const [ventilation, setVentilation] = useState({
        typeventilation: "Mécanique simple flux",
        systemventilation:" auto réglable avant 1982",
        nombreDePiece:{
            principale:"",
            sdb:"",
            salleEau:"",
            wc:""
        },
        caracteristique:{
            puissance:"",
            annee:""
        }
      
 
     });
     const [loading, setLoading] = useState(true);

      
 
     async function fetchData() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('ventilation'));
             if (value !== null  ) {
                await setVentilation(value)
                setLoading(false)
                if(value.images)
                setImages(value.images)
 
            }   
            else {
                await AsyncStorage.setItem(
                'ventilation',
                JSON.stringify(ventilation)
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
           
           <Head title={"Ventilation"} setActiveSteps={setActiveSteps} />
{         !loading?
      <Formik
             initialValues={{
                typeventilation: ventilation.typeventilation,
                systemventilation:ventilation.systemventilation,
                nombreDePiece:ventilation.nombreDePiece,
                caracteristique:ventilation.caracteristique
             }}
             onSubmit={async (values) => {
 
                try {
               values.images=images
                    await AsyncStorage.setItem(
                        'activeStep',
                        JSON.stringify(20)
                    );
                    await AsyncStorage.setItem(
                        'ventilation',
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
Système de ventilation 



</Text>

</View>
<Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 17, color: "grey",marginLeft:50 }}>
Type de ventilation 



</Text>
                         <View
                             style={{
 
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 width: "100%"
                             }}>
                             

                            <RadioButton.Group onValueChange={handleChange('typeventilation')}
                             value={values.typeventilation}>
 
                             <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
 
                                 <View style={{ flexDirection: "row", flex: 1 }}>
                                     <RadioButton value="Mécanique simple flux" />
                                     <Text style={{ paddingTop: 10 }}>Mécanique simple flux</Text>
 
                                 </View>
                                 <View style={{ flexDirection: "row", flex: 1 }}>
                                     <RadioButton value="Mécanique double flux" />
                                     <Text style={{ paddingTop: 10 }}> Mécanique double flux</Text>
 
 
 
                                 </View>
                                 <View style={{ flex: 1 }}>

                                 <View style={{ flexDirection: "row", flex: 1 }}>
                                    
                                     <RadioButton value="Par ouverture de fenêtres" />
                                     <Text style={{ paddingTop: 10 }}>Par ouverture de fenêtres</Text>
 
                                
                                </View>
                               
                                 </View>
                              
                             </View>
 
                             <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
 
                                 <View style={{ flexDirection: "row", flex: 1 }}>
                                     <RadioButton value="Ventilation hautes et basses   " />
                                     <Text style={{ paddingTop: 10 }}>Ventilation hautes et basses</Text>
 
                                 </View>
                                 <View style={{ flexDirection: "row", flex: 1 }}>
                                     <RadioButton value="Présence échangeur" />
                                     <Text style={{ paddingTop: 10 }}> Présence échangeur</Text>
 
 
 
                                 </View>
                                 <View style={{ flex: 1 }}>

                                 <View style={{ flexDirection: "row", flex: 1 }}>
                                    
                                     <RadioButton value="Autre" />
                                     <Text style={{ paddingTop: 10 }}>Autre préciser</Text>
 
                                
                                </View>
                                {values.systemeRefroidissement==="Autre"?
                                      <InputView>
                                      <TextInput
                                         style={styles.inputText}
                                         placeholder="préciser"
                                         placeholderTextColor="#003f5c"
                                         value={values.surfacesRefroidie}
                                         onChangeText={handleChange("Preciser")} />
                                 </InputView>
                                 :null
                                }
                                 </View>
                              
                             </View>
                         </RadioButton.Group>
 
 
                         </View>


                         <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 17, color: "grey",marginLeft:50,marginTop:30 }}>
Systéme de ventilation 



</Text>
                         <View
                             style={{
 
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 width: "100%"
                             }}>
                             

                            <RadioButton.Group onValueChange={handleChange('systemventilation')}
                             value={values.systemventilation}>
 
                             <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", marginLeft: "10%", marginTop: 10 }}>
 
                                 <View style={{ flexDirection: "row", flex: 1 }}>
                                     <RadioButton value="Auto réglable avant 1982" />
                                     <Text style={{ paddingTop: 10 }}> Auto réglable avant 1982</Text>
 
                                 </View>
                                 <View style={{ flexDirection: "row", flex: 1 }}>
                                     <RadioButton value="Auto réglable après 1982" />
                                     <Text style={{ paddingTop: 10 }}> Auto réglable après 1982</Text>
 
 
 
                                 </View>
                                            <View style={{ flexDirection: "row", flex: 0.6 }}>
                                    
                                     <RadioButton value="Hygro A" />
                                     <Text style={{ paddingTop: 10 }}>Hygro A</Text>
 
                                
                                </View>
                                <View style={{ flexDirection: "row", flex: 1 }}>
                                    
                                    <RadioButton value="Hygro B" />
                                    <Text style={{ paddingTop: 10 }}>Hygro B</Text>

                               
                               </View>
                             </View>
 
                          
                              
                          </RadioButton.Group>
 
 
                         </View>
                         <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 17, color: "grey",marginLeft:50,marginTop:30 }}>
                         Nombre de pièces  



</Text> 
<View
                             style={{
 
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 width: "100%"
                             }}>
                                 <InputView>
                                 <TextInput
                                     style={styles.inputText}
                                     placeholder="Pièces principales"
                                     placeholderTextColor="#003f5c"
                                     onChangeText={handleChange('nombreDePiece.principale')}
                                      value={values.nombreDePiece.principale}
 
 
                                 />
                             </InputView>
                             <InputView>
                                 <TextInput
                                     style={styles.inputText}
                                     placeholder="SDB"
                                     placeholderTextColor="#003f5c"
                                     onChangeText={handleChange('nombreDePiece.sdb')}
                                      value={values.nombreDePiece.sdb}
 
 
                                 />
                             </InputView>

                             <InputView>
                                 <TextInput
                                     style={styles.inputText}
                                     placeholder="Salle d'eau"
                                     placeholderTextColor="#003f5c"
                                     onChangeText={handleChange('nombreDePiece.salleEau')}
                                      value={values.nombreDePiece.salleEau}
 
 
                                 />
                             </InputView>
                             <InputView>
                                 <TextInput
                                     style={styles.inputText}
                                     placeholder="WC"
                                     placeholderTextColor="#003f5c"
                                     onChangeText={handleChange('nombreDePiece.wc')}
                                      value={values.nombreDePiece.wc}
 
 
                                 />
                             </InputView>
                             </View>




                             <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 17, color: "grey",marginLeft:50,marginTop:30 }}>
                             Caractéristique 



</Text> 
<View
                             style={{
 
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 width: "100%"
                             }}>
                                 <InputView>
                                 <TextInput
                                     style={styles.inputText}
                                     placeholder="Puissance ventilateur KW"
                                     placeholderTextColor="#003f5c"
                                     onChangeText={handleChange('caracteristique.puissance')}
                                      value={values.caracteristique.puissance}
 
 
                                 />
                             </InputView>
                             <InputView>
                                 <TextInput
                                     style={styles.inputText}
                                     placeholder="Année"
                                     placeholderTextColor="#003f5c"
                                     onChangeText={handleChange('caracteristique.annee')}
                                      value={values.caracteristique.annee}
 
 
                                 />
                             </InputView>

                             
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
 
 
 
 export default Ventilation;
 