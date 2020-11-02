import * as React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
export default function IntroScreen(props) {

    const nextStep = () => {
        props.navigation.navigate('Home')
    }

    return ( 
			<View style = {styles.container} >
                <View>
                    <Image 
                        style={styles.Logo} 
                        source={require('../assets/Img/intro/logo.png')} 
                    />
                </View>
                <View style={styles.Content}>
                    <Text style={styles.Title}>Cứu hộ</Text>
                    <Text style={styles.subText}>
                    ấn đề truyền hình ảnh từ webcam trong mạng LAN không phải là một vấn đề mới trong việc lập trình nhúng. Ví dụ như trên Raspberry Pi, chúng ta hoàn toàn có thể sử dụng MJPG Streamer để làm được việc này. Tuy nhiên, khác với Raspberry Pi, Intel Galieo không đơn giản như vậy, bởi vì chưa có một bài viết hoàn chỉnh chỉ về vấn đề này trên cộng đồng Intel Galileo thế giới. Vì vậy, mình muốn đóng góp một phần nhỏ để các bạn có thể làm được điều này trên con Intel Galileo của mình (không phân biệt Intel 
                    </Text>
                </View>
                <View
                        style={styles.Button}
                >
                    <Button
                        title="Tiếp tục"
                        onPress={nextStep}
                    />
                </View>
            </ View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    Logo: {
        width: 300,
        height: 300,
    },
    Content: {
        paddingLeft: 24,
        paddingRight: 24
    },
    Title:{
        fontSize: 50,
        color: '#dd2a0c',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16
    },
    subText: {
        color: '#747474',
        textAlign: 'justify',
        fontSize: 18
    },
    Button: {
        width: '100%',
        marginTop: 10,
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: 36
    }
});