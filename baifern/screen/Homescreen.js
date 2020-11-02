import * as React from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function HomeScreen(props) {
  const Ok = () => {
    props.navigation.navigate('Help')
  }

  const Cancel = () => {
    props.navigation.navigate('Help')
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Cho biết vị trí ",
      "Cho phép ứng dụng truy cập vị trí của bạn ?",
      [
        {
          text: "Đồng ý ",
          onPress: () => Ok(),
          style: "cancel"
        },
        { text: "Để lần sau", onPress: () => Cancel() }
      ],
      { cancelable: false }
    );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={styles.input}
        placeholder="Họ và tên : "
      />


      <TextInput
        style={styles.input}
        placeholder="Số điện thoại  "
      />
      <Text style={styles.yeucaunhap} >Bạn thuộc đội nào ?</Text>
      <TouchableOpacity 
        style={{...styles.button, ...styles.Button1}}
        onPress={createTwoButtonAlert}  
      >
          <Text style={styles.textButton}>Đội cứu hộ</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{...styles.button, ...styles.Button2}}
        onPress={createTwoButtonAlert}  
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