import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useForm} from 'react-hook-form';
const Login = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <View className="min-h-full bg-base">
      <View className="bg-green-kem rounded-b-2xl h-3/4">
        <TextInput onChangeText={onChangeText} value={text} className="border bg-white rounded" />
      </View>
    </View>
  );
};

export default Login;
