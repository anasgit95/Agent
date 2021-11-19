/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React  from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

  

const Head: () => Node = ({title, setActiveSteps,hide}) => {
 
  

  return (
   <View style={{backgroundColor:"rgb(0,101,147)",textAlign:"center",justifyContent:"center",width:"100%",height:80}}> 
   <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20,color:"white"}}> 
    {title}
   </Text>
   {hide?null: 
   <TouchableOpacity
                    onPress={() => setActiveSteps(prev=>prev-1)}
                    style={{ position: "absolute", left: 20, bottom: 20 }}>

                    <AntDesign name="arrowleft" color="white" size={30} />

                </TouchableOpacity>
                }
   </View>
  );
};

 

export default Head;
