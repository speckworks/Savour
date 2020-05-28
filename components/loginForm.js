import React from "react";
import { formStyles } from "../styles/global";
import { View, Text, TextInput } from "react-native";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        name
      }
    }
  }
`;

export const LogInForm = (props) => {
    const {email, password, confirm, buttonStyle} = props
  return (
      
    <View style={formStyles.container}>
      <Text
        style={{ fontSize: 40 }}
        onClick={() => props.switchLoginBool(props.login)}
      >
        {" "}
        ⬅{" "}
      </Text>
      <Text style={formStyles.heading}>Log in</Text>

      <TextInput
        style={formStyles.input}
        value={props.email}
        name="email"
        onChange={(e) => props.changeInputText(e)}
        type="text"
        placeholder="Email Address"
      />
      <TextInput
        style={formStyles.input}
        value={props.password}
        onChange={(e) => props.changeInputText(e)}
        type="password"
        name="password"
        secureTextEntry={true}
        placeholder="Password"
      />
      <Text style={formStyles.heading}>
        {"\n"}
        {"\n"}Forgot password?
      </Text>

      <Mutation
        mutation={LOGIN_MUTATION}
        variables={{ email, password }}
        onCompleted={(data) => confirm(data)}
      >
        {(mutation) => (
          <View style={formStyles.formBound}>
            
            <Text onClick={mutation} style={[buttonStyle,formStyles.login]}>
              Login
            </Text>
          </View>
        )}
      </Mutation>
    </View>
  );
};

