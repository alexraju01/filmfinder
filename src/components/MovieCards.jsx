import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const tmdbKey = "api_key=3508cfeb65ea11a00fd1a52ff2ae124d";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
// const genreRequestEndpoint = "/genre/movie/list";
const requestEndpoint = "/discover/movie?sort_by=popularity.desc&";
const urlToFetch = `${tmdbBaseUrl}${requestEndpoint}${tmdbKey}`;

function MovieCards() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(urlToFetch).then((data) => {
      console.log(data.data.results);
      setMovies(data?.data.results);
    });
  }, []);

  return (
    <>
      <div className="cardsContainer">
        {movies.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </>
  );
}

export default MovieCards;
