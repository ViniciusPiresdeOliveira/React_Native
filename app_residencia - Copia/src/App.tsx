import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';

const StackNavigation = createNativeStackNavigator();

export default ()=> {
    return(
        //<Login/>
        <Home/>
    );
    // return(
    //     <NavigationContainer>
    //         <StackNavigation.Navigator>
    //             <StackNavigation.Screen 
    //             name='Login'
    //             component={Login}
    //             />
    //              <StackNavigation.Screen 
    //             name='Home'
    //             component={Home}
    //             />
    //         </StackNavigation.Navigator>
    //     </NavigationContainer>
    // );
};

