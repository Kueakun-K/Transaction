import React from 'react';
import {View, Text, TextInput, Image, Pressable, Alert, Button} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup'
import logo from '../assets/images/logo.png';
const Login = () => {
  // const [text, onChangeText] = React.useState('Useless Text');
  const [test, setTest] = React.useState('SIGN IN');

  return (
    <Formik
      initialValues={{
        phone: '',
        email: '',
      }}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        phone: yup
          .number()
          .positive()
          .integer()
          .required(),
        email: yup
          .string()
          .email()
          .required(),
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
        <View className="min-h-full bg-base">
          <View className="bg-green-sod rounded-b-2xl h-[85%] shadow shadow-black">
            <View className="items-center">
              <Image source={logo} className="w-28 h-28" />
            </View>

            <View className="mx-3 justify-center">
              <Text className="font-notobold text-white mb-2">Phone</Text>
              <TextInput
                onChangeText={handleChange('phone')}
                onBlur={() => setFieldTouched('phone')}
                value={values.phone}
                className=" bg-white rounded h-8 px-1 py-0"
              />
              {touched.phone && errors.phone && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                  {errors.phone}
                </Text>
              )}

              <Text className="font-notobold text-white mb-2 mt-3">Email</Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                value={values.email}
                className=" bg-white rounded h-8 px-1 py-0"
              />
              {touched.email && errors.email && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                  {errors.email}
                </Text>
              )}
            </View>
          </View>
          <View className="h-[15%] mx-7">
            <Pressable
              onPressOut={handleSubmit}
              disabled={!isValid}
              className="bg-green-oon rounded-lg items-center justify-center h-14 my-auto shadow shadow-black">
              <Text className="font-noto text-xl text-white py-2">{test}</Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;
