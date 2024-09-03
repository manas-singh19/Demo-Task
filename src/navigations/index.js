import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
 

const Stack = createNativeStackNavigator();

import Dashboard from '../screens/Dashboard';
import Todo from '../screens/ToDo';
import FetchAndDisplay from '../screens/FetchAndDisplay';
import CustomModalComponent from '../screens/CustomModalComponent';
import FormValidation from '../screens/Form';

import HomeScreen from '../screens/SimpletNavigation';
import DetailScreen from '../screens/SimpletNavigation/DetailScreen';
export const SimpleNavigation = ()=>{
  return <Stack.Navigator screenOptions={{ headerShown: false,}} initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false, title: 'HomeScreen', }}/>
            <Stack.Screen name="DetailScreen" component={DetailScreen} options={{headerShown:false, title: 'DetailScreen', }}/>
            
  </Stack.Navigator>
}

const AppStack = ()=>{
    return <NavigationContainer >
          <Stack.Navigator screenOptions={{ headerShown: false,}} initialRouteName="Dashboard">
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false, title: 'Dashboard', }}/>
            <Stack.Screen name="Todo" component={Todo} options={{headerShown:false, title: 'Todo', }}/>
            <Stack.Screen name="FetchAndDisplay" component={FetchAndDisplay} options={{headerShown:false, title: 'FetchAndDisplay', }}/>
            <Stack.Screen name="CustomModalComponent" component={CustomModalComponent} options={{headerShown:false, title: 'CustomModalComponent', }}/>

            <Stack.Screen name="SimpleNavigation" component={SimpleNavigation} options={{headerShown:false, title: 'SimpleNavigation', }}/>

            <Stack.Screen name="FormValidation" component={FormValidation} options={{headerShown:false, title: 'SimpleNavigation', }}/>

          </Stack.Navigator>
      </NavigationContainer>
}
 

export default AppStack;