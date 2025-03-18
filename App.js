import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AuthContext, AuthProvider } from './bai7buoi9/AuthContext';
import Login from './bai7buoi9/LoginScreen';
import ExplorerScreen from './bai7buoi9/ExplorerScreen';
import AccountScreen from './bai7buoi9/AccountScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "#FF5733", 
      tabBarInactiveTintColor: "gray", 
      tabBarStyle: { backgroundColor: "white", height: 60 }, 
      tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" }, 
    }}
  >
    <Tab.Screen
      name="Explorer"
      component={ExplorerScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="beer" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-outline" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Main" component={MainApp} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="SignIn" component={Login} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default function App() {


  return ( //bài 6
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
    
);

}

