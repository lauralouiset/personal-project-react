import React from "react";

const PullRequest = props => {
  const {
    repo_name,
    repo_url,
    PR_url,
    PR_status,
    PR_merged,
    PR_title,
    PR_updatedAt
  } = props.pullRequest;

  return (
    <li className="pullRequest">
      <h3>
        <a href={repo_url}>{repo_name}</a>
      </h3>
      <p>
        <a href={PR_url}>{PR_title}</a>
      </p>
      <p>Last updated at {PR_updatedAt}</p>
      <div className="pr_status_container">
        <span className="status">{PR_status.toUpperCase()}</span>
        {PR_merged ? <span className="merged">MERGED</span> : null}
      </div>
    </li>
  );
};

export default PullRequest;
