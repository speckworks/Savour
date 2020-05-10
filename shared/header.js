import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';
 
export default function Header({ title, navigation }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <>
    <View>
    <AntDesign name="setting" size={24} color="black" onPress={openMenu} style={global.icon} />
    </View>
    <br></br>
    <View>
    <ImageBackground style={global.header}>
      <View style={global.headerTitle}>
        <Text style={global.headerText}>Savour Beer</Text>
      </View>
    </ImageBackground>
    </View>
    </>
  );
}

const global = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontFamily:'fantasy',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    justifyContent:'bottom'
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