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
import { Data } from "../Data";

const  Item =  {
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
  const Ok = (id) => {
    props.navigation.navigate("ConfirmTask", {id});
  };

  return (
    <ScrollView>
      <View
        style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
      >
        {Data.map((x, i) => (
          <TouchableOpacity style={styles[`level${x.level}`] } onPress={() => Ok(x.id)} key={i}>
            <Text style={styles.title}>
			Tên :<Text style={styles.subText}> {x.name}</Text>
            </Text>
            <Text style={styles.title}>
              sđt:
              <Text style={styles.subText}> {x.phone}</Text>
            </Text>
            <Text style={styles.title}>
              Múc độ:
              <Text style={styles[`text${x.level}`]}> {x.level}</Text>
            </Text>
            <Text style={styles.title}>
              Vị trí:
              <Text style={styles.subText}> {x.address}</Text>
            </Text>
          </TouchableOpacity>
        ))}
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
  level2:{
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
  text2:{
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
