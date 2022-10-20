import React from 'react';
import {View, Text} from 'react-native';
import {NativeRouter, Routes, Route, Link} from 'react-router-native';

import Home from './src/components/Home';
import Transaction from './src/components/Transaction';
import Activity from './src/components/Activity';
import ReqState from './src/components/ReqState';
const App = () => {
  

  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction" element={<Transaction />}> 
          <Route path="activity" element={<Activity/>}/>
          <Route path="reqstate" element={<ReqState/>}/>
        </Route>
      </Routes>
      <View className="bg-green-400">
        <Link to="/">
          <Text className="text-red-500 ">Home</Text>
        </Link>
        <Link to="/transaction/activity">
          <Text className="font-noto">Transaction</Text>
        </Link>
      </View>
    </NativeRouter>
  );
};

export default App;
