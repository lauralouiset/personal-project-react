import React from 'react';

const PullRequest = props => {

	const {repo_name, repo_url, pullRequest_url, pullRequest_status, pullRequest_merged, pullRequest_title} = props.pullRequest;

	return (
    <div className="pullRequest">
      <h3>
        <a href={repo_url}>{repo_name}</a>
      </h3>
      <p>
        <a href={pullRequest_url}>{pullRequest_title}</a>
      </p>
      <div className="pr_status_container">
        <div className="status">{pullRequest_status.toUpperCase()}</div>
        {pullRequest_merged ? <div className="merged">MERGED</div> : null}
      </div>
    </div>
  );

}

export default PullRequest;
