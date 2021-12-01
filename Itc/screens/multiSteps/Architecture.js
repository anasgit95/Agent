/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import { StyleSheet, Text, View, TextInput,   ScrollView } from 'react-native';
 import Head from '../components/Head'
 import InputView from '../components/InputView';
 // import DropDownPicker from 'react-native-dropdown-picker';
//  import DropDownPicker from 'react-native-dropdown-picker';
 import NextStep from '../components/NextSteps'
 import { Dimensions } from 'react-native';
 import { RadioButton } from 'react-native-paper';
 import { AsyncStorage } from 'react-native';
import { useEffect } from 'react';
 const Architecture: () => Node = ({ setActiveSteps }) => {
     const windowHeight = Dimensions.get('window').height;
     const [surfacehabtable, setSurfaceHabtable] = useState();
     const [lvlNumber, setLvlNumber] = useState();
     const [platFondLvl, setPlatFondLvl] = React.useState("Comble non aménagés");
     const [plancherBas, setPlancherBas] = React.useState("Sur terre plein");
     const [sousSol, setSousSol] = useState();
     const [rdc, setRdc] = useState();
     const [r1, setR1] = useState();
     const [r2, setR2] = useState();

     
 

  


     async function fetchData() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('Architecture'));
            
            if (value !== null) {
                setLvlNumber(value.lvlNumber)
                setSurfaceHabtable(value.surfacehabtable)
                setPlatFondLvl(value.platFondLvl)
                setPlancherBas(value.plancherBas)
                setSousSol(value.sousSol)
                setR2(value.r2)
                setR1(value.r1)
                setRdc(value.rdc)


               
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
             position: "relative",
             paddingBottom:40
         }}>
             <Head title={"ARCHITECTURE"}  setActiveSteps={setActiveSteps}/>
             <ScrollView
 
                 horizontal={false}
                 style={{
                     flex: 1,
                 }}
                 contentContainerStyle={{
                     flexGrow: 1,
                 }}>
 
 
                 <View
                     style={{
 
                         alignItems: 'center',
                         justifyContent: 'center',
                         width: "91%"
                     }}>
 
 
   
                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="Surface habtable"
                             keyboardType="numeric"
                             value={surfacehabtable}
                             placeholderTextColor="#003f5c"
                             onChangeText={setSurfaceHabtable} />
                     </InputView>
                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="Nombre de niveaux"
                             keyboardType="numeric"
                             value={lvlNumber}
                             placeholderTextColor="#003f5c"
                             onChangeText={setLvlNumber} />
                     </InputView>
                     <Text style={{ paddingTop: 10, fontWeight: "bold",color:"black",}}>Hauteur par niveau?</Text>

                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="Sous sol"
                             keyboardType="numeric"
                             value={sousSol}
                             placeholderTextColor="#003f5c"
                             onChangeText={setSousSol} />
                     </InputView>
                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="RDC"
                             keyboardType="numeric"
                             value={rdc}
                             placeholderTextColor="#003f5c"
                             onChangeText={setRdc} />
                     </InputView>
                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="R+1"
                             keyboardType="numeric"
                             value={r1}
                             placeholderTextColor="#003f5c"
                             onChangeText={setR1} />
                     </InputView>
                     <InputView>
                         <TextInput
                             style={styles.inputText}
                             placeholder="R+2"
                             keyboardType="numeric"
                             value={r2}
                             placeholderTextColor="#003f5c"
                             onChangeText={setR2} />
                     </InputView>
                     <Text style={{ paddingTop: 10, fontWeight: "bold",color:"black",}}>Nature du plafond ?</Text>
 
                     <RadioButton.Group onValueChange={setPlatFondLvl} value={platFondLvl}>
 
                     <View style={{display:"flex", flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 10 }}>
 
                             <View style={{ flexDirection: "row",flex:1 }}>
                                 <RadioButton value="Comble non aménagés" />
                                 <Text style={{ paddingTop: 10 }}>Comble non aménagés</Text>
 
                             </View>
                             <View style={{ flexDirection: "row",flex:1.3}}>
                                 <RadioButton value="Comble aménagés" />
                                 <Text style={{ paddingTop: 10 }}>Comble aménagés</Text>
 
 
 
                             </View>
                             <View style={{ flexDirection: "row",flex:0.6 }}>
                                 <RadioButton value="Toiture terrasse" />
                                 <Text style={{ paddingTop: 10 }}>Toiture terrasse</Text>
 
 
 
                             </View>
                         </View>
                     </RadioButton.Group>
 
  
                      
  
 
  
 
 
                   
 
                     <Text style={{ paddingTop: 10, fontWeight: "bold",color:"black" }}>Nature du plancher bas ?</Text>
 
 <RadioButton.Group onValueChange={setPlancherBas} value={plancherBas}>

 <View style={{display:"flex", flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 10 }}>

         <View style={{ flexDirection: "row",flex:1 }}>
             <RadioButton value="Sur terre plein" />
             <Text style={{ paddingTop: 10 }}>Sur terre plein </Text>

         </View>
         <View style={{ flexDirection: "row",flex:1.3}}>
             <RadioButton value="Sur vide sanitaires" />
             <Text style={{ paddingTop: 10 }}>Sur vide sanitaires</Text>



         </View>
         <View style={{ flexDirection: "row",flex:0.6,marginBottom:100}}>
             <RadioButton value="second" />
             <Text style={{ paddingTop: 10 }}>Sur sous sol</Text>



         </View>
     </View>
 </RadioButton.Group>


  












 
 
 
 
 
 
                     
 
 
 
  
 
                 </View>
             </ScrollView>
 
             <NextStep  onPress={async () => {


let gener = {
    surfacehabtable,
    lvlNumber,
    platFondLvl,
    plancherBas,
    sousSol,
    rdc,
    r1,
    r2
     

}
try {
    await AsyncStorage.setItem(
        'Architecture',
        JSON.stringify(gener)
    );
    await AsyncStorage.setItem(
        'activeStep',
        JSON.stringify(3)
    );
} catch (error) {
    console.log("error", error)
    // Error saving data
}

setActiveSteps(3)


}}  />
 
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
 
 
 
 export default Architecture;
 