import React from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Check = (props) => {
  return (
    <View className="w-1/4 flex-row items-center">
      <CheckBox
      value={props.value}
      onValueChange={props.change}
      />
      <Text className=" font-noto text-sm text-black">{props.month}</Text>
    </View>
  );
};

export default Check;
