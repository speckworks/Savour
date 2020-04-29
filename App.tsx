import React  from 'react';
import { useState } from 'react';
import { Text, View, Button, Alert, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import { createStackNavigator } from 'react-navigation-stack';
import { styles } from './src/styles';


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () =>{
    setModalVisible(!modalVisible)
  }
  return (
    <View style={{backgroundColor:"#F48F2D"}}>
      <Text style={styles.text}>Savour the Flavor!</Text>
      <Button title={"Button to Somewhere"} onPress={() => Alert.alert('Button pressed')}>  </Button>
      <Modal isVisible={modalVisible}
              style={styles.modal}>
          <View style={{ flex:1}}>
            <Text style={styles.text}>I am the modal content!</Text>
          </View>
        </Modal>
        <Button
        title='Show Modal' 
        onPress={toggleModal}
      />
    </View>
  );
}

