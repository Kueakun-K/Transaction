import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {
  ChevronLeftIcon,
  ArrowPathIcon,
  XMarkIcon,
  CheckIcon,
} from 'react-native-heroicons/outline';
import {Formik} from 'formik';
import * as yup from 'yup';

import logo from '../assets/images/logo.png';

const Transfer = ({navigation}) => {

  const onPressNext = (account,amount) => {
    console.log({account,amount});
    if (account&&amount) {
      navigation.navigate('Review',{account,amount})
    }
  }

  return (
    <Formik
      initialValues={{
        account: '',
        amount: '',
      }}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        account: yup.number().positive().integer().required(),
        amount: yup.number().positive().integer().required(),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View className=" min-h-full bg-base ">
          <ScrollView>
            {/* Green Area */}
            <View className="flex bg-green-sod rounded-b-2xl shadow-lg shadow-black mb-2">
              {/* Header */}
              <View className="flex-row mb-3">
                <View className="w-1/6 items-center justify-end ">
                  <Pressable onPress={() => navigation.navigate('Home')}>
                    <ChevronLeftIcon color="white" size={36} />
                  </Pressable>
                </View>
                <View className=" items-center justify-center w-4/6">
                  <Text className="font-notobold  text-white text-3xl mt-3">
                    Transfer
                  </Text>
                </View>
                <View className=" w-1/6">
                  <Text></Text>
                </View>
              </View>
              {/* Header */}

              {/* text */}
              <View className="mx-6 mb-4">
                <Text className="text-white font-noto text-base">Form:</Text>
              </View>
              {/* text */}

              {/* Bank logo + Name */}
              <View className="flex-row  mb-8">
                <View className="ml-2 w-[35%] items-end">
                  <View className="rounded-full shadow shadow-black  p-1 bg-green-green ">
                    <Image source={logo} className="w-20 h-20  " />
                  </View>
                </View>
                <View className=" ml-4 justify-between ">
                  <View className="">
                    <Text className=" font-notobold text-white text-lg">
                      OShop
                    </Text>
                  </View>
                  <View className="mb-2">
                    <Text className="font-noto text-yellowonn text-xs">
                      xxx-x-x1924-x
                    </Text>
                    <Text className="font-noto text-white text-xs">
                      585.49 Baht
                    </Text>
                  </View>
                </View>
              </View>
              {/* Bank logo + Name */}

              {/* update */}
              <View className="flex-row justify-end mx-6 items-center mb-2">
                <ArrowPathIcon color="white" size={13} />
                <Text className="ml-1 font-noto text-xs text-white">
                  Updated at 10 .30 PM
                </Text>
              </View>
              {/* update */}
            </View>
            {/* Green Area */}

            {/* Base Area */}
            <View>
              {/* To Text */}
              <View className="mx-6 my-5">
                <Text className="text-black font-notobold">
                  To: FourQU Account
                </Text>
              </View>
              {/* To Text */}

              {/* Logo Bank */}
              <View className="bg-green-green rounded-l-xl ml-4 shadow shadow-black items-center flex-row mb-8">
                <Image source={logo} className="w-20 h-20 " />
                <Text className="text-white font-notobold text-xl ml-3">
                  FourQU
                </Text>
              </View>
              {/* Logo Bank */}

              {/* Account Input */}
              <View className="mx-6 mb-5">
                <Text
                  className={
                    touched.account && errors.account
                      ? 'font-notobold text-red-ja mb-5'
                      : 'font-notobold text-black mb-5'
                  }>
                  Account No.
                </Text>
                <TextInput
                  keyboardType="number-pad"
                  onChangeText={handleChange('account')}
                  onBlur={() => setFieldTouched('account')}
                  value={values.account}
                  className={
                    touched.account && errors.account
                      ? 'border-b-[0.75px] p-0 border-red-ja'
                      : 'border-b-[0.75px] p-0 '
                  }
                  placeholder="Enter Account No.   "
                  placeholderTextColor="gray"
                  textAlign="right"
                />
                {(() => {
                  if (touched.account && errors.account) {
                    return (
                      <View>
                        <Text style={{fontSize: 12}} className="text-red-ja">
                          {errors.account}
                        </Text>
                      </View>
                    );
                  } else {
                    return (
                      <View>
                        <Text style={{fontSize: 12}}></Text>
                      </View>
                    );
                  }
                })()}
              </View>
              {/* Account Input */}

              {/* Amount Input */}
              <View className="mx-6 mb-8">
                <Text
                  className={
                    touched.amount && errors.amount
                      ? 'font-notobold text-red-ja mb-5'
                      : 'font-notobold text-black mb-5'
                  }>
                  Amount:
                </Text>
                <TextInput
                  keyboardType="number-pad"
                  onChangeText={handleChange('amount')}
                  onBlur={() => setFieldTouched('amount')}
                  value={values.amount}
                  className={
                    touched.amount && errors.amount
                      ? 'border-b-[0.75px] p-0 border-red-ja'
                      : 'border-b-[0.75px] p-0'
                  }
                  placeholder="0.00 Baht   "
                  placeholderTextColor="gray"
                  textAlign="right"
                />
                {(() => {
                  if (touched.amount && errors.amount) {
                    return (
                      <View>
                        <Text style={{fontSize: 12}} className="text-red-ja">
                          {errors.account}
                        </Text>
                      </View>
                    );
                  } else {
                    return (
                      <View>
                        <Text style={{fontSize: 12}}></Text>
                      </View>
                    );
                  }
                })()}
              </View>
              {/* Amount Input */}
            </View>
            {/* Base Area */}

            {/* Confirm & Cancel */}
            <View className="mx-6  flex-row justify-between">
              <View className="flex-row items-center">
                <Pressable
                  onPressOut={() => navigation.navigate('Home')}
                  style={{backgroundColor: '#FD6565'}}
                  className="rounded-full  mr-2">
                  <XMarkIcon color="white" size={50} />
                </Pressable>
                <View>
                  <Text className="font-noto text-black">Cancel</Text>
                </View>
              </View>
              <View className="flex-row items-center">
                <View className="">
                  <Text className="font-noto text-black">Confirm</Text>
                </View>
                <Pressable
                  onPressOut={() => onPressNext(values.account,values.amount)}
                  // disabled={!isValid)}
                  className={(touched.account && touched.amount && isValid) ? "rounded-full bg-green-oon ml-2" : "rounded-full bg-gray-400 ml-2"}>
                  <CheckIcon color="white" size={50} />
                </Pressable>
              </View>
            </View>
            {/* Confirm & Cancel */}
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};
export default Transfer;
