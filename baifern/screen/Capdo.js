import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Capdo() {
    const sukienClick = () => {
        console.log('sukienClick ::: ')
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.nguyhiem} > Hãy chọn cấp độ  </Text>
            <Text style={styles.nguyhiem} > nguy hiểm   </Text>
            <TouchableOpacity
                onPress={sukienClick}
                style={{...styles.capdo, ...styles.capdo1}}
            >

                <Text style={styles.yeucau}> Tôi có thể cầm cự được !</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={sukienClick}
                style={{...styles.capdo, ...styles.capdo2}}
            >

                <Text style={styles.yeucau}> Cần hỗ trợ gấp !</Text>

            </TouchableOpacity>

            





           

            
        </View>
    )

}

const styles = StyleSheet.create({
    nguyhiem: {
        fontSize:35,

    },
    capdo: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: '75%',
        borderWidth: 1,
        paddingTop: 32,
        paddingBottom: 32,
        borderRadius: 5,
        borderColor: '#BDBDBD',
        alignItems: 'center',
        paddingBottom : 23
    },
    capdo1: {
        marginBottom: 16,
        backgroundColor: '#FA5858',
    },
    capdo2: {
        backgroundColor : '#DF0101'
    }
})