import React from 'react';
import './App.css';
import Launches from './components/launches'
import Launch from './components/launch'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';
import logo from './logo.jpg'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <img
           src={logo} 
           alt="SpaceX" 
           style={{ width: 300, display: 'block', margin:'auto'}} />
           <Route exact path="/" component={Launches} />
           <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
