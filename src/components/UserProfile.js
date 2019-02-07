import React from 'react';

import UserDetails from './UserDetails';
import UserForks from './UserForks';
import UserPullRequests from './UserPullRequests';

const UserProfile = props => {
		return(
			<div className="userProfile">
				<UserDetails userDetails={props.userDetails} />
				<div className="userHistory">
					<UserForks userForks={props.userForks} />
					<UserPullRequests />
				</div>
			</div>
		);
}



export default UserProfile;