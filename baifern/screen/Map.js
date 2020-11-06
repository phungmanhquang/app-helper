import * as React from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker, PROVIDER_GOOGLE  } from 'react-native-maps';
// import { Constants } from 'expo';
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

export default function MapScreen(props) {
	const [locationResult, setLocationResult] = React.useState()
	
	const markers = [
		{
			latitude: 20.9984952,
			longitude:  105.5729541,
			title: 'Foo Place',
			subtitle: '1234 Foo Drive'
		}
	];

	const nextStep = () => {
			props.navigation.navigate('Helper')
	}

	const _getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			setLocationResult('Permission to access location was denied')
		}
		let location = await Location.getCurrentPositionAsync({});
		setLocationResult(JSON.stringify(location));
		console.log('locationResult ::: ', location)
	};

	React.useEffect(() => {
		_getLocationAsync()
	},[])

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingBottom: 32 }}>
			<View 
				style={styles.Item}
      >
				{locationResult ? 
					<MapView
						provider={PROVIDER_GOOGLE}
					 	style={styles.map}
						initialRegion={{
							latitude: markers[0].latitude,
							longitude: markers[0].longitude,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421,
						}}
						annotations={markers}
						
					>
						<MapView.Marker
							coordinate={{ "latitude": markers[0].latitude,   
							"longitude": markers[0].longitude }}
							title={"Your Location"}
							draggable 
						/>
						<MapView.Marker
							coordinate={{ "latitude": 20.998,   
							"longitude": 105.5721 }}
							title={"Your Location"}
							draggable 
						/>
					</MapView>
					: null
				}
					{/* <Text>zxcx</Text>
					<Text>{locationResult?.coords?.latitude || 'zozoz'}</Text> */}
      </View>
			<View
							style={styles.Button}
			>
			<Button
					title="Hòan Thành"
					color="green"
					onPress={nextStep}
			/>
			</View>
    </View>
  );
}
const styles = StyleSheet.create({
	Item: {
		width: '100%',
		height: '100%'
	},
  title: {
		fontSize: 25,
		marginTop: 16
	},
	Button: {
		width: '100%',
		marginTop: 10,
		paddingLeft: 24,
		paddingRight: 24,
		marginTop: 36,
		position: 'absolute',
		bottom: 10
	},
	map: {
		...StyleSheet.absoluteFillObject,
		height: '100%',
		width: '100%'
	},
});