import React from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
// import {Picker} from '@react-native-picker/picker';
const Activity = () => {
  const [transaction, setTransaction] = React.useState([]);

  React.useEffect(() => {
    fetchTransaction();
  }, []);

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
//   const [selectedLanguage, setSelectedLanguage] = React.useState();

  const fetchTransaction = () => {
    axios.get('testapi.com').then(res => {
      setTransaction(res.data);
    });
  };
  return (
    <View>
      {/* Transaction */}
      
        {/* month select */}
        <View className="flex flex-row mx-3">
          <View className="w-1/2 relative z-30">
            <Text className="font-notobold text-black">Period</Text>
            {/* <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker> */}
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              
            />
          </View>
          <View className="w-1/2 px-4 mt-4 justify-end">
            <Link to="#">
              <View className="flex rounded-2xl bg-green-kem items-center justify-center py-[12px]">
                <Text className=" font-notoMedium text-white ">
                  Account Summary
                </Text>
              </View>
            </Link>
          </View>
        </View>
        {/* month select */}

        {/* วันที่ */}
        <View className=" mx-3 my-2">
          <Text className="font-notobold text-black">16 OCT 22</Text>
        </View>
        {/* วันที่ */}

        {/* กรอบ Payment */}
        {transaction.map(tran => (
          <View className="bg-tao mx-2 mb-1 rounded ">
            <View className="mx-3 my-1 flex-row  ">
              <View className="w-1/2 ">
                <Text className="font-bold text-black">Payment</Text>
                <Text className="font-bold text-black">6:25 PM</Text>
              </View>
              <View className="w-1/2 items-end ">
                <Text className="text-red-600 font-bold">-70.00 Bath</Text>
                <Text>?</Text>
              </View>
            </View>
          </View>
        ))}
        {/* กรอบ Payment */}
        <View className="bg-tao mx-3 mb-1 rounded ">
          <View className="mx-3 flex-row border-b border-gray-500 pb-1 mb-1">
            <View className="w-1/2 ">
              <Text className="font-noto text-black">Payment</Text>
              <Text className="font-noto text-black">6:25 PM</Text>
            </View>
            <View className="w-1/2 items-end ">
              <Text className="font-noto text-red-600">- 70.00 Bath</Text>
              <Text>?</Text>
            </View>
          </View>
          <View className="mx-3 flex-row mb-1">
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
        </View>
      {/* Transaction */}
    </View>
  );
};

export default Activity;
