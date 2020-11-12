import * as React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { firebaseApp } from '../componemts/FirebaseConfig';

export default function Xacnhan({navigation , route}) {
  const [locationResult, setLocationResult] = React.useState();
  const [level, setLevel] = React.useState();
  const [User, setUser] = React.useState();
  const [Desc, setDesc] = React.useState();

  const getUser = async () => {
      try {
          const value = await AsyncStorage.getItem('User');
          setUser(JSON.parse(value))
          return value
      }
      catch (error) {
          console.log("error ::: ", error)
          return null;
      }
  }
  const renderID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  const Ok =  async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
      setLocationResult('Permission to access location was denied')
     
		}
    let location = await Location.getCurrentPositionAsync({});
    if(location){
      const data = {
        id: renderID(),
        phoneNumber: User?.phoneNumber,
        userName: User?.userName,
        level,
        Desc,
        location: JSON.stringify(location)
      }
      firebaseApp.database().ref('Tasks').push(data).then(
        (res) => {
          setUser(data)
          if (isUser) {
            props.navigation.navigate('Help');
            return;
          }
          props.navigation.navigate('Helper');
        })
    }
    navigation.navigate('Confirmed')
    setLocationResult(JSON.stringify(location));
  }

  React.useEffect(() =>{
    const _level = route.params?.level;
    if(_level){
      setLevel(_level)
    }
    getUser()
  },[])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.xacnhan}> Bạn có chắc chắn  </Text>
      <Text style={styles.xacnhan}> muốn chọn cấp độ này ?  </Text>

        <TouchableOpacity
          style={{ ...styles.button, ...styles.Button1 }}
          onPress={Ok}
        >
          <Text style={styles.textButton}>Tôi Chắc chắn ! </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, ...styles.Button2 }}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.textButton}>Chọn cấp độ khác</Text>
        </TouchableOpacity>
      <Text style={styles.xacnhan2} >Ghi chú (nếu có) :</Text>
      <View style={styles.textAreaContainer} >
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Nhập thông tin"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          onChangeText={text => setDesc(text)}
        />
      </View> 
    </View>
  )

}


const styles = StyleSheet.create({
  xacnhan: {
    fontSize: 25,
  },
  xacnhan2: {
    fontSize: 16,
    textAlign: 'left',
    width: '80%',
    paddingBottom: 16,
    paddingTop: 16
  },
  ghichu: {
    height: '40%',
    width: '70%',
    borderBottomColor: '#000',
    borderWidth: 1,
    textAlign: 'center',
    marginBottom: 30
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
  },
  textAreaContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    width: '80%'
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  }
})