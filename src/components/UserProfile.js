import React from 'react';

import UserDetails from './UserDetails';
import UserForks from './UserForks';
import UserPullRequests from './UserPullRequests';


const UserProfile = props => {

		return(
			<div className="profile">
				<UserDetails userDetails={props.userDetails}/>
				<UserForks userForks={props.userForks}/>
				<UserPullRequests />
			</div>
		)
	}


export default UserProfile;