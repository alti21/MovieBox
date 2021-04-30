import React, { useEffect } from "react";
import { getMovieInfo } from "../services/MoviesAPI";

const Search = () => {
  useEffect(() => {
    getMovieInfo().then((data) => {
      console.log(data);
    });
    // console.log(getMovieInfo());
  });

  return (
    <header>
      <input
        type="text"
        placeholder="Search for a movie"
        className="search-bar"
      />
    </header>
  );
};

export default Search;
