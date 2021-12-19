
import {
    StyleSheet,
   Text,
   View, TouchableHighlight
} from 'react-native';
import React,{Component} from 'react';
import SignatureCapture from 'react-native-signature-capture';

export default class RNSignatureExample extends Component {
   render() {
       return (
           <View style={{ flex: 1, flexDirection: "column"  }}>
                <SignatureCapture
                   style={[{flex:1},styles.signature]}
                   ref="sign"
                   onSaveEvent={this._onSaveEvent}
                   onDragEvent={this._onDragEvent}
                   saveImageFileInExtStorage={false}
                   showNativeButtons={false}
                   showTitleLabel={false}
                   backgroundColor="transparent"   
                   strokeColor="black"
                   minStrokeWidth={4}
                   maxStrokeWidth={4}
                   viewMode={"portrait"}/>

               <View style={{ flex: 1, flexDirection: "row" }}>
                

                   <TouchableHighlight style={styles.buttonStyle}
                       onPress={() => { this.resetSign() } } >
                       <Text>Effacer</Text>
                   </TouchableHighlight>
                   <TouchableHighlight style={styles.buttonStyle}
                       onPress={() => { this.saveSign() } } >
                       <Text>Enregistrer</Text>
                   </TouchableHighlight>
               </View>

           </View>
       );
   }

   saveSign() {
       this.refs["sign"].saveImage();
   }

   resetSign() {
       this.refs["sign"].resetImage();
   }

    _onSaveEvent=(result) =>{
       //result.encoded - for the base64 encoded png
       //result.pathName - for the file path name
        this.props.saveImage(result.encoded)
   }
   _onDragEvent() {
        // This callback will be called when the user enters signature
       console.log("dragged");
   }
}

const styles = StyleSheet.create({
   signature: {
       flex: 1,
       borderColor: '#000033',
       borderWidth: 1,
   },
   buttonStyle: {
       flex: 1, justifyContent: "center", alignItems: "center", height: 50,
       backgroundColor: "#eeeeee",
       margin: 10
   }
});