import React from 'react';
import { Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { createStackNavigator } from 'react-navigation-stack';
import { styles } from './src/styles';


export default function App() {
  let onPress = () =>{
    shiftDistanceY:2.0;
    }

  return (
    <View style={{backgroundColor:"#F48F2D"}}>
      <Text style={styles.text}>Savour the Flavor!</Text>
      <Button title={"Button to Somewhere"} onPress={() => Alert.alert('Button pressed')}>  </Button>
      <TouchableOpacity onPress={onPress}>
      <Modal isVisible={true} >
          <View style={{ flex:1}}>
            <Text style={styles.text}>I am the modal content!</Text>
          </View>
        </Modal>
        </TouchableOpacity>
    </View>
  );
}

