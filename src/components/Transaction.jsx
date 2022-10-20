import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {Link, Outlet} from 'react-router-native';
// import axios from 'axios';
// import DropDownPicker from 'react-native-dropdown-picker';
// import {Picker} from '@react-native-picker/picker';
import logo from '../assets/images/logo.png';
const Transaction = () => {
  const [active, setActive] = React.useState(true);

  

  return (
    <View className=" min-h-full bg-base">
      {/* Green Area */}
      <View className="flex bg-green-kem  rounded-b-2xl">
        {/* Header */}
        <View className=" items-center">
          <Text className="font-noto text-white text-3xl mt-3">
            Account/Card
          </Text>
          {/* <Text>{transaction.length}</Text> */}
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
        <View className=" flex-row mx-3 my-2  ">
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
      {/* Green Area */}

      {/* Nav */}
      <View className="mb-2">
        <View className="relative z-10">
          <View className="flex flex-row m-3 border-b-[0.5px]">
            <View className="w-1/2">
              <Link to="/transaction/activity" onPress={() => setActive(true)}>
                <View className=" h-6 items-center justify-start">
                  <Text
                    className={
                      (active ? 'border-b-4 border-pinkonn' : 'border-0') +
                      ' font-notoMedium text-black'
                    }>
                    Activity
                  </Text>
                </View>
              </Link>
            </View>
            <View className="w-1/2">
              <Link to="/transaction/reqstate" onPress={() => setActive(false)}>
                <View className=" h-6 items-center justify-start">
                  <Text
                    className={
                      (active ? 'border-0' : 'border-b-4 border-pinkonn') +
                      ' font-notoMedium text-black'
                    }>
                    Request Statement
                  </Text>
                </View>
              </Link>
            </View>
          </View>
        </View>
      </View>
      {/* Nav */}

      {/* Child Route */}
      
      <Outlet />
      
      {/* Child Route */}
    </View>
  );
};
export default Transaction;