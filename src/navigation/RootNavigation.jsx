import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import Colors from '../contans/Colors';
import FFWHuyencreen from '../screens/FFW/FFWHScreen';
import FFWXaScreen from '../screens/FFW/FFWXScreen';
import FFWScreen from '../screens/FFW/FFWScreen';
import MapScreen from '../screens/map/Map';
import SelectWMSLayerScreen from '../screens/SelectWMSLayer';
import ListFirePoint from '../screens/ListFirePoint';
import DetailFirePoint from '../screens/DetailFirePoint';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.PRIMARY_BLUE,
      },
      headerTintColor: Colors.TITLE_WHITE,

    }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        title: "Trang chủ"
      }} />
      <Stack.Screen name="FFWHuyen" component={FFWHuyencreen} options={{ title: "Danh sách cấp cháy huyện" }} />
      <Stack.Screen name="FFWXa" component={FFWXaScreen} options={{ title: "Danh sách cấp cháy" }} />
      <Stack.Screen name="FFW" component={FFWScreen} options={{ title: "Thông tin chi tiết" }} />
      <Stack.Screen name="MapScreen" component={MapScreen} options={{ title: "Bản đồ" }} />
      <Stack.Screen name="SelectWMSLayerScreen" component={SelectWMSLayerScreen} options={{ title: "Thêm lớp bản đồ WMS" }} />
      <Stack.Screen name="ListFirePoint" component={ListFirePoint} options={{ title: "Danh sách điểm cháy" }} />
      <Stack.Screen name="DetailFirePoint" component={DetailFirePoint} options={{ title: "Chi tiết điểm cháy" }} />
    </Stack.Navigator>
  );
}


const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: Colors.PRIMARY_BLUE,
        },
        headerTintColor: Colors.TITLE_WHITE,
        headerShown: false,
      }}>
        <Drawer.Screen name="Home" component={StackNav} options={{ title: "Trang chủ" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
