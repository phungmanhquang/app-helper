import * as React from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Data, ListLevel } from "../Data";
import { firebaseApp } from '../componemts/FirebaseConfig';

const Item = {
  padding: 25,
  width: "85%",
  borderRadius: 5,
  marginTop: 20,
  borderRadius: 2,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  backgroundColor: '#fff',
  borderLeftWidth: 5
}

export default function HelperScreen(props) {
  const [ListTasks, setListTasks] = React.useState([])

  const Ok = (data) => {
    props.navigation.navigate("ConfirmTask", { data });
  };

  const covertObjToArr = (obj) =>{
    console.log('obj obj obj ::: ', obj);
    const newArr = [];
    for (const property in obj) {
      console.log('obj[property] ::: ', obj[property]);
      newArr.push(obj[property])
    }
    // console.log('newArr ::: ', newArr);
  }

  const getListTask = () => {
    firebaseApp.database().ref('Tasks').on('value',
      (snapshot) => {
        console.log('item ::: ', );
        // setListTasks(Object.values(item));
        setListTasks(Object.values(Object.values(snapshot.val())))
        // covertObjToArr(item)
      }
    )
  }

  React.useEffect(() => {
    getListTask();
  }, [])

  return (
    <ScrollView>
      <View
        style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
      >
        {
          console.log('zozozozo ::: ', ListTasks)
        }
        { ListTasks.map((x, i) => (
          <TouchableOpacity style={styles[`level${x.level}`]} onPress={() => Ok(x)} key={i}>
            <Text style={styles.title}>
              Tên :<Text style={styles.subText}> {x.userName}</Text>
            </Text>
            <Text style={styles.title}>
              sđt:
              <Text style={styles.subText}> {x.phoneNumber}</Text>
            </Text>
            <Text style={styles.title}>
              Múc độ:
              <Text style={styles[`text${x.level}`]}>
                {ListLevel.find(i => i.key == x.level).value}
              </Text>
            </Text>
            <Text style={styles.title}>
              Vị trí:
              {
                console.log('JSON.parse(x.location).latitude ::: ', JSON.parse(x.location))
              }
              <Text style={styles.subText}> {
                JSON.parse(x.location).coords.latitude + " " + JSON.parse(x.location).coords.longitude
              }</Text>
            </Text>
            <Text style={styles.title}>
              Mô tả:
              <Text style={styles.subText}> {x.Desc}</Text>
            </Text>
          </TouchableOpacity>
        ))
      }
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: '#9b9b9b'
  },
  level1: {
    ...Item,
    borderLeftColor: 'red'
  },
  level2: {
    ...Item,
    borderLeftColor: 'orange'
  },
  level3: {
    ...Item,
    borderLeftColor: '#FFEB3B'
  },
  level4: {
    ...Item,
    borderLeftColor: 'green'
  },
  text1: {
    color: 'red'
  },
  text2: {
    color: 'orange'
  },
  text3: {
    color: '#FFEB3B'
  },
  text4: {
    color: 'green'
  },
  subText: {
    color: '#555'
  }
});
