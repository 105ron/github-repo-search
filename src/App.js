import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import styled from 'styled-components';
import globalCCS from './UI/globalCSS';

injectGlobal`${globalCCS}`;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  background: #d3cce3;
  background: linear-gradient(to bottom, #d3cce3, #e9e4f0);
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Wrapper>
    );
  }
}

export default App;
