import React from 'react';
import {View, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

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

  const create = new Date('2021-01-03T02:00:00Z');
  const now = new Date();
  const test = new Date('2021-08-03T02:00:00Z'); //Use to test date

  const showMonthNow = (d1, d2) => {
    var months;
    var list = [];
    var tod = 0; // if month < 0
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    months += 1;
    months = months > 12 ? 12 : months;

    for (let i = 0; i < months; i++) {
      if (d2.getMonth() - i >= 0) {
        list.splice(0, 0, {
          label: m[d2.getMonth() - i],
          value: false,
          params:
            d2.getFullYear() +
            '-' +
            (d2.getMonth() - i + 1).toString().padStart(2, '0'),
        });
      } 
    }
    return list;
  };

  const showMonthPass = (d1, d2) => {
    var months;
    var list = [];
    var tod = 0; // if month < 0
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    months += 1;
    months = months > 12 ? 12 : months;

    for (let i = 0; i < months; i++) {
      if (d2.getMonth() - i >= 0) {
        
      } else {
        list.splice(0, 0, {
          label: m[11 - tod],
          value: true,
          params:
            d2.getFullYear() - 1 + '-' + (12 - tod).toString().padStart(2, '0'),
        });
        tod++;
      }
    }
    return list;
  };

  const [monthNow, setMonthNow] = React.useState([]);
  const [monthPass, setMonthPass] = React.useState([]);

  let initYear = 0;
  let num = 0;

  React.useEffect(() => {
    setMonthNow(showMonthNow(create, now));
    setMonthPass(showMonthPass(create, now));
    console.log("SET")
  }, []);

  // let numYearNow = 0;
  // let numYearPast = 0;
  // for (let i = 0; i < monthNow.length; i++) {
  //   if (monthNow[i].params.substr(0, 4) == now.getFullYear()) {
  //     numYearNow += 1;
  //   } else {
  //     numYearPast += 1;
  //   }
  // }
  // console.log('Number : ', numYearNow, numYearPast);

  // let rowYearNow = Math.round(numYearNow / 4);
  // let rowYearPast = Math.round(numYearPast / 4);
  // console.log('Row : ', rowYearNow, rowYearPast);
  // const submit = values => {
  //   Alert.alert(JSON.stringify(values));
  // };

  const handleChange = (label) => {
    let temp = monthPass.map((month) => {
      if (label === month.label){
        return { ...month, value: !month.value};
      }
      return month;
    });
    setMonthPass(temp)
  }

  return (
    <View className="h-[55%] px-5 bg-base">
      {/* Select Month */}
      <ScrollView className="">
        <View className=" mb-3 ">
          <Text className="font-notobold text-black">
            Select Month(s){monthNow.length} {monthPass.length}
          </Text>
        </View>
        {/* <View className="flex">
        {monthList.map((list, index) => (
          <View key={index}>
            {(() => {
              if (list.params.substr(0, 4) != initYear) {
                initYear = list.params.substr(0, 4);
                return (
                  <View className=" ">
                    <Text className="font-notoMedium text-black">
                      {list.params.substr(0, 4)}
                    </Text>
                  </View>
                );
              }
            })()}
            {(() => {
              if (list.params == '2021-11') {
                return (
                  <View className=" bg-red-500 w-1/4 ">
                    <Text>{monthList[index].label}</Text>
                  </View>
                );
              } else {
                return (
                  <View className="flex-row bg-sky-500 w-1/4 items-center">
                    <Text>{monthList[index].label}</Text>
                  </View>
                );
              }
            })()}
          </View>
        ))}
        </View> */}
        <View className="bg-red-300 w-full flex-row flex-wrap">
          {monthPass.map((month, index) => (
              <TouchableOpacity key={index} onPress={() => {onchecked(month.lable)}} className="bg-sky-300 w-1/4 flex-row">
                <CheckBox value={monthPass[index].value} onValueChange={()=>{handleChange(month.label)}}/>
                <Text>{month.label}</Text>
              </TouchableOpacity>
            
          ))}
        </View>

        <View className="bg-red-500 w-full flex-row flex-wrap">
          {monthNow.map((month, index) => (
              <View key={index} className="bg-sky-500 w-1/4 flex-row">
                <Text>{month.label}</Text>
              </View>
            
          ))}
        </View>

        {/* <View className="bg-red-500">
          <View className="flex-row mb-3 justify-center">
            <Check
                  value={values?.Jan}
                  change={newValue => setFieldValue('Jan', newValue)}
                  month={m[0]}
                />
                <Check
                  value={values?.Feb}
                  change={newValue => setFieldValue('Feb', newValue)}
                  month={m[1]}
                />
                <Check
                  value={values?.Mar}
                  change={newValue => setFieldValue('Mar', newValue)}
                  month={m[2]}
                />
                <Check
                  value={values?.Apr}
                  change={newValue => setFieldValue('Apr', newValue)}
                  month={m[3]}
                />
          </View>
          <View className="flex-row mb-3 justify-between"></View>

          <View className=" flex-row mb-3 "></View>
        </View> */}
      </ScrollView>
      {/* Select Month */}

      {/* Submit Request */}
      <View className="justify-center">
        <TouchableOpacity
          // onPressOut={handleSubmit}
          className="bg-green-kem rounded-lg items-center py-4 shadow shadow-black">
          <Text className="font-notoMedium text-xl text-white">
            Submit Request
          </Text>
        </TouchableOpacity>
      </View>
      {/* Submit Request */}
    </View>
  );
};

export default ReqState;
