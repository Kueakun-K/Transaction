import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/components/Home';
import Transaction from './src/components/Transaction';
import Login from './src/components/Login';
import PinCheck from './src/components/PinCheck';
import Transfer from './src/components/Transfer'
import Review from './src/components/Review';


// test
import Activity from './src/components/Activity';
import ReqState from './src/components/ReqState';
import Test from './src/components/Test';
import Sucessful from './src/components/Sucessful';
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
        <Stack.Screen name="PinCheck" component={PinCheck} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="Review" component={Review}/>
        <Stack.Screen name="Successful" component={Sucessful}/>
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
      {/* Stack Navigation */}
    </NavigationContainer>
  );
};

export default App;
