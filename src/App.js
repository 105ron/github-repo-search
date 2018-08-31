import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import octocat from './assets/images/scientist_octocat.png';
import SearchBar from './components/SearchBar/SearchBar';
import globalCCS from './UI/globalCSS';

injectGlobal`${globalCCS}`;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  background: #d3cce3;
  background-image: url(${octocat}), linear-gradient(to bottom, #d3cce3, #e9e4f0);
  background-position: bottom right;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  margin: 0;
  padding: 10px;
  text-align: center;
  font-family: sans-serif;
`;

// Absolute position,transparent div to hold the searchbar card in the center of the page.
const SearchBarHolder = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
        <SearchBarHolder>
          <SearchBar 
            value={searchTerm}
            changed={this.inputChangedHanlder}
          />
        </SearchBarHolder>
      </Wrapper>
    );
  }
}


export default App;

/* eslint "no-unused-expressions": "off" */
