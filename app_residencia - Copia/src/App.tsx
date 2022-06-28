import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Categorias from './pages/Categoria';

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
    <TabNavigation.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle:{backgroundColor: '#b4fb00', borderBottomWidth:0}
    }}>
        <TabNavigation.Screen name='HomeTabScreen' component={Home}/>
        <TabNavigation.Screen name='CategoriasTabScreen' component={Categorias}/>
    </TabNavigation.Navigator>
    );
}

const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer = () => {
    return(
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Screen 
            name="TabNavigationScreen" 
            options={{title: 'Home Principal'}}
            component={BottomTabNavigator}/>
            <DrawerNavigation.Screen
            name="CategoriaDrawerScreen"
            component={Categorias}/>
        </DrawerNavigation.Navigator>
    );
}

const StackNavigation = createNativeStackNavigator();
export default () => {
    return(
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen 
                name='LoginScreen'
                component={Login}
                />
                 <StackNavigation.Screen 
                name='HomeScreen'
                component={NavigationDrawer}
                />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
};

