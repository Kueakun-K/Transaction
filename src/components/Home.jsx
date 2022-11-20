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
        title="Go to Transfer"
        onPress={() => navigation.navigate('Transfer')}
      />
      <Button
        title="Go to Review"
        onPress={() => navigation.navigate('Review')}
      />
      <Button
        title="Go to Success"
        onPress={() => navigation.navigate('Successful')}
      />
      <Button
        title="Go to Notification"
        onPress={() => navigation.navigate('Notification')}
      />
      <Button
        title="Go to NotiTransaction"
        onPress={() => navigation.navigate('NotiTransaction')}
      />

      <Button
        title="Go to Test"
        onPress={() => navigation.navigate('Test')}
      />

    </View>
  );
};
export default Home;
