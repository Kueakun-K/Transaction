import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView
} from 'react-native';
import {ChevronLeftIcon, ArrowPathIcon} from 'react-native-heroicons/outline';
import React, { useEffect } from 'react';
import logo from '../assets/images/logo.png';
import Arrow from '../assets/images/Arrow.png';
import confirm from '../assets/images/confirm-icon.png';
import cancel from '../assets/images/cancel-icon.png';
import {XMarkIcon, CheckIcon} from 'react-native-heroicons/outline';
import {TextInput} from '@react-native-material/core';

const Review = ({navigation,route}) => {
  useEffect(()=>{
    console.log(route.params);
  },[])
  return (
    <ScrollView className=" min-h-full h-max bg-base">
      <View className=" h-[72%]">
        <View className="flex bg-green-sod rounded-b-2xl shadow-lg shadow-black">
          {/* Header */}
          <View className="flex-row ">
            <View className="w-1/6 items-center justify-end ">
              <Pressable onPress={() => navigation.navigate('Transfer')}>
                <ChevronLeftIcon color="white" size={36} />
              </Pressable>
            </View>
            <View className=" items-center justify-center w-4/6">
              <Text className="font-notobold text-white text-3xl mt-3">
                Review
              </Text>
            </View>
          </View>
          {/* Header */}

          {/* Sender */}
          <View className="flex-row mt-8 ">
            <View className="ml-2 w-4/12 items-end">
              <View className="rounded-full bg-green-bg-logo p-2 logo-sd shadow-logo">
                <Image source={logo} className="w-20 h-20 " />
              </View>
            </View>
            <View className=" ml-2 justify-center">
              <Text className="font-notobold text-white text-xl">
                Source Name
              </Text>
              <Text className="mt-3 font-noto text-yellowonn text-sm">
                FourQU
              </Text>
              <Text className="font-noto text-yellowonn text-xs">
                xxx-x-x1924-x
              </Text>
            </View>
          </View>
          {/* Sender */}
          {/* Arrow */}
          <View className="mt-6 mb-4 ml-[75]">
            <Image source={Arrow} className="w-7 h-10" />
          </View>
          {/* Arrow */}
          {/* Reciever */}
          <View className="flex-row mt-1.5">
            <View className="ml-2 w-4/12 items-end">
              <View className="rounded-full bg-green-bg-logo p-2 logo-sd shadow-logo">
                <Image source={logo} className="w-20 h-20 " />
              </View>
            </View>
            <View className=" ml-2 justify-center">
              <Text className="font-notobold text-white text-xl">
                Receiver Name
              </Text>
              <Text className="mt-3 font-noto text-yellowonn text-sm">
                FourQU
              </Text>
              <Text className="font-noto text-yellowonn text-xs">
                {route.params.account}
              </Text>
            </View>
          </View>
          {/* Reciever */}
          <View className="ml-6">
            <Text></Text>
            <Text className="text-xs text-white">
              Beware of scammers ! Please verify the recipient's
            </Text>
            <Text className="text-xs text-white">
              account information. Once confirmed, it cannot be changed.
            </Text>
            <Text></Text>
          </View>
          {/* Amount and Fee */}
          <View className=" bg-green-bg-logo rounded-b-2xl shadow-lg shadow-black">
            <View className="flex-row ">
              <View className="flex-1">
                <Text className="mt-3 ml-6 font-notobold text-white text-xl">
                  Amount:
                </Text>
                <Text className="mt-3 ml-6 font-notobold text-white text-xl">
                  Fee:
                </Text>
              </View>
              <View className="flex-1">
                <View>
                  <Text className="mt-3 mr-6 font-notobold text-white text-xl text-right">
                    {route.params.amount} Baht
                  </Text>
                  <Text className="mt-3 mr-6 font-notobold text-white text-xl text-right">
                    0.00 Baht
                  </Text>
                </View>
              </View>
            </View>
            <Text></Text>
          </View>
          {/* Amount and Fee */}
        </View>
      </View>
      <View className="mt-8 ml-6 ">
        <Text className="text-base text-black font-noto">Memo : </Text>
      </View>
      <View>
        <TextInput maxLength={40} />
      </View>
      <Text></Text>
      {/* confirm and cancel */}
      <View className="mt-3 mx-6  flex-row justify-between">
        <View className="flex-row items-center">
          <View
            style={{backgroundColor: '#FD6565'}}
            className="rounded-full  mr-2">
            <Pressable onPress={() => navigation.navigate('Home')}>
              <XMarkIcon color="white" size={50} />
            </Pressable>
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
            <Pressable onPress={() => navigation.navigate('Successful')}>
              <CheckIcon color="white" size={50} />
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Review;
