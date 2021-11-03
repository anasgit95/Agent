/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React  from 'react';
import { View,Text } from 'react-native';
 
  

const Head: () => Node = ({title}) => {
 
  

  return (
   <View style={{backgroundColor:"rgb(0,101,147)",textAlign:"center",justifyContent:"center",width:"100%",height:80}}> 
   <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20,color:"white"}}> 
{title}
   </Text>

   </View>
  );
};

 

export default Head;
