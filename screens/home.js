import React, { useState } from 'react';
import { View } from 'react-native';
import { globalStyles } from '../styles/global';
import { MyCarousel } from '../components/carousel';
import Login from '../components/Login';

export default function Home({ navigation }) {

  return (
    <View style={globalStyles.container}>
      <MyCarousel/>
    </View>
  );
}
