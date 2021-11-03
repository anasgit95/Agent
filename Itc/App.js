/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React  from 'react';
 import {
 
  StyleSheet,
  
} from 'react-native';
import Login from './screens/login'
import MultiSteps from './screens/multiSteps';
import { Provider as PaperProvider } from 'react-native-paper';

const App: () => Node = () => {
 
  

  return (
    <PaperProvider>

    <MultiSteps/>
    </PaperProvider>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
