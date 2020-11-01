import * as React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Xacnhan() {
    const createTwoButtonAlert = () => {}
     return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text style= {styles.xacnhan}> Bạn có chắc chắn  </Text>
           <Text style= {styles.xacnhan}> muốn chọn cấp độ này ?  </Text>

           <View style={styles.hihi}>
      <Button
        style={styles.hihi}
        title="Tôi Chắc chắn ! "
        onPress={createTwoButtonAlert}
      />
      </View>
      <View style={styles.hihi}>
      <Button
        style={styles.hihi}
        title=" Chọn cấp độ khác . "
        onPress={createTwoButtonAlert}
      />
      </View>
      <Text style= { styles.xacnhan} > Bạn có thể thêm ghi chú  </Text>
      <Text style= { styles.xacnhan} > của mình  </Text>
      <TextInput
        style={styles.ghichu}
        placeholder=" Nhập ghi chú điii : "
        />

            </View>
     )
  
}


    const styles = StyleSheet.create({
        xacnhan : {
            fontSize : 25,
            

        },
        hihi: {
            height: 40,
            width: '70%',
            marginBottom : 20,
            borderRadius: 8
          },
          ghichu: { 
            height: '40%',
            width : '70%',
            borderBottomColor : '#000',
            borderWidth : 1,
            textAlign : 'center',
            marginBottom : 30
          },
    })