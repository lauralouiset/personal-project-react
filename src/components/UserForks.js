import React from 'react';

import ForkEvent from './ForkEvent'

const UserForks = props => {
	return (
    <div className="userForks">
      <h2> Your Forked Repos</h2>
			{props.userForks.map( forkEvent => {
				return (
					<ForkEvent key={forkEvent.id} forkEvent={forkEvent}/>
				)
			})}
    </div>
  );


}

export default UserForks;