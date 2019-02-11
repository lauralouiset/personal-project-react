import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUserEvents } from "../actions/";
import UserForks from "./UserForks";
import UserPullRequests from "./UserPullRequests";

class UserEvents extends Component {
  constructor(props) {
    super();
    // props = this.props;
    this.state = {
      userForks: [],
      userPulls: []
    };
  }

  // filters events and gets user forkevents
  returnUserForks = events => {
    const userForks = events
      .filter(event => event.type === "ForkEvent")
      .reduce((acc, event) => {
        const fork = {
          id: event.id,
          repo_name: event.payload.forkee.name,
          repo_url: event.payload.forkee.html_url,
          forkedFrom: `https://github.com/${event.repo.name}`,
          updated_at: event.payload.forkee.updated_at
        };

        return [...acc, fork];
      }, []);
    this.setState({ userForks });
  };

  // filters events and returns user pull request events made BY user
  returnUserPulls = (events, username) => {
    const userPulls = events
      .filter(
        event =>
          event.type === "PullRequestEvent" &&
          event.payload.pull_request.user.login === username
      )
      .reduce((acc, event) => {
        const pullRequest = {
          id: event.id,
          repo_name: event.repo.name,
          repo_url: `https://github.com/${event.repo.name}`,
          PR_url: event.payload.pull_request.url,
          PR_status: event.payload.pull_request.state,
          PR_merged: event.payload.pull_request.merged,
          PR_title: event.payload.pull_request.title,
          pr_updatedat: event.payload.pull_request.updated_at
        };

        return [...acc, pullRequest];
      }, []);
    this.setState({ userPulls });
  };

  filterEvents() {
    // const events = this.props.userEvents;
    // const userPulls = this.returnUserPulls(events, this.props.username);
    // const userForks = this.returnUserForks(events);
    // this.setState({ userForks });
  }

  componentDidMount() {
    // this.getUserEvents(this.props.username);
    this.props.fetchUserEvents(this.props.username);
    // this.filterEvents();
  }

  render() {
    console.log(this.props.userEvents);
    return (
      <div className="userHistory">
        <UserForks userForks={this.state.userForks} />
        <UserPullRequests userPulls={this.state.userPulls} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userEvents: state.userEvents.userEvents };
};

const ConnectedUserEvents = connect(
  mapStateToProps,
  { fetchUserEvents }
)(UserEvents);

export default ConnectedUserEvents;
