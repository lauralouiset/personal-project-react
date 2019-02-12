import React from "react";

const PullRequest = props => {
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
    <li className="event_item bg-light">
      <div className="event_icon">
        <img src="./assets/git_pull.png" alt="git fork icon" />
      </div>
      <div className="event_info">
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
      </div>
    </li>
  );
};

export default PullRequest;
