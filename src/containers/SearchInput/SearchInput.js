import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { throttle, debounce } from 'throttle-debounce';
import { inputStyling } from '../../UI/globalCSS';
import axios from 'axios';

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

  retrieveGitHubData(searchText) {
    const url = `https://api.github.com/search/repositories?q=${searchText}+in%3Aname&per_page=10`;
    axios.get(url)
      .then(response => {
        console.log(response)
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
        <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
          {item.name}
        </div>   
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