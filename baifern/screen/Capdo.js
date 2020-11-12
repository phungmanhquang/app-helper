import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ListLevel } from '../Data';

export default function Capdo(props) {

    const sukienClick = (level) => {
        props.navigation.navigate('Confirm',{level})
        
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.nguyhiem} > Hãy chọn cấp độ  </Text>
            <Text style={styles.nguyhiem} > nguy hiểm   </Text>
            {
                ListLevel.map(x => (
                    <TouchableOpacity
                        onPress={() => sukienClick(x.key)}
                        style={{...styles.capdo, backgroundColor: x.color}}
                    >
                        <Text style={styles.title}>{x.value}</Text>
                    </TouchableOpacity>
                ))
            }
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
        marginBottom: 8,
        marginTop: 8
    },
    title: {
        fontSize: 25,
        margin: 0,
        padding: 0,
        fontWeight: '400',
        color: '#fff'
    }
})