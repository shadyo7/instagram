

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from './src/screens/SplashScreen'
import InitialScreen from './src/screens/InitialScreen'
import SignUp  from './src/screens/SignUp'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
          <View style={styles.container}>
          <InitialScreen/>
          </View>
  );
};

const styles = StyleSheet.create({
   container:{
     flex:1,
     display:'flex'
   }
  
});

export default App;
