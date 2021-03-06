/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TextInput,  ScrollView } from 'react-native';
import Head from '../components/Head'
import InputView from '../components/InputView';
// import DropDownPicker from 'react-native-dropdown-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import NextStep from '../components/NextSteps'
import { Dimensions } from 'react-native';
 import { AsyncStorage } from 'react-native';
import GetLocation from 'react-native-get-location'
import Geocoder from 'react-native-geocoding';
import { ToastAndroid } from 'react-native';

const Generaliter: () => Node = ({setActiveSteps}) => {
    Geocoder.init("AIzaSyCk8E3zVDItAxwOTYuzQW29k_m_aE0luQk"); 

    const windowHeight = Dimensions.get('window').height;
    const [fullName, setFullName] = useState();
    const [phone, setPhone] = useState();

    const [adresse, setAdresse] = useState();
    const [postalCode, setPostalCode] = useState();
    const [yearConstruction, setYearConstruction] = useState();
    const [occupantNumber, setOccupantNumber] = useState();
    const [adultNumber, setAdultNumber] = useState();
    const [email, setEmail] = useState();

    const [open, setOpen] = useState(false);
    const [type, setType] = useState(null);
    const [typepreciser, setTypepreciser] = useState(null);

    const [items, setItems] = useState([
        { label: 'Maison individuelle', value: 'Maison individuelle' },
        { label: 'Appartement', value: 'Appartement' },
        { label: 'Logement collectif', value: 'Logement collectif' },
        { label: 'Préciser', value: 'Préciser' },



    ]);
    const parseAddress = (components) => {
         const result = {
          line1: ["", "", ""], // Make line1 an arry so we an arr.join(' ').trim() and not have to worry about fields being there or not
          suburb: "",
          city: "",
          county: "",
          country: "",
          postcode: "",
        };
    
        components.forEach((component) => {
          component.types.forEach((type) => {
             if (type === "subpremise") {
              result.line1[0] = component.long_name;
            }
            if (type === "street_number") {
              result.line1[1] = component.long_name;
            }
            if (type === "route") {
              result.line1[2] = component.long_name;
            }
            if (
              ["neighborhood", "sublocality", "sublocality_level_2"].includes(type)
            ) {
              result.suburb = component.long_name;
            }
            if (
              ["locality", "postal_town", "administrative_area_level_1"].includes(
                type
              )
            ) {
              result.city = component.long_name;
            }
            if (type === "administrative_area_level_2") {
              result.county = component.long_name;
            }
            if (type === "country") {
              result.country = component.long_name;
            }
    
            if (type === "postal_code") {
              result.postcode = component.long_name;
            }
          });
        });

        return result;
    }

    async function fetchData() {
        try { 
            const  value = JSON.parse(await AsyncStorage.getItem('Generalite')) ;
             if (value !== null){
                setEmail(value.email)
                setPhone(value.phone)

                 setFullName(value.fullName)
                setAdresse(value.adresse)
                setPostalCode(value.postalCode)
                setYearConstruction(value.yearConstruction)
                setOccupantNumber(value.occupantNumber)
                setAdultNumber(value.adultNumber)
                setType(value.type)
                 setTypepreciser(value.typepreciser )
              // We have data!!
             }
          } catch (error) {
              console.log(error)
            // Error retrieving data
          }
        // ...
      }
      
    useEffect(() => {
      
          fetchData();

          GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
 
             Geocoder.from(location).then(json => {
          		// var addressComponent = json.results[0].address_components[2];
			    // console.log(addressComponent);
                const parsedAddress = parseAddress(json.results[0].address_components);


                console.log("parsedAddress",parsedAddress)
                setAdresse(parsedAddress.city)
                setPostalCode(parsedAddress.postcode)

            //    console.log(json.results[0].address_components[2].short_name)
		})
		.catch(error => console.log(error));;

        })
        .catch(error => {
            const { code, message } = error;
            console.log(code, message);
        })
        
    
    
    },[]);
    // const [date, setDate] = useState(new Date());

       return (
        <View style={{
            alignItems: 'center',
            minHeight:windowHeight,
            justifyContent: 'center',
            position:"relative",
         }}>
            <Head hide={true} title={"GENERALITE"}  setActiveSteps={setActiveSteps}/>
            <ScrollView
            nestedScrollEnabled={true}
             showsVerticalScrollIndicator={false}
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
            width:"83%"
        }}>
            <InputView>
                <TextInput
                    style={styles.inputText}
                    value={fullName}
                    placeholder="Nom et prénom"
                    placeholderTextColor="#003f5c"
                    onChangeText={setFullName} />
            </InputView>
            <InputView>
                <TextInput
                    style={styles.inputText}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={setEmail} />
            </InputView>
            <InputView>
                <TextInput
                    style={styles.inputText}
                    value={phone}
                    placeholder="Phone"
                    keyboardType="number-pad"
                    placeholderTextColor="#003f5c"
                    onChangeText={setPhone} />
            </InputView>
            <InputView>
                <Text style={{
                    height: 50,
                    color: "#006593",
                    paddingTop: 10,
                    paddingLeft: 5
                }}
                >
                    {new Date().toISOString().slice(0, 10) }
                </Text>
            </InputView>
            <InputView>
                <TextInput
                value={adresse}
                    style={styles.inputText}
                    placeholder="Adresse"
                    placeholderTextColor="#003f5c"
                    onChangeText={setAdresse} />
            </InputView>
            <InputView>
                <TextInput
                    value={postalCode}
                    style={styles.inputText}
                    placeholder="Code postal"
                    keyboardType="numeric"

                    placeholderTextColor="#003f5c"
                    onChangeText={setPostalCode} />
            </InputView>
            <InputView  >
                <DropDownPicker
                    dropDownDirection="TOP"

                style={{borderColor:"transparent",zIndex:50000}}
                    placeholder="Type"
                    open={open}
                    value={type}
                    items={items}
                    setOpen={setOpen}
                    setValue={setType}
                    setItems={setItems}
                />
            </InputView>
            {type==="Préciser"?
                <InputView>
                <TextInput
                    style={styles.inputText}
                    value={typepreciser}
                     placeholder="Ajouter le type"
                    placeholderTextColor="#003f5c"
                    onChangeText={setTypepreciser} />
            </InputView>
            :null
        }
        
            <InputView>
                <TextInput
                value={yearConstruction}
                    style={styles.inputText}
                    placeholder="Année de construction"
                    keyboardType="numeric"

                    placeholderTextColor="#003f5c"
                    onChangeText={setYearConstruction} />
            </InputView>
            <InputView>
                <TextInput
                    style={styles.inputText}
                    placeholder="Nombre des occupants"
                    keyboardType="numeric"
                    value={occupantNumber}
                    placeholderTextColor="#003f5c"
                    onChangeText={setOccupantNumber} />
            </InputView>
            <InputView>
                <TextInput
                    style={styles.inputText}
                    placeholder="Nombre d'adultes"
                    keyboardType="numeric"
                    value={adultNumber}

                    placeholderTextColor="#003f5c"
                    onChangeText={setAdultNumber} />
            </InputView>
            </View>
            </ScrollView>
            <NextStep onPress={async()=>{
 
              if(

                fullName&&
                    adresse&&
                    postalCode&&
                    yearConstruction&&
                    occupantNumber&&
                    adultNumber&&
                    type&&
                    email&&
                    phone
               )
          {      let gener = {
                    fullName,
                    adresse,
                    postalCode,
                    yearConstruction,
                    occupantNumber,
                    adultNumber,
                    type,
                    email,
                    phone,
                    typepreciser
                    
                   
              
                 }
                 try {
                    await AsyncStorage.setItem(
                      'Generalite',
                      JSON.stringify(gener)
                    );
                    await AsyncStorage.setItem(
                        'activeStep',
                        JSON.stringify(1)
                      );
                  } catch (error) {
                      console.log("error",error)
                    // Error saving data
                  }
                
                setActiveSteps(1)}
                
                else  ToastAndroid.showWithGravityAndOffset("Vous devez remplir tous les champs",
ToastAndroid.LONG,
ToastAndroid.TOP, 0, 400) 
                }}
                />

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



export default Generaliter;
