import React from 'react';
import {View, Text, Button, Modal, Pressable} from 'react-native';
const Test = ({navigation}) => {
  const date = new Date('2013-08-03T02:00:00Z');
  const year = new Date('2013-08-03T02:00:00Z').getFullYear();
  // const month = date.getMonth() + 1;
  const dt = new Date('2013-08-03T02:00:00Z').getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const [modalVisible, setModalVisible] = React.useState(false);

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
  // const [test, setTest] = React.useState([]);
  var test = [];
  const create = new Date('2020-01-03T02:00:00Z');
  const testdate = new Date('2021-03-03T02:00:00Z');
  const now = new Date();
  const monthCreate = create.getMonth();
  const yearCreate = create.getFullYear();
  const monthNow = now.getMonth();
  const yearNow = now.getFullYear();

  const MonthShow = (d1, d2) => {
    var months;
    // var show = [];
    var tod = 0;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    months += 1;
    months = months > 6 ? 6 : months;
    console.log('Show :', months, 'Month');
    for (let i = 0; i < months; i++) {
      if (d2.getMonth() - i >= 0) {
        // show.push(month[d2.getMonth() - i] + ' ' + d2.getFullYear());
        test.push({
          label:
            month[d2.getMonth() - i] +
            ' ' +
            d2.getFullYear().toString().substr(-2),
          value:
            d2.getFullYear() +
            '-' +
            (d2.getMonth() - i + 1).toString().padStart(2, '0'),
        });
        // setTest([
        //   ...test,
        //   {
        //     label:
        //       month[d2.getMonth() - i] +
        //       ' ' +
        //       d2.getFullYear().toString().substr(-2),
        //     value: d2.getFullYear() + '-',
        //   },
        // ]);
      } else {
        // show.push(month[11 - tod] + ' ' + (d2.getFullYear() - 1));
        test.push({
          label:
            month[11 - tod] +
            ' ' +
            (d2.getFullYear() - 1).toString().substr(-2),
          value:
            d2.getFullYear() - 1 + '-' + (12 - tod).toString().padStart(2, '0'),
        });
        tod++;
      }
    }
    console.log(show, test);
  };
  const [monthList, setMonthList] = React.useState(test);
  React.useEffect(() => {
    fetchTransaction();
    MonthShow(create, testdate);
  }, []);

  const [transaction, setTransaction] = React.useState([]);
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
    <View className="bg-red-500">
      <View>
        <Text>{monthList.length}</Text>
        {monthList.map((month, index) => {
          <View key={index}>
            <Text>
              {month.label} + {month.value}
            </Text>
            ;
          </View>;
        })}
      </View>
      {/* <Text className="text-white">
        {year} + {month} + {dt} +{typeof dt} {hour} + {minute}
      </Text> */}
      {/* <View>
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
      </View> */}
    </View>
  );
};
export default Test;
