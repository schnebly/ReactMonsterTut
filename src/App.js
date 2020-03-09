import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  handeleChange = (evt) => {
    this.setState({searchField: evt.target.value});
  }

  render() {

    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="Filter Monsters" 
          handeleChange={this.handeleChange}
        />

        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
  
}

export default App;
