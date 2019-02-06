import React from 'react';


const ForkEvent = props => {

	const {url, name, forkedFrom} = props.forkEvent;

	return(
		<div clasName="forkEvent">
			<p><a href={url}>{name}</a></p>
			<p><a href="{forkedFrom">{forkedFrom}</a></p>
		</div>

	)
}

export default ForkEvent;