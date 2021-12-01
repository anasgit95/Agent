/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import InputView from '../../components/InputView';
// import DropDownPicker from 'react-native-dropdown-picker';
import NextStep from '../../components/NextSteps'
import { Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import AddMasque from './AddMasque';
import { AsyncStorage } from 'react-native';
import { useEffect } from 'react';
import EditMasque from './EditMasque';
const MasqueMur: () => Node = ({ setActiveSteps }) => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;




    const [mur, setMur] = useState([]);
    const [edit, setEdit] = useState(false);
    const [murToEdit, setMurToEdit] = useState();
    const [index, setIndex] = useState();


    const [add, setAdd] = useState(false);

    async function fetchData() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('MasqueMur'));
            if (value !== null) {
                setMur(value)
            }
            else setMur([])

        } catch (error) {
            console.log(error)
            // Error retrieving data
        }
        // ...
    }
    useEffect(() => {

        fetchData();




    }, []);
    useEffect(() => {


        getMur()


    }, [mur]);
    async function getMur() {
        try {
            await AsyncStorage.setItem(
                'MasqueMur',
                JSON.stringify(mur)
            );

        } catch (error) {
            console.log("error", error)
            // Error saving data
        }
    }
     return (
        add ?
            <AddMasque setAdd={setAdd}   setMur={setMur} />
            :edit?
            <EditMasque 
            index={index}
            murs={mur}
            setEdit={setEdit} 
            mur={murToEdit} 
            setMur={setMur} 
            
            />

            :<View style={{
                alignItems: 'center',
                minHeight: windowHeight,
                minWidth: windowWidth,
                position: "relative",
                paddingBottom: 40,
            }}>
                <View style={{ backgroundColor: "rgb(0,101,147)", textAlign: "center", justifyContent: "center", width: "100%", height: 80, display: "flex", position: "relative" }}>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "white" }}>
                        Masque mur
                    </Text>
                    <TouchableOpacity style={{ position: "absolute", right: 20 }} onPress={() => setAdd(true)}>

                        <AntDesign name="plus" color="white" size={30} />

                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => setActiveSteps(prev=>prev-1)}
                    style={{ position: "absolute", left: 20, bottom: 20 }}>

                    <AntDesign name="arrowleft" color="white" size={30} />

                </TouchableOpacity>
                </View>


                <ScrollView

                    horizontal={false}
                    style={{
                        flex: 1,
                        width: "100%"
                    }}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}>

 
                    <View
                        style={{

                            alignItems: 'center',
                            justifyContent: 'center',
                            width: "100%"
                        }}>


                        {mur.map((item,index) =>
                        <TouchableOpacity style={{width:"100%",marginLeft:"20%"}} onPress={

                            ()=>{
                                setIndex(index)
                                setMurToEdit(item)
                                setEdit(true)
                            }
                        }> 
                            <InputView>
                                <Text key={item.designation} style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 5 }}> {item.designation}</Text>
                            </InputView>
                            </TouchableOpacity>
                        )}









                    </View>
                </ScrollView>

<NextStep onPress={async () => {
 
    try {
  
        await AsyncStorage.setItem(
            'activeStep',
            JSON.stringify(11)
        );
    } catch (error) {
        console.log("error", error)
        // Error saving data
    }

    setActiveSteps(11)


}} />

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



export default MasqueMur;
