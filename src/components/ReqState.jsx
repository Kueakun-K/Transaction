import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
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

  const submit = () => {
    Alert.alert("test")
  }

  return (
    <View className=" h-[60%] px-5">
      {/* form */}
      <View className="h-4/5">
        <View className=" mb-3 ">
          <Text className="font-notobold text-black">Select Month(s)</Text>
        </View>
        <View className=" ">
          <Text className="font-notoMedium text-black">2022</Text>
        </View>
        <View className=" flex-row  ">
          <View className="w-1/4 flex-row  items-center">
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
        {/* form */}
      </View>
      <View className=" h-1/5 justify-center ">
        <TouchableOpacity onPressOut={submit} className="bg-green-kem rounded-lg items-center py-4 shadow shadow-black">
          <Text className="font-notoMedium text-xl text-white">Submit Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReqState;
