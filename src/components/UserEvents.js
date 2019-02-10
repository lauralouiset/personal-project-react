import React, { Component } from "react";

import token from "../accesstoken";
import UserForks from "./UserForks";
import UserPullRequests from "./UserPullRequests";

class UserEvents extends Component {
  constructor(props) {
    super();
    props = this.props;
    this.state = {
      userForks: [],
      userPulls: []
    };
  }

  // filters events and gets user forkevents
  returnUserForks = res => {
    const userForks = res
      .filter(event => event.type === "ForkEvent")
      .reduce((acc, event) => {
        const fork = {
          id: event.id,
          repo_name: event.payload.forkee.name,
          repo_url: event.payload.forkee.html_url,
          forkedFrom: `https://github.com/${event.repo.name}`,
          updated_at: event.payload.forkee.updated_at
        };

        const forksArray = [...acc];
        forksArray.push(fork);
        return forksArray;
      }, []);
    this.setState({ userForks });
  };

  // filters events and returns user pull request events made BY user
  returnUserPulls = (res, username) => {
    const userPulls = res
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

        const pullsArray = [...acc];
        pullsArray.push(pullRequest);
        return pullsArray;
      }, []);
    this.setState({ userPulls });
  };

  // requests user events from Github API events endpoint
  getUserEvents = username => {
    fetch(
      `https://api.github.com/users/${username}/events?access_token=${token}`
    )
      .then(res => res.json())
      .then(res => {
        this.returnUserForks(res);
        this.returnUserPulls(res, username);
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getUserEvents(this.props.username);
  }

  render() {
    return (
      <div className="userHistory">
        <UserForks userForks={this.state.userForks} />
        <UserPullRequests userPulls={this.state.userPulls} />
      </div>
    );
  }
}

export default UserEvents;