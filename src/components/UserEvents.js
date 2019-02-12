import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUserEvents } from "../actions/";
import UserForks from "./UserForks";
import UserPullRequests from "./UserPullRequests";

class UserEvents extends Component {
  // filters events and gets user forkevents
  returnUserForks = events => {
    return events
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
  };

  // filters events and returns user pull request events made BY user
  returnUserPulls = (events, username) => {
    return events
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
  };

  componentDidMount() {
    this.props.fetchUserEvents(this.props.username);
  }

  render() {
    const events = this.props.userEvents;

    const userPulls = this.returnUserPulls(events, this.props.username);
    const userForks = this.returnUserForks(events);

    return (
      <div className="userHistory">
        <UserForks userForks={userForks} />
        <UserPullRequests userPulls={userPulls} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userEvents: state.userEvents,
    username: state.userStatus.username
  };
};

const ConnectedUserEvents = connect(
  mapStateToProps,
  { fetchUserEvents }
)(UserEvents);

export default ConnectedUserEvents;
