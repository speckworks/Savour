import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './routes/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context'
import { AUTH_TOKEN } from './constants'
// import Home from './screens/home'
// import Favorites from './screens/Favorites';
// import Cart from './screens/Cart';

// const Tab = createBottomTabNavigator();

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})
const authLink = setContext((_, { headers}) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ``
    }
  }
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default function App() {
 
    return (
      <ApolloProvider client={client}>
      <Navigator/>
      {/* <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Favs' component={Favorites} />
        <Tab.Screen name='Cart' component={Cart} />
      </Tab.Navigator>
    </NavigationContainer> */}
      </ApolloProvider>
    )
  }
