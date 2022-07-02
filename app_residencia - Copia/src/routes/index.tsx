import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Categorias from '../pages/Categoria';
import ProdutoCategoria from "../pages/ProdutoCategoria";
import Produto from '../pages/Produto'
import Carrinho from "../pages/Carrinho";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { withBadge, Badge } from "react-native-elements";
import Icon from 'react-native-vector-icons/Feather';

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {

    const { contarQuantidadeProdutos } = useContext(CarrinhoContext);

    const BadgeIcone = withBadge(contarQuantidadeProdutos())(Icon);
    return (
        <TabNavigation.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;
    
              switch (route.name) {
                case 'HomeTabScreen':
                  iconName = 'home';
                  break;
                case 'CategoriasTabScreen':
                  iconName = 'list';
                  break;
              }
    
              return <Icon name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarShowLabel:false
          })}
          tabBarOptions={{
            activeTintColor: '#000000',
            inactiveTintColor: '#000000',
          }}>
            <TabNavigation.Screen
                name='HomeTabScreen'
                component={Home} />
            <TabNavigation.Screen
                name='CategoriasTabScreen'
                component={Categorias} />
            <TabNavigation.Screen
                name="CarrinhoScreen"
                component={Carrinho}
                options={{
                    tabBarIcon: () => (
                        <BadgeIcone name='shopping-cart' type='font-awesome' size={24} color='black' />
                    ),
                    title: 'Carrinho'
                }} />
        </TabNavigation.Navigator>
    );
}

const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer = () => {
    return (
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Screen
                name="TabNavigationScreen"
                options={{ title: 'Home Principal' }}
                component={BottomTabNavigator} />
            <DrawerNavigation.Screen
                name="CategoriaDrawerScreen"
                component={Categorias} />
            <DrawerNavigation.Screen
                name='CarrinhoScreen'
                component={Carrinho}
                options={{
                    title: 'Carrinho',
                    drawerActiveTintColor: 'green',
                    drawerInactiveTintColor: 'pink',
                }}/>
        </DrawerNavigation.Navigator>
    );
}

const StackNavigation = createNativeStackNavigator();
const Routes = () => {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen
                    name='LoginScreen'
                    component={Login}
                    options={{ headerShown: false }}
                />
                <StackNavigation.Screen
                    name='HomeScreen'
                    component={NavigationDrawer}
                    options={{ headerShown: false }}
                />
                <StackNavigation.Screen
                    name='ProdutoCategoria'
                    component={ProdutoCategoria}
                    options={{ headerShown: true, title: 'Produto Categoria' }}
                />
                <StackNavigation.Screen
                    name='ProdutoScreen'
                    component={Produto}
                    options={{ headerShown: true }}
                />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}

export default Routes;