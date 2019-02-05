import React from 'react'

import Profile from './Profile'

const UserProfile = props => {


		return(
			<div className="profile">
				<Profile userDetails={props.userDetails}/>
			</div>
		)
	}


export default UserProfile;