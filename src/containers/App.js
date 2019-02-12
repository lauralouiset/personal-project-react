import React, { Component } from "react";
import { connect } from "react-redux";

import "../App.css";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import Login from "../components/Login";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";

import { logInUser, logOutUser } from "../actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
  }

  // Change handler for search form input
  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  // submit handler for search form
  handleLogIn = () => {
    const username = this.state.inputValue;
    this.props.logInUser(username);
  };

  handleLogOut = () => {
    this.setState({ inputValue: "" });
    this.props.logOutUser();
  };

  render() {
    const { userStatus } = this.props;

    return (
      <React.Fragment>
        <Header />
        <main>
          {userStatus.logInError ? <ErrorMessage /> : null}
          {userStatus.isLoggedIn ? (
            <UserProfile
              isLoggedIn={userStatus.isLoggedIn}
              username={userStatus.username}
              userDetails={userStatus.userDetails}
              handleLogOut={this.handleLogOut}
            />
          ) : (
            <Login
              handleChange={this.handleChange}
              handleLogIn={this.handleLogIn}
              inputValue={this.state.inputValue}
              isLoggedIn={userStatus.isLoggedIn}
            />
          )}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { userStatus: state.userStatus };
};

const ConnectedApp = connect(
  mapStateToProps,
  { logInUser, logOutUser }
)(App);

export default ConnectedApp;
