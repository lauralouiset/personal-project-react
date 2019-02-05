import React from 'react';

const SearchForm = props => {

  const input = React.createRef();

    return(
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="username">Enter Your Github Username</label>
        <input 
          type="text" 
          name="username"
          ref={input}
        />
        <button type="submit">Search</button>
      </form>
    )
}

export default SearchForm;