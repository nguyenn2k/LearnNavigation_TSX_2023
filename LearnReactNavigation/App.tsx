import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
/**
 * @NguyenTruongKhoiNguyen
 */
//React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Import Screens:
import HomeScreen from './src/screens/Home/Home';
import DetailScreen from './src/screens/Details/Details';
import SettingScreen from './src/screens/Setting/Settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name = "Details" component = {DetailScreen} options={{headerShown:false}}/>
      </Stack.Navigator> */}
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name = "Home" component = {HomeScreen}
          options={{
            tabBarIcon:({focused})=>{
              return(
                <View>
                  <Image source={require('./src/assets/icons/home_icon.png')}
                    resizeMode="contain"
                    style={{width:25,height:25}}
                  />
                </View>
              )
            }
          }}
        />
        <Tab.Screen name = "Details" component = {DetailScreen}
          options={{
            tabBarIcon:({focused})=>{
              return(
                <View>
                  <Image source={require('./src/assets/icons/details_icon.png')}
                    resizeMode="contain"
                    style={{width:25,height:25}}
                  />
                </View>
              )
            }
          }}
        />
        <Tab.Screen name = "Settings" component = {SettingScreen}
          options={{
            tabBarIcon:({focused})=>{
              return(
                <View>
                  <Image source={require('./src/assets/icons/setting_icon.png')}
                    resizeMode="contain"
                    style={{width:25,height:25}}
                  />
                </View>
              )
            }
          }}
        />
      </Tab.Navigator>
  </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})