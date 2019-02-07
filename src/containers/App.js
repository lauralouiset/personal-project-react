import React, { Component } from 'react';
import '../App.css';


import token from "../accesstoken";
import UserProfile from '../components/UserProfile';
import SearchForm from '../components/SearchForm';
import ErrorMessage from '../components/ErrorMessage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
			searchFormValue: "",
			loginError: false,
			isLoggedIn : false,
			userDetails: {},
			userForks: [],
			userPulls: []
    };
	}

	authenticateUser(userName) {
		fetch(`https://api.github.com/users/${userName}?access_token=${token}`)
			// .then(res => console.log(res))
			.then(res => {
				// res.statusText === "OK" ? this.setState({ isLoggedIn: true }) : this.setState({ isLoggedIn: false })
				if (res.statusText === "OK") {
					this.setState({ userName, isLoggedIn: true, loginError: false })
					console.log('User authenticated')
					this.getUserEvents(userName);
				} else {
					this.setState({ isLoggedIn: false, loginError: true })
					console.log("Username not found")
				}
				return res;
			})
			.then(res => res.json())
			.then(res => {
				const userDetails = {
					name: res.name,
					location: res.location,
					avatar_url: res.avatar_url,
					followers: res.followers,
					following: res.following
				};
				this.setState({ userDetails });
			})
			.catch(err => console.log("error", err))
	}


	// filters events and gets user forkevents
	returnUserForks = (res) => {
		const userForks = res
			.filter(event => event.type === "ForkEvent")
			.reduce((acc, event) => {
				const fork = {
					id: event.id,
					repo_name: event.payload.forkee.name,
					repo_url: event.payload.forkee.html_url,
					forkedFrom: `https://github.com/${event.repo.name}`
				};

				const forksArray = [...acc];
				forksArray.push(fork);
				return forksArray;
			}, []);
		this.setState({userForks});
	}

	// filters events and returns user pull request events made BY user
	returnUserPulls = (res, userName) => {
		const userPulls = res
			.filter(event => event.type === "PullRequestEvent" && event.payload.pull_request.user.login === userName)
			.reduce( (acc, event) => {
				// console.log(event);
				const pullRequest = {
					id: event.id,
					repo_name: event.repo.name,
					repo_url: `https://github.com/${event.repo.name}`,
					pullRequest_url: event.payload.pull_request.url,
					pullRequest_status: event.payload.pull_request.state,
					pullRequest_merged: event.payload.pull_request.merged,
					pullRequest_title: event.payload.pull_request.title
				}

				const pullsArray = [...acc];
				pullsArray.push(pullRequest);
				return pullsArray;
			
			}, [] )
		this.setState({userPulls});
	};

	// requests user events from Github API events endpoint
	getUserEvents = userName => {
		fetch(`https://api.github.com/users/${userName}/events?access_token=${token}`)
      .then(res => res.json())
      .then(res => {
        this.returnUserForks(res);
        this.returnUserPulls(res, userName);
      })
      .catch(err => console.log(err));
	} 

	// Change handler for search form input
  handleChange = e => {
    this.setState({ searchFormValue: e.target.value });
	};
	
	// submit handler for search form
  handleSubmit = e => {
		e.preventDefault();
		const userName = this.state.searchFormValue;
		this.authenticateUser(userName);
		e.currentTarget.reset();
  };

  render() {
    return (
      <div className="App">
        <SearchForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchFormValue={this.state.searchFormValue}
        />

				{ this.state.loginError ? (<ErrorMessage />) : null}
				{this.state.isLoggedIn ? (<UserProfile
																		userDetails={this.state.userDetails}
																		userForks={this.state.userForks}
																		userPulls={this.state.userPulls}
																	/>) 
				: (<p>Please Log In To see Details</p>)
				}
      </div>
    );
  }
}

export default App;
