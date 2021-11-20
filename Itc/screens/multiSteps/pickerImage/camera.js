import ActionSheet from 'react-native-actions-sheet';
import React, { createRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text,TextInput, TouchableOpacity, PermissionsAndroid ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from "react-native-image-picker"
// import ImageFactory from 'react-native-image-picker-form'
//import ImagePicker from 'react-native-image-crop-picker';
// import ImageResizer from 'react-native-image-resizer';
import InputView from '../../components/InputView';

 
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const actionSheetRefs = createRef();
let options = {
   includeBase64: true //add this in the option to include base64 value in the response
}
const App = props => {

  const [images, setImages] = useState([]);
 const handleChange=(text,index) =>{
  let NewImages = [...images] 
   NewImages[index].name=text
  setImages(NewImages )
 }
  const save = async (photo) => {
    try {
      let NewImages = [...images] 
          NewImages.push({
            photo,
            name:""
          })
          setImages(NewImages )
 
    } catch (error) {
      console.log(error)
    }
  }
   return (
    <View style={styles.button}>
      <TouchableOpacity
        onPress={() => {
          actionSheetRefs.current?.setModalVisible();
        }}
      >
        <View style={styles.plus}>
          <Icon  style={{paddingTop:5}} name="camera" size={27} color="rgb(112, 112, 112)" />
          <Text style={{fontWeight:"bold",paddingTop:10,marginLeft:10}}>
            Ajouter des images
          </Text>
        </View>
      </TouchableOpacity>
 
      <ActionSheet
        containerStyle={{ width: '95%', height: 180 }}
        extraScroll={25}
        ref={actionSheetRefs}
      >
        <View  >
          <TouchableOpacity
            onPress={async () => {

              try {
                const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.CAMERA,
                  {
                    title: "App Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                  }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {


                  ImagePicker.launchCamera(options, response => {
                    if (response.didCancel) {
                      console.log('User cancelled image picker');
                    } else if (response.error) {
                      console.log('ImagePickerManager Error: ', response.error);
                    } else if (response.customButton) {
                      console.log(
                        'User tapped custom button: ',
                        response.customButton,
                      );
                    } else {
                      try {
                        save(response.assets[0].base64)

                      } catch (error) {
                        console.log(error)
                      }


                       

                      // Same code as in above section!


                    }

                    // Same code as in above section!
                  });

                } else {
                  console.log("Camera permission denied");
                }
              } catch (err) {
                console.warn(err);
              }
             
            }
            }
            //   }
            style={{
               justifyContent: 'center',
              alignItems: 'center',

              height: 70,
            }}

          >
            <View

            >

              <Text
                style={{
                  color: 'rgb(112, 112, 112)',
                  fontSize: 26,
                  fontWeight: 'bold',


                }}
              ><MaterialIcon
                  name="camera"
                  size={20}
                />
                Caméra
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <View
              style={{
                borderBottomColor: '#E0E0E3',
                borderBottomWidth: 1,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: 70,
              }}
            />


            <TouchableOpacity

              onPress={() => {
                try {
                  ImagePicker.launchImageLibrary(options, response => {
                    if (response.didCancel) {
                      console.log('User cancelled image picker');
                    } else if (response.error) {
                      console.log('ImagePickerManager Error: ', response.error);
                    } else if (response.customButton) {
                      console.log(
                        'User tapped custom button: ',
                        response.customButton,
                      );
                    } else {
                       save(response.assets[0].base64)

                    }

                    // Same code as in above section!
                  });

                } catch (error) {
                  console.log(error)
                }
              }}

            >
              <Text
                style={{
                  color: 'rgb(112, 112, 112)',
                  fontSize: 26,
                  fontWeight: 'bold',
                  alignSelf: "center",
                  marginBottom: 5

                }}
              ><MaterialIcon
                  name="image-multiple"
                  size={20}
                />
                Galerie
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomColor: '#E0E0E3',
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View
          style={{
             justifyContent: 'center',
            alignItems: 'center',
            height: 70,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              actionSheetRefs.current?.setModalVisible(false);
            }}
          >
            <Text
              style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}
            >
              Annuler
            </Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
      {images.map((pic,index)=>
  <View> 
       <Image
       style={{widht:"100%" , height:250}}
       source={{
         uri: "data:image/png;base64,"+pic.photo,
       }}
     />
     
     <InputView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Nom"
                                    placeholderTextColor="#003f5c"
                                     value={pic.name}
                                     onChangeText={text => handleChange(text,index)} />

                                      
                            </InputView>
     </View>
    
    )}
    </View>
  );
};


export default App
const styles = StyleSheet.create({
  button: {
 flex:1,

  },
  ajouter: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
     marginVertical: 10,
  },
  plus: {
     justifyContent: 'center',
    flexDirection: 'row',
    marginTop:20,
    height: 40,
    width: "100%",
    display:"flex",
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 10,
  },
  inputView: {
    width: "100%",
    backgroundColor: "white",
    borderColor: "#006593",
    borderWidth: 1,

    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
},
});
