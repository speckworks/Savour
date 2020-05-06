import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MyCarousel } from '../components/carousel';


export default function Header({ title, navigation }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <ImageBackground source={require('../assets/tavourLogo.png')} style={styles.header}>
      <br></br>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      <View style={styles.headerTitle}>
        <Image source={require('../assets/tavourLogo.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>Savour Beer</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerTitle: {
    flexDirection: 'row'
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
});