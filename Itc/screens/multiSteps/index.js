/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View ,ActivityIndicator} from 'react-native';
import Generaliter from './Generalite';
import Context from './Context'
import Architecture from './Architecture';
import Repartion from './RepartitionMur/index'
import OuvrantType  from './ouvrantType';
import OuvrantTypeRelation  from './ouvrantTypeRelation';
import Porte from './porte'
import PorteDesignation from './porteDesignation'
import MasqueMur from './masqueMur'
import PlancherBas from './plancherBas'
import PlancherHaut from './plancherHaut';
import { AsyncStorage } from 'react-native';
import { useEffect } from 'react';
import Linetique from './linetique';
import Picker from './pickerImage'
import SignInScreen from '../Signin';
import Valider from './Enregistrement'
import Decrechement from './decrechementBatimant';
import Emission from './emission';
import Emetteur from './emetteur';
import Demission from './demension'
import PlanMasse from './planMasse';
import RepartitionLinetique from './repartitionLinetique'
const App: () => Node = () => {

    const [activeStep, setActiveSteps] = useState(0);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();

    async function fetchData() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('activeStep'));

            if (value !== null) {
                setActiveSteps(value)

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





    async function fetUser() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('user'));
            setLoading(false)
                 setUser(value)

            
            
        } catch (error) {
            console.log(error)
            // Error retrieving data
        }
        // ...
    }
    useEffect(() => {
        if(activeStep===0)
        fetUser();




    }, [activeStep]);
     return (
        loading?
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
        </View>
        :!user ?
        <SignInScreen  setUser={setUser} />
        :<View>
            {activeStep === 0 ?
                <Generaliter setActiveSteps={setActiveSteps} />
                : activeStep === 1 ?

                    <Context setActiveSteps={setActiveSteps} />
                    : activeStep === 2 ?

                        <Architecture setActiveSteps={setActiveSteps} />
                        :activeStep===3?
                        <PlanMasse  setActiveSteps={setActiveSteps} />
                        :activeStep===4?
                       <Demission setActiveSteps={setActiveSteps} />

                         :activeStep===5?
                         <Repartion setActiveSteps={setActiveSteps} />

                         :activeStep===6?
                         <Porte setActiveSteps={setActiveSteps} />
                         :activeStep===7?
 
                         <PorteDesignation setActiveSteps={setActiveSteps} />
                     :activeStep===8?

                         <OuvrantType setActiveSteps={setActiveSteps} />
                         :activeStep===9?
                         <OuvrantTypeRelation setActiveSteps={setActiveSteps} />
                       
                        :activeStep===10?
                        <MasqueMur setActiveSteps={setActiveSteps} />
                        :activeStep===11?
                        <PlancherBas setActiveSteps={setActiveSteps}/>
                        :activeStep===12?
                        <PlancherHaut setActiveSteps={setActiveSteps}/>
                        :activeStep===13?
                        <Linetique setActiveSteps={setActiveSteps}/>
                        :activeStep===14?
                        <RepartitionLinetique setActiveSteps={setActiveSteps}/>
                        :activeStep===15?
                        <Decrechement setActiveSteps={setActiveSteps}/>
                        :activeStep===16?
                        <Emission setActiveSteps={setActiveSteps}/>
                        :activeStep===17?
                        <Emetteur setActiveSteps={setActiveSteps}/>
                        :activeStep===18?
                        <Picker setActiveSteps={setActiveSteps}/>
                        :<Valider setActiveSteps={setActiveSteps}/>


            }
        </View>
    );
};



export default App;
