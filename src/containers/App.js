import React, { Component } from "react";
import "../App.css";

import token from "../accesstoken";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import SearchForm from "../components/SearchForm";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      searchFormValue: "",
      loginError: false,
      isLoggedIn: false,
      userDetails: {}
    };
  }

  authenticateUser(username) {
    fetch(`https://api.github.com/users/${username}?access_token=${token}`)
      // .then(res => console.log(res))
      .then(res => {
        // res.statusText === "OK" ? this.setState({ isLoggedIn: true }) : this.setState({ isLoggedIn: false })
        if (res.statusText === "OK") {
          this.setState({ username, isLoggedIn: true, loginError: false });
          console.log("User authenticated");
        } else {
          this.setState({ isLoggedIn: false, loginError: true });
          console.log("Username not found");
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
      .catch(err => console.log("error", err));
  }

  // Change handler for search form input
  handleChange = e => {
    this.setState({ searchFormValue: e.target.value });
  };

  // submit handler for search form
  handleSubmit = e => {
    e.preventDefault();
    const username = this.state.searchFormValue;
    this.authenticateUser(username);
    e.currentTarget.reset();
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="App">
          <SearchForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            searchFormValue={this.state.searchFormValue}
            isLoggedIn={this.state.isLoggedIn}
          />

          {this.state.loginError ? <ErrorMessage /> : null}
          {this.state.isLoggedIn ? (
            <UserProfile
              isLoggedIn={this.state.isLoggedIn}
              username={this.state.username}
              userDetails={this.state.userDetails}
            />
          ) : (
            <p>Please Log In To see Details</p>
          )}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
