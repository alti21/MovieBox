import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";

const SearchResult = ({ movie }) => {
  return (
    <Draggable draggableId="id-2" index={0}>
      {(provided) => (
        <section
          className="movie"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <img src={movie.Poster} className="movie-poster" />
          <div className="movie-info">
            <h2>{movie.Title}</h2>
            <div>
              <p>{movie.Released}</p>
              <p>{movie.Rated}</p>
              <p>{movie.Runtime}</p>
            </div>
          </div>
        </section>
      )}
    </Draggable>
  );
};

SearchResult.propTypes = {
  movie: PropTypes.object,
  innerRef: PropTypes.func,
  provided: PropTypes.object,
};

export default SearchResult;
