import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './screen/Homescreen';
import Doicuuho from './screen/Doicuuho';
import Capdo from './screen/Capdo';
import Xacnhan from './screen/Xacnhan';
import Chapnhan from './screen/Chapnhan';
import IntroScreen from './screen/Intro';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import HelperScreen from './screen/Helper';
import ConfirmTaskScreen from './screen/ConfirmTask';
import MapScreen from './screen/Map';

enableScreens();
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

// =nNbB
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
         screenOptions={{
          headerHideBackButton: true
        }}
      >
        <Stack.Screen name="Intro" component={IntroScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Help" component={Doicuuho} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Level" component={Capdo} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Confirm" component={Xacnhan} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Confirmed" component={Chapnhan} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Helper" component={HelperScreen} 
          options={{
            title:"Danh sách công việc"
          }}
        />
        <Stack.Screen name="ConfirmTask" component={ConfirmTaskScreen} 
          options={{
            title:'Chi tiết công việc'
          }}
        />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <MapScreen />
    // <IntroScreen /> 
    // <HomeScreen />
    // <Xacnhan />
    // <Chapnhan />
    // <Doicuuho />
  //  <Capdo />
    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({ route }) => ({
    //       tabBarIcon: ({ focused, color, size }) => {
    //         let iconName;

    //         if (route.name === 'Home') {
    //           iconName = 'home';
    //         } else if (route.name === 'Settings') {
    //           iconName = 'rocket';
    //         }

    //         // You can return any component that you like here!
    //         return <Icon name={iconName} size={30} color="#900" />;
    //       },
    //     })}
    //     tabBarOptions={{
    //       activeTintColor: 'tomato',
    //       inactiveTintColor: 'gray',
    //     }}
    //   >
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Settings" component={SettingsScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}
