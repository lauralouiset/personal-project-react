import React, { Component } from 'react';
import './App.css';

import Profile from './components/Profile';
import SearchForm from './components/SearchForm'

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: 'lauralouiset'
    }
  }

  componentDidMount(){
    
  }
  render() {
    return (
      <div className="App">
        <SearchForm />
        <Profile username={this.state.username} />
      </div>
    );
  }
}

export default App;
