import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import { MyCarousel } from '../components/carousel';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Card from '../shared/card';

import Favorites from '../screens/favorites';
import Cart from '../screens/cart';

export default function Home({ navigation }) {
  const Tab = createBottomTabNavigator();
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { beerName: '', abv: 5, body: 'lorem ipsum', key: '1' },
    {
      beerName: 'Gotta Catch Them All (again)',
      abv: 6,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      beerName: 'Not So "Final" Fantasy',
      abv: 9,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <MyCarousel></MyCarousel>

      <Tab.Navigator>
        {/* <Tab.Screen name='Home' component={Home} /> */}
        <Tab.Screen name='Favs' component={Favorites} />
        <Tab.Screen name='Cart' component={Cart} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
