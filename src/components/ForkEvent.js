import React from "react";

const ForkEvent = props => {
  const { repo_url, repo_name, forked_from, fork_updated_at } = props.forkEvent;

  return (
    <li className=" event_item forkEvent bg-light">
      <h3>
        <a href={repo_url}>{repo_name}</a>
      </h3>
      <p>
        <a href="{forked_from">{forked_from}</a>
        <p className="updatedAt">Last Updated at {fork_updated_at}</p>
      </p>
    </li>
  );
};

export default ForkEvent;
