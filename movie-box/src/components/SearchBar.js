import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        placeholder="Search for a movie"
        value="title"
      />
      <label htmlFor="year">Year:</label>
      <input id="year" type="number" placeholder="Year" value="year" />
      <label htmlFor="plot">Plot:</label>
      <select name="plots" id="plot">
        <option value="full" defaultValue>
          Full
        </option>
        <option value="short">Short</option>
      </select>
    </div>
  );
};

export default SearchBar;
