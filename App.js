/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Login from './src/screen/Login';
import Home from './src/screen/Home'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import configureStore from './src/store/configureStore';

const Stack = createStackNavigator();
const store = configureStore();

class App extends Component {


  home = () => {
    return(
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          />
          <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    )
  }

  render(){
    return (
     home()
    )
  }
}


export default App;
