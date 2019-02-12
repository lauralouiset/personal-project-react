import React from "react";

const PullRequest = props => {
  console.log(props.pullRequest.PR_updated_at);

  const {
    repo_name,
    repo_url,
    PR_url,
    PR_status,
    PR_merged,
    PR_title,
    PR_updated_at
  } = props.pullRequest;

  return (
    <li className="event_item bg-light pullRequest">
      <div className="pr_status_container">
        <span className={PR_status}>{PR_status.toUpperCase()}</span>
        {PR_merged ? <span className="merged">MERGED</span> : null}
      </div>
      <h3>
        <a href={repo_url}>{repo_name}</a>
      </h3>
      <p>
        <a href={PR_url}>{PR_title}</a>
      </p>

      <p className="updatedAt">Last Updated at {PR_updated_at}</p>
    </li>
  );
};

export default PullRequest;
