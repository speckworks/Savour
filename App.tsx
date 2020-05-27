import React from "react";
import Navigator from "./routes/drawer";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { AUTH_TOKEN } from "./constants";
import Login from "./components/Login";

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
    login: false,
    email: "test@home.com",
    password: "test",
    name: "",
    success: false,
  };
  // changeTextInput=(args)=>{     
  //     this.setState({
  //       [args.target.name]: args.target.value
  //     })
  // }
  switchLoginBool=(login)=>{
    this.setState({ login: !login })
  }
  loginSuccess=()=>{
    this.setState({
      success: true
    })
  }
  changeTextInput=(args)=>{     
    this.setState({
      [args.target.name]: args.target.value
    })
}
  render() {
    const { success, login, email, name, password } = this.state;
    return (
      <ApolloProvider client={client}>
        {success ? 
        <Navigator/> :  <Login 
        email={email}
        name={name}
        password={password}
        changeInputText={this.changeTextInput}
        login={login}
        switchLoginBool={this.switchLoginBool}
        succesful={this.loginSuccess}/>
        }
       
        {/* <Navigator/> */}
        {/* <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Favs' component={Favorites} />
        <Tab.Screen name='Cart' component={Cart} />
      </Tab.Navigator>
    </NavigationContainer> */}
      </ApolloProvider>
    );
  }
}
export default App;