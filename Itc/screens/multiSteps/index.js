/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
import { View } from 'react-native';
import Generaliter from './Generalite';
import Context from './Context'
import Architecture  from './Architecture';
import Repartion from './RepartitionMur/index'
const App: () => Node = () => {
 
    const [activeStep, setActiveSteps] = useState(0);
   console.log(activeStep)
  return (
   <View> 
       {activeStep===0? 
    <Generaliter setActiveSteps={setActiveSteps}/>
    :activeStep===1?

    <Context setActiveSteps={setActiveSteps} />
    :activeStep===2?
    
    <Architecture setActiveSteps={setActiveSteps} />
    : <Repartion setActiveSteps={setActiveSteps} />

    

    
    }
   </View>
  );
};

 

export default App;
