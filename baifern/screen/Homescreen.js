import * as React from 'react';
import { Alert, AsyncStorage, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { firebaseApp } from '../componemts/FirebaseConfig';

export default function HomeScreen(props) {

  let [userName, setUserName] = React.useState();
  const [phoneNumber, setphoneNumber] = React.useState();

  const renderID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const setUser = async (data) => {
    try {
      await AsyncStorage.setItem('User', JSON.stringify(data));
    }
    catch (error) {
      console.log("error ::: ", error)
    }
  }

  const createTwoButtonAlert = async (isUser) => {
    const data = {
      id: renderID(),
      phoneNumber,
      userName,
      type: isUser ? 0 : 1
    }
    firebaseApp.database().ref('Users').push(data).then(
      (res) => {
        setUser(data)
        if (isUser) {
          props.navigation.navigate('Help');
          return;
        }
        props.navigation.navigate('Helper');
      })
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={styles.input}
        placeholder="Họ và tên : "
        onChangeText={text => setUserName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại  "
        onChangeText={text => setphoneNumber(text)}
      />
      <Text style={styles.yeucaunhap} >Bạn thuộc đội nào ?</Text>
      <TouchableOpacity
        style={{ ...styles.button, ...styles.Button1 }}
        onPress={() => createTwoButtonAlert(false)}
      >
        <Text style={styles.textButton}>Đội cứu hộ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.button, ...styles.Button2 }}
        onPress={() => createTwoButtonAlert(true)}
      >
        <Text style={styles.textButton}>Người cần trợ giúp</Text>
      </TouchableOpacity>

    </View>

  );
}
const styles = StyleSheet.create({
  input: {
    height: 65,
    width: '80%',
    borderWidth: 1,
    textAlign: 'center',
    marginBottom: 30,
    borderColor: '#0471c4',
    borderRadius: 5
  },
  button: {
    height: 60,
    width: '80%',
    marginTop: 30,
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  Button1: {
    backgroundColor: '#0471c4',
    borderColor: '#0471c4'
  },
  Button2: {
    backgroundColor: '#f53e19',
    borderColor: '#f53e19'
  }
});