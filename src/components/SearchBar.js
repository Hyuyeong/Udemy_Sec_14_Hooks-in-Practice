import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const termHandler = (e) => {
    setTerm(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={submitHandler} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={termHandler} />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
