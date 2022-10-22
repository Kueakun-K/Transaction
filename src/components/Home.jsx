import React from 'react';
import {View, Text, Button} from 'react-native';
const Home = ({navigation}) => {
  return (
    <View className="bg-red-500">
      <Text className="text-white">Hello Home</Text>
      <Button
        title="Go to Transaction"
        onPress={() => navigation.navigate('Transaction')}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to Test"
        onPress={() => navigation.navigate('Test')}
      />
    </View>
  );
};
export default Home;
