import React from 'react'

const UserDetails = props => {

		const { name, location, avatar_url, followers, following} = props.userDetails;

  return(
      <div className="profile">
          <img src={avatar_url} alt={name}/>
					<h3>{name}</h3>
          <p> Location: {location}</p>
          <p>Following: {following}</p>
          <p>Followers: {followers}</p>
      </div>
	);
	
}


export default UserDetails;