import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { inputStyling } from '../../UI/globalCSS';
import axios from 'axios';

class SearchInput extends Component {
  constructor(props) {
    super(props);
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

  retrieveGitHubData(searchText='stuff'){
    const query = new URLSearchParams(searchText)
    const url = `https://api.github.com/search/repositories?q=${query}page=1&per_page=10`;
    axios.get(url)
      .then(response => {
        const results = Object.keys(response.data.items).map(key => {
          const repo = response.data.items[key]
          return {
            id: repo.releases_url,
            name: repo.name
          };
        })
        this.setState({ autocompleteData: results });
        })
      .catch(error => {
        this.setState(
          {
            autocompleteData: [
              {
                id: 1,
                name: 'Something went wrong with the request'
              },
              {
                id: 2,
                name: error
              },
            ],
          }
        );
      });
  }

  renderItem(item, isHighlighted){
    return (
        <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.name}
        </div>   
    ); 
  }

  inputChangedHandler = (event) => {
    const newSearchTerm = event.target.value;
    this.retrieveGitHubData(newSearchTerm)
    this.setState({ searchTerm: newSearchTerm });
  }

  onSelect = (val) => {
    this.setState({
        value: val
    });
  }

  getItemValue = item => {
    return `${item.name} from getItemValue`;
  }


  render() {
    const { searchTerm, autocompleteData } = this.state;
    return (
      <Autocomplete
        key="unique"
        inputProps={{ style: inputStyling}}
        getItemValue={this.getItemValue}
        items={autocompleteData}
        renderItem={this.renderItem}
        value={searchTerm}
        onChange={this.inputChangedHandler}
        onSelect={this.onSelect}
      />
    );
  }
}


export default SearchInput;