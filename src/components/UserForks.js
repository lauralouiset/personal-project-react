import React from "react";

import ForkEvent from "./ForkEvent";

const UserForks = ({ userForks }) => {
  return (
    <div className="event_container">
      <h2 className="event_heading"> Your Recent Forked Repos</h2>
      <ul className="event_grid userForks">
        {userForks.length > 0 ? (
          userForks.map(forkEvent => (
            <ForkEvent key={forkEvent.id} forkEvent={forkEvent} />
          ))
        ) : (
          <p className="event_default_message">
            You have no recent forked repos.
          </p>
        )}
      </ul>
    </div>
  );
};

export default UserForks;
