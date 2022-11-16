import {View, Text, Image} from 'react-native';

import React from 'react';
import OTP_list from './OTP_list';
import {useState, useEffect} from 'react';
import {TouchableHighlight} from 'react-native';
import logo from '../assets/images/logo.png';
import back from '../assets/images/back.png';
import HiddlePin from './HiddlePin';

const NewPin = ({navigation}) => {
  const [checkState, setCheckState] = useState({
    pin1: false,
    pin2: false,
    pin3: false,
    pin4: false,
    pin5: false,
    pin6: false,
  });
  const [pin, setPin] = useState('');
  const onPress = value => {
    if (/^([0-9]){0,5}$/.test(pin) && /^([0-9])$/.test(value)) {
      setPin(val => val + value);
    }
  };
  const delClick = () => {
    if (pin.length == 0) return;
    setPin(val => val.slice(0, -1));
  };

  useEffect(() => {
    (() => {
      if (pin.length >= 6) {
        setCheckState({
          pin1: true,
          pin2: true,
          pin3: true,
          pin4: true,
          pin5: true,
          pin6: true,
        });
      } else if (pin.length >= 5) {
        setCheckState({
          pin1: true,
          pin2: true,
          pin3: true,
          pin4: true,
          pin5: true,
          pin6: false,
        });
      } else if (pin.length >= 4) {
        setCheckState({
          pin1: true,
          pin2: true,
          pin3: true,
          pin4: true,
          pin5: false,
          pin6: false,
        });
      } else if (pin.length >= 3) {
        setCheckState({
          pin1: true,
          pin2: true,
          pin3: true,
          pin4: false,
          pin5: false,
          pin6: false,
        });
      } else if (pin.length >= 2) {
        setCheckState({
          pin1: true,
          pin2: true,
          pin3: false,
          pin4: false,
          pin5: false,
          pin6: false,
        });
      } else if (pin.length >= 1) {
        setCheckState({
          pin1: true,
          pin2: false,
          pin3: false,
          pin4: false,
          pin5: false,
          pin6: false,
        });
      } else if (pin.length >= 0) {
        setCheckState({
          pin1: false,
          pin2: false,
          pin3: false,
          pin4: false,
          pin5: false,
          pin6: false,
        });
      }
    })();
    if (pin.length === 6) {
      console.log(pin);
      navigation.navigate('ConfirmPin', {pin: pin});
    }
  }, [pin]);

  return (
    <View style={{flex: 1}} className="bg-green-sod">
      <View
        style={{flex: 4}}
        className=" object-center w-full rounded-b-xl  bg-green-sod container">
        <View className=" w-full h-full  justify-between items-center ">
          <Image source={logo} className="w-32 h-32" />
          <Text className="text-3xl text-yellowonn font-notobold">
            Create New OTP PIN
          </Text>

          <View className=" w-2/3 h-10 flex-1 flex-row justify-between items-center">
            <HiddlePin isSuccess={pin.length >= 1 ? false : true} />
            <HiddlePin isSuccess={pin.length >= 2 ? false : true} />
            <HiddlePin isSuccess={pin.length >= 3 ? false : true} />
            <HiddlePin isSuccess={pin.length >= 4 ? false : true} />
            <HiddlePin isSuccess={pin.length >= 5 ? false : true} />
            <HiddlePin isSuccess={pin.length >= 6 ? false : true} />
          </View>
        </View>
      </View>

      <View
        style={{flex: 6}}
        className="flex flex-col h-fit justify-between px-7 py-7">
        <View className="flex justify-between flex-row w-full">
          <OTP_list num={'1'} onPress={onPress} />
          <OTP_list num={'2'} onPress={onPress} />
          <OTP_list num={'3'} onPress={onPress} />
        </View>

        <View className="flex justify-between flex-row w-full">
          <OTP_list num={'4'} onPress={onPress} />
          <OTP_list num={'5'} onPress={onPress} />
          <OTP_list num={'6'} onPress={onPress} />
        </View>

        <View className="flex justify-between flex-row w-full">
          <OTP_list num={'7'} onPress={onPress} />
          <OTP_list num={'8'} onPress={onPress} />
          <OTP_list num={'9'} onPress={onPress} />
        </View>

        <View className="flex justify-between flex-row w-full">
          <View className="flex  h-20 w-20 justify-center items-center flex-row rounded-full"></View>
          <OTP_list num={'0'} onPress={onPress} />

          <TouchableHighlight className="rounded-full" onPress={delClick}>
            <View className="flex h-20 w-20 justify-center items-center flex-row rounded-full">
              <Image source={back} className="w-16 h-16 items-center" />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default NewPin;
