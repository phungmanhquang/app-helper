import * as React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function HomeScreen() {

    const createTwoButtonAlert = () =>
      Alert.alert(
        "Cho biết vị trí ",
        "Cho phép ứng dụng truy cập vị trí của bạn ?",
        [
          {
            text: "Đồng ý ",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Để lần sau", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
        style={styles.container}
        placeholder="Họ và tên : "
        />


        <TextInput
        style={styles.container}
        placeholder="Số điện thoại  "
        />
        <Text style={styles.yeucaunhap} >Bạn thuộc đội nào ?</Text>
        <View style={styles.button} >
        <Button
          
        title="Đội cứu hộ "
        onPress={createTwoButtonAlert}
      />
      </View>
      <View style={styles.button}>
      <Button
        style={styles.button}
        title="Người cần trợ giúp "
        onPress={createTwoButtonAlert}
      />
      </View>
      
      </View>
      
    );
  }
const styles = StyleSheet.create({
  container: { 
    height: 40,
    width : '70%',
    borderBottomColor : '#000',
    borderWidth : 1,
    textAlign : 'center',
    marginBottom : 30
  },
  button: {
    height: 40,
    width: '70%',
    marginBottom : 30
  },
   yeucaunhap: {
     marginBottom : 30
   }
});