import React from "react";

import PullRequest from './PullRequest';

const UserPullRequests = ({userPulls}) => {

	return (
		<div className="userPulls">


			<h2> Your Pull Requests</h2>
			{ userPulls.length > 0 
			? userPulls.map(pullRequest => <PullRequest 
																				key={pullRequest.id} 
																				pullRequest={pullRequest}
																				/>)
			: <p>You have no recent Pull Requests.</p>
			}
		</div>
	)

};

export default UserPullRequests;
