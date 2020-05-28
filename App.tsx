import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./routes/drawer";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { AUTH_TOKEN } from "./constants";
import Login from "./components/Login";
import changeTextInput  from './components/changeTextInput'
// import Home from './screens/home'
// import Favorites from './screens/Favorites';
// import Cart from './screens/Cart';

// const Tab = createBottomTabNavigator();

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ``,
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


class App extends React.Component {
  state = {
    buttonStyle: {backgroundColor: '#faf6f2', color: '#b5b5b5'},
    login: false,
    signup: false,
    email: "",
    password: "",
    name: "",
    success: false,
  };
  //Change the style color and form control
  //passes down to login form for input values
  changeTextInput=(args)=>{     
      this.setState({
        [args.target.name]: args.target.value
      })
      if(this.state.email.length > 1 && this.state.password.length > 1){
        this.setState({
          buttonStyle: {backgroundColor: '#c7681a',color: '#1c1c1c'}
        })
      }else if(this.state.email.length < 1){
        this.setState({
          buttonStyle: {backgroundColor: '#faf6f2',color: '#b5b5b5'}
        })
      }
  }
  //enables switching of the views between login form and signup
  switchSignBool=(signup)=>{
    this.setState({ signup: !signup })
  }
  switchLoginBool=(login)=>{
    this.setState({ login: !login })
  }

  //when login is succesful, we get success, this controls view for user
  loginSuccess=()=>{
    this.setState({
      success: true
    })
  }
  render() {
    const { success, signup,login, email, name, password, buttonStyle } = this.state;
    return (
      <ApolloProvider client={client}>
        {success ? 
        <Navigator/> :  <Login 
        email={email}
        name={name}
        password={password}
        changeInputText={this.changeTextInput}
        login={login}
        signup={signup}
        switchSignBool={this.switchSignBool}
        switchLoginBool={this.switchLoginBool}
        succesful={this.loginSuccess}
        buttonStyle={buttonStyle}
        />
        }
      </ApolloProvider>
    );
  }
}
export default App;