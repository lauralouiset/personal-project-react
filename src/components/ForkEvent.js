import React from "react";

const ForkEvent = props => {
  const { repo_url, repo_name, forkedFrom } = props.forkEvent;

  return (
    <li className="forkEvent">
      <h3>
        <a href={repo_url}>{repo_name}</a>
      </h3>
      <p>
        <a href="{forkedFrom">{forkedFrom}</a>
      </p>
    </li>
  );
};

export default ForkEvent;
