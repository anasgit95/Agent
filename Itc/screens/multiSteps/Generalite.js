/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Head from '../components/Head'
import InputView from '../components/InputView';
// import DropDownPicker from 'react-native-dropdown-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import NextStep from '../components/NextSteps'
import { Dimensions } from 'react-native';

const Generaliter: () => Node = ({setActiveSteps}) => {
    const windowHeight = Dimensions.get('window').height;

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Maison individuelle', value: 'MI' },
        { label: 'Appartement', value: 'Ap' },
        { label: 'Logement collectif', value: 'Lc' },
        { label: 'Teritiare', value: 'T' },



    ]);
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };


    return (
        <View style={{
            alignItems: 'center',
            minHeight:windowHeight,
            justifyContent: 'center',
            position:"relative",
         }}>
            <Head title={"GENERALITE"} />
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
                    placeholder="Nom et prénom"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => console.log(text)} />
            </InputView>

            <InputView>
                <Text style={{
                    height: 50,
                    color: "#006593",
                    paddingTop: 10,
                    paddingLeft: 5
                }}
                >
                    Date de visite
                </Text>
            </InputView>
            <InputView>
                <TextInput
                    style={styles.inputText}
                    placeholder="Adresse"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => console.log(text)} />
            </InputView>
            <InputView>
                <TextInput
                    style={styles.inputText}
                    placeholder="Code postal"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => console.log(text)} />
            </InputView>
            <InputView  >
                <DropDownPicker
                    dropDownDirection="TOP"

                style={{borderColor:"transparent",zIndex:50000}}
                    placeholder="Type"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </InputView>
            <InputView>
                <TextInput
                    style={styles.inputText}
                    placeholder="Année de construction"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => console.log(text)} />
            </InputView>
            <InputView>
                <TextInput
                    style={styles.inputText}
                    placeholder="Nombre des occupants"
                    keyboardType="numeric"

                    placeholderTextColor="#003f5c"
                    onChangeText={text => console.log(text)} />
            </InputView>
            <InputView>
                <TextInput
                    style={styles.inputText}
                    placeholder="Nombre d'adultes"
                    keyboardType="numeric"

                    placeholderTextColor="#003f5c"
                    onChangeText={text => console.log(text)} />
            </InputView>
            </View>
            </ScrollView>
            <NextStep onPress={()=>setActiveSteps(1)}/>

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
