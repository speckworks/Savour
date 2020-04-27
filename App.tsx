import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { createStackNavigator } from 'react-navigation-stack';



export default function App({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Savour the Flavor!</Text>
      <Button style={styles.button} title={"Button to Somewhere"} onPress={() => Alert.alert('Button pressed')}>  </Button>
      <Modal>
          <View style={{ flex: 1 }}>
            <Text style={styles.text}>I am the modal content!</Text>
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:"50px",
    backgroundColor: '#F48F2D',
  },
  text: {
    backgroundColor: 'turquoise',
    fontFamily: 'Garamond',
    fontSize: "70px",
    borderRadius: 50,
    padding: "20px"
  },
  button: {
    backgroundColor:"#D33F2D",
    borderRadius:20
  }
});
