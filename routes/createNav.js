import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home'
import Favorites from '../screens/favorites';
import Cart from '../screens/cart';


const Tab = createBottomTabNavigator();

const createNav = () => {
   return (
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Favs' component={Favorites} />
      <Tab.Screen name='Cart' component={Cart} />
    </Tab.Navigator>
  </NavigationContainer>
   )
}

export default createNav;
