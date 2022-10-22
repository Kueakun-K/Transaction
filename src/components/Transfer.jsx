import React from 'react';
import {View, Text, Pressable, Image, TextInput} from 'react-native';
import {
  ChevronLeftIcon,
  ArrowPathIcon,
  XMarkIcon,
  CheckIcon,
} from 'react-native-heroicons/outline';

import logo from '../assets/images/logo.png';

const Transfer = ({navigation}) => {
  return (
    <View className=" min-h-full h-max bg-base">
      {/* Green Area */}
      <View className="flex bg-green-sod rounded-b-2xl shadow-lg shadow-black mb-2">
        {/* Header */}
        <View className="flex-row mb-3">
          <View className="w-1/6 items-center justify-end ">
            <Pressable onPress={() => navigation.navigate('Home')}>
              <ChevronLeftIcon color="white" size={36} />
            </Pressable>
          </View>
          <View className=" items-center justify-center w-4/6">
            <Text className="font-notobold  text-white text-3xl mt-3">
              Transfer
            </Text>
          </View>
          <View className=" w-1/6">
            <Text></Text>
          </View>
        </View>
        {/* Header */}

        {/* text */}
        <View className="mx-6 mb-4">
          <Text className="text-white font-noto text-base">Form:</Text>
        </View>
        {/* text */}

        {/* Bank logo + Name */}
        <View className="flex-row  mb-8">
          <View className="ml-2 w-[35%] items-end">
            <View className="rounded-full shadow shadow-black  p-1 bg-green-green ">
              <Image source={logo} className="w-20 h-20  " />
            </View>
          </View>
          <View className=" ml-4 justify-between ">
            <View className="">
              <Text className=" font-notobold text-white text-lg">OShop</Text>
            </View>
            <View className="mb-2">
              <Text className="font-noto text-yellowonn text-xs">
                xxx-x-x1924-x
              </Text>
              <Text className="font-noto text-white text-xs">585.49 Baht</Text>
            </View>
          </View>
        </View>
        {/* Bank logo + Name */}

        {/* update */}
        <View className="flex-row justify-end mx-6 items-center mb-2">
          <ArrowPathIcon color="white" size={13} />
          <Text className="ml-1 font-noto text-xs text-white">
            Updated at 10 .30 PM
          </Text>
        </View>
        {/* update */}
      </View>
      {/* Green Area */}

      {/* Base Area */}
      <View>
        {/* To Text */}
        <View className="mx-6 my-5">
          <Text className="text-black font-notobold">To: FourQU Account</Text>
        </View>
        {/* To Text */}

        {/* Logo Bank */}
        <View className="bg-green-green rounded-l-xl ml-4 shadow shadow-black items-center flex-row mb-8">
          <Image source={logo} className="w-20 h-20 " />
          <Text className="text-white font-notobold text-xl ml-3">FourQU</Text>
        </View>
        {/* Logo Bank */}

        {/* Account Input */}
        <View className="mx-6">
          <Text className="font-notobold text-black mb-5">Account No.</Text>
          <TextInput
            className=" border-b-[0.5px] p-0 mb-5"
            placeholder="Enter Account No.   "
            placeholderTextColor="black"
            textAlign="right"
          />
        </View>
        {/* Account Input */}

        {/* Amount Input */}
        <View className="mx-6">
          <Text className="font-notobold text-black mb-5">Amount:</Text>
          <TextInput
            className=" border-b-[0.5px] p-0 mb-16"
            placeholder="0.00 Baht   "
            placeholderTextColor="black"
            textAlign="right"
          />
        </View>
        {/* Amount Input */}

        {/* Confirm & Cancel */}
        <View className="mx-6  flex-row justify-between">
          <View className="flex-row items-center">
            <View
              style={{backgroundColor: '#FD6565'}}
              className="rounded-full  mr-2">
              <XMarkIcon color="white" size={50} />
            </View>
            <View>
              <Text className="font-noto text-black">Cancel</Text>
            </View>
          </View>
          <View className="flex-row items-center">
            <View className="">
              <Text className="font-noto text-black">Confirm</Text>
            </View>
            <View className="rounded-full bg-green-oon ml-2">
              <CheckIcon color="white" size={50} />
            </View>
          </View>
        </View>
        {/* Confirm & Cancel */}
      </View>
      {/* Base Area */}
    </View>
  );
};
export default Transfer;
