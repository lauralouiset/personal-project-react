import React from 'react';

import ForkEvent from './ForkEvent'

const UserForks = ({userForks}) => {
	return (
    <div className="userForks">
      <h2> Your Forked Repos</h2>
			{ userForks.length > 0 
			? userForks.map( forkEvent =>  <ForkEvent 
																					key={forkEvent.id} 
																					forkEvent={forkEvent}
																					/>)
			: <p>You have no recent forked repos.</p>}
    </div>
  );


}

export default UserForks;