import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      padding:"50px",
      backgroundColor: '#F48F2D',
    },
    text: {
      backgroundColor: '#F48F2D',
      fontFamily: 'Garamond',
      fontSize: 70,
      padding: "20px"
    },
    button: {
      backgroundColor:"#F48F2D",
      borderRadius:50,
    },
    modal: {
      fontFamily: 'Garamond',
      backgroundColor:"#D33F2D",
      fontSize: 70,
      borderRadius: 50,
      padding: "20px"
    }
  });

  export { styles };