//const api = http://www.omdbapi.com/?t=Madagascar&apikey=a24b69b4&y=2005&plot=full
//t=Madagascar&y=2005&plot=full    title, year, plot
export const getMovieInfo = async () => {
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?t=Madagascar&apikey=a24b69b4&y=2005&plot=full`
    );
    const movieInfo = await res.json();
    if (!movieInfo["Response"]) {
      throw Error("some error occured");
    }
    return movieInfo;
  } catch (error) {
    console.log(error);
  }
};
