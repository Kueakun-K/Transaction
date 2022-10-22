import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import axios from 'axios';
import logo from '../assets/images/logo.png';

import Activity from './Activity';
import ReqState from './ReqState';

const Tab = createNativeStackNavigator();

const Transaction = ({navigation}) => {
  const [active, setActive] = React.useState(true);

  return (
    <View className=" min-h-full h-max bg-base">
      <View className=" h-[38%]">
        <View className="flex bg-green-sod rounded-b-2xl shadow-lg shadow-black">
          {/* Header */}
          <View className="flex-row ">
            <View className="w-1/6 items-center justify-end ">
              <Pressable onPress={() => navigation.navigate('Home')}>
                <ChevronLeftIcon color="white" size={36} />
              </Pressable>
            </View>
            <View className=" items-center justify-center w-4/6">
              <Text className="font-notobold  text-white text-3xl mt-3">
                Account/Card
              </Text>
            </View>
            <View className=" w-1/6">
              <Text></Text>
            </View>
          </View>
          {/* Header */}

          {/* Bank logo + Name */}
          <View className="flex-row mt-4 ">
            <View className="ml-2 w-4/12 items-end">
              <View className="rounded-full border-2 border-white p-2 ">
                <Image source={logo} className="w-20 h-20 " />
              </View>
            </View>
            <View className=" ml-2 justify-center">
              <Text className=" font-noto text-yellowonn text-lg">
                Watcharapol Yotadee{' '}
              </Text>
              <Text className="font-noto text-white">xxx-x-x1924-x</Text>
            </View>
          </View>
          {/* Bank logo + Name */}

          {/* Money Data */}
          <View className=" flex-row mx-5 my-2  ">
            <View className="w-1/2 ">
              <Text className="font-noto text-sm text-white ">
                Available Bal.
              </Text>
              <Text className="font-noto text-sm text-white">
                Outstanding Bal.
              </Text>
            </View>
            <View className="w-1/2 items-end">
              <Text className="font-noto text-sm text-white">100.49</Text>
              <Text className="font-noto text-sm text-white">100.49</Text>
              <Text className=" font-noto text-xs text-yellowonn">
                Updated at 2.32 PM
              </Text>
            </View>
          </View>
          {/* Money Data */}
        </View>
        {/* Nav */}
        <View>
          <View className="relative z-10">
            <View className="flex flex-row m-3 border-b-[0.5px]">
              <View className="w-1/2">
                <Pressable
                  onPress={() => {
                    setActive(true);
                    navigation.navigate('Activity');
                  }}>
                  <View className=" h-6 items-center justify-start">
                    <Text
                      className={
                        (active ? 'border-b-4 border-red-onn' : 'border-0') +
                        ' font-notoMedium text-black'
                      }>
                      Activity
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View className="w-1/2">
                <Pressable
                  onPress={() => {
                    setActive(false);
                    navigation.navigate('ReqState');
                  }}>
                  <View className=" h-6 items-center justify-start">
                    <Text
                      className={
                        (active ? 'border-0' : 'border-b-4 border-red-onn') +
                        ' font-notoMedium text-black'
                      }>
                      Request Statement
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        {/* Nav */}
      </View>

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Activity">
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="ReqState" component={ReqState} />
      </Tab.Navigator>
    </View>
  );
};

export default Transaction;
