import React from "react";

import PullRequest from "./PullRequest";

const UserPullRequests = ({ userPulls }) => {
  return (
    <div className="event_container">
      <h2 className="event_heading"> Your Recent Pull Requests</h2>
      <ul className="event_grid userPulls">
        {userPulls.length > 0 ? (
          userPulls.map(pullRequest => (
            <PullRequest key={pullRequest.id} pullRequest={pullRequest} />
          ))
        ) : (
          <p className="event_default_message">
            You have no recent Pull Requests.
          </p>
        )}
      </ul>
    </div>
  );
};

export default UserPullRequests;
