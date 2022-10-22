import React from 'react';
import {View, Text, Button} from 'react-native';
const Test = ({navigation}) => {
  const date = new Date('2013-08-03T02:00:00Z');
  const year = new Date('2013-08-03T02:00:00Z').getFullYear();
  const month = date.getMonth()+1;
  const dt = new Date('2013-08-03T02:00:00Z').getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return (
    <View className="bg-red-500">
      <Text className="text-white">{year} + {month} + {dt} +{typeof(dt)} {hour} + {minute}</Text>
      
    </View>
  );
};
export default Test;
