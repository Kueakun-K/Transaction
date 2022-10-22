import React from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
// import {Link} from 'react-router-native';
import axios from 'axios';

const Data = () => {
  const [transaction, setTransaction] = React.useState([]);
  const [test, setTest] = React.useState(false);
  React.useEffect(() => {
    fetchTransaction();
  }, []);
  const fetchTransaction = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      setTransaction(res.data);
    });
  };
  return (
    <View className="h-auto flex-1">
      <ScrollView className="bg-red-500 ">
        {/* วันที่ */}
        <View className=" mx-3 my-2">
          <Text className="font-notobold text-black">16 OCT 22</Text>
        </View>
        {/* วันที่ */}
        {/* กรอบ Payment */}
        <View>
          {transaction.map((tran, index) => (
            <Pressable
              onPressOut={() => setTest(!test)}
              className="bg-tao mx-3 mb-2 rounded shadow-lg shadow-black">
              <View
                className={
                  (test ? 'border-b border-gray-500' : '') +
                  ' mx-3 flex-row  pb-1 mb-1 '
                }>
                <View className="w-1/2 ">
                  <Text className="font-noto text-black">{tran.id}</Text>
                  <Text className="font-noto text-black">6:25 PM</Text>
                </View>
                <View className="w-1/2 items-end ">
                  <Text className="font-noto text-red-600">- 70.00 Bath</Text>
                  <Text>?</Text>
                </View>
              </View>
              <View className={test ? 'mx-3 flex-row mb-1' : 'hidden'}>
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
          ))}
        </View>
        {/* กรอบ Payment */}
      </ScrollView>
    </View>
  );
};

export default Data;
