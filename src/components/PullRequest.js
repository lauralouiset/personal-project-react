import React from 'react';

const PullRequest = props => {

	const {repo_name, repo_url, PR_url, PR_status, PR_merged, PR_title, PR_updatedAt} = props.pullRequest;

	return (
    <div className="pullRequest">
      <h3>
        <a href={repo_url}>{repo_name}</a>
      </h3>
      <p>
        <a href={PR_url}>{PR_title}</a>
      </p>
			<p>Last updated at {PR_updatedAt}</p>
      <div className="pr_status_container">
        <div className="status">{PR_status.toUpperCase()}</div>
        {PR_merged ? <div className="merged">MERGED</div> : null}
      </div>
    </div>
  );

}

export default PullRequest;
