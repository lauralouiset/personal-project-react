import React from "react";

import ForkEvent from "./ForkEvent";

const UserForks = ({ userForks }) => {
  return (
    <React.Fragment>
      <h2> Your Recent Forked Repos</h2>
      <ul className="userForks">
        {userForks.length > 0 ? (
          userForks.map(forkEvent => (
            <ForkEvent key={forkEvent.id} forkEvent={forkEvent} />
          ))
        ) : (
          <p>You have no recent forked repos.</p>
        )}
      </ul>
    </React.Fragment>
  );
};

export default UserForks;
