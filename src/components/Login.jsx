import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {Button, Icon} from '@react-native-material/core';
import {useForm} from 'react-hook-form';
import logo from '../assets/images/logo.png';
const Login = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <View className="min-h-full bg-base">
      <View className="bg-green-sod rounded-b-2xl h-5/6">
        <View className="items-center">
          <Image source={logo} className="w-28 h-28" />
        </View>
        <View className="mx-3 justify-center">
          <Text className="font-notobold text-white">Phone</Text>
          <TextInput
            onChangeText={onChangeText}
            value={text}
            className=" bg-white rounded h-8 px-1 py-0"
          />
          <Text className="font-notobold text-white">Email</Text>
          <TextInput
            onChangeText={onChangeText}
            value={text}
            className=" bg-white rounded h-8 px-1 py-0"
          />
        </View>
      </View>
      <View className="bg-red-500 h-1/6 justify-center mx-5">
        <Button
          pressableContainerStyle={{height:60, justifyContent:'center'}}
          titleStyle={{fontSize: 20}}
          // className="text"
          title="Sign In"
          color="#8DD0BD"
          tintColor="white"
        />
      </View>
    </View>
  );
};

export default Login;
