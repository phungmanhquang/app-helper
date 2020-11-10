import * as React from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Data, ListLevel } from '../Data';

export default function ConfirmTaskScreen(props) {
	const [data, setData] = React.useState()

	const nextStep = () => {
		props.navigation.navigate('Map')
	}
	React.useEffect(() => {
		const id = props.route.params?.id;
		setData(Data.find(x => x.id === id))
	},[])
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingBottom: 32 }}>
			
		{data ? <>
			<View 
				style={styles.Item}
      				>
					<Text style={styles.title}>
						Tên:
					<Text style={styles.subText}> {data.name}</Text>
					</Text>
					<Text style={styles.title}>
						Số Điện Thoại:
						<Text style={styles.subText}> {data.phone}</Text>
					</Text>
					<Text style={styles.title}>
						Mức độ:
						<Text style={styles.subText}>
							{ListLevel.find(i => i.key == data.level ).value}
						</Text>
					</Text>
					<Text style={styles.title}>
						Vị trí:
						<Text style={styles.subText}> {data.address}</Text>
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
			</> : null
		}
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