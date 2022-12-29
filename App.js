import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { IconButton, Switch } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { isLoggedIn, logout } from './services/auth';
import { verifyTheme } from './services/util';
import { saveStorage } from './services/storage';

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';

import {darkTheme, lightTheme} from './themes';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [modeColor, setModeColor] = useState('light');
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    setUserLoggedIn(isLoggedIn());
    verifyTheme(setModeColor);
  }, [])
  
  const changeThemeColor = () => {
    return <>
            <Switch 
              value={modeColor === "dark"}
              onValueChange={() => {
                let m = modeColor === "light" ? "dark" : "light";
                setModeColor(m)
                
              }}
            />
          </>
  }

  return (
    <PaperProvider theme={modeColor === 'light' ? lightTheme : darkTheme}>
  <NavigationContainer>
    {
      userLoggedIn ?
                  <Tab.Navigator
                  screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                      const icons = {
                        Home: 'home',
                        Profile: 'account',
                      };
                
                      return (
                        <MaterialCommunityIcons
                          name={icons[route.name]}
                          color={color}
                          size={size}
                        />
                      );
                    },
                    tabBarActiveTintColor:"purple",
                    tabBarInactiveTintColor:"gray",
                    
                  })}
                  initialRouteName="Profile"
                >
                  <Tab.Screen 
                  name="Home" 
                  component={Home}
                  options={{
                    title:" Minhas tarefas",
                    headerRight: () => changeThemeColor ()
                  }} 
                  />
                  <Tab.Screen 
                  name="Profile" 
                  component={Profile} 
                  options={{
                    title:" Perfil",
                    headerRight: () => changeThemeColor()
                  }} 
                  />
                </Tab.Navigator>
                :
                <Stack.Navigator>
                  <Stack.Screen 
                  name="Login" 
                  component={Login} 
                  options={{
                    headerShown: false
                  }}
                  />
                  <Stack.Screen 
                  name="Register" 
                  component={Register}
                  options={{
                    headerShown: false
                  }} 
                  />
                </Stack.Navigator>
    
      }
   
  </NavigationContainer>
  </PaperProvider>
  );
}


