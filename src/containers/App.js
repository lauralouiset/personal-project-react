import React, { Component } from 'react';
import '../App.css';


import token from "../accesstoken";
import UserProfile from '../components/UserProfile';
import SearchForm from '../components/SearchForm'


class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
			searchFormValue: "",
			errorMessage: "",
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
					this.setState({ userName, isLoggedIn: true })
					console.log('User authenticated')
					this.getUserEvents(userName);
				} else {
					this.setState({ isLoggedIn: false })
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
					name: event.payload.forkee.name,
					url: event.payload.forkee.html_url,
					forkedFrom: `https://github.com/${event.repo.name}`
				};

				const forksArray = [...acc];
				forksArray.push(fork);

				return forksArray;
			}, []);
		this.setState({userForks});
	}

	// filters events and returns user pull requests
	returnUserPulls = res => {
		const userPulls = res
			.filter(event => event.type === "PullRequestEvent")

		console.log(userPulls);
	};

	// requests user events from Github API events endpoint
	getUserEvents = userName => {
		fetch(`https://api.github.com/users/${userName}/events?access_token=${token}`)
      .then(res => res.json())
      .then(res => {
        this.returnUserForks(res);
        this.returnUserPulls(res);
      })
      .catch(err => console.log(err));
	} 

  handleChange = e => {
    this.setState({ searchFormValue: e.target.value });
	};
	
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
				{this.state.isLoggedIn ? (<UserProfile
																		userName={this.state.userName}
																		userDetails={this.state.userDetails}
																		userForks={this.state.userForks}
																	/>) 
				: (<p>Please Log In To see Details</p>)
				}


      </div>
    );
  }
}

export default App;
