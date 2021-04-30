import React, { useState, useEffect } from "react";
import { getMovieInfo } from "../services/MoviesAPI";
import SearchResult from "./SearchResult";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import SearchBar from "./SearchBar";

const Search = () => {
  const [movieResult, setMovieResult] = useState({});

  useEffect(() => {
    getMovieInfo().then((data) => {
      //console.log(data);
      setMovieResult(data);
    });
  }, []);

  console.log(movieResult);

  const onDragEnd = (result) => {
    // reorder our column
    console.log(result);
  };

  return (
    <>
      <header>
        <SearchBar />
      </header>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="id-1">
          {(provided) => (
            <div
              className="movie-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <SearchResult movie={movieResult}>
                {provided.placeholder}
              </SearchResult>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
//put search bar into its own component
export default Search;
