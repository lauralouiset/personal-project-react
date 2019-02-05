import React, { Component } from 'react';
import '../App.css';
// import {fetchData} from '../helpers'

import Profile from '../components/Profile';
import SearchForm from '../components/SearchForm'

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: 'lauralouiset',
      userDetails: {}
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();

  }

  componentDidMount(){
    // const res =  fetchData('https://api.github.com/users/lauralouiset');

  fetch('https://api.github.com/users/lauralouiset')
      .then( res=> res.json()
      .then(res => {
        const userDetails = {
          name: res.name,
          location: res.location,
          avatar_url : res.avatar_url,
          followers: res.followers,
          following: res.following
        }
        console.log(userDetails)
        this.setState({userDetails});
      })
      .catch(err => console.log(err)))


  }

  render() {
    return (
      <div className="App">
        <SearchForm handleSubmit={this.handleSubmit}/>
        <Profile username={this.state.username} userDetails={this.state.userDetails}/>
      </div>
    );
  }
}

export default App;
