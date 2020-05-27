import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1c1c1c",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: "5px",
    margin: "5px",
  },
  icon: {
    backgroundColor: "f48f2d",
  },
  header: {
    backgroundColor: "f48f2d",
  },
});
export const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 0,
  },
  heading:{
    textAlign: "center",
    letterSpacing: 3
  },
  input:{
    padding: 3,
    height:30,
    borderBottomStyle: 'solid',
    borderTopColor:'#fff',
    borderRightColor: "#fff",
    borderLeftColor: "#fff",
    borderBottomColor: '#d9e6f2',
    borderWidth: 2,
  },
  imageBound: {
    width: windowWidth,
    height: windowHeight - 60,
    justifyContent: "center",
    backgroundColor: "powderblue",
  },
  buttonBound: {
    flex: 1,
    flexDirection: "row",
  },
  formBound:{
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-end',
  },
  login:{
    // backgroundColor: '#FDD7E4',
    alignSelf: 'stretch',
    textAlign: 'center',
    paddingTop:15,
    height:40,
    textTransform:'uppercase',
    fontFamily:'Avenir',
    fontWeight: 'bold',
  },
  //These 2 buttons are identical apart from bg color, TODO: Make into one css style 
  loginButton: {
    width: windowWidth / 2,
    height: 60,
    backgroundColor: "#faf6f2",
    textAlign: "center",
    paddingTop:15,
    fontSize: 16,
    fontFamily:'Avenir',
    textTransform:'uppercase',
    fontWeight: 'bold',
    letterSpacing: 3
  },
  signUpButton: {
    width: windowWidth / 2,
    height: 60,
    backgroundColor: "#c7681a",
    color: '#1c1c1c',
    textAlign: "center",
    paddingTop:15,
    fontSize: 16,
    fontFamily:'Avenir',
    textTransform:'uppercase',
    fontWeight: 'bold',
    letterSpacing: 3

  },
});

export const images = {
  ratings: {
    "1": require("../assets/rating-1.png"),
    "2": require("../assets/rating-2.png"),
    "3": require("../assets/rating-3.png"),
    "4": require("../assets/rating-4.png"),
    "5": require("../assets/rating-5.png"),
  },
};
