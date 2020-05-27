import React from "react";
import { formStyles } from "../styles/global";
import { View, Text, ImageBackground, TextInput } from "react-native";
import { AUTH_TOKEN } from "../constants";


import savourBG from "../assets/savourBG.png";
import {LogInForm} from "./loginForm"
import gql from "graphql-tag";
const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const Welcome=(props)=>{
  
  return(<View>
  <ImageBackground
  source={savourBG}
  style={formStyles.imageBound}
></ImageBackground>
<View style={formStyles.buttonBound}>
  <Text
    style={formStyles.signUpButton}
    onClick={() => props.switchSignBool(props.signup)}
  >
    SIGN UP
  </Text>

  <Text
    style={formStyles.loginButton}
onClick={() => props.switchLoginBool(props.login)}
  >
    LOGIN
  </Text>
</View>
</View>)
}

class Login extends React.Component {
  _confirm = async (data) => {
    const { token } = this.props.login ? data.login : data.signup;
    this._saveUserData(token, data);
  };
  _saveUserData = (token, data) => {
    localStorage.setItem(AUTH_TOKEN, token);
    this.props.succesful(data);
  };

  render() {
    const {
      login,
      signup,
      switchSignBool,
      switchLoginBool,
      email,
      name,
      password,
      changeInputText,
      buttonStyle,
    } = this.props;
    return (
      <View style={formStyles.container}>
        {login ? 
        <LogInForm
        buttonStyle={buttonStyle}
        email={email}
        password={password}
        changeInputText={changeInputText}
        switchLoginBool={switchLoginBool}
        confirm={this._confirm}
        login={login}/> : 
        <Welcome 
        switchSignBool={switchSignBool}
        login={login}
        signup={signup}
        switchLoginBool={switchLoginBool}/> }
       
      </View>
    );
  }
}
export default Login;
