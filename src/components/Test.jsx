import React from 'react';
import {View, Text, Button, Modal, Pressable} from 'react-native';
const Test = ({navigation}) => {
  const date = new Date('2013-08-03T02:00:00Z');
  const year = new Date('2013-08-03T02:00:00Z').getFullYear();
  const month = date.getMonth() + 1;
  const dt = new Date('2013-08-03T02:00:00Z').getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View className="bg-red-500">
      {/* <Text className="text-white">
        {year} + {month} + {dt} +{typeof dt} {hour} + {minute}
      </Text> */}
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View>
            <View>
              <Text>Hello World!</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable onPress={() => setModalVisible(true)}>
          <Text>Show Modal</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default Test;
