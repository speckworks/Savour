import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './routes/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Favorites from './screens/Favorites';
import Cart from './screens/Cart';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
      <Tab.Navigator>
        {/* <Tab.Screen name='Home' component={Home} /> */}
        <Tab.Screen name='Favs' component={Favorites} />
        <Tab.Screen name='Cart' component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
