import * as React from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ConfirmTaskScreen(props) {
	
	const nextStep = () => {
			props.navigation.navigate('Map')
	}

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingBottom: 32 }}>
			<View 
				style={styles.Item}
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
      </View>
			<View
							style={styles.Button}
			>
			<Button
					title="Xác nhận"
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
		textAlign: 'left',
		paddingLeft: 16
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
		marginTop: 36
	}
});