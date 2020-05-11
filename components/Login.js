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
      token
    }
  }
`;
class Login extends React.Component {
  state = {
    login: true,
    email: "",
    password: "",
    name: "",
  };

  _confirm = async (data) => {
    const { token } = this.state.login ? data.login : data.signup;
    this._saveUserData(token);
  };
  _saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };

  render() {
    const { login, email, name, password } = this.state;
    return (
      <ScrollView>
        <Text>{login ? "Login" : "Sign Up"}</Text>
        <View>
          {!login && (
            <TextInput
              style={formStyles.input}
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
          <TextInput
            style={formStyles.input}
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <TextInput
            style={formStyles.input}
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
            type="password"
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
            onClick={() => this.setState({ login: !login })}
          >
            {login ? "need to create an account?" : "already have an account?"}
          </Text>
        </View>
      </ScrollView>
    );
  }


}
export default Login;
