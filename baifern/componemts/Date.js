import React from 'react'
import { 
    Image,
    Text,
    View, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import wifiImage from '../assets/wifi.png'
export default function Date(props) {

    const sukienClick = () => {
        console.log('sukienClick ::: ')
    }

    return (
        <View>
            <TouchableOpacity
                onPress={sukienClick}
            >
            <Image style={{ width: 89, height:89 }} source={wifiImage} />

            </TouchableOpacity>
        </View>
    );
}


