import * as React from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HelperScreen(props) {
	const Ok = () => {
    props.navigation.navigate('ConfirmTask');
  }

  return (
		<ScrollView >
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
			{
				[1,2,3,4,5].map(x => <TouchableOpacity 
					style={styles.Item}
					onPress={ () => Ok()}
					key={x}
				>
						<Text style={styles.title}>
							Tên :
							<Text style={styles.subText}> Ng Van A</Text>
						</Text>
						<Text style={styles.title}>
							sđt:
							<Text style={styles.subText}> 09876662126</Text>
						</Text>
						<Text style={styles.title}>
							Múc độ:
							<Text style={styles.subText}> Mức độ 1</Text>
						</Text>
						<Text style={styles.title}>
							Vị trí:
							<Text style={styles.subText}> So 123 duog 123</Text>
						</Text>
				</TouchableOpacity>)
			}
    </View>
		</ScrollView>
  );
}
const styles = StyleSheet.create({
	Item: {
		borderWidth: 1,
		padding: 25,
		width: '85%',
		borderColor: '#DCDCDC',
		borderRadius: 5,
		marginTop: 20,
		backgroundColor: '#fff'
	},
  title: {
		fontSize: 25
	}
});