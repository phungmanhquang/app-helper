import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import dongyImage from '../assets/tick.jpg';
export default function Chapnhan (){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.dongy}  source={dongyImage} />
        <Text > Đã gửi tín hiệu cầu cứu</Text>
        <Text > trong lúc chờ đợi bạn có thể :</Text>
        <Text > 1.Tránh xa khu vực có nước chảy mạnh</Text>
        <Text > 2.Di chuyển lên nơi cao nhất , tránh trèo lên tum nhà bị đóng </Text>
        <Text > 3.Nếu trong xe ô tô , mực nước dâng lên hãy trèo lên mui xe </Text>
        </View>
    )



}



const styles = StyleSheet.create ({
    dongy : {
        width : 50,
        height: 50
    }
})