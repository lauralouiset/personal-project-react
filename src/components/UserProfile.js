import React from 'react';

import Profile from './Profile';
import Forks from './Forks';
import PullRequests from 'PullRequests';


const UserProfile = props => {


		return(
			<div className="profile">
				<Profile userDetails={props.userDetails}/>
				<Forks />
				<PullRequests />
			</div>
		)
	}


export default UserProfile;