import React from 'react';
import {View, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';

import Check from './Check';

const ReqState = () => {
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

  return (
    <Formik
      initialValues={{
        Jan: false,
        Feb: false,
        Mar: false,
        Apr: false,
        May: false,
        Jun: false,
        Jul: false,
        Aug: false,
        Sep: false,
        Oct: false,
        Nov: false,
        Dec: false,
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
        <View className="h-[55%] px-5 bg-base">
          {/* Select Month */}
          <ScrollView className="">
            <View className=" mb-3 ">
              <Text className="font-notobold text-black">Select Month(s)</Text>
            </View>
            <View className=" ">
              <Text className="font-notoMedium text-black">2022</Text>
            </View>
            <View>
              <View className=" flex-row mb-3 ">
                {/* <View className="w-1/4 flex-row  items-center">
                  <CheckBox
                    disabled={false}
                    value={values?.Jan}
                    onValueChange={newValue => setFieldValue('Jan', newValue)}
                  />
                  <Text className=" font-noto text-sm text-black">Jan</Text>
                </View> */}
                <Check value={values?.Jan} change={newValue => setFieldValue('Jan', newValue)} month={m[0]}/>
                <View className="w-1/4 flex-row items-center">
                  <CheckBox
                    disabled={false}
                    value={values?.Feb}
                    onValueChange={newValue => setFieldValue('Feb', newValue)}
                  />
                  <Text className=" font-noto text-sm text-black">Feb</Text>
                </View>
                <View className="w-1/4  flex-row items-center">
                  <CheckBox
                    disabled={false}
                    value={values?.Mar}
                    onValueChange={newValue => setFieldValue('Mar', newValue)}
                  />
                  <Text className=" font-noto text-sm text-black">Mar</Text>
                </View>
                <View className="w-1/4  flex-row items-center">
                  <CheckBox
                    disabled={false}
                    value={values?.Apr}
                    onValueChange={newValue => setFieldValue('Apr', newValue)}
                  />
                  <Text className=" font-noto text-sm text-black">Apr</Text>
                </View>
              </View>

              <View className=" flex-row mb-3 justify-between">
                <View className=" flex-row  items-center">
                  <CheckBox
                    disabled={false}
                    value={values?.May}
                    onValueChange={newValue => setFieldValue('May', newValue)}
                  />
                  <Text className=" font-noto text-sm text-black">May</Text>
                </View>
                <View className=" flex-row items-center">
                  <CheckBox
                    disabled={false}
                    value={values?.Jun}
                    onValueChange={newValue => setFieldValue('Jun', newValue)}
                  />
                  <Text className=" font-noto text-sm text-black">Jun</Text>
                </View>
                <View className="  flex-row items-center">
                  <CheckBox
                    disabled={false}
                    value={values?.Jul}
                    onValueChange={newValue => setFieldValue('Jul', newValue)}
                  />
                  <Text className=" font-noto text-sm text-black">Jul</Text>
                </View>

                <View className="  flex-row items-center">
                  <CheckBox
                    disabled={false}
                    value={values?.Aug}
                    onValueChange={newValue => setFieldValue('Aug', newValue)}
                  />
                  <Text className=" font-noto text-sm text-black">Aug</Text>
                </View>
              </View>

              <View className=" flex-row mb-3 ">
                <View className="w-1/4 flex-row  items-center">
                  <CheckBox
                    disabled={false}
                    value={values?.Sep}
                    onValueChange={newValue => setFieldValue('Sep', newValue)}
                  />
                  <Text className=" font-noto text-sm text-black">Sep</Text>
                </View>
                <View className="w-1/4 flex-row items-center">
                  <CheckBox
                    disabled={false}
                    value={values?.Oct}
                    onValueChange={newValue => setFieldValue('Oct', newValue)}
                  />
                  <Text className=" font-noto text-sm text-black">Oct</Text>
                </View>
                <View className="w-1/4  flex-row items-center">
                  <CheckBox
                    disabled={false}
                    value={values?.Nov}
                    onValueChange={newValue => setFieldValue('Nov', newValue)}
                  />
                  <Text className=" font-noto text-sm text-black">Nov</Text>
                </View>

                <View className="w-1/4  flex-row items-center">
                  <CheckBox
                    disabled={false}
                    value={values?.Dec}
                    onValueChange={newValue => setFieldValue('Dec', newValue)}
                  />
                  <Text className=" font-noto text-sm text-black">Dec</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          {/* Select Month */}

          {/* Submit Request */}
          <View className="justify-center">
            <TouchableOpacity
              onPressOut={handleSubmit}
              className="bg-green-kem rounded-lg items-center py-4 shadow shadow-black">
              <Text className="font-notoMedium text-xl text-white">
                Submit Request
              </Text>
            </TouchableOpacity>
          </View>
          {/* Submit Request */}
        </View>
      )}
    </Formik>
  );
};

export default ReqState;
