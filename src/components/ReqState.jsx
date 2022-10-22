import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';

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
    <Formik
      initialValues={{
        oct: false,
        nov: false,
      }}
      onSubmit={values => Alert.alert(JSON.stringify(values))}>
      {({
        values,
        // handleChange,
        setFieldValue,
        // errors,
        // setFieldTouched,
        // touched,
        // isValid,
        handleSubmit,
      }) => (
        <View className=" h-full px-5 bg-base">
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
                  value={values?.oct}
                  onValueChange={newValue => setFieldValue('oct', newValue)}
                />
                <Text className=" font-noto text-sm text-black">Oct</Text>
              </View>
              <View className="w-1/4 flex-row items-center">
                <CheckBox
                  disabled={false}
                  value={values?.nov}
                  onValueChange={newValue => setFieldValue('nov', newValue)}
                />
                <Text className=" font-noto text-sm text-black">Nov</Text>
              </View>
              <View className="w-1/4  flex-row items-center"></View>
              <View className="w-1/4  flex-row items-center"></View>
            </View>
          </View>

          <View className=" h-1/5 justify-center ">
            <TouchableOpacity
              onPressOut={handleSubmit}
              className="bg-green-kem rounded-lg items-center py-4 shadow shadow-black">
              <Text className="font-notoMedium text-xl text-white">
                Submit Request
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ReqState;
