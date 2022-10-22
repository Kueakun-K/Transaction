import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/components/Home';
import Transaction from './src/components/Transaction';
import Login from './src/components/Login';

// test
import TestAct from './src/components/TestAct';
import Activity from './src/components/Activity';
import ReqState from './src/components/ReqState';
import Test from './src/components/Test';
import Data from './src/components/Data';
// test

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Stack Navigation */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
      {/* Stack Navigation */}
    </NavigationContainer>
  );
};

export default App;
