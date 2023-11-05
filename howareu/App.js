import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { EntryScreen } from './screens';
import { OverviewScreen } from './screens';

const Tab = createBottomTabNavigator();

const MyTheme = {
  dark: true,
  colors: {
    primary: '#EA80FC',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: '#EA80FC',
    notification: 'rgb(255, 69, 58)',
  },
};


export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Entry" component={EntryScreen} options={{
          headerTitle: "Create an entry",
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="note-plus" color={color} size={size} />
          )
        }} />
        <Tab.Screen name="Calendar View" component={OverviewScreen} options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          )
        }} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
} // ????

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});