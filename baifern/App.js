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

enableScreens();
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

// =nNbB
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
         screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Help" component={Doicuuho} />
        <Stack.Screen name="Level" component={Capdo} />
        <Stack.Screen name="Confirm" component={Xacnhan} />
        <Stack.Screen name="Confirmed" component={Chapnhan} />
      </Stack.Navigator>
    </NavigationContainer>
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
