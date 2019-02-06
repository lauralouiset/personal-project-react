import React, { Component } from 'react';
import '../App.css';
// import {fetchData} from '../helpers'
import token from './accesstoken';


import UserProfile from '../components/UserProfile';
import SearchForm from '../components/SearchForm'
import {eventsData} from './eventsData';

class App extends Component {
  constructor(){
		super()
		this.searchFormInput = React.createRef();

    this.state = {
      userName: 'lauralouiset',
			userDetails: {},
			userForks : [],
			userPulls : [],
			searchFormValue : ''
    }
  }

	handleChange = (e) => {
		this.setState({searchFormValue : e.target.value})
	}

  handleSubmit = e => {
		e.preventDefault();
		console.log(this.state.searchFormValue);
		const {userName} = this.state
		this.setState({userName})
    e.currentTarget.reset();
  }

  componentDidMount(){
    // const res =  fetchData('https://api.github.com/users/lauralouiset');

		// FETCH DATA ABOUT USER PROFILE
		fetch(`https://api.github.com/users/${this.state.userName}?access_token=${token}`)
      .then( res=> res.json()
      .then(res => {
        const userDetails = {
          name: res.name,
          location: res.location,
          avatar_url : res.avatar_url,
          followers: res.followers,
          following: res.following
        }
        this.setState({userDetails});
      })
      .catch(err => console.log(err)))

			// FETCH DATA ABOUT USER FORK EVENTS
		// fetch(`https://api.github.com/users/${this.state.userName}/events`)
		// 	.then( res=> res.json())
		// 	.then( res => {
		// 		return res.filter(event => event.type === 'ForkEvent')
		// 	.reduce((acc, event) => {
		// 		const name = event.payload.forkee.name
		// 		acc[name] = {};
		// 		acc[name].name = name;
		// 		acc[name].url = event.payload.forkee.html_url;
		// 		acc[name].forkedfrom = `https://github.com/${event.repo.name}`
		// 		// acc[name].url = event.payload.forkee.html_url
		// 		// console.log(event.payload.forkee.html_url);
		// 		console.log(acc);
		// 		return acc;
		// 	}, {} )
		// 	}
		// 		)
		// 	.catch(err=> console.log(err));
		const returnUserForks = data => {
			const userForks = data.filter(event => event.type === 'ForkEvent')
				.reduce((acc, event) => {

					const fork = {
						id: event.id,
						name: event.payload.forkee.name,
						url: event.payload.forkee.html_url,
						forkedFrom: `https://github.com/${event.repo.name}`
					};

					const forksArray = [...acc]
					forksArray.push(fork)

					return forksArray;
				}, [])

				return userForks;

		}

		const userForks = returnUserForks(eventsData);

			console.log(userForks);
			// const userForks = [...this.state.userForks];
			// userForks.concat(forkEvents);
			this.setState({userForks});

	// 	// FETCH DATA ABOUT USER PULL REQUEST EVENTS
	// 	fetch(`https://api.github.com/users/pkanal/events`)
	// 		.then(res => res.json())
	// 		.then(res => res.filter(event => event.type === 'PullRequestEvent'))
	// 		.catch(err => console.log(err));

	// 		// end of COMPONENT DID MOUNT
  }

  render() {
    return (
      <div className="App">
        <SearchForm handleChange ={this.handleChange} handleSubmit={this.handleSubmit} searchFormValue={this.state.searchFormValue}/>
        <UserProfile userDetails={this.state.userDetails} userForks={this.state.userForks}/>
      </div>
    );
  }
}

export default App;
