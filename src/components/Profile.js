import React from 'react'

const Profile = props => {

		const { name, location, avatar_url, followers, following} = props.userDetails;

  return(
      <div className="profile">
					<h3>{name}</h3>
          <img src={avatar_url} alt={name}/>
          <p> Location: {location}</p>
          <p>Following: {following}</p>
          <p>Followers: {followers}</p>
      </div>
	);
	
}


export default Profile;