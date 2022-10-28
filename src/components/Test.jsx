import React from 'react';
import {View, Text, Button, Modal, Pressable} from 'react-native';
import Check from './Check';
const Test = () => {
  // const date = new Date('2013-08-03T02:00:00Z');
  // const year = new Date('2013-08-03T02:00:00Z').getFullYear();
  // const month = date.getMonth() + 1;
  // const dt = new Date('2013-08-03T02:00:00Z').getDate();
  // const hour = date.getHours();
  // const minute = date.getMinutes();

  // const [modalVisible, setModalVisible] = React.useState(false);

  // const month = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December',
  // ];
  // const [test, setTest] = React.useState([]);
  // var test = [];
  // const create = new Date('2020-01-03T02:00:00Z');
  // const testdate = new Date('2021-03-03T02:00:00Z');
  // const now = new Date();
  // const monthCreate = create.getMonth();
  // const yearCreate = create.getFullYear();
  // const monthNow = now.getMonth();
  // const yearNow = now.getFullYear();

  // const MonthShow = (d1, d2) => {
  //   var months;
  // var show = [];
  // var tod = 0;
  // months = (d2.getFullYear() - d1.getFullYear()) * 12;
  // months -= d1.getMonth();
  // months += d2.getMonth();
  // months += 1;
  // months = months > 6 ? 6 : months;
  // console.log('Show :', months, 'Month');
  // for (let i = 0; i < months; i++) {
  //   if (d2.getMonth() - i >= 0) {
  // show.push(month[d2.getMonth() - i] + ' ' + d2.getFullYear());
  // test.push({
  //   label:
  //     month[d2.getMonth() - i] +
  //     ' ' +
  //     d2.getFullYear().toString().substr(-2),
  //   value:
  //     d2.getFullYear() +
  //     '-' +
  //     (d2.getMonth() - i + 1).toString().padStart(2, '0'),
  // });
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
  // } else {
  // show.push(month[11 - tod] + ' ' + (d2.getFullYear() - 1));
  //       test.push({
  //         label:
  //           month[11 - tod] +
  //           ' ' +
  //           (d2.getFullYear() - 1).toString().substr(-2),
  //         value:
  //           d2.getFullYear() - 1 + '-' + (12 - tod).toString().padStart(2, '0'),
  //       });
  //       tod++;
  //     }
  //   }
  //   console.log(show, test);
  // };
  // const [monthList, setMonthList] = React.useState(test);
  // React.useEffect(() => {
  //   fetchTransaction();
  //   MonthShow(create, testdate);
  // }, []);

  // const [transaction, setTransaction] = React.useState([]);
  // const fetchTransaction = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
  //     setTransaction(
  //       res.data.map(tran => ({
  //         id: tran.id,
  //         user: tran.username,
  //         date: Number(tran.id),
  //         press: false,
  //       })),
  //     );
  //   });
  // };
  let month = "Nov"
  let init=[{
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
    Nov: true,
    Dec: false,
  }]

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
  const test = new Date('2021-11-03T02:00:00Z');  //Use to test date

  const MonthShow = (d1, d2) => {
    var months;
    var listyearnow = [];
    var listyearpast = [];
    var tod = 0; // if month < 0
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    months += 1
    months = (months > 12 ? 12 : months)

    for (let i = 0; i< months; i++){
      if (d2.getMonth() - i >= 0){
        listyearnow.splice(0,0,m[d2.getMonth() - i])
      }
      else{
        listyearpast.splice(0,0,m[11 - tod])
        tod++
      }
    }
    console.log(listyearnow)
    console.log(listyearpast)
    let r2021 = Math.round(listyearpast.length / 4 )
    let r2022 = Math.round(listyearnow.length / 4 )
    console.log("row 2021",r2021,"row 2022",r2022)
    
  }
  const te = "2021-02"
  React.useEffect(()=>{
    MonthShow(create, test)
    console.log(te.substr(0,4))
  },[])
  return (
    <View className="bg-red-500 flex-row flex-wrap w-full">
      {/* <Check value={init?.Nov} month={month}/> */}
      <View className="w-1/4 bg-sky-500"><Text>t1</Text></View>
      <View className="w-1/4 bg-sky-500"><Text>t1</Text></View>
      <View className="w-1/4 bg-sky-500"><Text>t1</Text></View>
      {/* <View><Tesxt>{"\n"}</Tesxt></View> */}
      <View className="w-1/4 bg-sky-500"><Text>t1</Text></View>
   
      <View className="w-1/4 bg-sky-500"><Text>t1</Text></View>
      {/* <View>
        <Text>{monthList.length}</Text>
        {monthList.map((month, index) => {
          <View key={index}>
            <Text>
              {month.label} + {month.value}
            </Text>
            ;
          </View>;
        })}
      </View> */}
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
