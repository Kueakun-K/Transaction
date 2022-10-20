import React from 'react';
import {View, Text} from 'react-native';
import {Button, Icon} from '@react-native-material/core';
import CheckBox from '@react-native-community/checkbox';

const ReqState = () => {
  const [month, setMonth] = React.useState(false);
  const [month2, setMonth2] = React.useState(false);
  const m = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const thisMonth = m[new Date().getMonth()];

  return (
    <View className="bg-gray-500">
      <View className="mx-3 mb-3 bg-yellow-500">
        <Text className="font-noto text-black">Select Month(s)</Text>
      </View>
      <View className="mx-3 bg-blue-500">
        <Text className="font-noto text-black">2022</Text>
      </View>
      <View className=" flex-row mx-5 bg-sky-500">
        <View className="w-1/4 flex-row items-center">
          <CheckBox
            disabled={false}
            value={month}
            onValueChange={newValue => setMonth(newValue)}
          />
          <Text className=" font-noto text-sm text-black">Oct</Text>
        </View>
        <View className="w-1/4 flex-row items-center">
          <CheckBox
            disabled={false}
            value={month2}
            onValueChange={newValue => setMonth2(newValue)}
          />
          <Text className=" font-noto text-sm text-black">Nov</Text>
        </View>
        <View className="w-1/4  flex-row items-center"></View>
        <View className="w-1/4  flex-row items-center"></View>
      </View>
      {/* <View className=" h-1/4 max-h-full bg-red-900 justify-end"> */}
        <View className="items-center h-12 mt-5 bg-orange-500">
          <Button
            className="h-12"
            title="Submit Request"
            color="#76978E"
            tintColor="white"
            uppercase={false}
          />
        </View>
        <View className="bg-red-500 items-center bottom-0">
          <Text className="text-black">{thisMonth}</Text>
          
        </View>
      {/* </View> */}
    </View>
  );
};

export default ReqState;
