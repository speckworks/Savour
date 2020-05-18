import React from "react";
import { formStyles } from "../styles/global";
import { View, Text, ScrollView, TextInput } from "react-native";
import { AUTH_TOKEN } from "../constants";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token,
      user{name}
    }
  }
`;
class Login extends React.Component {

  _confirm = async (data) => {
    const { token } = this.props.login ? data.login : data.signup;
    this._saveUserData(token,data);
  };
  _saveUserData = (token,data) => {
    localStorage.setItem(AUTH_TOKEN, token);
    this.props.succesful(data);
  };

  render() {
    const { login, switchLoginBool, email, name, password, changeInputText } = this.props;
    return (
      <ScrollView>
         <Text>{login ? "Login" : "Sign Up"}</Text>
         <View>
           {!login && (
             <TextInput
               style={formStyles.input}
               value={name}
               name="name"
               onChange={(e) => changeInputText(e)}
               type="text"
               placeholder="Your name"
             />
           )}
           <TextInput
             style={formStyles.input}
             value={email}
             name="email"
             onChange={(e) => changeInputText(e)}
             type="text"
             placeholder="Your email address"
           />
           <TextInput
             style={formStyles.input}
             value={password}
             onChange={(e) => changeInputText(e)}
             type="password"
             name="password"
             placeholder="Choose a safe password"
           />
         </View>
         <View>
           <Mutation
             mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
             variables={{ email, password, name }}
             onCompleted={(data) => this._confirm(data)}
           >
             {(mutation) => (
               <Text onClick={mutation}>
                 {login ? "login" : "create account"}
               </Text>
             )}
           </Mutation>
           <Text
             style={formStyles.links}
             onClick={()=>switchLoginBool(login)}
           >
             {login ? "need to create an account?" : "already have an account?"}
           </Text>
         </View>
      </ScrollView>
    );
  }
}
export default Login;
