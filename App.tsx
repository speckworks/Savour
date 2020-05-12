import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';
//Apollo config
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context'
import { AUTH_TOKEN } from './constants'

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
         <AppLoading/>
      </ApolloProvider>
    )
  }
