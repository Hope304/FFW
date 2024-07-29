import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from './src/screens/home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
