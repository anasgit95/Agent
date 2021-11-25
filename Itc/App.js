/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
 import {
 
  StyleSheet,
  
} from 'react-native';
 import MultiSteps from './screens/multiSteps';
import { Provider as PaperProvider } from 'react-native-paper';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
const App: () => Node = () => {
  useEffect(() => {
    XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
      GLOBAL.originalXMLHttpRequest :
      GLOBAL.XMLHttpRequest;

    // fetch logger
    global._fetch = fetch;
    global.fetch = function (uri, options, ...args) {
      return global._fetch(uri, options, ...args).then((response) => {
        return response;
      })
    }

   },[]);
  
 

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
