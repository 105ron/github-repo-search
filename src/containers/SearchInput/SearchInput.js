import React, { Component } from 'react';
import styled from 'styled-components';
import Autocomplete from 'react-autocomplete';
import { throttle, debounce } from 'throttle-debounce';
import { inputStyling, dropDownStyling } from '../../UI/globalCSS';
import axios from 'axios';

const Card = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  height: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 8px 10px 5px -1px rgba(105,96,105,1);
  @media (max-width: 900px) {
    width: 90%;
    height: 180px;
  }
`;

const FieldWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

const InputWrapper = styled.div`
  width: 500px;
  @media (max-width: 900px) {
    width: 90%;
    margin: 0 20px;
  }
`;

const Button = styled.button`
  width: 100px;
  background-color: #FFF;
  cursor: pointer;
  border: 1px solid #CCC;
  padding: 8px 25px 8px 25px;
  color: #333;
  border-radius: 4px;
  &:hover {
    background-color: #EBEBEB;
    border-color: #ADADAD;
  }
  &:disabled {
    cursor: not-allowed;
    border: 1px solid #CCC;
    background-color: #FFF;
  }
  @media (max-width: 900px) {
    width: auto;
    padding: 8px;
    margin-right: 20px;
  }
`;

const Result = styled.div`
  background-color: ${props => props.highlight ? '#cecece' : 'white'};
  padding: ${props => props.content ? '4px' : '0'};
  font-family: sans-serif;
  font-size: 16px;
`;

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.autocompleteSearchDebounced = debounce(1000, this.retrieveGitHubData);
    this.autocompleteSearchThrottled = throttle(500, this.retrieveGitHubData);
    this.state = {
      searchTerm: '',
      autocompleteData: [
        {
          id: 1,
          name: ''
        },
      ],
    };
  }

  retrieveGitHubData(search) {
    const trimmedSearch = search.trim();
    const url = `https://api.github.com/search/repositories?q=${trimmedSearch}+in%3Aname&per_page=10`;
    axios.get(url)
      .then(response => {
        const results = Object.keys(response.data.items).map(key => {
          const repo = response.data.items[key]
          return {
            id: repo.releases_url,
            name: repo.name,
            url: repo.html_url,
          };
        })
        this.setState({ autocompleteData: results });
        })
      .catch(error => {
        console.log(error);
        this.setState(
          {
            autocompleteData: [
              {id: 1, name: ''},
            ],
          }
        );
      });
  }

  renderItem(item, isHighlighted){
    return (
        <Result key={item.id} highlight={isHighlighted} content={item.name}>
          {item.name}
        </Result>   
    ); 
  }

  inputChangedHandler = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      const { searchTerm } = this.state;
      if (searchTerm.length < 5) {
        this.autocompleteSearchThrottled(searchTerm);
      } else {
        this.autocompleteSearchDebounced(searchTerm);
      }
    });
  }

  onSelect = (value) => {
    this.setState({
      searchTerm: value,
    });
  }

  getItemValue = item => {
    return item.name;
  }

  render() {
    const { searchTerm, autocompleteData } = this.state;
    return (
      <Card>
      <FieldWrapper>
        <InputWrapper>
        <Autocomplete
          inputProps={{ 
            style: inputStyling,
            placeholder: 'Type to start searching...'
          }}
            wrapperProps={{style: {width: '100%', display: 'block'}}}
          menuStyle={dropDownStyling}
          getItemValue={this.getItemValue}
          items={autocompleteData}
          renderItem={this.renderItem}
          value={searchTerm}
          onChange={this.inputChangedHandler}
          onSelect={this.onSelect}
        />
        </InputWrapper>
        <Button disabled={!searchTerm} >
          Submit
        </Button>
      </FieldWrapper>
    </Card>
    );
  }
}


export default SearchInput;