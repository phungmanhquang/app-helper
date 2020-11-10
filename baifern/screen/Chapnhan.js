import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import dongyImage from '../assets/tick.jpg';
export default function Chapnhan (){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
            <Image style={styles.dongy}  source={dongyImage} />
            <Text style={styles.texta}> Đã gửi tín hiệu cầu cứu</Text>
            <Text style={styles.texta}> trong lúc chờ đợi bạn có thể :</Text>
            <Text style={styles.texta}> 1.Tránh xa khu vực có nước chảy mạnh</Text>
            <Text style={styles.texta}> 2.Di chuyển lên nơi cao nhất , tránh trèo lên tum nhà bị đóng </Text>
            <Text style={styles.texta}> 3.Nếu trong xe ô tô , mực nước dâng lên hãy trèo lên mui xe </Text>
        </View>
    )



}



const styles = StyleSheet.create ({
    dongy : {
        width : 50,
        height: 50
    },
    texta : {
        textAlign : 'left',
        width : '100%'
    }
})