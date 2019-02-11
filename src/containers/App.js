import React, { Component } from "react";
import { connect } from "react-redux";

import "../App.css";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import SearchForm from "../components/SearchForm";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";

import { logInUser, logOutUser } from "../actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchFormValue: ""
    };
  }

  // Change handler for search form input
  handleChange = e => {
    this.setState({ searchFormValue: e.target.value });
  };

  // submit handler for search form
  handleSubmit = e => {
    e.preventDefault();
    const username = this.state.searchFormValue;
    this.props.logInUser(username);
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
            isLoggedIn={this.props.userStatus.isLoggedIn}
          />

          {this.state.loginError ? <ErrorMessage /> : null}
          {this.state.isLoggedIn ? (
            <UserProfile
              isLoggedIn={this.props.userStatus.isLoggedIn}
              username={this.props.userStatus.username}
              userDetails={this.props.userStatus.userDetails}
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

const mapStateToProps = state => {
  return { userStatus: state.userLoginStatus };
};

const ConnectedApp = connect(
  mapStateToProps,
  { logInUser, logOutUser }
)(App);

export default ConnectedApp;
