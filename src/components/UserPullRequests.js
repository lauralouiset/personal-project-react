import React from "react";

import PullRequest from "./PullRequest";

const UserPullRequests = ({ userPulls }) => {
  return (
    <React.Fragment>
      <h2> Your Recent Pull Requests</h2>
      <ul className="userPulls">
        {userPulls.length > 0 ? (
          userPulls.map(pullRequest => (
            <PullRequest key={pullRequest.id} pullRequest={pullRequest} />
          ))
        ) : (
          <p>You have no recent Pull Requests.</p>
        )}
      </ul>
    </React.Fragment>
  );
};

export default UserPullRequests;
