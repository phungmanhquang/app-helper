import * as React from 'react';
import { Text, View ,StyleSheet, TouchableOpacity, Image } from 'react-native';


export default function Doicuuho (props) {
    const sukienClick = () => {
        props.navigation.navigate('Level')
    }
    
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <Text style={styles.textHeader}>
                    Xin chào, AAA
                </Text>
            </View>
            <View style={{ width: '80%',paddingTop: 10, paddingBottom: 150}}>
                <View style={styles.Item}>
                    <Image 
                        source={require('../assets/Img/User/wt.png')} 
                        style={{width: 100, height: 100}}
                    />
                    <Text style={styles.TextItem}> Mưa ... </Text>
                </View>
                <View style={styles.Item}>
                    <Image 
                        source={require('../assets/Img/User/tp.png')} 
                        style={{width: 100, height: 100}}
                    />
                    <Text style={styles.TextItem}> Nhiet do ... </Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={sukienClick}
                style={styles.hop}
            >
                <Image style={{ width: 89, height:89 }} source={require('../assets/siren.png')} />
                <Text style={styles.yeucau}> Cầu cứu !</Text>
            </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
    yeucau: { 
        fontSize: 36,
        color: '#fff'
    },
    hop : {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: '75%',
        borderWidth: 1,
        paddingTop: 32,
        paddingBottom: 32,
        borderRadius: 5,
        borderColor: '#BDBDBD',
        backgroundColor: '#FA5858',
        alignItems: 'center'
    },
    Item: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    TextItem:{
        fontSize: 24
    },
    textHeader:{
        fontSize: 24,
        marginBottom: 20,
        fontWeight: '500'
    }
});

