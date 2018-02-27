import gql from 'graphql-tag';
import React, { Component } from 'react';
import { ApolloProvider, graphql } from 'react-apollo';

import client from './ApolloClient';
import logo from './logo.svg';
import './App.css';

function SampleComponent({ data: { users, hello, refetch } }) {
  
  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      <h1>Hello World</h1>
      <pre>
        {JSON.stringify(hello, null, 2)}
      </pre>
      <h1>Users with cats</h1>
      <pre>
        {JSON.stringify(users, null, 2)}
      </pre>
    </div>
  );
}

const SampleComponentWrappedWithApollo = graphql(gql`
  query {
    hello
    users {
      id
    }
  }
`)(SampleComponent);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <SampleComponentWrappedWithApollo />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
