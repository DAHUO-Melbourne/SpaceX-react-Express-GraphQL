import React from 'react';
import './App.css';
import Launches from './components/launches'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';
import logo from './logo.jpg'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img
         src={logo} 
         alt="SpaceX" 
         style={{ width: 300, display: 'block', margin:'auto'}} />
      </div>
      <Launches />
    </ApolloProvider>
  );
}

export default App;
