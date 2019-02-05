import React from 'react';

const SearchForm = props => {




    return(
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="username">Enter Your Github Username</label>
        <input 
          type="text" 
          name="username"
					value={props.formValue}
					onChange={props.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    )
}

export default SearchForm;