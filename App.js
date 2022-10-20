import React from 'react';
import {View, Text} from 'react-native';
import {NativeRouter, Routes, Route, Link} from 'react-router-native';

import Home from './src/components/Home';
import Login from './src/components/Login';
import Transaction from './src/components/Transaction';
import Activity from './src/components/Activity';
import ReqState from './src/components/ReqState';
import Test from './src/components/Test';
import Data from './src/components/Data';
const App = () => {
  

  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction" element={<Transaction />}> 
          <Route path="activity" element={<Activity/>}>
            <Route path="data" element={<Data/>}/>
          </Route>
          <Route path="reqstate" element={<ReqState/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
      <View className="bg-green-400">
        <Link to="/">
          <Text className="text-red-500 ">Home</Text>
        </Link>
        <Link to="/transaction/activity">
          <Text className="font-noto">Transaction</Text>
        </Link>
        <Link to="/login">
          <Text className="font-noto">login</Text>
        </Link>
        <Link to="/test">
          <Text className="font-noto">Test</Text>
        </Link>
      </View>
    </NativeRouter>
  );
};

export default App;
