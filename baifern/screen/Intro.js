import * as React from 'react';
import { useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
export default function IntroScreen(props) {

    const nextStep =  setTimeout( () => {
        props.navigation.navigate('Home')
    }, 3000);
    // React.useEffect(() => {nextStep()
	// },[])
useEffect(() => {setTimeout( () => {
    props.navigation.navigate('Home')
}, 3000) },[])

    return ( 
			<View style = {styles.container} >
                <Image source={require('../assets/modau.jpg')} style={styles.backgroundImage}>
            </Image>
                
            </ View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain', // or 'stretch'
        width: '100%',
        height: '100%'
    }
});