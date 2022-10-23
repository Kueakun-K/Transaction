import React from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import {ChevronDownIcon, ChevronUpIcon} from 'react-native-heroicons/outline';
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';
const Activity = ({navigation}) => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const d = new Date();
  const year = d.getFullYear().toString().substr(-2);
  const [items, setItems] = React.useState([
    {label: month[d.getMonth()] + ' ' + year, value: month[d.getMonth()]},
    {
      label: month[d.getMonth() - 1] + ' ' + year,
      value: month[d.getMonth() - 1],
    },
    {
      label: month[d.getMonth() - 2] + ' ' + year,
      value: month[d.getMonth() - 2],
    },
    {
      label: month[d.getMonth() - 3] + ' ' + year,
      value: month[d.getMonth() - 3],
    },
    {
      label: month[d.getMonth() - 4] + ' ' + year,
      value: month[d.getMonth() - 4],
    },
    {
      label: month[d.getMonth() - 5] + ' ' + year,
      value: month[d.getMonth() - 5],
    },
  ]);

  const [selectedLanguage, setSelectedLanguage] = React.useState();

  const [transaction, setTransaction] = React.useState([]);
  let initdate = 0;

  React.useEffect(() => {
    fetchTransaction();
  }, []);

  const fetchTransaction = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      setTransaction(
        res.data.map(tran => ({
          id: tran.id,
          user: tran.username,
          date: Number(tran.id),
          press: false,
        })),
      );
    });
  };
  return (
    <View className="flex-1 bg-base">
      <View className="flex flex-row px-5 mb-2">
        {/* Period Picker*/}
        <View className="w-1/2 relative z-30">
          <Text className="font-notobold text-black">Period</Text>
          <View className="border-b">
            <Picker
              prompt="Period"
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedLanguage(itemValue);
                console.log(itemValue);
              }}>
              {items.map((item, index) => (
                <Picker.Item
                  style={{fontSize: 15}}
                  key={index}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
          </View>
        </View>
        {/* Period Picker*/}

        {/* Account Summary */}
        <View className="w-1/2 pl-4 mt-4 justify-end">
          <Pressable>
            <View className="flex rounded-xl bg-green-kem items-center justify-center py-[12px] shadow shadow-black">
              <Text className=" font-notoMedium text-white">
                Account Summary
              </Text>
            </View>
          </Pressable>
        </View>
        {/* Account Summary */}
      </View>

      {/* Transaction */}
      <View className="flex-1 ">
        <ScrollView>
          {transaction.map((tran, index) => (
            <View key={index}>
              {/* วันที่ */}
              {(() => {
                if (tran.date != initdate) {
                  initdate = tran.date;
                  return (
                    <View className="px-5 pb-2 pt-1">
                      <Text className="font-notobold text-black text-base">
                        {tran.date}
                      </Text>
                    </View>
                  );
                }
              })()}
              {/* วันที่ */}

              {/* กรอบ Transaction */}
              <Pressable
                key={index}
                onPressOut={e => {
                  tran.press = !tran.press;
                  setTransaction([...transaction]);
                }}
                className="bg-tao/80 mb-2 mx-5 rounded shadow shadow-gray-600 ">
                <View
                  className={
                    (tran.press ? 'border-b border-gray-500' : '') +
                    ' mx-2 flex-row  mb-1 '
                  }>
                  <View className="w-1/2 ">
                    <Text className="font-noto text-black text-base">
                      {tran.user}
                    </Text>
                    <Text className="font-noto text-black text-sm">
                      {tran.date}
                    </Text>
                  </View>
                  <View className="w-1/2 items-end ">
                    <Text className="font-noto text-red-600">- 70.00 Bath</Text>
                    <View>
                      {tran.press ? (
                        <ChevronUpIcon color="black" size={24} />
                      ) : (
                        <ChevronDownIcon color="black" size={24} />
                      )}
                    </View>
                  </View>
                </View>
                <View className={tran.press ? 'mx-3 flex-row mb-1' : 'hidden'}>
                  <View className="w-1/2">
                    <Text className="font-noto text-xs">FourQU</Text>
                    <Text className="font-noto text-xs">To Acc No. :</Text>
                    <Text className="font-noto text-xs">To Acc Name. :</Text>
                  </View>
                  <View className="w-1/2 items-end">
                    <Text className="font-noto text-xs"></Text>
                    <Text className="font-noto text-xs">xxx-x-x1301-x</Text>
                    <Text className="font-noto text-xs">Watcharapol</Text>
                  </View>
                </View>
              </Pressable>
            </View>
          ))}
          {/* กรอบ Transaction */}
        </ScrollView>
      </View>
      {/* Transaction */}
    </View>
  );
};
export default Activity;
