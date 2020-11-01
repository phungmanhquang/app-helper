import * as React from 'react';
import { Text, View ,StyleSheet, TouchableOpacity, Image } from 'react-native';
// import siren from '../assets/siren'
export default function Doicuuho () {

    const sukienClick = () => {
        console.log('sukienClick ::: ')
    }
    
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       
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
    }

});

