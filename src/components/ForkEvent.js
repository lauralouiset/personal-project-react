import React from "react";

const ForkEvent = props => {
  const {
    repo_name,
    repo_url,
    forked_from,
    fork_updated_at,
    base_repo
  } = props.forkEvent;

  return (
    <li className=" event_item bg-light">
      <div className="event_icon">
        <img src="./assets/git_fork.png" alt="git fork icon" />
      </div>
      <div className="event_info">
        <h3>
          <a href={repo_url}>{repo_name}</a>
        </h3>
        <p>
          Forked from <a href={forked_from}>{base_repo}</a>
        </p>
        <p className="updatedAt">Last Updated at {fork_updated_at}</p>
      </div>
    </li>
  );
};

export default ForkEvent;
