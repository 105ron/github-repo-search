import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import octocat from './assets/images/scientist_octocat.png';
import SearchBar from './components/SearchBar/SearchBar';
import globalCCS from './UI/globalCSS';

injectGlobal`${globalCCS}`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  min-width: 1200px;
  min-height: 600px;
  height: 100vh;
  background: #d3cce3;
  background-image: url(${octocat}), linear-gradient(to right, #e0eafc, #cfdef3);
  background-position: bottom right;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  position: absolute;
  top: 10px;
  text-align: center;
  font-family: sans-serif;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  inputChangedHanlder = (event) => {
    const newSearchTerm = event.target.value;
    this.setState({ searchTerm: newSearchTerm });
  }
  
  render() {
    const { searchTerm } = this.state;
    return (
      <Wrapper>
        <Title>
          GitHub Repo Search
        </Title>
          <SearchBar 
            value={searchTerm}
            changed={this.inputChangedHanlder}
          />
      </Wrapper>
    );
  }
}


export default App;

/* eslint "no-unused-expressions": "off" */
