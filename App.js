import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/components/Home';
import Transaction from './src/components/Transaction';
import Login from './src/components/Login';
import NewPin from './src/components/NewPin';
import ConfirmPin from './src/components/ConfirmPin';
import Transfer from './src/components/Transfer'

import NotiTransaction from './src/components/NotiTransaction';
import Review from './src/components/Review';
import Noti from './src/components/Noti';

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
        <Stack.Screen name="NewPin" component={NewPin} />
        <Stack.Screen name="ConfirmPin" component={ConfirmPin} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="Review" component={Review}/>
        <Stack.Screen name="Successful" component={Sucessful}/>

        
        <Stack.Screen name="Notification" component={Noti}/>
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
      {/* Stack Navigation */}
    </NavigationContainer>
  );
};

export default App;
